import React from 'react';
import { Download } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';
const Pill = ({ children, c }) => (
  <MerchantPill className={c}>
    {children}
  </MerchantPill>
);
const barData = [
  { l: 'Jan', h: '50%', v: '$11.2k' },
  { l: 'Feb', h: '65%', v: '$14.6k' },
  { l: 'Mar', h: '100%', v: '$22.4k' },
  { l: 'Apr', h: '0%', v: '—' },
  { l: 'May', h: '0%', v: '—' },
  { l: 'Jun', h: '0%', v: '—' },
];
const rows = [
  {
    period: 'Mar 1–12, 2026',
    gross: '$24,300',
    rate: '8%',
    comm: '$1,944',
    net: '$22,356',
    status: 'Pending',
    sc: 'text-yellow bg-yellow/10',
  },
  {
    period: 'Feb 2026',
    gross: '$14,600',
    rate: '8%',
    comm: '$1,168',
    net: '$13,432',
    status: 'Paid',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    period: 'Jan 2026',
    gross: '$11,200',
    rate: '8%',
    comm: '$896',
    net: '$10,304',
    status: 'Paid',
    sc: 'text-green-500 bg-green-500/10',
  },
];
const MerchantEarnings = ({ onNav }) => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <MerchantPageHeader title="Earnings" highlight="Dashboard" subtitle="Track your revenue, commissions, and settlements" />
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-3">
        <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem]">
          <Download size={14} /> Download Report
        </button>
        <button
          onClick={() => onNav?.('payouts')}
          className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-1.5 text-[0.8rem] font-medium"
        >
          Request Payout
        </button>
      </div>
    </div>
    {/* Earnings Card */}
    <div className="border-teal/20 mb-5 flex flex-wrap items-center justify-between gap-6 rounded-md border bg-gradient-to-br from-[#091830] to-[#0D2137] p-6">
      <div>
        <div className="text-teal text-[0.72rem] font-bold tracking-[0.12em] uppercase">
          Available Balance
        </div>
        <div className="mt-1 font-['Syne'] text-[2.2rem] leading-tight font-extrabold text-white">
          $4,320.00
        </div>
        <div className="text-gray mt-1 text-[0.875rem]">Next payout: March 18, 2026</div>
      </div>
      <div className="flex flex-wrap gap-6">
        {[
          { v: '$24,300', l: 'Gross Sales (Month)' },
          { v: '$1,944', l: 'Commission (8%)', c: 'text-red' },
          { v: '$22,356', l: 'Net Earnings' },
          { v: '$18,036', l: 'Already Paid Out', c: 'text-green-500' },
        ].map((s) => (
          <div key={s.l}>
            <div className={`font-['Syne'] text-[1.1rem] font-bold ${s.c || 'text-white'}`}>
              {s.v}
            </div>
            <div className="text-gray text-[0.875rem]">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-2 text-[0.82rem] font-medium">
          💸 Withdraw Now
        </button>
        <button className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-4 py-2 text-[0.82rem]">
          View History
        </button>
      </div>
    </div>
    {/* Chart */}
    <div className="bg-card mb-5 rounded-md border border-white/[0.07] p-5">
      <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">
        Monthly Earnings (2026)
      </h3>
      <div className="relative flex h-[150px] items-end gap-2 pb-6">
        <div className="absolute right-0 bottom-6 left-0 h-px bg-white/[0.07]" />
        {barData.map((b) => (
          <div key={b.l} className="group flex flex-1 flex-col items-center gap-1">
            <div
              className="from-teal2 to-teal relative w-full cursor-pointer rounded-t bg-gradient-to-t group-hover:opacity-80"
              style={{ height: b.h }}
            >
              <div className="bg-teal text-navy pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 rounded px-1.5 py-0.5 text-[0.62rem] font-bold opacity-0 transition-opacity group-hover:opacity-100">
                {b.v}
              </div>
            </div>
            <span className="text-gray text-[0.62rem]">{b.l}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Commission Table */}
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[1rem] font-bold text-white">Commission Breakdown</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {[
                'Period',
                'Gross Sales',
                'Commission Rate',
                'Commission',
                'Net Payout',
                'Status',
              ].map((h) => (
                <th
                  key={h}
                  className="text-gray px-4 py-2.5 text-left text-[0.75rem] font-semibold tracking-widest whitespace-nowrap uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.period} className="border-b border-white/[0.07] last:border-b-0">
                <td className="px-4 py-3 text-[0.875rem] text-white">{r.period}</td>
                <td className="px-4 py-3 text-[0.875rem] text-white">{r.gross}</td>
                <td className="px-4 py-3 text-[0.875rem] text-white">{r.rate}</td>
                <td className="text-red px-4 py-3 text-[0.875rem]">{r.comm}</td>
                <td className="text-teal px-4 py-3 text-[0.875rem] font-medium">{r.net}</td>
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
export default MerchantEarnings;
