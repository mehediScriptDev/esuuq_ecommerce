import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Store,
  Users,
  Truck,
  DollarSign,
  CreditCard,
  TrendingUp,
  FolderOpen,
  Image,
  Tag,
  BarChart3,
  Settings,
  Bell,
} from 'lucide-react';
import DashboardShell from '../common/DashboardShell';

const navSections = [
    {
      label: 'Main',
      items: [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', to: '/admin' },
        { id: 'orders', icon: Package, label: 'Orders', to: '/admin/orders', badge: '12', badgeColor: 'bg-red' },
        { id: 'products', icon: ShoppingBag, label: 'Products', to: '/admin/products' },
        {
          id: 'merchants',
          icon: Store,
          label: 'Merchants',
          to: '/admin/merchants',
          badge: '3',
          badgeColor: 'bg-teal text-navy',
        },
        { id: 'customers', icon: Users, label: 'Customers', to: '/admin/customers' },
        { id: 'delivery', icon: Truck, label: 'Delivery', to: '/admin/delivery' },
      ],
    },
    {
      label: 'Finance',
      items: [
        { id: 'revenue', icon: DollarSign, label: 'Revenue', to: '/admin/revenue' },
        // { id: 'payouts', icon: CreditCard, label: 'Payouts', to: '/admin/payouts' },
        // { id: 'commission', icon: TrendingUp, label: 'Commission', to: '/admin/commission' },
      ],
    },
    {
      label: 'Content',
      items: [
        // { id: 'categories', icon: FolderOpen, label: 'Categories', to: '/admin/categories' },
        // { id: 'banners', icon: Image, label: 'Banners', to: '/admin/banners' },
        { id: 'coupons', icon: Tag, label: 'Coupons', to: '/admin/coupons' },
      ],
    },
    {
      label: 'System',
      items: [
        // { id: 'analytics', icon: BarChart3, label: 'Analytics', to: '/admin/analytics' },
        { id: 'settings', icon: Settings, label: 'Settings', to: '/admin/settings' },
      ],
    },
  ];

const actionButtons = [
  { title: 'Notifications', icon: Bell, dot: true },
];

const AdminLayout = () => {
  return (
    <DashboardShell
      panelLabel="Admin"
      navSections={navSections}
      actionButtons={actionButtons}
      user={{ initials: 'A', name: 'Admin User', subtitle: 'Super Admin' }}
    >
      <Outlet />
    </DashboardShell>
  );
};

export default AdminLayout;