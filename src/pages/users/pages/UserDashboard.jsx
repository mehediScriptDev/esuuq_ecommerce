import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowRight, Heart, Package, Star, Truck, XCircle } from 'lucide-react';
import UserPageHeader from '../components/UserPageHeader';
import UserPill from '../components/UserPill';
import DashboardStats from '../../../components/DashboardStats';
import LoadingFallback from '../../../router/components/LoadingFallback';

const iconMap = {
  Package,
  Truck,
  Heart,
  Star,
};

const UserDashboard = ({ onNav }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/user_dashboard.json');
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
  const wishlisted = data?.wishlisted || [];
  const quickActions = data?.quickActions || [];

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

        <button
          type="button"
          onClick={() => onNav?.('orders')}
          className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem] transition-colors"
        >
          Go to Orders <ArrowRight size={14} />
        </button>
      </div>

      <DashboardStats stats={stats.map((s) => ({ ...s, icon: iconMap[s.icon] }))} />

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
                          <img src={img} alt={`order-item-${index}`} className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>

                    <div className="min-w-42.5 flex-1">
                      <div className="text-[0.875rem] font-medium text-white lg:text-[1rem]">{order.desc}</div>
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
                <div
                  key={item.id}
                  className="group block overflow-hidden rounded border border-white/[0.07] bg-navy3 transition-all hover:border-teal/30"
                >
                  <div className="relative flex h-20 items-center justify-center overflow-hidden bg-[#0F172A]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-2">
                    <div className="truncate text-[0.875rem] font-medium text-white xl:text-[1rem]">{item.name}</div>
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
