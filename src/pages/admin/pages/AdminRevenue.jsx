import React from 'react';
import { DollarSign, TrendingUp, CreditCard, RefreshCw, Download } from 'lucide-react';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);
const stats = [
  {
    icon: DollarSign,
    bg: 'bg-teal/10',
    val: '$84,320',
    label: 'Gross Revenue (Mar)',
    trend: '↑ 18%',
    up: true,
  },
  {
    icon: TrendingUp,
    bg: 'bg-purple-500/10',
    val: '$8,432',
    label: 'Platform Commission',
    trend: '↑ 21%',
    up: true,
  },
  { icon: CreditCard, bg: 'bg-yellow/10', val: '$12,400', label: 'Pending Payouts' },
  { icon: RefreshCw, bg: 'bg-red/10', val: '$1,240', label: 'Refunds Issued' },
];
const rows = [
  {
    merchant: 'TechZone MN',
    gross: '$24,300',
    pct: '8%',
    comm: '$1,944',
    net: '$22,356',
    status: 'Paid',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    merchant: 'SoleStyle',
    gross: '$18,200',
    pct: '12%',
    comm: '$2,184',
    net: '$16,016',
    status: 'Pending',
    sc: 'text-yellow bg-yellow/10',
  },
  {
    merchant: 'HomeChef',
    gross: '$11,400',
    pct: '10%',
    comm: '$1,140',
    net: '$10,260',
    status: 'Paid',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    merchant: 'AudioPro',
    gross: '$9,800',
    pct: '10%',
    comm: '$980',
    net: '$8,820',
    status: 'Pending',
    sc: 'text-yellow bg-yellow/10',
  },
];
const AdminRevenue = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.3rem] font-bold text-white">
          Revenue <span className="text-teal">Analytics</span>
        </h1>
        <p className="text-gray mt-1 text-[0.8rem]">Track earnings, commissions, and payouts</p>
      </div>
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Download size={14} /> Download Report
      </button>
    </div>
    <div className="mb-5 grid grid-cols-1 gap-4 min-[580px]:grid-cols-2 min-[1100px]:grid-cols-4">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="bg-card rounded-md border border-white/[0.07] p-5">
            <div className="mb-3 flex items-start justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-md ${s.bg}`}>
                <Icon size={20} className="text-teal" />
              </div>
              {s.trend && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.72rem] font-medium ${s.up ? 'bg-green-500/10 text-green-500' : 'bg-red/10 text-red'}`}
                >
                  {s.trend}
                </span>
              )}
            </div>
            <div className="font-['Syne'] text-[1.7rem] font-extrabold text-white">{s.val}</div>
            <div className="text-gray mt-1 text-[0.75rem]">{s.label}</div>
          </div>
        );
      })}
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">Revenue by Merchant</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {[
                'Merchant',
                'Gross Sales',
                'Commission %',
                'Commission $',
                'Net Payout',
                'Status',
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
            {rows.map((r) => (
              <tr
                key={r.merchant}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3 text-[0.82rem] font-semibold text-white">{r.merchant}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{r.gross}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{r.pct}</td>
                <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{r.comm}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{r.net}</td>
                <td className="px-4 py-3">
                  <Pill c={r.sc}>{r.status}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default AdminRevenue;
