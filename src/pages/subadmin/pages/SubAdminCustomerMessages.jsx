import React from 'react';
import { MessageSquareMore } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { customerMessages } from '../components/subAdminData';

const statusClass = {
  Unread: 'text-red bg-red/10 border-red/30',
  Open: 'text-blue-500 bg-blue-500/10 border-blue-500/30',
  Escalated: 'text-yellow bg-yellow/10 border-yellow/40',
};

const SubAdminCustomerMessages = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>Customer </span><span className="text-teal">Messages</span></>}
        subtitle="Inbox for customer communication and escalated threads"
      />

      <div className="space-y-2.5">
        {customerMessages.map((msg) => (
          <div key={`${msg.from}-${msg.subject}`} className="bg-card border-border rounded-md border p-3">
            <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5">
                <MessageSquareMore size={14} className="text-teal" />
                <span className="text-[0.875rem] font-semibold text-white">{msg.from}</span>
                <span className="text-gray text-[0.75rem]">via {msg.channel}</span>
              </div>
              <span className={`${statusClass[msg.status]} rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold`}>{msg.status}</span>
            </div>
            <p className="text-[0.875rem] text-gray2">{msg.subject}</p>
            <div className="mt-2 text-[0.75rem] text-gray">Received: {msg.received}</div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <button className="text-teal bg-teal/10 rounded border border-teal/30 px-2.5 py-1 text-[0.7rem] font-semibold">Reply</button>
              <button className="text-yellow bg-yellow/10 rounded border border-yellow/40 px-2.5 py-1 text-[0.7rem] font-semibold">Assign</button>
              <button className="border-border text-gray2 rounded border px-2.5 py-1 text-[0.7rem] font-semibold">Archive</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubAdminCustomerMessages;
