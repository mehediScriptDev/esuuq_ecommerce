import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ArrowRight,
  DollarSign,
  Package,
  ShoppingBag,
  Star,
  TrendingUp,
  XCircle,
} from 'lucide-react';
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
      <div className="flex h-64 flex-col items-center justify-center text-red">
        <XCircle size={48} className="mb-4" />
        <h2 className="text-xl font-semibold">An Error Occurred</h2>
        <p>{error}</p>
      </div>
    );
  }

  const stats = data?.stats || [];
  const barData = data?.barData || [];
  const topProducts = data?.topProducts || [];
  const recentOrders = data?.recentOrders || [];
  const quickLinks = data?.quickLinks || [];

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <MerchantPageHeader
        title="Merchant Dashboard"
        subtitle="Welcome to your command center, TechZone MN."
      />

      <DashboardStats stats={stats.map((s) => ({ ...s, icon: iconMap[s.icon] }))} />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-card border-border rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-syne text-[1rem] font-bold text-white">Weekly Sales</h3>
                <p className="text-gray text-sm">Last 7 days performance</p>
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
                    <div className="bg-navy3 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {bar.val}
                    </div>
                  </div>
                  <div
                    className="w-full rounded-t-sm bg-teal/20 transition-colors group-hover:bg-teal"
                    style={{ height: bar.height }}
                  />
                  <div className="text-gray mt-2 text-xs">{bar.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-card border-border rounded-lg border p-6">
            <h3 className="font-syne mb-4 text-[1rem] font-bold text-white">Top Products</h3>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-white">{product.name}</span>
                    <span className="text-gray">{product.sold}</span>
                  </div>
                  <div className="bg-navy3 h-2 w-full rounded">
                    <div className={`h-2 rounded ${product.c}`} style={{ width: product.w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="font-syne mb-4 text-lg font-bold text-white">Recent Orders</h3>
          <div className="bg-card border-border overflow-x-auto rounded-lg border">
            <table className="w-full min-w-180 text-left">
              <thead className="border-border border-b">
                <tr>
                  <th className="text-gray p-4 text-sm font-semibold">Order ID</th>
                  <th className="text-gray p-4 text-sm font-semibold">Customer</th>
                  <th className="text-gray p-4 text-sm font-semibold">Product</th>
                  <th className="text-gray p-4 text-sm font-semibold">Total</th>
                  <th className="text-gray p-4 text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-border border-b last:border-none">
                    <td className="text-teal p-4 text-sm font-medium">{order.id}</td>
                    <td className="p-4 text-sm text-white">{order.customer}</td>
                    <td className="p-4 text-sm text-white">{order.product}</td>
                    <td className="p-4 text-sm text-white">{order.total}</td>
                    <td className="p-4 text-sm">
                      <MerchantPill className={order.sc}>{order.status}</MerchantPill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-syne mb-4 text-lg font-bold text-white">Quick Links</h3>
          <div className="space-y-3">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNav?.(link.id)}
                className="bg-card border-border hover:border-teal flex w-full items-center justify-between rounded-lg border p-4 text-left transition-colors"
              >
                <span className="font-semibold text-white">{link.label}</span>
                <ArrowRight size={16} className="text-gray" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
