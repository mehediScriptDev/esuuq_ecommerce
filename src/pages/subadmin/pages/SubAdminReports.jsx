import React from 'react';
import { FileText } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { reports } from '../components/subAdminData';

const statusClass = {
  Submitted: 'text-green-500 bg-green-500/10 border-green-500/30',
  Draft: 'text-yellow bg-yellow/10 border-yellow/40',
};

const SubAdminReports = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>My </span><span className="text-teal">Reports</span></>}
        subtitle="Generate and manage moderation reports"
        actions={<button className="bg-teal text-navy hover:bg-teal2 rounded px-3 py-1.5 text-[0.8rem] font-semibold">Create Report</button>}
      />

      <div className="bg-card border-border overflow-hidden rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-160">
            <thead>
              <tr className="bg-navy3">
                {['Report ID', 'Title', 'Created', 'Status', 'Actions'].map((head) => (
                  <th key={head} className="text-gray px-3 py-2 text-left text-[0.7rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-border border-b last:border-none">
                  <td className="px-3 py-2.5 text-[0.875rem] text-teal inline-flex items-center gap-1.5"><FileText size={13} />{report.id}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] font-semibold text-white">{report.title}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-gray2">{report.created}</td>
                  <td className="px-3 py-2.5"><span className={`${statusClass[report.status]} rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold`}>{report.status}</span></td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1.5">
                      <button className="border-border text-gray2 rounded border px-2 py-1 text-[0.7rem] font-semibold">View</button>
                      <button className="text-teal bg-teal/10 rounded border border-teal/30 px-2 py-1 text-[0.7rem] font-semibold">Download</button>
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

export default SubAdminReports;
