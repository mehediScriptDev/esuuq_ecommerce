import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Bell,
  Home,
  Package,
  Truck,
  Heart,
  User,
  MapPin,
  CreditCard,
  Settings,
} from 'lucide-react';
import DashboardShell from '../common/DashboardShell';

const navSections = [
  {
    label: 'Shopping',
    items: [
      { id: 'overview', icon: Home, label: 'Overview', to: '/dashboard' },
      {
        id: 'orders',
        icon: Package,
        label: 'My Orders',
        to: '/dashboard/orders',
        badge: '2',
        badgeColor: 'bg-red text-white',
      },
      { id: 'track', icon: Truck, label: 'Track Order', to: '/dashboard/track' },
      {
        id: 'wishlist',
        icon: Heart,
        label: 'Wishlist',
        to: '/dashboard/wishlist',
        badge: '5',
        badgeColor: 'bg-blue-500 text-white',
      },
    ],
  },
  {
    label: 'Account',
    items: [
      { id: 'profile', icon: User, label: 'Profile', to: '/dashboard/profile' },
      { id: 'addresses', icon: MapPin, label: 'Addresses', to: '/dashboard/addresses' },
      {
        id: 'payments',
        icon: CreditCard,
        label: 'Payment Methods',
        to: '/dashboard/payments',
      },
      { id: 'settings', icon: Settings, label: 'Settings', to: '/dashboard/settings' },
    ],
  },
];

const actionButtons = [{ title: 'Notifications', icon: Bell, dot: true }];

const UserLayout = () => {
  return (
    <DashboardShell
      panelLabel="User"
      navSections={navSections}
      actionButtons={actionButtons}
      user={{ initials: 'A', name: 'Ahmed Mohamed', subtitle: 'Verified Member' }}
    >
      <Outlet />
    </DashboardShell>
  );
};

export default UserLayout;
