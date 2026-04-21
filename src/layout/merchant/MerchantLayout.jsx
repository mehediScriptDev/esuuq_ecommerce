import React, { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
import {
  getMyMerchantOrders,
  getMyMerchantProducts,
  getMyMerchantStore,
} from '../../services/merchantService';
import { fetchCurrentUser, getCurrentUser } from '../../services/authService';

const actionButtons = [{ title: 'Notifications', icon: Bell, dot: true }];

const MerchantLayout = () => {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
  const [merchantName, setMerchantName] = useState('Merchant Account');
  const [ordersCount, setOrdersCount] = useState(0);
  const [lowStockCount, setLowStockCount] = useState(0);

  useEffect(() => {
    let active = true;

    const loadLayoutData = async () => {
      try {
        const [user, store] = await Promise.all([
          fetchCurrentUser().catch(() => getCurrentUser()),
          getMyMerchantStore(),
        ]);
        if (!active) return;

        setCurrentUser(user || getCurrentUser());
        setMerchantName(store?.storeName || 'Merchant Account');

        const [ordersResult, productsResult] = await Promise.allSettled([
          getMyMerchantOrders({ page: 1, limit: 200 }),
          getMyMerchantProducts({ page: 1, limit: 100 }),
        ]);

        if (!active) return;
        const ordersPayload = ordersResult.status === 'fulfilled' ? ordersResult.value : { data: [] };
        const productsPayload = productsResult.status === 'fulfilled' ? productsResult.value : { data: [] };
        const rows = Array.isArray(ordersPayload?.data) ? ordersPayload.data : [];
        const products = Array.isArray(productsPayload?.data) ? productsPayload.data : [];

        const actionRequiredStatuses = new Set(['confirmed', 'processing']);
        const actionRequiredOrderIds = new Set(
          rows
            .filter((item) => actionRequiredStatuses.has(String(item?.order?.status || '').toLowerCase()))
            .map((item) => item?.order?.id)
            .filter(Boolean)
        );

        const lowStock = products.filter((item) => Number(item.stock || 0) > 0 && Number(item.stock || 0) <= Number(item.lowStockAt || 10)).length;

        setOrdersCount(actionRequiredOrderIds.size);
        setLowStockCount(lowStock);
      } catch {
        if (!active) return;
        setOrdersCount(0);
        setLowStockCount(0);
      }
    };

    loadLayoutData();
    return () => {
      active = false;
    };
  }, [location.pathname]);

  const navSections = useMemo(() => [
    {
      label: 'Overview',
      items: [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', to: '/merchant' },
        {
          id: 'orders',
          icon: Package,
          label: 'Orders',
          to: '/merchant/orders',
          badge: String(ordersCount),
          badgeColor: ordersCount > 0 ? 'bg-red text-white' : 'bg-white/10 text-gray2',
        },
        { id: 'products', icon: ShoppingBag, label: 'Products', to: '/merchant/products' },
        {
          id: 'inventory',
          icon: ClipboardList,
          label: 'Inventory',
          to: '/merchant/inventory',
          badge: String(lowStockCount),
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
  ], [lowStockCount, ordersCount]);

  const headerUser = useMemo(() => {
    const firstName = String(currentUser?.firstName || '').trim();
    const lastName = String(currentUser?.lastName || '').trim();
    const name = [firstName, lastName].filter(Boolean).join(' ') || currentUser?.email || merchantName;
    const initials = `${firstName.charAt(0) || merchantName.charAt(0) || 'M'}${lastName.charAt(0) || ''}`.toUpperCase();

    return {
      initials,
      name,
      subtitle: merchantName || 'Merchant Account',
    };
  }, [currentUser, merchantName]);

  return (
    <DashboardShell
      panelLabel="Merchant"
      navSections={navSections}
      actionButtons={actionButtons}
      user={headerUser}
    >
      <Outlet />
    </DashboardShell>
  );
};

export default MerchantLayout;
