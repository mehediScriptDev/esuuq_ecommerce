import React from 'react';
import { Scale } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { orderDisputes } from '../components/subAdminData';

const statusClass = {
  Open: 'text-red bg-red/10 border-red/30',
  Investigating: 'text-yellow bg-yellow/10 border-yellow/40',
  Resolved: 'text-green-500 bg-green-500/10 border-green-500/30',
};

const SubAdminOrderDisputes = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>Order </span><span className="text-teal">Disputes</span></>}
        subtitle="Track and resolve customer-vs-merchant dispute cases"
      />

      <div className="bg-card border-border overflow-hidden rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="bg-navy3">
                {['Dispute ID', 'Order', 'Issue', 'Customer', 'Amount', 'Status', 'Actions'].map((head) => (
                  <th key={head} className="text-gray px-3 py-2 text-left text-[0.7rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orderDisputes.map((row) => (
                <tr key={row.id} className="border-border border-b last:border-none">
                  <td className="px-3 py-2.5 text-[0.875rem] text-white inline-flex items-center gap-1.5"><Scale size={13} className="text-teal" />{row.id}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-gray2">{row.order}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-white">{row.issue}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-gray2">{row.customer}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] font-semibold text-white">{row.amount}</td>
                  <td className="px-3 py-2.5"><span className={`${statusClass[row.status]} rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold`}>{row.status}</span></td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1.5">
                      <button className="text-blue-500 bg-blue-500/10 rounded border border-blue-500/30 px-2 py-1 text-[0.7rem] font-semibold">Investigate</button>
                      <button className="text-green-500 bg-green-500/10 rounded border border-green-500/30 px-2 py-1 text-[0.7rem] font-semibold">Resolve</button>
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
};

export default SubAdminOrderDisputes;
