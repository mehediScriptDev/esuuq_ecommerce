import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Upload, Plus, Edit, Trash2 } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';
import {
  createMyMerchantProduct,
  deleteMyMerchantProduct,
  getMyMerchantProducts,
  updateMyMerchantProduct,
} from '../../../services/merchantService';

const Pill = ({ children, c }) => <MerchantPill className={c}>{children}</MerchantPill>;

const toPrice = (value) => `$${Number(value || 0).toFixed(2)}`;

const moderationMeta = (product) => {
  const rawStatus = String(product?.status || '').toLowerCase();
  const stock = Number(product?.stock || 0);
  const lowStockAt = Number(product?.lowStockAt || 10);

  if (rawStatus === 'pending_review') return { label: 'Pending Review', className: 'text-yellow bg-yellow/10' };
  if (rawStatus === 'rejected') return { label: 'Rejected', className: 'text-red bg-red/10' };
  if (rawStatus === 'inactive') return { label: 'Inactive', className: 'text-gray2 bg-white/10' };

  if (stock === 0) return { label: 'Out of Stock', className: 'text-red bg-red/10' };
  if (stock <= lowStockAt) return { label: 'Low Stock', className: 'text-yellow bg-yellow/10' };

  return { label: 'Active', className: 'text-green-500 bg-green-500/10' };
};

const toBoolean = (value) => {
  const text = String(value ?? '').trim().toLowerCase();
  return ['1', 'true', 'yes', 'y'].includes(text);
};

const parseCsv = (text) => {
  const rows = [];
  let field = '';
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(field.trim());
      field = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') i += 1;
      if (field.length || row.length) {
        row.push(field.trim());
        rows.push(row);
      }
      row = [];
      field = '';
      continue;
    }

    field += char;
  }

  if (field.length || row.length) {
    row.push(field.trim());
    rows.push(row);
  }

  return rows;
};

const MerchantProducts = ({ onNav }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const load = async () => {
    try {
      setLoading(true);
      setError('');
      const payload = await getMyMerchantProducts({ limit: 100, sort: 'newest' });
      setProducts(Array.isArray(payload?.data) ? payload.data : []);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      setError('');
      setMessage('');
      await deleteMyMerchantProduct(id);
      setMessage('Product deleted.');
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err?.response?.data?.message || 'Delete failed.');
    }
  };

  const quickEdit = async (item) => {
    const nextPrice = window.prompt('Enter new price', String(item.price || '0'));
    if (nextPrice == null) return;
    try {
      setError('');
      setMessage('');
      const updated = await updateMyMerchantProduct(item.id, { price: Number(nextPrice) });
      setMessage('Product updated.');
      setProducts((prev) => prev.map((p) => (p.id === item.id ? { ...p, ...updated } : p)));
    } catch (err) {
      setError(err?.response?.data?.message || 'Update failed.');
    }
  };

  const handleBulkCsvSelect = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    try {
      setLoading(true);
      setError('');
      setMessage('');

      const content = await file.text();
      const parsed = parseCsv(content);
      if (!parsed.length) {
        setError('CSV file is empty.');
        return;
      }

      const header = parsed[0].map((h) => String(h || '').trim());
      const required = ['name', 'description', 'categoryId', 'price', 'stock'];
      const missing = required.filter((key) => !header.includes(key));
      if (missing.length) {
        setError(`CSV missing required columns: ${missing.join(', ')}`);
        return;
      }

      const records = parsed.slice(1)
        .filter((cols) => cols.some((value) => String(value || '').trim().length > 0))
        .map((cols) => {
          const entry = {};
          header.forEach((key, index) => {
            entry[key] = cols[index] ?? '';
          });
          return entry;
        });

      if (!records.length) {
        setError('No data rows found in CSV.');
        return;
      }

      const payloads = records.map((row, index) => {
        const item = {
          name: String(row.name || '').trim(),
          description: String(row.description || '').trim(),
          categoryId: String(row.categoryId || '').trim(),
          price: Number(row.price),
          stock: Number(row.stock),
        };

        if (row.sku) item.sku = String(row.sku).trim();
        if (row.comparePrice !== '' && row.comparePrice != null) item.comparePrice = Number(row.comparePrice);
        if (row.lowStockAt !== '' && row.lowStockAt != null) item.lowStockAt = Number(row.lowStockAt);
        if (row.imageUrl) item.images = [String(row.imageUrl).trim()];
        if (row.isFeatured !== '' && row.isFeatured != null) item.isFeatured = toBoolean(row.isFeatured);

        if (!item.name || !item.description || !item.categoryId || Number.isNaN(item.price) || Number.isNaN(item.stock)) {
          throw new Error(`Invalid row ${index + 2}. Required: name, description, categoryId, price, stock.`);
        }

        return item;
      });

      let created = 0;
      const failures = [];

      for (let i = 0; i < payloads.length; i += 1) {
        try {
          await createMyMerchantProduct(payloads[i]);
          created += 1;
        } catch (uploadErr) {
          failures.push(`Row ${i + 2}: ${uploadErr?.response?.data?.message || uploadErr?.message || 'Failed to create product'}`);
        }
      }

      if (!created) {
        setError(`Bulk upload failed. ${failures[0] || ''}`.trim());
        return;
      }

      const failureNote = failures.length ? ` ${failures.length} row(s) failed.` : '';
      setMessage(`Bulk upload complete: ${created} product(s) created.${failureNote}`);
      await load();
    } catch (err) {
      setError(err?.message || 'Bulk CSV upload failed.');
    } finally {
      setLoading(false);
    }
  };

  const rows = useMemo(() => products.slice(0, 100), [products]);

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <MerchantPageHeader
          title={<><span>My </span><span className="text-teal">Products</span></>}
          subtitle="Manage all your product listings"
        />
        <div className="flex gap-2.5">
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,text/csv"
            className="hidden"
            onChange={handleBulkCsvSelect}
          />
          <button
            type="button"
            disabled={loading}
            onClick={() => fileInputRef.current?.click()}
            className="text-gray2 hover:border-teal hover:text-teal disabled:opacity-60 flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem] transition-colors"
          >
            <Upload size={14} /> Bulk Upload CSV
          </button>
          <button
            onClick={() => onNav?.('add-product')}
            className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded border border-transparent px-4 py-1.5 text-[0.8rem] font-bold transition-colors"
          >
            <Plus size={14} strokeWidth={3} /> Add Product
          </button>
        </div>
      </div>

      {message ? <div className="mb-4 rounded border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">{message}</div> : null}
      {error ? <div className="mb-4 rounded border border-red/30 bg-red/10 px-4 py-2 text-sm text-red-300">{error}</div> : null}

      <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-6 py-4">
          <h3 className="font-syne text-[1rem] font-bold text-white">All Products ({rows.length})</h3>
          <button onClick={load} className="text-gray2 hover:text-teal text-xs">Refresh</button>
        </div>

        {loading ? <div className="p-6 text-gray2 text-sm">Loading products...</div> : null}

        <div className="hidden min-[800px]:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
              <tr className="border-b border-white/[0.07]">
                {['Product', 'Price', 'Stock', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[0.88rem] text-white">
              {rows.map((p, index) => {
                const stock = Number(p.stock || 0);
                const meta = moderationMeta(p);
                return (
                  <tr key={p.id || `${p.sku || 'product'}-${index}`} className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2">
                    <td className="px-6 py-4 font-bold max-w-[220px] truncate">{p.name}</td>
                    <td className="px-6 py-4 font-black">{toPrice(p.price)}</td>
                    <td className="px-6 py-4">{stock}</td>
                    <td className="px-6 py-4"><Pill c={meta.className}>{meta.label}</Pill></td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        <button onClick={() => quickEdit(p)} className="text-gray hover:text-teal hover:border-teal rounded border border-white/10 p-1.5 transition-colors">
                          <Edit size={14} />
                        </button>
                        <button onClick={() => remove(p.id)} className="text-gray hover:text-red hover:border-red rounded border border-white/10 p-1.5 transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MerchantProducts;
