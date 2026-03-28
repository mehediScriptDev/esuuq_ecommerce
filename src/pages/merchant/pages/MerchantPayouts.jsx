import React from 'react';
import { DollarSign, Landmark } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';

const Pill = ({ children, c }) => (
  <MerchantPill className={c}>{children}</MerchantPill>
);

const payouts = [
  {
    date: 'Mar 4, 2026',
    ref: 'PAY-2026-0312',
    amount: '$6,204.00',
    method: 'Bank Transfer',
    status: 'Completed',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    date: 'Feb 18, 2026',
    ref: 'PAY-2026-0248',
    amount: '$7,832.00',
    method: 'Bank Transfer',
    status: 'Completed',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    date: 'Feb 4, 2026',
    ref: 'PAY-2026-0184',
    amount: '$5,600.00',
    method: 'Bank Transfer',
    status: 'Completed',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    date: 'Jan 21, 2026',
    ref: 'PAY-2026-0121',
    amount: '$4,704.00',
    method: 'Bank Transfer',
    status: 'Completed',
    sc: 'text-green-500 bg-green-500/10',
  },
];

const MerchantPayouts = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <MerchantPageHeader
        title={
          <>
            Payout <span className="text-teal">History</span>
          </>
        }
        subtitle="Track all your settlement payouts"
      />
      <div className="flex gap-2.5">
        <button className="bg-teal text-navy hover:bg-teal2 rounded border border-transparent px-4 py-1.5 text-[0.8rem] font-bold transition-colors mb-2">
          💸 Request Payout
        </button>
      </div>
    </div>
    
    <div className="mb-8 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2">
      <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 flex flex-col items-start gap-2">
        <h3 className="mb-1 font-syne text-[1rem] font-bold text-white">Bank Account</h3>
        <div className="text-gray text-[0.82rem]">Connected Account</div>
        <div className="mt-2 flex items-center gap-4">
          <Landmark size={28} className="text-teal" />
          <div>
            <div className="text-[0.88rem] font-bold text-white">Chase Bank ···· 4291</div>
            <div className="text-gray mt-1 text-[0.72rem] font-medium uppercase tracking-widest">Routing: ···· 8742</div>
          </div>
        </div>
        <button className="text-gray hover:border-teal hover:text-teal mt-4 rounded border border-white/10 px-4 py-1.5 text-[0.75rem] font-bold transition-all">
          Change Account
        </button>
      </div>
      
      <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 flex flex-col items-start gap-2">
        <div className="mb-2">
          <div className="bg-teal/10 flex h-10 w-10 items-center justify-center rounded-md">
            <DollarSign size={20} className="text-teal" />
          </div>
        </div>
        <div className="font-syne text-[1.8rem] leading-none font-extrabold text-white">$4,320</div>
        <div className="text-gray mt-1 text-[0.7rem] font-bold tracking-widest uppercase">Available for Payout</div>
        <button className="bg-teal text-navy hover:bg-teal2 mt-4 rounded px-4 py-1.5 text-[0.75rem] font-bold transition-colors">
          Withdraw →
        </button>
      </div>
    </div>
    
    <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-6 py-4">
        <h3 className="font-syne text-[1rem] font-bold text-white">Payout History</h3>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden min-[800px]:block overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
            <tr className="border-b border-white/[0.07]">
              {['Date', 'Reference', 'Amount', 'Method', 'Status'].map((h) => (
                <th key={h} className="px-6 py-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[0.88rem] text-white">
            {payouts.map((p) => (
              <tr key={p.ref} className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2">
                <td className="px-6 py-4 font-medium">{p.date}</td>
                <td className="text-gray px-6 py-4 text-[0.8rem] tracking-wider">{p.ref}</td>
                <td className="text-teal px-6 py-4 font-black">{p.amount}</td>
                <td className="text-gray2 px-6 py-4">{p.method}</td>
                <td className="px-6 py-4">
                  <Pill c={p.sc}>{p.status}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="min-[800px]:hidden divide-y divide-white/[0.07]">
        {payouts.map((p) => (
          <div key={p.ref} className="p-5 space-y-4 hover:bg-white/2 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[0.95rem]">{p.date}</span>
              <Pill c={p.sc}>{p.status}</Pill>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Reference</p>
                <p className="text-gray2 text-sm font-medium tracking-wide">{p.ref}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Method</p>
                <p className="text-white text-sm">{p.method}</p>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-white/[0.07]">
              <span className="text-gray text-[0.65rem] font-bold uppercase tracking-widest">Amount</span>
              <p className="text-teal text-[1.1rem] font-black">{p.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default MerchantPayouts;
