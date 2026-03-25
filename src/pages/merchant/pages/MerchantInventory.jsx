import React from 'react';
import { Package, AlertTriangle, XCircle, Plus } from 'lucide-react';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);
const stats = [
  { icon: Package, bg: 'bg-teal/10', val: '248', label: 'Total Products' },
  { icon: AlertTriangle, bg: 'bg-yellow/10', val: '3', label: 'Low Stock Alerts' },
  { icon: XCircle, bg: 'bg-red/10', val: '2', label: 'Out of Stock' },
];
const items = [
  {
    name: 'Wireless Earbuds Pro',
    sku: 'TZ-EAR-001',
    inStock: 4,
    reserved: 0,
    available: 4,
    alert: 10,
    status: 'Low Stock',
    sc: 'text-red bg-red/10',
    avColor: 'text-red',
    action: 'Restock',
  },
  {
    name: 'Studio Headphones',
    sku: 'TZ-HEAD-002',
    inStock: 142,
    reserved: 8,
    available: 134,
    alert: 20,
    status: 'In Stock',
    sc: 'text-green-500 bg-green-500/10',
    avColor: 'text-green-500',
    action: 'Update',
  },
  {
    name: 'Laptop Stand',
    sku: 'TZ-STAND-003',
    inStock: 28,
    reserved: 2,
    available: 26,
    alert: 30,
    status: 'Low Stock',
    sc: 'text-yellow bg-yellow/10',
    avColor: 'text-yellow',
    action: 'Restock',
  },
  {
    name: 'USB-C Hub',
    sku: 'TZ-HUB-004',
    inStock: 84,
    reserved: 4,
    available: 80,
    alert: 15,
    status: 'In Stock',
    sc: 'text-green-500 bg-green-500/10',
    avColor: 'text-green-500',
    action: 'Update',
  },
  {
    name: 'Ring Light 12-inch',
    sku: 'TZ-LIGHT-005',
    inStock: 0,
    reserved: 0,
    available: 0,
    alert: 10,
    status: 'Out of Stock',
    sc: 'text-red bg-red/10',
    avColor: 'text-red',
    action: 'Restock',
  },
];
const MerchantInventory = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.25rem] font-bold text-white">
          Inventory <span className="text-teal">Management</span>
        </h1>
        <p className="text-gray mt-1 text-[0.78rem]">Track and update stock levels</p>
      </div>
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Plus size={14} /> Restock Order
      </button>
    </div>
    <div className="mb-5 grid grid-cols-1 gap-4 min-[580px]:grid-cols-3">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="bg-card rounded-md border border-white/[0.07] p-5">
            <div className="mb-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-md ${s.bg}`}>
                <Icon size={20} className="text-teal" />
              </div>
            </div>
            <div className="font-['Syne'] text-[1.7rem] font-extrabold text-white">{s.val}</div>
            <div className="text-gray mt-1 text-[0.72rem]">{s.label}</div>
          </div>
        );
      })}
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.85rem] font-bold text-white">Stock Levels</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none"
            placeholder="Search..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.78rem] outline-none">
            <option>All</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {[
                'Product',
                'SKU',
                'In Stock',
                'Reserved',
                'Available',
                'Alert At',
                'Status',
                'Update',
              ].map((h) => (
                <th
                  key={h}
                  className="text-gray px-4 py-2.5 text-left text-[0.68rem] font-semibold tracking-widest whitespace-nowrap uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr
                key={i.sku}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3 text-[0.82rem] text-white">{i.name}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{i.sku}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{i.inStock}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{i.reserved}</td>
                <td className={`px-4 py-3 text-[0.82rem] font-semibold ${i.avColor}`}>
                  {i.available}
                </td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{i.alert}</td>
                <td className="px-4 py-3">
                  <Pill c={i.sc}>{i.status}</Pill>
                </td>
                <td className="px-4 py-3">
                  <button
                    className={`rounded px-3 py-1 text-[0.75rem] font-medium ${i.action === 'Restock' ? 'bg-teal text-navy hover:bg-teal2' : 'text-gray2 hover:border-teal hover:text-teal border border-white/[0.07]'}`}
                  >
                    {i.action}
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
export default MerchantInventory;
