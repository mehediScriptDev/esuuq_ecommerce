import React from 'react';
import { Link } from 'react-router-dom';
import UserPageHeader from '../components/UserPageHeader';
import UserPill from '../components/UserPill';

const filters = ['All (14)', 'Active (2)', 'Delivered (11)', 'Cancelled (1)', 'Returns (0)'];

const orders = [
  {
    id: '#ESQ-00847',
    date: 'Mar 12, 2026 · 5 items',
    desc: 'Wireless Earbuds, Headphones + 3 more',
    meta: 'TechZone MN, HomeChef · Free Delivery',
    total: '$392.95',
    status: 'Delivered',
    statusColor: 'text-green-500 bg-green-500/10',
    thumbs: ['📱', '🎧', '🍳'],
  },
  {
    id: '#ESQ-00846',
    date: 'Mar 12, 2026 · 1 item',
    desc: 'Urban Runner Sneakers (Size 10, White)',
    meta: 'SoleStyle · Express Delivery · Est. Mar 14',
    total: '$64.99',
    status: 'In Transit',
    statusColor: 'text-yellow bg-yellow/10',
    thumbs: ['👟'],
  },
  {
    id: '#ESQ-00821',
    date: 'Feb 28, 2026 · 1 item',
    desc: 'Premium Polarized Sunglasses',
    meta: 'VisionX · Standard Delivery',
    total: '$28.99',
    status: 'Delivered',
    statusColor: 'text-green-500 bg-green-500/10',
    thumbs: ['🕶️'],
  },
];

const UserOrders = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-5">
        <UserPageHeader
          title={
            <span>
              My <span className="text-teal">Orders</span>
            </span>
          }
          subtitle="All your orders across all merchants"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`rounded px-3 py-1.5 text-[0.75rem] font-medium transition-all ${
              index === 0
                ? 'bg-teal text-navy'
                : 'text-gray2 hover:border-teal hover:text-teal border border-white/[0.07]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="bg-card rounded-md border border-white/[0.07] p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] pb-3">
              <div>
                <div className="text-teal text-[0.85rem] font-semibold">{order.id}</div>
                <div className="text-gray text-[0.72rem]">{order.date}</div>
              </div>
              <UserPill className={order.statusColor}>{order.status}</UserPill>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-1.5">
                {order.thumbs.map((thumb, index) => (
                  <div
                    key={`${order.id}-${index}`}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.07] bg-navy3 text-[1rem]"
                  >
                    {thumb}
                  </div>
                ))}
              </div>

              <div className="min-w-[170px] flex-1">
                <div className="text-[0.82rem] font-medium text-white">{order.desc}</div>
                <div className="text-gray mt-0.5 text-[0.72rem]">{order.meta}</div>
              </div>

              <div className="flex items-center gap-2">
                <div className="font-['Syne'] text-[1rem] font-bold text-white">{order.total}</div>
                <Link
                  to="/dashboard/track"
                  className="bg-teal text-navy hover:bg-teal2 rounded px-3 py-1 text-[0.74rem] font-medium no-underline"
                >
                  Track
                </Link>
                <button
                  type="button"
                  className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.74rem]"
                >
                  Reorder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
