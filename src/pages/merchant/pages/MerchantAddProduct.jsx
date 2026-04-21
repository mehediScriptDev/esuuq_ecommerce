import React, { useState } from 'react';
import { Save } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import { createProduct } from '../../../services/productService';

const initialForm = {
  name: '',
  description: '',
  categoryId: 'electronics',
  sku: '',
  price: '',
  comparePrice: '',
  stock: '',
  lowStockAt: '10',
  imageUrl: '',
  isFeatured: false,
  colors: '',
  sizes: '',
};

const MerchantAddProduct = ({ onNav }) => {
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const parseList = (value) =>
    String(value || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

  const submit = async () => {
    try {
      setSaving(true);
      setError('');
      setMessage('');

      if (!form.name.trim() || !form.description.trim() || !form.price || !form.stock) {
        setError('Please fill name, description, price, and stock.');
        return;
      }

      const colors = parseList(form.colors);
      const sizes = parseList(form.sizes);
      const variants = [
        ...(colors.length
          ? [{ type: 'color', label: 'Color', values: colors.map((color) => ({ id: color.toLowerCase().replace(/\s+/g, '-'), value: color })) }]
          : []),
        ...(sizes.length
          ? [{ type: 'size', label: 'Size', values: sizes.map((size) => ({ id: size.toLowerCase().replace(/\s+/g, '-'), value: size })) }]
          : []),
      ];

      const payload = {
        name: form.name.trim(),
        description: form.description.trim(),
        categoryId: form.categoryId,
        price: Number(form.price),
        stock: Number(form.stock),
        lowStockAt: Number(form.lowStockAt || 10),
        sku: form.sku.trim() || undefined,
        comparePrice: form.comparePrice ? Number(form.comparePrice) : undefined,
        images: form.imageUrl.trim() ? [form.imageUrl.trim()] : undefined,
        isFeatured: form.isFeatured,
        variants: variants.length ? variants : undefined,
      };

      await createProduct(payload);
      setMessage('Product submitted successfully and is now pending admin review.');
      setForm(initialForm);
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to create product.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <MerchantPageHeader
          title={<><span>Add New </span><span className="text-teal">Product</span></>}
          subtitle="Create a new listing for your store"
        />
        <div className="flex gap-2.5">
          <button
            onClick={() => onNav?.('products')}
            className="text-gray hover:border-teal hover:text-teal rounded border border-white/10 px-4 py-1.5 text-[0.8rem] font-bold transition-all"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={saving}
            className="bg-teal text-navy hover:bg-teal2 disabled:opacity-70 flex items-center gap-1.5 rounded border border-transparent px-4 py-1.5 text-[0.8rem] font-bold transition-all"
          >
            <Save size={14} strokeWidth={3} /> {saving ? 'Submitting...' : 'Submit for Review'}
          </button>
        </div>
      </div>

      {message ? <div className="mb-4 rounded border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">{message}</div> : null}
      {error ? <div className="mb-4 rounded border border-red/30 bg-red/10 px-4 py-2 text-sm text-red-300">{error}</div> : null}

      <div className="grid grid-cols-1 gap-6 min-[1100px]:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <div className="bg-card rounded-lg border border-white/[0.07] p-6 lg:p-8">
            <h3 className="mb-5 font-syne text-[1.1rem] font-bold text-white">Product Details</h3>

            <div className="mb-5">
              <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Product Name</label>
              <input
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                placeholder="e.g. Wireless Earbuds Pro Max"
              />
            </div>

            <div className="mb-5">
              <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                className="bg-navy3 focus:border-teal h-32 w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none resize-none"
                placeholder="Describe your product specs..."
              />
            </div>

            <div className="grid grid-cols-1 gap-5 min-[580px]:grid-cols-2">
              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Category</label>
                <select
                  value={form.categoryId}
                  onChange={(e) => update('categoryId', e.target.value)}
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                >
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home-garden">Home & Garden</option>
                  <option value="beauty">Beauty</option>
                  <option value="food-grocery">Food & Grocery</option>
                  <option value="sports">Sports</option>
                  <option value="books">Books</option>
                  <option value="toys-kids">Toys & Kids</option>
                  <option value="tools-diy">Tools & DIY</option>
                  <option value="pet-supplies">Pet Supplies</option>
                  <option value="health">Health</option>
                </select>
              </div>

              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">SKU</label>
                <input
                  value={form.sku}
                  onChange={(e) => update('sku', e.target.value)}
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                  placeholder="e.g. TZ-EAR-006"
                />
              </div>

              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Price ($)</label>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => update('price', e.target.value)}
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                  placeholder="49.99"
                />
              </div>

              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Compare At ($)</label>
                <input
                  type="number"
                  value={form.comparePrice}
                  onChange={(e) => update('comparePrice', e.target.value)}
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                  placeholder="89.99"
                />
              </div>

              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Stock Quantity</label>
                <input
                  type="number"
                  value={form.stock}
                  onChange={(e) => update('stock', e.target.value)}
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                  placeholder="100"
                />
              </div>

              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Alert At</label>
                <input
                  type="number"
                  value={form.lowStockAt}
                  onChange={(e) => update('lowStockAt', e.target.value)}
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                  placeholder="10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-lg border border-white/[0.07] p-6 lg:p-8">
            <h3 className="mb-5 font-syne text-[1.1rem] font-bold text-white">Product Media</h3>
            <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Image URL</label>
            <input
              value={form.imageUrl}
              onChange={(e) => update('imageUrl', e.target.value)}
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
              placeholder="https://..."
            />
          </div>

          <div className="bg-card rounded-lg border border-white/[0.07] p-6 lg:p-8">
            <h3 className="mb-5 font-syne text-[1.1rem] font-bold text-white">Visibility</h3>
            <label className="text-gray2 inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.isFeatured}
                onChange={(e) => update('isFeatured', e.target.checked)}
                className="accent-teal"
              />
              Mark as featured product
            </label>
          </div>

          <div className="bg-card rounded-lg border border-white/[0.07] p-6 lg:p-8">
            <h3 className="mb-5 font-syne text-[1.1rem] font-bold text-white">Variants</h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Colors</label>
                <input
                  value={form.colors}
                  onChange={(e) => update('colors', e.target.value)}
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                  placeholder="e.g. Red, Black, White"
                />
              </div>

              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">Sizes</label>
                <input
                  value={form.sizes}
                  onChange={(e) => update('sizes', e.target.value)}
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none"
                  placeholder="e.g. S, M, L, XL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantAddProduct;
