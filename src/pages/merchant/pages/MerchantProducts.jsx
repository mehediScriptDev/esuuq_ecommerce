import React from 'react';
import { Upload, Plus, Edit, Eye } from 'lucide-react';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);
const products = [
  {
    name: 'Wireless Earbuds Pro Max',
    sku: 'TZ-EAR-001',
    price: '$49.99',
    stock: 4,
    stockPct: '3%',
    stockC: 'bg-red',
    stockColor: 'text-red',
    sales: 834,
    rev: '$41,693',
    status: 'Low Stock',
    sc: 'text-yellow bg-yellow/10',
  },
  {
    name: 'Studio Headphones Deep Bass',
    sku: 'TZ-HEAD-002',
    price: '$79.99',
    stock: 142,
    stockPct: '75%',
    stockC: 'bg-green-500',
    stockColor: 'text-green-500',
    sales: 592,
    rev: '$47,354',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Adjustable Laptop Stand',
    sku: 'TZ-STAND-003',
    price: '$34.99',
    stock: 28,
    stockPct: '30%',
    stockC: 'bg-yellow',
    stockColor: 'text-yellow',
    sales: 312,
    rev: '$10,917',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'USB-C Hub 7-in-1',
    sku: 'TZ-HUB-004',
    price: '$34.99',
    stock: 84,
    stockPct: '60%',
    stockC: 'bg-green-500',
    stockColor: 'text-green-500',
    sales: 198,
    rev: '$6,928',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Ring Light 12-inch',
    sku: 'TZ-LIGHT-005',
    price: '$29.99',
    stock: 0,
    stockPct: '0%',
    stockC: 'bg-red',
    stockColor: 'text-red',
    sales: 156,
    rev: '$4,678',
    status: 'Out of Stock',
    sc: 'text-red bg-red/10',
  },
];
const MerchantProducts = ({ onNav }) => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.25rem] font-bold text-white">
          My <span className="text-teal">Products</span>
        </h1>
        <p className="text-gray mt-1 text-[0.78rem]">Manage all your product listings</p>
      </div>
      <div className="flex gap-3">
        <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem]">
          <Upload size={14} /> Bulk Upload CSV
        </button>
        <button
          onClick={() => onNav?.('add-product')}
          className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium"
        >
          <Plus size={14} /> Add Product
        </button>
      </div>
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.85rem] font-bold text-white">All Products (248)</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none"
            placeholder="Search products..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.78rem] outline-none">
            <option>All</option>
            <option>Active</option>
            <option>Low Stock</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {['Product', 'SKU', 'Price', 'Stock', 'Sales', 'Revenue', 'Status', 'Actions'].map(
                (h) => (
                  <th
                    key={h}
                    className="text-gray px-4 py-2.5 text-left text-[0.68rem] font-semibold tracking-widest whitespace-nowrap uppercase"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.sku}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.name}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{p.sku}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.price}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-16 overflow-hidden rounded-full bg-white/[0.07]">
                      <div
                        className={`h-full rounded-full ${p.stockC}`}
                        style={{ width: p.stockPct }}
                      />
                    </div>
                    <span className={`text-[0.75rem] font-medium ${p.stockColor}`}>{p.stock}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.sales}</td>
                <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{p.rev}</td>
                <td className="px-4 py-3">
                  <Pill c={p.sc}>{p.status}</Pill>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] p-1.5">
                      <Edit size={13} />
                    </button>
                    <button className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] p-1.5">
                      <Eye size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default MerchantProducts;
