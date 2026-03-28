import React from 'react';
import { Package, AlertTriangle, XCircle, Plus } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';
import DashboardStats from '../../../components/DashboardStats';

const Pill = ({ children, c }) => (
  <MerchantPill className={c}>{children}</MerchantPill>
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
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <MerchantPageHeader
        title={
          <>
            Inventory <span className="text-teal">Management</span>
          </>
        }
        subtitle="Track and update stock levels"
      />
      <div className="flex gap-2.5">
        <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded border border-transparent px-4 py-1.5 text-[0.8rem] font-bold transition-colors">
          <Plus size={14} strokeWidth={3} /> Restock Order
        </button>
      </div>
    </div>
    
    <DashboardStats stats={stats} />
    
    <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-6 py-4">
        <h3 className="font-syne text-[1rem] font-bold text-white">Stock Levels</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.8rem] text-white outline-none transition-colors"
            placeholder="Search..."
          />
          <select className="bg-navy3 text-gray2 hover:border-white/20 cursor-pointer transition-colors rounded border border-white/[0.07] px-2 py-1.5 text-[0.8rem] outline-none">
            <option>All</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden min-[800px]:block overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
            <tr className="border-b border-white/[0.07]">
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
                <th key={h} className="px-6 py-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[0.88rem] text-white">
            {items.map((i) => (
              <tr
                key={i.sku}
                className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2"
              >
                <td className="px-6 py-4 max-w-[180px] font-bold truncate">{i.name}</td>
                <td className="text-gray px-6 py-4 text-[0.8rem] tracking-wider">{i.sku}</td>
                <td className="px-6 py-4">{i.inStock}</td>
                <td className="text-gray2 px-6 py-4">{i.reserved}</td>
                <td className={`px-6 py-4 font-black ${i.avColor}`}>
                  {i.available}
                </td>
                <td className="text-gray2 px-6 py-4">{i.alert}</td>
                <td className="px-6 py-4">
                  <Pill c={i.sc}>{i.status}</Pill>
                </td>
                <td className="px-6 py-4">
                  <button
                    className={`rounded px-3 py-1 text-[0.75rem] font-bold transition-all ${i.action === 'Restock' ? 'bg-teal text-navy hover:bg-teal2' : 'text-gray hover:border-teal hover:text-teal border border-white/10'}`}
                  >
                    {i.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="min-[800px]:hidden divide-y divide-white/[0.07]">
        {items.map((i) => (
          <div key={i.sku} className="p-5 space-y-4 hover:bg-white/2 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[0.95rem] max-w-[180px] truncate">{i.name}</span>
              <Pill c={i.sc}>{i.status}</Pill>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">SKU</p>
                <p className="text-gray2 text-sm font-medium tracking-wide">{i.sku}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Available</p>
                <p className={`text-sm font-black ${i.avColor}`}>{i.available} <span className="text-gray text-[0.62rem] font-medium lowercase">units</span></p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">In Stock</p>
                <p className="text-white text-sm font-bold">{i.inStock}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Reserved / Alert</p>
                <p className="text-white text-sm font-medium">{i.reserved} / {i.alert}</p>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-white/[0.07]">
              <span className="text-gray text-[0.65rem] font-bold uppercase tracking-widest">Action</span>
              <button
                className={`rounded px-4 py-1.5 text-[0.75rem] font-bold transition-all ${i.action === 'Restock' ? 'bg-teal text-navy hover:bg-teal2' : 'text-gray hover:border-teal hover:text-teal border border-white/10'}`}
              >
                {i.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default MerchantInventory;
