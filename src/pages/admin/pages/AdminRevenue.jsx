import React from 'react';
import { DollarSign, TrendingUp, CreditCard, RefreshCw, Download } from 'lucide-react';
import DashboardPageHeader from '../components/DashboardPageHeader';
import AdminStats from '../components/AdminStats';
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
      <DashboardPageHeader
        title={<span>Revenue <span className="text-teal">Analytics</span></span>}
        subtitle="Track earnings, commissions, and payouts"
      />
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Download size={14} /> Download Report
      </button>
    </div>
    <AdminStats stats={stats} />
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">Revenue by Merchant</h3>
      </div>
      <div className="space-y-3 p-4 md:hidden">
        {rows.map((r) => (
          <div key={r.merchant} className="bg-navy3 rounded-md border border-white/[0.07] p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="text-[0.82rem] font-semibold text-white">{r.merchant}</div>
              <Pill c={r.sc}>{r.status}</Pill>
            </div>
            <div className="space-y-1 text-[0.76rem]">
              <div className="text-gray">Gross Sales: <span className="text-white">{r.gross}</span></div>
              <div className="text-gray">Commission %: <span className="text-white">{r.pct}</span></div>
              <div className="text-gray">Commission: <span className="text-teal font-medium">{r.comm}</span></div>
              <div className="text-gray">Net Payout: <span className="text-white">{r.net}</span></div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto md:block">
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
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/2"
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
