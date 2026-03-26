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
const coupons = [
  {
    code: 'ESUUQ10',
    type: 'Percentage',
    val: '10% off',
    min: '$20',
    used: 842,
    exp: 'Dec 31, 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    code: 'SAVE10',
    type: 'Percentage',
    val: '10% off',
    min: '$30',
    used: 210,
    exp: 'Apr 30, 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    code: 'FREESHIP',
    type: 'Free Shipping',
    val: 'Free',
    min: '$0',
    used: 1204,
    exp: 'Mar 31, 2026',
    status: 'Expiring',
    sc: 'text-yellow bg-yellow/10',
  },
  {
    code: 'WELCOME20',
    type: 'Flat',
    val: '$20 off',
    min: '$50',
    used: 384,
    exp: 'Jun 30, 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    code: 'SUMMER50',
    type: 'Percentage',
    val: '50% off',
    min: '$100',
    used: 932,
    exp: 'Jan 1, 2026',
    status: 'Expired',
    sc: 'text-red bg-red/10',
  },
];
const AdminCoupons = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <DashboardPageHeader
        title={<span>Coupon <span className="text-teal">Management</span></span>}
        subtitle="Create and manage promotional coupon codes"
      />
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Plus size={14} /> Create Coupon
      </button>
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">All Coupons</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {['Code', 'Type', 'Value', 'Min Order', 'Used', 'Expires', 'Status', 'Actions'].map(
                (h) => (
                  <th
                    key={h}
                    className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest whitespace-nowrap uppercase"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => (
              <tr
                key={c.code}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/2"
              >
                <td className="text-teal px-4 py-3 text-[0.82rem] font-bold">{c.code}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{c.type}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{c.val}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{c.min}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{c.used}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{c.exp}</td>
                <td className="px-4 py-3">
                  <Pill c={c.sc}>{c.status}</Pill>
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
export default AdminCoupons;
