import React from 'react';
import { Search } from 'lucide-react';
import UserPageHeader from '../components/UserPageHeader';
import UserPill from '../components/UserPill';

const steps = [
  {
    id: 'confirmed',
    title: 'Order Confirmed',
    sub: 'Mar 12, 2026 · 10:22 AM',
    status: 'done',
  },
  {
    id: 'paid',
    title: 'Payment Verified',
    sub: 'Mar 12, 2026 · 10:23 AM',
    status: 'done',
  },
  {
    id: 'pickup',
    title: 'Picked Up by Driver',
    sub: 'Mar 12, 2026 · 2:14 PM · Hassan M.',
    status: 'done',
  },
  {
    id: 'delivery',
    title: 'Out for Delivery',
    sub: 'Estimated arrival: Mar 14 by 8 PM',
    status: 'active',
  },
  {
    id: 'delivered',
    title: 'Delivered',
    sub: 'To your doorstep',
    status: 'pending',
  },
];

const dotClass = {
  done: 'bg-teal',
  active: 'bg-teal ring-4 ring-teal/15',
  pending: 'border-2 border-white/[0.14] bg-navy3',
};

const lineClass = {
  done: 'bg-teal',
  active: 'bg-white/[0.07]',
  pending: 'bg-white/[0.07]',
};

const titleClass = {
  done: 'text-white',
  active: 'text-teal',
  pending: 'text-gray',
};

const UserTrackOrder = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-5">
        <UserPageHeader
          title={
            <span>
              Track <span className="text-teal">Order</span>
            </span>
          }
          subtitle="Real-time status of your delivery"
        />
      </div>

      <div className="bg-card mb-4 rounded-md border border-white/[0.07] p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          <div className="relative min-w-55 flex-1">
            <Search size={14} className="text-gray absolute top-1/2 left-3 -translate-y-1/2" />
            <input
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] py-2 pr-3 pl-8 text-[0.82rem] text-white outline-none"
              defaultValue="#ESQ-00846"
            />
          </div>
          <button
            type="button"
            className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-2 text-[0.8rem] font-medium"
          >
            Track
          </button>
        </div>

        <div className="bg-navy3 flex flex-wrap items-center justify-between gap-2 rounded-md border border-white/[0.07] p-3">
          <div>
            <div className="text-teal font-['Syne'] text-[0.92rem] font-bold">#ESQ-00846</div>
            <div className="text-gray text-[0.72rem]">Urban Runner Sneakers · SoleStyle</div>
          </div>
          <UserPill className="text-yellow bg-yellow/10">In Transit</UserPill>
        </div>
      </div>

      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">Delivery Progress</h3>

        <div className="space-y-0">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div key={step.id} className="flex gap-3 pb-4 last:pb-0">
                <div className="flex w-4 shrink-0 flex-col items-center">
                  <span className={`h-3.5 w-3.5 rounded-full ${dotClass[step.status]}`} />
                  {!isLast ? <span className={`mt-1 h-full w-0.5 ${lineClass[step.status]}`} /> : null}
                </div>
                <div>
                  <div className={`text-[0.85rem] font-medium ${titleClass[step.status]}`}>{step.title}</div>
                  <div className="text-gray mt-0.5 text-[0.72rem]">{step.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserTrackOrder;
