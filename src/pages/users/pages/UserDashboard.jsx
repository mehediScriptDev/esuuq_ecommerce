import React from 'react';
import { ArrowRight, Heart, Package, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserPageHeader from '../components/UserPageHeader';
import UserPill from '../components/UserPill';

const stats = [
  {
    label: 'Total Orders',
    val: '14',
    icon: Package,
    bg: 'bg-teal/10',
  },
  {
    label: 'Total Spent',
    val: '$1,240',
    icon: Truck,
    bg: 'bg-blue-500/10',
  },
  {
    label: 'Wishlist Items',
    val: '5',
    icon: Heart,
    bg: 'bg-red/10',
  },
  {
    label: 'Avg Rating',
    val: '4.8',
    icon: Star,
    bg: 'bg-yellow/10',
  },
];

const recentOrders = [
  {
    id: '#ESQ-00847',
    date: 'Placed Mar 12, 2026',
    desc: 'Wireless Earbuds Pro + 2 more items',
    meta: 'Sold by TechZone MN · Standard Delivery',
    total: '$392.95',
    status: 'Delivered',
    statusColor: 'text-green-500 bg-green-500/10',
    thumbs: ['📱', '🎧'],
  },
  {
    id: '#ESQ-00846',
    date: 'Placed Mar 12, 2026',
    desc: 'Urban Runner Sneakers (Size 10)',
    meta: 'Sold by SoleStyle · Express Delivery',
    total: '$64.99',
    status: 'In Transit',
    statusColor: 'text-yellow bg-yellow/10',
    thumbs: ['👟'],
  },
  {
    id: '#ESQ-00821',
    date: 'Placed Feb 28, 2026',
    desc: 'Premium Polarized Sunglasses',
    meta: 'Sold by VisionX · Standard Delivery',
    total: '$28.99',
    status: 'Delivered',
    statusColor: 'text-green-500 bg-green-500/10',
    thumbs: ['🕶️'],
  },
];

const wishlisted = [
  { id: 1, name: 'Sunglasses', price: '$28.99', emoji: '🕶️' },
  { id: 2, name: 'Laptop Stand', price: '$34.99', emoji: '💻' },
  { id: 3, name: 'Crossbody Bag', price: '$54.99', emoji: '👜' },
  { id: 4, name: 'Plant Set', price: '$39.99', emoji: '🌿' },
  { id: 5, name: 'Cookware Set', price: '$89.00', emoji: '🍳' },
];

const quickActions = [
  { id: 'orders', label: 'View All Orders', sub: 'Track and manage your purchases' },
  { id: 'track', label: 'Track Current Delivery', sub: 'Live progress for active packages' },
  { id: 'addresses', label: 'Manage Addresses', sub: 'Set and update delivery locations' },
  { id: 'settings', label: 'Account Settings', sub: 'Security and notification preferences' },
];

const UserDashboard = ({ onNav }) => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <UserPageHeader
          title={
            <span>
              Account <span className="text-teal">Overview</span>
            </span>
          }
          subtitle="Welcome back, Ahmed. Here is your shopping summary."
        />
        <Link
          to="/"
          className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem] transition-colors"
        >
          Back to Store <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 min-[580px]:grid-cols-2 min-[1100px]:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="bg-card hover:border-teal/20 rounded-md border border-white/[0.07] p-5 transition-colors"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-md ${item.bg}`}>
                  <Icon size={20} className="text-teal" />
                </div>
              </div>
              <div className="font-['Syne'] text-[1.7rem] font-extrabold text-white">{item.val}</div>
              <div className="text-gray mt-1 text-[0.875rem]">{item.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 min-[1100px]:grid-cols-[1.55fr_1fr]">
        <div className="space-y-4">
          <div className="bg-card rounded-md border border-white/[0.07] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-['Syne'] text-[1rem] font-bold text-white">Recent Orders</h3>
              <button
                type="button"
                onClick={() => onNav?.('orders')}
                className="text-gray2 hover:text-teal text-[0.75rem]"
              >
                View all
              </button>
            </div>

            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-navy3 rounded-md border border-white/[0.07] p-3 transition-colors hover:border-teal/30"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-teal text-[0.82rem] font-semibold">{order.id}</div>
                      <div className="text-gray text-[0.72rem]">{order.date}</div>
                    </div>
                    <UserPill className={order.statusColor}>{order.status}</UserPill>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex gap-1.5">
                      {order.thumbs.map((thumb, index) => (
                        <div
                          key={`${order.id}-${index}`}
                          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.07] bg-white/[0.02] text-[1rem]"
                        >
                          {thumb}
                        </div>
                      ))}
                    </div>

                    <div className="min-w-[170px] flex-1">
                      <div className="text-[0.82rem] font-medium text-white">{order.desc}</div>
                      <div className="text-gray mt-0.5 text-[0.72rem]">{order.meta}</div>
                    </div>

                    <div className="ml-auto flex items-center gap-2">
                      <div className="font-['Syne'] text-[0.95rem] font-bold text-white">{order.total}</div>
                      <button
                        type="button"
                        onClick={() => onNav?.('track')}
                        className="bg-teal text-navy hover:bg-teal2 rounded px-3 py-1 text-[0.74rem] font-medium"
                      >
                        Track
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-card rounded-md border border-white/[0.07] p-5">
            <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">Recently Wishlisted</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {wishlisted.map((item) => (
                <div key={item.id} className="bg-navy3 rounded-md border border-white/[0.07] p-2.5">
                  <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-md bg-white/[0.03] text-[1.2rem]">
                    {item.emoji}
                  </div>
                  <div className="truncate text-[0.76rem] font-medium text-white">{item.name}</div>
                  <div className="text-teal text-[0.72rem]">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-md border border-white/[0.07] p-5">
            <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">Quick Actions</h3>
            <div className="space-y-2.5">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => onNav?.(action.id)}
                  className="bg-navy3 hover:border-teal flex w-full items-center justify-between rounded-md border border-white/[0.07] p-3 text-left transition-colors"
                >
                  <div>
                    <div className="text-[0.82rem] font-medium text-white">{action.label}</div>
                    <div className="text-gray text-[0.72rem]">{action.sub}</div>
                  </div>
                  <ArrowRight size={14} className="text-teal" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
