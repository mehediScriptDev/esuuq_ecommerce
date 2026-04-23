import React, { useEffect, useMemo, useState } from 'react';
import { Package, AlertTriangle, XCircle, RefreshCw } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';
import DashboardStats from '../../../components/DashboardStats';
import {
  getMyMerchantProducts,
  restockMyMerchantProduct,
} from '../../../services/merchantService';

const Pill = ({ children, c }) => <MerchantPill className={c}>{children}</MerchantPill>;

const MerchantInventory = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const load = async () => {
    try {
      setLoading(true);
      setError('');
      const payload = await getMyMerchantProducts({ limit: 100, sort: 'newest' });
      setItems(Array.isArray(payload?.data) ? payload.data : []);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load inventory.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const doRestock = async (item) => {
    const quantity = window.prompt(`Restock quantity for ${item.name}`, '10');
    if (quantity == null) return;
    try {
      setError('');
      setMessage('');
      const result = await restockMyMerchantProduct(item.id, Number(quantity));
      setMessage(`Restocked ${item.name}. New stock: ${result.newStock}`);
      setItems((prev) => prev.map((p) => (p.id === item.id ? { ...p, stock: result.newStock } : p)));
    } catch (err) {
      setError(err?.response?.data?.message || 'Restock failed.');
    }
  };

  const stats = useMemo(() => {
    const total = items.length;
    const low = items.filter((i) => Number(i.stock || 0) > 0 && Number(i.stock || 0) <= Number(i.lowStockAt || 10)).length;
    const out = items.filter((i) => Number(i.stock || 0) <= 0).length;

    return [
      { icon: Package, bg: 'bg-teal/10', val: String(total), label: 'Total Products' },
      { icon: AlertTriangle, bg: 'bg-yellow/10', val: String(low), label: 'Low Stock Alerts' },
      { icon: XCircle, bg: 'bg-red/10', val: String(out), label: 'Out of Stock' },
    ];
  }, [items]);

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <MerchantPageHeader
          title={<><span>Inventory </span><span className="text-teal">Management</span></>}
          subtitle="Track and update stock levels"
        />
        <button onClick={load} className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded border border-transparent px-4 py-1.5 text-[0.8rem] font-bold transition-colors">
          <RefreshCw size={14} strokeWidth={2.5} /> Refresh
        </button>
      </div>

      {message ? <div className="mb-4 rounded border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">{message}</div> : null}
      {error ? <div className="mb-4 rounded border border-red/30 bg-red/10 px-4 py-2 text-sm text-red-300">{error}</div> : null}

      <DashboardStats stats={stats} />

      <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
          <h3 className="font-syne text-[1rem] font-bold text-white">Stock Levels</h3>
          {loading ? <span className="text-xs text-gray2">Loading...</span> : null}
        </div>

        <div className="hidden min-[800px]:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
              <tr className="border-b border-white/[0.07]">
                {['Product', 'SKU', 'In Stock', 'Alert At', 'Status', 'Update'].map((h) => (
                  <th key={h} className="px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[0.88rem] text-white">
              {items.map((i, index) => {
                const stock = Number(i.stock || 0);
                const alertAt = Number(i.lowStockAt || 10);
                const status = stock === 0 ? 'Out of Stock' : stock <= alertAt ? 'Low Stock' : 'In Stock';
                const sc = stock === 0 ? 'text-red bg-red/10' : stock <= alertAt ? 'text-yellow bg-yellow/10' : 'text-green-500 bg-green-500/10';
                return (
                  <tr key={i.id || `${i.sku || 'product'}-${index}`} className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2">
                    <td className="px-6 py-4 max-w-[220px] font-bold truncate">{i.name}</td>
                    <td className="text-gray px-6 py-4 text-[0.8rem] tracking-wider">{i.sku || '-'}</td>
                    <td className="px-6 py-4">{stock}</td>
                    <td className="text-gray2 px-6 py-4">{alertAt}</td>
                    <td className="px-6 py-4"><Pill c={sc}>{status}</Pill></td>
                    <td className="px-6 py-4">
                      <button onClick={() => doRestock(i)} className="bg-teal text-navy hover:bg-teal2 rounded px-3 py-1 text-[0.75rem] font-bold transition-all">
                        Restock
                      </button>
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

export default MerchantInventory;
