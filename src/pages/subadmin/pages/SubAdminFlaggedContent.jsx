import React from 'react';
import { Flag, ShieldAlert } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { flaggedContent } from '../components/subAdminData';

const statusClass = {
  Pending: 'text-yellow bg-yellow/10 border-yellow/40',
  Escalated: 'text-red bg-red/10 border-red/30',
  Resolved: 'text-green-500 bg-green-500/10 border-green-500/30',
};

const SubAdminFlaggedContent = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>Flagged </span><span className="text-teal">Content</span></>}
        subtitle="Moderate suspicious, offensive, or policy-violating content"
      />

      <div className="mb-4 flex items-start gap-2 rounded-md border border-red/30 bg-red/10 px-3 py-2.5">
        <ShieldAlert size={16} className="mt-0.5 text-red" />
        <p className="text-[0.875rem] text-gray2">High-priority moderation items are highlighted for urgent action.</p>
      </div>

      <div className="bg-card border-border rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-180">
            <thead>
              <tr className="bg-navy3">
                {['Type', 'Source', 'Reported By', 'Reason', 'Status', 'Actions'].map((head) => (
                  <th key={head} className="text-gray px-3 py-2 text-left text-[0.7rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {flaggedContent.map((row) => (
                <tr key={`${row.type}-${row.source}`} className="border-border border-b last:border-none">
                  <td className="px-3 py-2.5 text-[0.875rem] text-white inline-flex items-center gap-1.5"><Flag size={13} className="text-red" />{row.type}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-gray2">{row.source}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-gray2">{row.owner}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-white">{row.reason}</td>
                  <td className="px-3 py-2.5"><span className={`${statusClass[row.status]} rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold`}>{row.status}</span></td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1.5">
                      <button className="text-green-500 bg-green-500/10 rounded border border-green-500/30 px-2 py-1 text-[0.7rem] font-semibold">Mark Safe</button>
                      <button className="text-red bg-red/10 rounded border border-red/30 px-2 py-1 text-[0.7rem] font-semibold">Remove</button>
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

export default SubAdminFlaggedContent;
