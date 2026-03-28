import React from 'react';
import { Download } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';

const Pill = ({ children, c }) => (
  <MerchantPill className={c}>{children}</MerchantPill>
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
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <MerchantPageHeader
        title={
          <>
            Earnings <span className="text-teal">Dashboard</span>
          </>
        }
        subtitle="Track your revenue, commissions, and settlements"
      />
      <div className="flex gap-2.5">
        <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem] transition-colors">
          <Download size={14} /> Download Report
        </button>
        <button
          onClick={() => onNav?.('payouts')}
          className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-1.5 text-[0.8rem] font-bold transition-colors"
        >
          Request Payout
        </button>
      </div>
    </div>
    
    {/* Earnings Card */}
    <div className="border-teal/20 mb-8 flex flex-wrap items-center justify-between gap-6 rounded-lg border bg-linear-to-br from-[#091830] to-[#0D2137] p-8">
      <div>
        <div className="text-teal text-[0.7rem] font-bold tracking-widest uppercase">
          Available Balance
        </div>
        <div className="mt-1 font-syne text-[2.5rem] leading-none font-extrabold text-white">
          $4,320.00
        </div>
        <div className="text-gray mt-2 text-[0.88rem] tracking-wide">Next payout: March 18, 2026</div>
      </div>
      <div className="flex flex-wrap gap-8">
        {[
          { v: '$24,300', l: 'Gross Sales (Month)' },
          { v: '$1,944', l: 'Commission (8%)', c: 'text-red' },
          { v: '$22,356', l: 'Net Earnings' },
          { v: '$18,036', l: 'Already Paid Out', c: 'text-green-500' },
        ].map((s) => (
          <div key={s.l}>
            <div className={`font-syne text-[1.2rem] font-bold leading-none mb-1 ${s.c || 'text-white'}`}>
              {s.v}
            </div>
            <div className="text-gray text-[0.7rem] font-bold tracking-widest uppercase">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        <button className="bg-teal text-navy hover:bg-teal2 rounded px-5 py-2 text-[0.88rem] font-bold transition-colors">
          💸 Withdraw Now
        </button>
        <button className="text-gray hover:text-teal hover:border-teal rounded border border-white/10 px-5 py-2 text-[0.88rem] font-bold transition-colors">
          View History
        </button>
      </div>
    </div>
    
    {/* Chart */}
    <div className="bg-card mb-8 rounded-lg border border-white/[0.07] px-6 py-5">
      <h3 className="mb-6 font-syne text-[1rem] font-bold text-white">
        Monthly Earnings (2026)
      </h3>
      <div className="relative flex h-[180px] items-end gap-3 pb-8">
        <div className="absolute right-0 bottom-8 left-0 h-px bg-white/[0.07]" />
        {barData.map((b) => (
          <div key={b.l} className="group flex flex-1 flex-col items-center gap-1.5">
            <div
              className="w-full relative cursor-pointer rounded-t-xs bg-teal/20 transition-all duration-300 group-hover:bg-teal group-hover:shadow-[0_0_15px_rgba(0,201,167,0.3)]"
              style={{ height: b.h }}
            >
              <div className="bg-navy3 pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-xs px-2 py-1 text-[0.65rem] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {b.v}
              </div>
            </div>
            <span className="text-gray mt-2 text-[0.65rem] font-bold uppercase tracking-wider">{b.l}</span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Commission Table */}
    <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-6 py-4">
        <h3 className="font-syne text-[1rem] font-bold text-white">Commission Breakdown</h3>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden min-[800px]:block overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
            <tr className="border-b border-white/[0.07]">
              {[
                'Period',
                'Gross Sales',
                'Commission Rate',
                'Commission',
                'Net Payout',
                'Status',
              ].map((h) => (
                <th key={h} className="px-6 py-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[0.88rem] text-white">
            {rows.map((r) => (
              <tr key={r.period} className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2">
                <td className="px-6 py-4 font-bold">{r.period}</td>
                <td className="px-6 py-4">{r.gross}</td>
                <td className="text-gray2 px-6 py-4">{r.rate}</td>
                <td className="text-red px-6 py-4 font-black">{r.comm}</td>
                <td className="text-teal px-6 py-4 font-black">{r.net}</td>
                <td className="px-6 py-4">
                  <Pill c={r.sc}>{r.status}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="min-[800px]:hidden divide-y divide-white/[0.07]">
        {rows.map((r) => (
          <div key={r.period} className="p-5 space-y-4 hover:bg-white/2 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[0.95rem]">{r.period}</span>
              <Pill c={r.sc}>{r.status}</Pill>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Gross Sales</p>
                <p className="text-white text-sm font-bold">{r.gross}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Commission Rate</p>
                <p className="text-white text-sm font-medium">{r.rate}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Commission</p>
                <p className="text-red text-sm font-black">{r.comm}</p>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-white/[0.07]">
              <span className="text-gray text-[0.65rem] font-bold uppercase tracking-widest">Net Payout</span>
              <p className="text-teal text-sm font-black">{r.net}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default MerchantEarnings;
