import React from 'react';
import { Tag, Plus, Calendar, Settings, Trash2 } from 'lucide-react';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
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
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.25rem] font-bold text-white">
          Promotions & <span className="text-teal">Coupons</span>
        </h1>
        <p className="text-gray mt-1 text-[0.78rem]">
          Boost your sales with coupon codes and special offers
        </p>
      </div>
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Plus size={14} /> Create Promotion
      </button>
    </div>
    <div className="mb-6 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[1100px]:grid-cols-4">
      {[
        { l: 'Active Promotions', v: '3', i: Tag, bg: 'bg-teal/10' },
        { l: 'Total Used', v: '1,240', i: Calendar, bg: 'bg-purple-500/10' },
        { l: 'Promos Value', v: '$4,120', i: Tag, bg: 'bg-yellow/10' },
        { l: 'Next Expiring', v: 'in 3 days', i: Calendar, bg: 'bg-red/10' },
      ].map((s) => {
        const Icon = s.i;
        return (
          <div
            key={s.l}
            className="bg-card hover:border-teal/20 rounded-md border border-white/[0.07] p-4 transition-all"
          >
            <div className="mb-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded ${s.bg}`}>
                <Icon size={16} className="text-teal" />
              </div>
            </div>
            <div className="font-['Syne'] text-[1.4rem] font-extrabold text-white">{s.v}</div>
            <div className="text-gray text-[0.68rem]">{s.l}</div>
          </div>
        );
      })}
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.85rem] font-bold text-white">All Promotions</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {['Name', 'Code', 'Discount', 'Products', 'Period', 'Status', 'Actions'].map((h) => (
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
            {promos.map((p) => (
              <tr
                key={p.code}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3 text-[0.82rem] font-medium text-white">{p.name}</td>
                <td className="text-teal px-4 py-3 text-[0.82rem] font-bold">{p.code}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.discount}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{p.prods}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">Mar 1 – Apr 30</td>
                <td className="px-4 py-3">
                  <Pill c={p.sc}>{p.status}</Pill>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="text-gray hover:text-teal">
                      <Settings size={14} />
                    </button>
                    <button className="text-gray hover:text-red">
                      <Trash2 size={14} />
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
export default MerchantPromotions;
