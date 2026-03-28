import React from 'react';
import { Upload, Plus, Edit, Eye } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';

const Pill = ({ children, c }) => (
  <MerchantPill className={c}>{children}</MerchantPill>
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
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <MerchantPageHeader
        title={
          <>
            My <span className="text-teal">Products</span>
          </>
        }
        subtitle="Manage all your product listings"
      />
      <div className="flex gap-2.5">
        <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem] transition-colors">
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
    
    <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-6 py-4">
        <h3 className="font-syne text-[1rem] font-bold text-white">All Products (248)</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.8rem] text-white outline-none transition-colors"
            placeholder="Search products..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.8rem] outline-none cursor-pointer hover:border-white/20 transition-colors">
            <option>All</option>
            <option>Active</option>
            <option>Low Stock</option>
          </select>
        </div>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden min-[800px]:block overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
            <tr className="border-b border-white/[0.07]">
              {['Product', 'SKU', 'Price', 'Stock', 'Sales', 'Revenue', 'Status', 'Actions'].map(
                (h) => (
                  <th key={h} className="px-6 py-4">{h}</th>
                )
              )}
            </tr>
          </thead>
          <tbody className="text-[0.88rem] text-white">
            {products.map((p) => (
              <tr
                key={p.sku}
                className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2"
              >
                <td className="px-6 py-4 font-bold max-w-[180px] truncate">{p.name}</td>
                <td className="text-gray px-6 py-4 text-[0.8rem] tracking-wider">{p.sku}</td>
                <td className="px-6 py-4 font-black">{p.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-navy3">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${p.stockC}`}
                        style={{ width: p.stockPct }}
                      />
                    </div>
                    <span className={`text-[0.75rem] font-bold ${p.stockColor}`}>{p.stock}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{p.sales}</td>
                <td className="text-teal px-6 py-4 font-bold">{p.rev}</td>
                <td className="px-6 py-4">
                  <Pill c={p.sc}>{p.status}</Pill>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    <button className="text-gray hover:text-teal hover:border-teal rounded border border-white/10 p-1.5 transition-colors">
                      <Edit size={14} />
                    </button>
                    <button className="text-gray hover:text-teal hover:border-teal rounded border border-white/10 p-1.5 transition-colors">
                      <Eye size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="min-[800px]:hidden divide-y divide-white/[0.07]">
        {products.map((p) => (
          <div key={p.sku} className="p-5 space-y-4 hover:bg-white/2 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[0.95rem] max-w-[180px] truncate">{p.name}</span>
              <Pill c={p.sc}>{p.status}</Pill>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">SKU</p>
                <p className="text-gray2 text-sm font-medium tracking-wide">{p.sku}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Price</p>
                <p className="text-white text-sm font-black">{p.price}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Sales</p>
                <p className="text-white text-sm font-bold">{p.sales} <span className="text-gray text-[0.65rem] font-medium lowercase">sold</span></p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Revenue</p>
                <p className="text-teal text-sm font-bold">{p.rev}</p>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-white/[0.07]">
               <div className="flex items-center gap-2 flex-1">
                 <span className="text-gray text-[0.65rem] font-bold uppercase tracking-widest">Stock:</span>
                 <div className="h-1.5 w-16 overflow-hidden rounded-full bg-navy3">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${p.stockC}`}
                      style={{ width: p.stockPct }}
                    />
                 </div>
                 <span className={`text-[0.75rem] font-bold ${p.stockColor}`}>{p.stock}</span>
               </div>
               
               <div className="flex gap-1.5">
                  <button className="text-gray hover:text-teal hover:border-teal rounded border border-white/10 p-1.5 transition-colors">
                    <Edit size={14} />
                  </button>
                  <button className="text-gray hover:text-teal hover:border-teal rounded border border-white/10 p-1.5 transition-colors">
                    <Eye size={14} />
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default MerchantProducts;
