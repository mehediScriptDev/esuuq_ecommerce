import React from 'react';
import { DollarSign, Landmark } from 'lucide-react';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
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
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.25rem] font-bold text-white">
          Payout <span className="text-teal">History</span>
        </h1>
        <p className="text-gray mt-1 text-[0.78rem]">Track all your settlement payouts</p>
      </div>
      <button className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        💸 Request Payout
      </button>
    </div>
    <div className="mb-5 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2">
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-3 font-['Syne'] text-[0.88rem] font-bold text-white">Bank Account</h3>
        <div className="text-gray mb-1 text-[0.82rem]">Connected Account</div>
        <div className="mt-2 flex items-center gap-3">
          <Landmark size={28} className="text-teal" />
          <div>
            <div className="text-[0.88rem] font-medium text-white">Chase Bank ···· 4291</div>
            <div className="text-gray text-[0.72rem]">Routing: ···· 8742</div>
          </div>
        </div>
        <button className="text-gray2 hover:border-teal hover:text-teal mt-4 rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem]">
          Change Account
        </button>
      </div>
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <div className="mb-3">
          <div className="bg-teal/10 flex h-10 w-10 items-center justify-center rounded-md">
            <DollarSign size={20} className="text-teal" />
          </div>
        </div>
        <div className="font-['Syne'] text-[1.7rem] font-extrabold text-white">$4,320</div>
        <div className="text-gray mt-1 text-[0.72rem]">Available for Payout</div>
        <button className="bg-teal text-navy hover:bg-teal2 mt-4 rounded px-3 py-1.5 text-[0.78rem] font-medium">
          Withdraw →
        </button>
      </div>
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.85rem] font-bold text-white">Payout History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {['Date', 'Reference', 'Amount', 'Method', 'Status'].map((h) => (
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
            {payouts.map((p) => (
              <tr key={p.ref} className="border-b border-white/[0.07] last:border-b-0">
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.date}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{p.ref}</td>
                <td className="text-teal px-4 py-3 text-[0.82rem] font-bold">{p.amount}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{p.method}</td>
                <td className="px-4 py-3">
                  <Pill c={p.sc}>{p.status}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default MerchantPayouts;
