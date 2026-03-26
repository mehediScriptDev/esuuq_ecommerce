import React from 'react';
import {
  DollarSign,
  Package,
  Store,
  Users,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Tag,
  CreditCard,
  ArrowRight,
} from 'lucide-react';
import DashboardPageHeader from '../components/DashboardPageHeader';
import AdminStats from '../components/AdminStats';

const stats = [
  {
    icon: DollarSign,
    iconBg: 'bg-teal/10',
    label: 'Total Revenue (Month)',
    val: '$84,320',
    trend: '↑ 18.4%',
    up: true,
  },
  {
    icon: Package,
    iconBg: 'bg-purple-500/10',
    label: 'Total Orders',
    val: '1,847',
    trend: '↑ 12.1%',
    up: true,
  },
  {
    icon: Store,
    iconBg: 'bg-yellow/10',
    label: 'Active Merchants',
    val: '312',
    trend: '↑ 5.3%',
    up: true,
  },
  {
    icon: Users,
    iconBg: 'bg-red/10',
    label: 'Total Customers',
    val: '24,580',
    trend: '↓ 2.1%',
    up: false,
  },
];

const recentOrders = [
  {
    id: '#ESQ-00847',
    customer: 'Ahmed M.',
    amount: '$392.95',
    status: 'Delivered',
    statusColor: 'text-green-500 bg-green-500/10',
    date: 'Mar 12',
  },
  {
    id: '#ESQ-00846',
    customer: 'Fatima O.',
    amount: '$124.50',
    status: 'Shipping',
    statusColor: 'text-yellow bg-yellow/10',
    date: 'Mar 12',
  },
  {
    id: '#ESQ-00845',
    customer: 'James K.',
    amount: '$89.00',
    status: 'Processing',
    statusColor: 'text-blue-500 bg-blue-500/10',
    date: 'Mar 11',
  },
  {
    id: '#ESQ-00844',
    customer: 'Sara L.',
    amount: '$214.99',
    status: 'Delivered',
    statusColor: 'text-green-500 bg-green-500/10',
    date: 'Mar 11',
  },
  {
    id: '#ESQ-00843',
    customer: 'David P.',
    amount: '$49.99',
    status: 'Cancelled',
    statusColor: 'text-red bg-red/10',
    date: 'Mar 10',
  },
];

const activities = [
  {
    icon: Store,
    bg: 'bg-teal/10',
    text: (
      <>
        <strong className="text-teal">TechZone MN</strong> approved as merchant
      </>
    ),
    time: '2m ago',
  },
  {
    icon: Package,
    bg: 'bg-red/10',
    text: (
      <>
        Order <strong className="text-teal">#ESQ-00843</strong> cancelled by customer
      </>
    ),
    time: '18m ago',
  },
  {
    icon: DollarSign,
    bg: 'bg-green-500/10',
    text: (
      <>
        Payout of <strong className="text-teal">$4,200</strong> processed to SoleStyle
      </>
    ),
    time: '1h ago',
  },
  {
    icon: Store,
    bg: 'bg-yellow/10',
    text: (
      <>
        <strong className="text-teal">AudioPro</strong> low stock alert on 3 items
      </>
    ),
    time: '2h ago',
  },
  {
    icon: Users,
    bg: 'bg-purple-500/10',
    text: (
      <>
        <strong className="text-teal">128 new customers</strong> registered today
      </>
    ),
    time: '3h ago',
  },
];

const quickActions = [
  { icon: CheckCircle, label: 'Approve Merchants', sub: '3 pending', page: 'merchants' },
  { icon: Package, label: 'Manage Orders', sub: '12 need action', page: 'orders' },
  { icon: Tag, label: 'Create Coupon', sub: 'Run promotions', page: 'coupons' },
  { icon: CreditCard, label: 'Process Payouts', sub: '$12,400 pending', page: 'payouts' },
];

const barData = [
  { label: 'Mon', height: '60%', val: '$8.2k' },
  { label: 'Tue', height: '80%', val: '$10.9k' },
  { label: 'Wed', height: '55%', val: '$7.5k' },
  { label: 'Thu', height: '90%', val: '$12.3k' },
  { label: 'Fri', height: '100%', val: '$13.6k' },
  { label: 'Sat', height: '75%', val: '$10.2k' },
  { label: 'Sun', height: '50%', val: '$6.8k' },
];

const AdminDashboard = ({ onNav }) => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    {/* Header */}
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <DashboardPageHeader
        title={
          <>
            Dashboard <span className="text-teal">Overview</span>
          </>
        }
        subtitle="Welcome back, Admin · Thursday, March 12, 2026"
      />
      <div className="flex gap-3">
        <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>This month</option>
          <option>This year</option>
        </select>
        <button className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-1.5 text-[0.8rem] font-medium transition-colors">
          ⬇ Export Report
        </button>
      </div>
    </div>

    {/* Stats */}
    <AdminStats stats={stats} />

    {/* Charts Row */}
    <div className="mb-6 grid grid-cols-1 gap-4 min-[1100px]:grid-cols-[2fr_1fr]">
      {/* Bar Chart */}
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-['Syne'] text-[0.88rem] xl:text-[1rem] font-bold text-white">Revenue Overview</h3>
          <div className="flex gap-1">
            {['Week', 'Month', 'Year'].map((t, i) => (
              <button
                key={t}
                className={`rounded px-3 py-1 text-[0.72rem] transition-all ${i === 0 ? 'border-teal bg-teal/10 text-teal border' : 'text-gray hover:text-teal border border-white/[0.07]'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="relative flex h-35 items-end gap-2 pb-6">
          <div className="absolute right-0 bottom-6 left-0 h-px bg-white/[0.07]" />
          {barData.map((b) => (
            <div key={b.label} className="group flex flex-1 flex-col items-center gap-1">
              <div
                className="from-teal2 to-teal relative w-full cursor-pointer rounded-t bg-linear-to-t transition-all group-hover:opacity-80"
                style={{ height: b.height }}
              >
                <div className="bg-teal text-navy pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 rounded px-1.5 py-0.5 text-[0.62rem] font-bold opacity-0 transition-opacity group-hover:opacity-100">
                  {b.val}
                </div>
              </div>
              <span className="text-gray text-[0.65rem]">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Donut Chart (simplified) */}
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 font-['Syne'] text-[0.88rem] xl:text-[1rem] font-bold text-white">
          Orders by Category
        </h3>
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex h-30 w-30 items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="var(--color-navy3,#1E2A3A)"
                strokeWidth="16"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="var(--color-teal,#00C9A7)"
                strokeWidth="16"
                strokeDasharray="120 182"
                strokeLinecap="round"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="16"
                strokeDasharray="70 232"
                strokeDashoffset="-120"
                strokeLinecap="round"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="#FBBF24"
                strokeWidth="16"
                strokeDasharray="50 252"
                strokeDashoffset="-190"
                strokeLinecap="round"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="16"
                strokeDasharray="62 240"
                strokeDashoffset="-240"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="font-['Syne'] text-[1.1rem] font-extrabold text-white">1,847</div>
              <div className="text-gray text-[0.62rem]">Total Orders</div>
            </div>
          </div>
          <div className="w-full space-y-2">
            {[
              { name: 'Electronics', pct: '38%', color: 'bg-teal' },
              { name: 'Fashion', pct: '22%', color: 'bg-purple-500' },
              { name: 'Home & Garden', pct: '16%', color: 'bg-yellow' },
              { name: 'Beauty', pct: '24%', color: 'bg-blue-500' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className={`h-2 w-2 shrink-0 rounded-full ${item.color}`} />
                <span className="text-gray flex-1 text-[0.75rem] lg:text-[0.875rem]">{item.name}</span>
                <span className="text-[0.75rem] font-medium text-white">{item.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="mb-6 grid grid-cols-1 gap-3 min-[580px]:grid-cols-2 min-[1100px]:grid-cols-4">
      {quickActions.map((qa) => {
        const Icon = qa.icon;
        return (
          <button
            key={qa.label}
            onClick={() => onNav?.(qa.page)}
            className="bg-card hover:border-teal flex items-center gap-3 rounded-md border border-white/[0.07] p-4 text-left transition-all hover:-translate-y-0.5"
          >
            <Icon size={24} className="text-teal" />
            <div>
              <div className="text-[0.8rem] xl:text-[0.875rem] font-medium text-white">{qa.label}</div>
              <div className="text-gray text-[0.7rem] xl:text-[0.8rem]">{qa.sub}</div>
            </div>
          </button>
        );
      })}
    </div>

    {/* Recent Orders + Activity */}
    <div className="grid grid-cols-1 gap-4 min-[1100px]:grid-cols-[1.6fr_1fr]">
      {/* Recent Orders Table */}
      <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
          <h3 className="font-['Syne'] text-[0.88rem] xl:text-[1rem] font-bold text-white">Recent Orders</h3>
          <button
            onClick={() => onNav?.('orders')}
            className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.75rem] transition-colors"
          >
            View All
          </button>
        </div>
        <div className="space-y-3 p-4 md:hidden">
          {recentOrders.map((o) => (
            <div key={o.id} className="bg-navy3 rounded-md border border-white/[0.07] p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="text-teal text-[0.82rem] font-medium">{o.id}</div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${o.statusColor}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {o.status}
                </span>
              </div>
              <div className="space-y-1 text-[0.76rem]">
                <div className="text-gray">Customer: <span className="text-white">{o.customer}</span></div>
                <div className="text-gray">Amount: <span className="text-white font-semibold">{o.amount}</span></div>
                <div className="text-gray">Date: <span className="text-white">{o.date}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-navy3">
                <th className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest uppercase">
                  Order ID
                </th>
                <th className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest uppercase">
                  Customer
                </th>
                <th className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest uppercase">
                  Amount
                </th>
                <th className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest uppercase">
                  Status
                </th>
                <th className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest uppercase">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr
                  key={o.id}
                  className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/2"
                >
                  <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{o.id}</td>
                  <td className="px-4 py-3 text-[0.82rem] text-white">{o.customer}</td>
                  <td className="px-4 py-3 text-[0.82rem] font-semibold text-white">{o.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${o.statusColor}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {o.status}
                    </span>
                  </td>
                  <td className="text-gray px-4 py-3 text-[0.82rem]">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 font-['Syne'] text-[0.88rem] xl:text-[1rem] font-bold text-white">Recent Activity</h3>
        <div className="space-y-0">
          {activities.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="flex gap-3 border-b border-white/[0.07] py-3 last:border-b-0">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${a.bg}`}
                >
                  <Icon size={14} />
                </div>
                <div className="flex-1 text-[0.82rem] leading-relaxed text-white">{a.text}</div>
                <span className="text-gray shrink-0 text-[0.7rem]">{a.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
