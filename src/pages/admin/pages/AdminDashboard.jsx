import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CheckCircle,
  CreditCard,
  DollarSign,
  Package,
  Store,
  Tag,
  TrendingDown,
  TrendingUp,
  Users,
  XCircle,
} from 'lucide-react';
import DashboardStats from '../../../components/DashboardStats';
import LoadingFallback from '../../../router/components/LoadingFallback';

const iconMap = {
  DollarSign,
  Package,
  Store,
  Users,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Tag,
  CreditCard,
};

const AdminDashboard = ({ onNav }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/admin_dashboard.json');
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch dashboard data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingFallback />;
  }

  if (error) {
    return (
      <div className="flex h-64 flex-col items-center justify-center text-red">
        <XCircle size={48} className="mb-4" />
        <h2 className="text-xl font-semibold">An Error Occurred</h2>
        <p>{error}</p>
      </div>
    );
  }

  const stats = data?.stats || [];
  const recentOrders = data?.recentOrders || [];
  const activities = data?.activities || [];

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      {/* PAGE HEADER */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-syne text-[1.4rem] lg:text-[1.6rem] font-bold text-white">
            Dashboard <span className="text-teal">Overview</span>
          </h1>
          <p className="text-gray mt-1 text-[0.9rem] lg:text-[1rem]">Welcome back, Admin · {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <select className="bg-navy3 border-border text-gray2 rounded-md border px-3 py-2 text-[0.85rem] font-medium outline-none focus:border-teal transition-colors">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This month</option>
            <option>This year</option>
          </select>
          <button className="bg-teal text-navy hover:bg-teal2 rounded-md px-4 py-2 text-[0.85rem] font-semibold transition-colors">
            ⬇ Export Report
          </button>
        </div>
      </div>

      <DashboardStats stats={stats.map((s) => ({ ...s, icon: iconMap[s.icon] }))} />

      {/* CHARTS */}
      <div className="mb-6 lg:mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] mt-6">
        {/* BAR CHART */}
        <div className="bg-card border-border rounded-lg border p-5 lg:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-syne text-[1.05rem] font-bold text-white">Revenue Overview</h3>
            <div className="flex gap-1.5">
              <button className="bg-teal/10 border-teal text-teal rounded px-3 py-1 text-[0.75rem] font-medium border transition-colors">Week</button>
              <button className="border-border text-gray hover:text-teal rounded border bg-transparent px-3 py-1 text-[0.75rem] transition-colors">Month</button>
              <button className="border-border text-gray hover:text-teal rounded border bg-transparent px-3 py-1 text-[0.75rem] transition-colors">Year</button>
            </div>
          </div>
          <div className="border-border relative flex h-[160px] items-end gap-2 border-b pb-4 sm:gap-4 md:gap-6 mt-6 md:mt-10">
            {[
              { day: 'Mon', h: '60%', val: '$8.2k' },
              { day: 'Tue', h: '80%', val: '$10.9k' },
              { day: 'Wed', h: '55%', val: '$7.5k' },
              { day: 'Thu', h: '90%', val: '$12.3k' },
              { day: 'Fri', h: '100%', val: '$13.6k' },
              { day: 'Sat', h: '75%', val: '$10.2k' },
              { day: 'Sun', h: '50%', val: '$6.8k' },
            ].map((b) => (
              <div key={b.day} className="group relative flex flex-1 flex-col items-center gap-2 h-full justify-end">
                {/* Tooltip */}
                <div className="bg-teal text-navy absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-0.5 text-[0.7rem] font-bold opacity-0 transition-opacity group-hover:opacity-100 hidden sm:block">
                  {b.val}
                </div>
                <div 
                  className="w-full rounded-t-sm bg-[linear-gradient(to_top,#00A88C,#00C9A7)] transition-all duration-500 cursor-pointer hover:opacity-90"
                  style={{ height: b.h }}
                ></div>
                <div className="text-gray absolute -bottom-7 text-[0.7rem]">{b.day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DONUT CHART */}
        <div className="bg-card border-border rounded-lg border p-5 lg:p-6">
          <h3 className="font-syne mb-6 text-[1.05rem] font-bold text-white">Orders by Category</h3>
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-[140px] w-[140px]">
              <svg width="140" height="140" viewBox="0 0 120 120" className="-rotate-90 transform">
                {/* Background circle */}
                <circle cx="60" cy="60" r="48" fill="none" stroke="#1E2A3A" strokeWidth="16" />
                {/* Electronics 38% */}
                <circle cx="60" cy="60" r="48" fill="none" stroke="#00C9A7" strokeWidth="16" strokeDasharray="120 182" strokeLinecap="round" />
                {/* Fashion 22% */}
                <circle cx="60" cy="60" r="48" fill="none" stroke="#8B5CF6" strokeWidth="16" strokeDasharray="70 232" strokeDashoffset="-120" strokeLinecap="round" />
                {/* Home & Garden 16% */}
                <circle cx="60" cy="60" r="48" fill="none" stroke="#FBBF24" strokeWidth="16" strokeDasharray="50 252" strokeDashoffset="-190" strokeLinecap="round" />
                {/* Beauty 24% */}
                <circle cx="60" cy="60" r="48" fill="none" stroke="#3B82F6" strokeWidth="16" strokeDasharray="62 240" strokeDashoffset="-240" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-syne text-[1.35rem] font-extrabold text-white">1,847</div>
                <div className="text-gray text-[0.65rem]">Total Orders</div>
              </div>
            </div>

            <div className="w-full space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#00C9A7]"></div>
                <div className="text-gray flex-1 text-[0.8rem]">Electronics</div>
                <div className="text-[0.8rem] font-medium text-white">38%</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#8B5CF6]"></div>
                <div className="text-gray flex-1 text-[0.8rem]">Fashion</div>
                <div className="text-[0.8rem] font-medium text-white">22%</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#FBBF24]"></div>
                <div className="text-gray flex-1 text-[0.8rem]">Home & Garden</div>
                <div className="text-[0.8rem] font-medium text-white">16%</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]"></div>
                <div className="text-gray flex-1 text-[0.8rem]">Beauty</div>
                <div className="text-[0.8rem] font-medium text-white">24%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="mb-6 lg:mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        <div className="bg-card border-border hover:border-teal flex cursor-pointer items-center gap-3.5 rounded-lg border p-4 transition-all hover:-translate-y-0.5" onClick={() => onNav?.('merchants')}>
          <div className="flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-teal" />
          </div>
          <div>
            <div className="text-[0.95rem] font-medium text-white">Approve Merchants</div>
            <div className="text-gray text-[0.85rem]">3 pending</div>
          </div>
        </div>
        <div className="bg-card border-border hover:border-teal flex cursor-pointer items-center gap-3.5 rounded-lg border p-4 transition-all hover:-translate-y-0.5" onClick={() => onNav?.('orders')}>
          <div className="flex items-center justify-center">
            <Package className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-[0.95rem] font-medium text-white">Manage Orders</div>
            <div className="text-gray text-[0.85rem]">12 need action</div>
          </div>
        </div>
        <div className="bg-card border-border hover:border-teal flex cursor-pointer items-center gap-3.5 rounded-lg border p-4 transition-all hover:-translate-y-0.5" onClick={() => onNav?.('coupons')}>
          <div className="flex items-center justify-center">
            <Tag className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-[0.95rem] font-medium text-white">Create Coupon</div>
            <div className="text-gray text-[0.85rem]">Run promotions</div>
          </div>
        </div>
        <div className="bg-card border-border hover:border-teal flex cursor-pointer items-center gap-3.5 rounded-lg border p-4 transition-all hover:-translate-y-0.5" onClick={() => onNav?.('payouts')}>
          <div className="flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-[0.95rem] font-medium text-white">Process Payouts</div>
            <div className="text-gray text-[0.85rem]">$12,400 pending</div>
          </div>
        </div>
      </div>

      {/* RECENT ORDERS + ACTIVITY */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="bg-card border-border flex flex-col overflow-hidden rounded-lg border">
          <div className="border-border flex items-center justify-between border-b p-4 lg:px-5">
            <h3 className="font-syne text-[1.1rem] font-bold text-white">Recent Orders</h3>
            <button className="border-border text-gray2 hover:border-teal hover:text-teal rounded-md border bg-transparent px-3 py-1.5 text-[0.85rem] font-medium transition-colors" onClick={() => onNav?.('orders')}>
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead className="bg-navy3 text-gray border-border border-b text-[0.8rem] tracking-wider uppercase">
                <tr>
                  <th className="px-4 py-3.5 font-semibold lg:px-5">Order ID</th>
                  <th className="px-4 py-3.5 font-semibold lg:px-5">Customer</th>
                  <th className="px-4 py-3.5 font-semibold lg:px-5">Amount</th>
                  <th className="px-4 py-3.5 font-semibold lg:px-5">Status</th>
                  <th className="px-4 py-3.5 font-semibold lg:px-5">Date</th>
                </tr>
              </thead>
              <tbody className="divide-border divide-y">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-white/5 transition-colors">
                    <td className="text-teal px-4 py-4 font-medium lg:px-5">{order.id}</td>
                    <td className="px-4 py-4 text-white lg:px-5">{order.customer}</td>
                    <td className="px-4 py-4 font-semibold text-white lg:px-5">{order.amount}</td>
                    <td className="px-4 py-4 lg:px-5">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.75rem] font-semibold whitespace-nowrap ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="text-gray px-4 py-4 lg:px-5">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-card border-border rounded-lg border">
          <div className="p-4 lg:px-5">
            <h3 className="font-syne mb-1 text-[1.1rem] font-bold text-white">Recent Activity</h3>
          </div>
          <div className="flex flex-col px-4 pb-4 lg:px-5">
            {activities.map((activity, index) => {
              const ActivityIcon = iconMap[activity.icon] || CheckCircle;
              return (
                <div key={index} className="border-border flex items-start gap-3.5 border-b py-3.5 last:border-none">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${activity.bg}`}>
                    <ActivityIcon className="h-5 w-5 text-white opacity-90" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[0.95rem] leading-snug text-white" dangerouslySetInnerHTML={{ __html: activity.text }} />
                    <p className="text-gray mt-1 text-[0.8rem]">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
