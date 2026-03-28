import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ArrowRight,
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
import DashboardPageHeader from '../components/DashboardPageHeader';
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
  const quickLinks = data?.quickLinks || [];

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <DashboardPageHeader
        title="Admin Dashboard"
        subtitle="Welcome back, Admin. Here's a summary of your marketplace."
      />

      <DashboardStats stats={stats.map((s) => ({ ...s, icon: iconMap[s.icon] }))} />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="font-syne mb-4 text-lg font-bold text-white">Recent Orders</h3>
          <div className="bg-card border-border overflow-x-auto rounded-lg border">
            <table className="w-full min-w-180 text-left">
              <thead className="border-border border-b">
                <tr>
                  <th className="text-gray p-4 text-sm font-semibold">Order ID</th>
                  <th className="text-gray p-4 text-sm font-semibold">Customer</th>
                  <th className="text-gray p-4 text-sm font-semibold">Amount</th>
                  <th className="text-gray p-4 text-sm font-semibold">Status</th>
                  <th className="text-gray p-4 text-sm font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-border border-b last:border-none">
                    <td className="text-teal p-4 text-sm font-medium">{order.id}</td>
                    <td className="p-4 text-sm text-white">{order.customer}</td>
                    <td className="p-4 text-sm text-white">{order.amount}</td>
                    <td className="p-4 text-sm">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="text-gray p-4 text-sm">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-syne mb-4 text-lg font-bold text-white">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => {
              const ActivityIcon = iconMap[activity.icon] || CheckCircle;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${activity.bg}`}
                  >
                    <ActivityIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white" dangerouslySetInnerHTML={{ __html: activity.text }} />
                    <p className="text-gray text-xs">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-syne mb-4 text-lg font-bold text-white">Quick Links</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNav?.(link.id)}
              className="bg-card border-border hover:border-teal flex items-center justify-between rounded-lg border p-4 text-left transition-colors"
            >
              <span className="font-semibold text-white">{link.label}</span>
              <ArrowRight size={16} className="text-gray" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
