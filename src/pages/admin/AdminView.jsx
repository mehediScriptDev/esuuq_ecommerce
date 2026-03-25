import React from 'react';
import AdminLayout from '../../layout/admin/AdminLayout';
import AdminDashboard from './section/AdminDashboard';
import AdminOrders from './section/AdminOrders';
import AdminProducts from './section/AdminProducts';
import AdminMerchants from './section/AdminMerchants';
import AdminCustomers from './section/AdminCustomers';
import AdminDelivery from './section/AdminDelivery';
import AdminRevenue from './section/AdminRevenue';
import AdminCoupons from './section/AdminCoupons';
import AdminSettings from './section/AdminSettings';

const PagePlaceholder = ({ title, icon }) => (
  <div className="bg-card rounded-md border border-white/[0.07] p-12 text-center">
    <div className="mb-3 text-4xl">{icon}</div>
    <div className="font-['Syne'] text-lg font-bold text-white">{title}</div>
    <div className="text-gray mt-1 text-sm">Coming soon</div>
  </div>
);

const AdminView = () => {
  return (
    <AdminLayout>
      {(activePage, handleNav) => {
        switch (activePage) {
          case 'dashboard':
            return <AdminDashboard onNav={handleNav} />;
          case 'orders':
            return <AdminOrders />;
          case 'products':
            return <AdminProducts />;
          case 'merchants':
            return <AdminMerchants />;
          case 'customers':
            return <AdminCustomers />;
          case 'delivery':
            return <AdminDelivery />;
          case 'revenue':
            return <AdminRevenue />;
          case 'coupons':
            return <AdminCoupons />;
          case 'settings':
            return <AdminSettings />;
          case 'payouts':
            return <PagePlaceholder title="Payout Management" icon="💸" />;
          case 'commission':
            return <PagePlaceholder title="Commission Config" icon="📈" />;
          case 'categories':
            return <PagePlaceholder title="Category Management" icon="📂" />;
          case 'banners':
            return <PagePlaceholder title="Banner Management" icon="🖼️" />;
          case 'analytics':
            return <PagePlaceholder title="Analytics Reports" icon="📊" />;
          default:
            return <AdminDashboard onNav={handleNav} />;
        }
      }}
    </AdminLayout>
  );
};

export default AdminView;
