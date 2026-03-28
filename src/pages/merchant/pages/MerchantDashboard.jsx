import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DollarSign, Package, ShoppingBag, Star, TrendingUp, XCircle, ArrowRight } from 'lucide-react';
import DashboardStats from '../../../components/DashboardStats';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';
import LoadingFallback from '../../../router/components/LoadingFallback';

const iconMap = {
  DollarSign,
  Package,
  ShoppingBag,
  Star,
};

const MerchantDashboard = ({ onNav }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/merchant_dashboard.json');
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
      <div className="flex flex-col items-center justify-center h-64 text-red-500">
        <XCircle size={48} className="mb-4" />
        <h2 className="text-xl font-semibold">An Error Occurred</h2>
        <p>{error}</p>
      </div>
    );
  }

  const { stats, barData, topProducts, recentOrders, quickLinks } = data;

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <MerchantPageHeader
        title="Merchant Dashboard"
        subtitle="Welcome to your command center, TechZone MN."
      />

      <DashboardStats stats={stats.map(s => ({...s, icon: iconMap[s.icon]}))} />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Sales Chart */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white font-syne">Weekly Sales</h3>
                <p className="text-sm text-gray-400">Last 7 days performance</p>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-green-500">
                <TrendingUp size={16} />
                <span>+18%</span>
              </div>
            </div>
            <div className="mt-8 flex h-48 items-end justify-between gap-2">
              {barData.map((bar) => (
                <div key={bar.label} className="group flex flex-1 flex-col items-center">
                  <div className="relative mb-1">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 rounded bg-navy-3 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100">
                      {bar.val}
                    </div>
                  </div>
                  <div
                    className="w-full rounded-t-sm bg-teal/20 transition-all group-hover:bg-teal"
                    style={{ height: bar.height }}
                  />
                  <div className="mt-2 text-xs text-gray-400">{bar.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4 font-bold text-white font-syne">Top Products</h3>
            <div className="space-y-4">
              {topProducts.map((prod) => (
                <div key={prod.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-white">{prod.name}</span>
                    <span className="text-gray-400">{prod.sold}</span>
                  </div>
                  <div className="h-2 w-full rounded bg-navy-3">
                    <div className={`h-2 rounded ${prod.c}`} style={{ width: prod.w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-lg font-bold text-white font-syne">Recent Orders</h3>
          <div className="bg-card border border-border rounded-lg">
            <table className="w-full text-left">
              <thead className="border-b border-border">
                <tr>
                  <th className="p-4 text-sm font-semibold text-gray-400">Order ID</th>
                  <th className="p-4 text-sm font-semibold text-gray-400">Customer</th>
                  <th className="p-4 text-sm font-semibold text-gray-400">Product</th>
                  <th className="p-4 text-sm font-semibold text-gray-400">Total</th>
                  <th className="p-4 text-sm font-semibold text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-none">
                    <td className="p-4 text-sm font-medium text-teal">{order.id}</td>
                    <td className="p-4 text-sm text-white">{order.customer}</td>
                    <td className="p-4 text-sm text-white">{order.product}</td>
                    <td className="p-4 text-sm text-white">{order.total}</td>
                    <td className="p-4 text-sm">
                      <MerchantPill label={order.status} className={order.sc} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white font-syne">Quick Links</h3>
          <div className="space-y-3">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNav(link.id)}
                className="flex w-full items-center justify-between rounded-lg bg-card p-4 text-left border border-border hover:border-teal transition-colors"
              >
                <span className="font-semibold text-white">{link.label}</span>
                <ArrowRight size={16} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
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
  <MerchantPill className={c}>{children}</MerchantPill>
);

const MerchantDashboard = ({ onNav }) => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <MerchantPageHeader
        title={
          <span>
            Store <span className="text-teal">Overview</span>
          </span>
        }
        subtitle="Welcome back, TechZone MN · Thursday, March 12, 2026"
      />
      <div className="flex gap-3">
        <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-3 py-1.5 text-[0.8rem] outline-none">
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
          <h3 className="font-['Syne'] text-[1rem] font-bold text-white">Revenue & Orders</h3>
          <div className="flex gap-1">
            {['Week', 'Month', 'Year'].map((t, i) => (
              <button
                key={t}
                className={`rounded px-3 py-1 text-[0.75rem] ${i === 0 ? 'border-teal bg-teal/10 text-teal border' : 'text-gray hover:text-teal border border-white/[0.07]'}`}
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
        <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">Top Products</h3>
        <div className="space-y-3">
          {topProducts.map((p) => (
            <div key={p.name}>
              <div className="mb-1 flex justify-between text-[0.875rem]">
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
          <h3 className="font-['Syne'] text-[1rem] font-bold text-white">Recent Orders</h3>
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
                    className="text-gray px-4 py-2.5 text-left text-[0.75rem] font-semibold tracking-widest whitespace-nowrap uppercase"
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
                  <td className="text-teal px-4 py-3 text-[0.875rem] font-medium">{o.id}</td>
                  <td className="px-4 py-3 text-[0.875rem] text-white">{o.customer}</td>
                  <td className="text-gray px-4 py-3 text-[0.875rem]">{o.product}</td>
                  <td className="px-4 py-3 text-[0.875rem] font-semibold text-white">{o.total}</td>
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
        <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">Activity Feed</h3>
        <div className="space-y-0">
          {activities.map((a, i) => (
            <div key={i} className="flex gap-3 border-b border-white/[0.07] py-3 last:border-b-0">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${a.bg}`}
              >
                <Package size={14} />
              </div>
              <div className="flex-1 text-[0.875rem] leading-relaxed text-white">{a.text}</div>
              <span className="text-gray shrink-0 text-[0.68rem]">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default MerchantDashboard;
