import React from 'react';
import { Tag, Plus, Calendar, Settings, Trash2 } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';
import DashboardStats from '../../../components/DashboardStats';

const Pill = ({ children, c }) => (
  <MerchantPill className={c}>{children}</MerchantPill>
);

const promos = [
  {
    name: 'New Season Discount',
    code: 'TECHSEASON10',
    discount: '10% off',
    prods: 'All Store',
    start: 'Mar 1, 2026',
    end: 'Apr 30, 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Headphones Flash Sale',
    code: 'FLASH20',
    discount: '20% off',
    prods: 'Headphones',
    start: 'Mar 12, 2026',
    end: 'Mar 15, 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Welcome Offer',
    code: 'WELCOME15',
    discount: '15% off',
    prods: 'First Order',
    start: 'Jan 1, 2026',
    end: 'Dec 31, 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Last Year Clearance',
    code: 'OLDSTOCK50',
    discount: '50% off',
    prods: 'Clearance Only',
    start: 'Dec 1, 2025',
    end: 'Feb 1, 2026',
    status: 'Expired',
    sc: 'text-red bg-red/10',
  },
];

const MerchantPromotions = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <MerchantPageHeader
        title={
          <>
            Store <span className="text-teal">Promotions</span>
          </>
        }
        subtitle="Boost your sales with coupon codes and special offers"
      />
      <div className="flex gap-2.5">
        <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-bold transition-colors">
          <Plus size={14} strokeWidth={3} /> Create Promotion
        </button>
      </div>
    </div>
    
    <DashboardStats
      stats={[
        { icon: Tag, val: '3', label: 'Active Promotions', iconBg: 'bg-teal/10' },
        { icon: Calendar, val: '1,240', label: 'Total Used', iconBg: 'bg-purple-500/10' },
        { icon: Tag, val: '$4,120', label: 'Promos Value', iconBg: 'bg-yellow/10' },
        { icon: Calendar, val: 'in 3 days', label: 'Next Expiring', iconBg: 'bg-red/10' },
      ]}
    />
    
    <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-6 py-4">
        <h3 className="font-syne text-[1rem] font-bold text-white">All Promotions</h3>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden min-[800px]:block overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
            <tr className="border-b border-white/[0.07]">
              {['Name', 'Code', 'Discount', 'Products', 'Period', 'Status', 'Actions'].map((h) => (
                <th key={h} className="px-6 py-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[0.88rem] text-white">
            {promos.map((p) => (
              <tr
                key={p.code}
                className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2"
              >
                <td className="px-6 py-4 font-bold max-w-[180px] truncate">{p.name}</td>
                <td className="text-teal px-6 py-4 font-black">{p.code}</td>
                <td className="px-6 py-4">{p.discount}</td>
                <td className="text-gray2 px-6 py-4">{p.prods}</td>
                <td className="text-gray2 px-6 py-4">{p.start} – {p.end}</td>
                <td className="px-6 py-4">
                  <Pill c={p.sc}>{p.status}</Pill>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-gray hover:text-teal transition-colors">
                      <Settings size={16} />
                    </button>
                    <button className="text-gray hover:text-red transition-colors">
                      <Trash2 size={16} />
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
        {promos.map((p) => (
          <div key={p.code} className="p-5 space-y-4 hover:bg-white/2 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[0.95rem] max-w-[180px] truncate">{p.name}</span>
              <Pill c={p.sc}>{p.status}</Pill>
            </div>
            <div className="bg-navy3/50 p-3 rounded-md border border-white/5 flex items-center justify-between mb-2">
               <span className="text-gray text-[0.62rem] font-bold uppercase tracking-widest">Promotion Code</span>
               <span className="text-teal font-black tracking-widest">{p.code}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Discount</p>
                <p className="text-white text-sm font-bold">{p.discount}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Products</p>
                <p className="text-white text-sm font-medium">{p.prods}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Valid Period</p>
                <p className="text-white text-sm font-bold">{p.start} <span className="text-gray font-normal mx-1">to</span> {p.end}</p>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-white/[0.07]">
               <span className="text-gray text-[0.65rem] font-bold uppercase tracking-widest">Manage</span>
               <div className="flex gap-4">
                 <button className="text-gray hover:text-teal transition-colors flex items-center gap-1 text-[0.7rem] font-bold uppercase">
                   <Settings size={14} /> Edit
                 </button>
                 <button className="text-gray hover:text-red transition-colors flex items-center gap-1 text-[0.7rem] font-bold uppercase">
                   <Trash2 size={14} /> Delete
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default MerchantPromotions;
