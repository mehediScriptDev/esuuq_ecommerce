import React from 'react';
import { Download, Filter, Ticket } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { supportTickets } from '../components/subAdminData';

const SubAdminSupportTickets = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>Support </span><span className="text-teal">Tickets</span></>}
        subtitle="Manage incoming customer support requests"
        actions={
          <>
            <button className="border-border text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border px-3 py-1.5 text-[0.8rem] transition-colors">
              <Filter size={14} /> Filters
            </button>
            <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-3 py-1.5 text-[0.8rem] font-semibold">
              <Download size={14} /> Export
            </button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:grid-cols-4 mb-4">
        <div className="bg-card border-border rounded-md border p-4"><div className="text-gray text-[0.7rem] uppercase tracking-[0.1em]">Open</div><div className="font-syne text-[1.8rem] text-white">12</div></div>
        <div className="bg-card border-border rounded-md border p-4"><div className="text-gray text-[0.7rem] uppercase tracking-[0.1em]">In Progress</div><div className="font-syne text-[1.8rem] text-white">6</div></div>
        <div className="bg-card border-border rounded-md border p-4"><div className="text-gray text-[0.7rem] uppercase tracking-[0.1em]">Resolved Today</div><div className="font-syne text-[1.8rem] text-white">18</div></div>
        <div className="bg-card border-border rounded-md border p-4"><div className="text-gray text-[0.7rem] uppercase tracking-[0.1em]">Avg Response</div><div className="font-syne text-[1.8rem] text-white">1.4h</div></div>
      </div>

      <div className="bg-card border-border rounded-md border p-3 space-y-2.5">
        {supportTickets.map((ticket) => (
          <div key={ticket.id} className="border-border hover:border-teal/30 rounded-md border p-3 transition-colors">
            <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Ticket size={14} className="text-teal" />
                <span className="text-[0.75rem] text-gray">{ticket.id}</span>
              </div>
              <span className={`${ticket.priorityClass} rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}>{ticket.priority}</span>
            </div>
            <div className="text-[0.875rem] font-semibold text-white">{ticket.title}</div>
            <div className="text-[0.8rem] text-gray mt-1">{ticket.meta}</div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <button className="text-green-500 bg-green-500/10 rounded border border-green-500/30 px-2.5 py-1 text-[0.72rem] font-semibold">Assign</button>
              <button className="text-yellow bg-yellow/10 rounded border border-yellow/40 px-2.5 py-1 text-[0.72rem] font-semibold">Escalate</button>
              <button className="border-border text-gray2 rounded border px-2.5 py-1 text-[0.72rem] font-semibold">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubAdminSupportTickets;
