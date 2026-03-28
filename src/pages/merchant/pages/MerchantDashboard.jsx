import React from 'react';
import { DollarSign, Package, ShoppingBag, Star, TrendingUp } from 'lucide-react';
import DashboardStats from '../../../components/DashboardStats';

const stats = [
  {
    icon: DollarSign,
    bg: 'bg-teal/10',
    val: '$24,300',
    label: 'Total Revenue',
    sub: 'After 8% commission deducted',
    trend: '↑ 22%',
    up: true,
  },
  {
    icon: Package,
    bg: 'bg-purple-500/10',
    val: '648',
    label: 'Total Orders',
    sub: '5 require action',
    trend: '↑ 14%',
    up: true,
  },
  {
    icon: ShoppingBag,
    bg: 'bg-yellow/10',
    val: '248',
    label: 'Active Products',
    sub: '3 low stock alerts',
    trend: '↑ 3%',
    up: true,
  },
  {
    icon: Star,
    bg: 'bg-green-500/10',
    val: '4.9',
    label: 'Store Rating',
    sub: 'From 1,204 reviews',
    trend: '↑ 0.1',
    up: true,
  },
];
const barData = [
  { label: 'Mon', height: '55%', val: '$2.1k' },
  { label: 'Tue', height: '72%', val: '$2.8k' },
  { label: 'Wed', height: '48%', val: '$1.8k' },
  { label: 'Thu', height: '88%', val: '$3.4k' },
  { label: 'Fri', height: '100%', val: '$3.9k' },
  { label: 'Sat', height: '68%', val: '$2.6k' },
  { label: 'Sun', height: '42%', val: '$1.6k' },
];
const topProducts = [
  { name: 'Wireless Earbuds Pro', sold: '834 sold', w: '100%', c: 'bg-green-500' },
  { name: 'Studio Headphones', sold: '592 sold', w: '71%', c: 'bg-green-500' },
  { name: 'Laptop Stand', sold: '312 sold', w: '37%', c: 'bg-yellow' },
  { name: 'USB-C Hub 7-in-1', sold: '198 sold', w: '24%', c: 'bg-yellow' },
  { name: 'Phone Mount Car', sold: '142 sold', w: '17%', c: 'bg-red' },
];
const recentOrders = [
  {
    id: '#ESQ-00847',
    customer: 'Ahmed M.',
    product: 'Earbuds Pro',
    total: '$49.99',
    status: 'Delivered',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    id: '#ESQ-00845',
    customer: 'James K.',
    product: 'USB-C Hub',
    total: '$34.99',
    status: 'Processing',
    sc: 'text-blue-500 bg-blue-500/10',
  },
  {
    id: '#ESQ-00841',
    customer: 'Sara L.',
    product: 'Headphones',
    total: '$79.99',
    status: 'Shipping',
    sc: 'text-yellow bg-yellow/10',
  },
  {
    id: '#ESQ-00838',
    customer: 'Mia R.',
    product: 'Laptop Stand',
    total: '$34.99',
    status: 'Delivered',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    id: '#ESQ-00835',
    customer: 'David P.',
    product: 'Earbuds Pro',
    total: '$49.99',
    status: 'Returned',
    sc: 'text-red bg-red/10',
  },
];
const activities = [
  {
    bg: 'bg-teal/10',
    text: (
      <>
        New order <strong className="text-teal">#ESQ-00848</strong> received
      </>
    ),
    time: '2m',
  },
  {
    bg: 'bg-green-500/10',
    text: (
      <>
        Payment of <strong className="text-teal">$128.50</strong> confirmed
      </>
    ),
    time: '18m',
  },
  {
    bg: 'bg-yellow/10',
    text: (
      <>
        <strong className="text-teal">Earbuds Pro</strong> low stock — 4 left
      </>
    ),
    time: '1h',
  },
  {
    bg: 'bg-purple-500/10',
    text: (
      <>
        New 5-star review on <strong className="text-teal">Headphones</strong>
      </>
    ),
    time: '2h',
  },
  {
    bg: 'bg-red/10',
    text: (
      <>
        Return request on <strong className="text-teal">#ESQ-00835</strong>
      </>
    ),
    time: '3h',
  },
];
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);

const MerchantDashboard = ({ onNav }) => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.25rem] font-bold text-white">
          Store <span className="text-teal">Overview</span>
        </h1>
        <p className="text-gray mt-1 text-[0.78rem]">
          Welcome back, TechZone MN · Thursday, March 12, 2026
        </p>
      </div>
      <div className="flex gap-3">
        <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
        <button
          onClick={() => onNav?.('add-product')}
          className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-1.5 text-[0.8rem] font-medium"
        >
          + Add Product
        </button>
      </div>
    </div>
    {/* Stats */}
    <DashboardStats stats={stats} />
    {/* Charts Row */}
    <div className="mb-5 grid grid-cols-1 gap-4 min-[1100px]:grid-cols-[2fr_1fr]">
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">Revenue & Orders</h3>
          <div className="flex gap-1">
            {['Week', 'Month', 'Year'].map((t, i) => (
              <button
                key={t}
                className={`rounded px-3 py-1 text-[0.7rem] ${i === 0 ? 'border-teal bg-teal/10 text-teal border' : 'text-gray hover:text-teal border border-white/[0.07]'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="relative flex h-[130px] items-end gap-2 pb-6">
          <div className="absolute right-0 bottom-6 left-0 h-px bg-white/[0.07]" />
          {barData.map((b) => (
            <div key={b.label} className="group flex flex-1 flex-col items-center gap-1">
              <div
                className="from-teal2 to-teal relative w-full cursor-pointer rounded-t bg-gradient-to-t transition-all group-hover:opacity-80"
                style={{ height: b.height }}
              >
                <div className="bg-teal text-navy pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 rounded px-1.5 py-0.5 text-[0.62rem] font-bold opacity-0 transition-opacity group-hover:opacity-100">
                  {b.val}
                </div>
              </div>
              <span className="text-gray text-[0.62rem]">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 font-['Syne'] text-[0.88rem] font-bold text-white">Top Products</h3>
        <div className="space-y-3">
          {topProducts.map((p) => (
            <div key={p.name}>
              <div className="mb-1 flex justify-between text-[0.78rem]">
                <span className="text-white">{p.name}</span>
                <span className="text-teal">{p.sold}</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className={`h-full rounded-full ${p.c} transition-all`}
                  style={{ width: p.w }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Recent Orders + Activity */}
    <div className="grid grid-cols-1 gap-4 min-[1100px]:grid-cols-[1.6fr_1fr]">
      <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
          <h3 className="font-['Syne'] text-[0.85rem] font-bold text-white">Recent Orders</h3>
          <button
            onClick={() => onNav?.('orders')}
            className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.75rem]"
          >
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-navy3">
                {['Order ID', 'Customer', 'Product', 'Total', 'Status'].map((h) => (
                  <th
                    key={h}
                    className="text-gray px-4 py-2.5 text-left text-[0.68rem] font-semibold tracking-widest whitespace-nowrap uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr
                  key={o.id}
                  className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
                >
                  <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{o.id}</td>
                  <td className="px-4 py-3 text-[0.82rem] text-white">{o.customer}</td>
                  <td className="text-gray px-4 py-3 text-[0.82rem]">{o.product}</td>
                  <td className="px-4 py-3 text-[0.82rem] font-semibold text-white">{o.total}</td>
                  <td className="px-4 py-3">
                    <Pill c={o.sc}>{o.status}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 font-['Syne'] text-[0.88rem] font-bold text-white">Activity Feed</h3>
        <div className="space-y-0">
          {activities.map((a, i) => (
            <div key={i} className="flex gap-3 border-b border-white/[0.07] py-3 last:border-b-0">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${a.bg}`}
              >
                <Package size={14} />
              </div>
              <div className="flex-1 text-[0.8rem] leading-relaxed text-white">{a.text}</div>
              <span className="text-gray shrink-0 text-[0.68rem]">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default MerchantDashboard;
