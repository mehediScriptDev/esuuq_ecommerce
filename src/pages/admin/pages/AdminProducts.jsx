import React from 'react';
import { Plus } from 'lucide-react';
import DashboardPageHeader from '../components/DashboardPageHeader';
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
    name: 'Wireless Earbuds Pro',
    merchant: 'TechZone MN',
    cat: 'Electronics',
    price: '$49.99',
    stock: 142,
    sales: 834,
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Urban Runner Sneakers',
    merchant: 'SoleStyle',
    cat: 'Fashion',
    price: '$64.99',
    stock: 38,
    sales: 412,
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Studio Headphones',
    merchant: 'AudioPro',
    cat: 'Electronics',
    price: '$79.99',
    stock: 4,
    sales: 923,
    status: 'Low Stock',
    sc: 'text-yellow bg-yellow/10',
  },
  {
    name: 'Non-Stick Cookware 5pc',
    merchant: 'HomeChef',
    cat: 'Home',
    price: '$89.00',
    stock: 67,
    sales: 284,
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Polarized Sunglasses',
    merchant: 'VisionX',
    cat: 'Beauty',
    price: '$28.99',
    stock: 0,
    sales: 156,
    status: 'Out of Stock',
    sc: 'text-red bg-red/10',
  },
];
const AdminProducts = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <DashboardPageHeader
        title={<span>Product <span className="text-teal">Catalog</span></span>}
        subtitle="Review and moderate all marketplace listings"
      />
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Plus size={14} /> Add Product
      </button>
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">All Products (10,420)</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none"
            placeholder="Search products..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.78rem] outline-none">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {[
                'Product',
                'Merchant',
                'Category',
                'Price',
                'Stock',
                'Sales',
                'Status',
                'Actions',
              ].map((h) => (
                <th
                  key={h}
                  className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest whitespace-nowrap uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.name}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/2"
              >
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.name}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{p.merchant}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{p.cat}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.price}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.stock}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.sales}</td>
                <td className="px-4 py-3">
                  <Pill c={p.sc}>{p.status}</Pill>
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.75rem]">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default AdminProducts;
