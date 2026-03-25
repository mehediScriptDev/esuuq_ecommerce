import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  ClipboardList,
  DollarSign,
  CreditCard,
  PlusCircle,
  Star,
  Tag,
  Store,
  HelpCircle,
  Bell,
} from 'lucide-react';
import DashboardShell from '../common/DashboardShell';

const navSections = [
    {
      label: 'Overview',
      items: [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', to: '/merchant' },
        {
          id: 'orders',
          icon: Package,
          label: 'Orders',
          to: '/merchant/orders',
          badge: '5',
          badgeColor: 'bg-red text-white',
        },
        { id: 'products', icon: ShoppingBag, label: 'Products', to: '/merchant/products' },
        {
          id: 'inventory',
          icon: ClipboardList,
          label: 'Inventory',
          to: '/merchant/inventory',
          badge: '3',
          badgeColor: 'bg-teal text-navy',
        },
      ],
    },
    {
      label: 'Finance',
      items: [
        { id: 'earnings', icon: DollarSign, label: 'Earnings', to: '/merchant/earnings' },
        { id: 'payouts', icon: CreditCard, label: 'Payouts', to: '/merchant/payouts' },
      ],
    },
    {
      label: 'Store',
      items: [
        { id: 'add-product', icon: PlusCircle, label: 'Add Product', to: '/merchant/add-product' },
        { id: 'reviews', icon: Star, label: 'Reviews', to: '/merchant/reviews' },
        { id: 'promotions', icon: Tag, label: 'Promotions', to: '/merchant/promotions' },
        { id: 'profile', icon: Store, label: 'Store Profile', to: '/merchant/profile' },
      ],
    },
    {
      label: 'Support',
      items: [{ id: 'support', icon: HelpCircle, label: 'Help & Support', to: '/merchant/support' }],
    },
  ];

const actionButtons = [{ title: 'Notifications', icon: Bell, dot: true }];

const MerchantLayout = () => {
  return (
    <DashboardShell
      panelLabel="Merchant"
      navSections={navSections}
      actionButtons={actionButtons}
      user={{ initials: 'T', name: 'TechZone MN', subtitle: 'Merchant Account' }}
    >
      <Outlet />
    </DashboardShell>
  );
};

export default MerchantLayout;
