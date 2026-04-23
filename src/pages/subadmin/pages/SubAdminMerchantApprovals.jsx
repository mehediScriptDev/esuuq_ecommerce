import React from 'react';
import { Store } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { merchantApprovals } from '../components/subAdminData';

const SubAdminMerchantApprovals = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>Merchant </span><span className="text-teal">Approvals</span></>}
        subtitle="Review new merchant applications before activation"
      />

      <div className="bg-card border-border overflow-hidden rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="bg-navy3">
                {['Store Name', 'Owner', 'Category', 'Applied', 'Verification', 'Actions'].map((head) => (
                  <th key={head} className="text-gray px-3 py-2 text-left text-[0.7rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {merchantApprovals.map((row) => (
                <tr key={row.store} className="border-border border-b last:border-none">
                  <td className="px-3 py-2.5 text-[0.875rem] font-semibold text-white inline-flex items-center gap-2"><Store size={13} className="text-teal" />{row.store}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-gray2">{row.owner}</td>
                  <td className="px-3 py-2.5"><span className={`${row.categoryClass} rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}>{row.category}</span></td>
                  <td className="px-3 py-2.5 text-[0.8rem] text-gray">{row.applied}</td>
                  <td className="px-3 py-2.5"><span className="text-blue-500 bg-blue-500/10 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold">Documents Ready</span></td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1.5">
                      <button className="text-green-500 bg-green-500/10 rounded border border-green-500/30 px-2 py-1 text-[0.7rem] font-semibold">Approve</button>
                      <button className="text-red bg-red/10 rounded border border-red/30 px-2 py-1 text-[0.7rem] font-semibold">Reject</button>
                      <button className="border-border text-gray2 rounded border px-2 py-1 text-[0.7rem] font-semibold">View Profile</button>
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

export default SubAdminMerchantApprovals;
