import React from 'react';
import { ArrowRight, Heart, Package, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserPageHeader from '../components/UserPageHeader';
import UserPill from '../components/UserPill';
import DashboardStats from '../../../components/DashboardStats';

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
    images: ['https://loremflickr.com/300/300/electronics?seed=3', 'https://loremflickr.com/300/300/electronics?seed=4'],
  },
  {
    id: '#ESQ-00846',
    date: 'Placed Mar 12, 2026',
    desc: 'Urban Runner Sneakers (Size 10)',
    meta: 'Sold by SoleStyle · Express Delivery',
    total: '$64.99',
    status: 'In Transit',
    statusColor: 'text-yellow bg-yellow/10',
    images: ['https://loremflickr.com/300/300/fashion?seed=3'],
  },
  {
    id: '#ESQ-00821',
    date: 'Placed Feb 28, 2026',
    desc: 'Premium Polarized Sunglasses',
    meta: 'Sold by VisionX · Standard Delivery',
    total: '$28.99',
    status: 'Delivered',
    statusColor: 'text-green-500 bg-green-500/10',
    images: ['https://loremflickr.com/300/300/fashion?seed=4'],
  },
];

const wishlisted = [
  { id: 1, name: 'Premium Polarized Sunglasses', price: '$28.99', image: 'https://loremflickr.com/300/300/fashion?seed=4' },
  { id: 2, name: 'Laptop Stand Adjustable', price: '$34.99', image: 'https://loremflickr.com/300/300/furniture?seed=3' },
  { id: 3, name: 'Leather Crossbody Bag', price: '$54.99', image: 'https://loremflickr.com/300/300/fashion?seed=5' },
  { id: 4, name: 'Indoor Plant Collection', price: '$39.99', image: 'https://loremflickr.com/300/300/plants?seed=1' },
  { id: 5, name: 'Non-Stick Cookware Set', price: '$89.00', image: 'https://loremflickr.com/300/300/food?seed=1' },
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

      <DashboardStats stats={stats} />

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
                      <div className="text-teal text-[0.875rem] font-semibold">{order.id}</div>
                      <div className="text-gray text-[0.875rem]">{order.date}</div>
                    </div>
                    <UserPill className={order.statusColor}>{order.status}</UserPill>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex gap-1.5">
                      {order.images.map((img, index) => (
                        <div
                          key={`${order.id}-${index}`}
                          className="h-9 w-9 overflow-hidden rounded-md border border-white/[0.07]"
                        >
                          <img
                            src={img}
                            alt={`order-item-${index}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="min-w-42.5 flex-1">
                      <div className="text-[0.875rem] lg:text-[1rem] font-medium text-white">{order.desc}</div>
                      <div className="text-gray mt-0.5 text-[0.875rem]">{order.meta}</div>
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
                <div key={item.id} className="group block overflow-hidden rounded border border-white/[0.07] bg-navy3 transition-all hover:border-teal/30">
                  <div className="relative flex h-20 items-center justify-center overflow-hidden bg-[#0F172A]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-2">
                    <div className="truncate text-[0.875rem] xl:text-[1rem] font-medium text-white">{item.name}</div>
                    <div className="text-teal text-[0.875rem]">{item.price}</div>
                  </div>
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
                    <div className="text-[0.875rem] font-medium text-white">{action.label}</div>
                    <div className="text-gray text-[0.875rem]">{action.sub}</div>
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
