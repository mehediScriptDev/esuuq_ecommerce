import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Bell,
  ChartNoAxesColumn,
  FileBarChart,
  Flag,
  MessageCircle,
  Scale,
  Star,
  Store,
  Ticket,
  Users,
  UserRoundCog,
} from 'lucide-react';
import DashboardShell from '../common/DashboardShell';

const navSections = [
  {
    label: 'Moderation',
    items: [
      { id: 'dashboard', icon: ChartNoAxesColumn, label: 'Dashboard', to: '/subadmin' },
      {
        id: 'support-tickets',
        icon: Ticket,
        label: 'Support Tickets',
        to: '/subadmin/support-tickets',
        badge: '12',
        badgeColor: 'bg-red text-white',
      },
      {
        id: 'review-moderation',
        icon: Star,
        label: 'Review Moderation',
        to: '/subadmin/review-moderation',
        badge: '5',
        badgeColor: 'bg-yellow text-navy',
      },
      {
        id: 'flagged-content',
        icon: Flag,
        label: 'Flagged Content',
        to: '/subadmin/flagged-content',
        badge: '3',
        badgeColor: 'bg-red text-white',
      },
      {
        id: 'merchant-approvals',
        icon: Store,
        label: 'Merchant Approvals',
        to: '/subadmin/merchant-approvals',
        badge: '7',
        badgeColor: 'bg-yellow text-navy',
      },
    ],
  },
  {
    label: 'Monitoring',
    items: [
      { id: 'user-management', icon: UserRoundCog, label: 'User Management', to: '/subadmin/user-management' },
      { id: 'order-disputes', icon: Scale, label: 'Order Disputes', to: '/subadmin/order-disputes' },
    //   { id: 'customer-messages', icon: MessageCircle, label: 'Customer Messages', to: '/subadmin/customer-messages' },
    ],
  },
  {
    label: 'Reports',
    items: [
      { id: 'activity-log', icon: Users, label: 'Activity Log', to: '/subadmin/activity-log' },
      { id: 'my-reports', icon: FileBarChart, label: 'My Reports', to: '/subadmin/my-reports' },
    ],
  },
];

const actionButtons = [{ title: 'Notifications', icon: Bell, dot: true }];

const SubAdminLayout = () => {
  return (
    <DashboardShell
      panelLabel="Sub-Admin"
      navSections={navSections}
      actionButtons={actionButtons}
      user={{ initials: 'FA', name: 'Fatima A.', subtitle: 'Sub-Admin' }}
    >
      <Outlet />
    </DashboardShell>
  );
};

export default SubAdminLayout;
