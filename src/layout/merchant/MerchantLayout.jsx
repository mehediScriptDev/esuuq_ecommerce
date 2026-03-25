import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  LogOut,
  Bell,
  Globe,
  Search,
} from 'lucide-react';

const MerchantLayout = ({ children }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('dashboard');

  const navSections = [
    {
      label: 'Overview',
      items: [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        {
          id: 'orders',
          icon: Package,
          label: 'Orders',
          badge: '5',
          badgeColor: 'bg-red text-white',
        },
        { id: 'products', icon: ShoppingBag, label: 'Products' },
        {
          id: 'inventory',
          icon: ClipboardList,
          label: 'Inventory',
          badge: '3',
          badgeColor: 'bg-teal text-navy',
        },
      ],
    },
    {
      label: 'Finance',
      items: [
        { id: 'earnings', icon: DollarSign, label: 'Earnings' },
        { id: 'payouts', icon: CreditCard, label: 'Payouts' },
      ],
    },
    {
      label: 'Store',
      items: [
        { id: 'add-product', icon: PlusCircle, label: 'Add Product' },
        { id: 'reviews', icon: Star, label: 'Reviews' },
        { id: 'promotions', icon: Tag, label: 'Promotions' },
        { id: 'profile', icon: Store, label: 'Store Profile' },
      ],
    },
    {
      label: 'Support',
      items: [{ id: 'support', icon: HelpCircle, label: 'Help & Support' }],
    },
  ];

  const handleNav = (pageId) => setActivePage(pageId);

  return (
    <div className="bg-navy flex h-screen flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="z-50 flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] bg-[rgba(10,15,30,0.98)] px-6">
        <Link
          to="/"
          className="font-['Syne'] text-[1.4rem] font-extrabold tracking-tight text-white no-underline"
        >
          ES<span className="text-teal">UUQ</span>
          <sub className="text-gray ml-1 align-middle text-[0.52rem] font-normal tracking-[0.14em] uppercase">
            Merchant
          </sub>
        </Link>
        {/* Store Status removed per request */}
        <div className="flex items-center gap-3">
          <button
            className="text-gray hover:bg-teal/10 hover:text-teal relative rounded p-1.5 transition-colors"
            title="Notifications"
          >
            <Bell size={18} />
            <div className="bg-red absolute top-1 right-1 h-2 w-2 rounded-full" />
          </button>
          {/* Globe (View Store) button removed per request */}
          <div className="flex cursor-pointer items-center gap-2.5">
            <div className="from-teal text-navy flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br to-blue-500 text-[0.8rem] font-bold">
              T
            </div>
            <div className="hidden flex-col min-[700px]:flex">
              <span className="text-[0.78rem] font-medium text-white">TechZone MN</span>
              <span className="text-teal text-[0.65rem]">Merchant Account</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="scrollbar-hide hidden w-[224px] shrink-0 flex-col overflow-y-auto border-r border-white/[0.07] bg-[#0D1626] min-[700px]:flex">
          {navSections.map((section) => (
            <div key={section.label} className="px-3 pt-4 pb-2">
              <div className="text-gray mb-1.5 px-2 text-[0.6rem] font-medium tracking-[0.18em] uppercase">
                {section.label}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`mb-0.5 flex w-full items-center gap-2.5 rounded px-3 py-2 text-left font-['DM_Sans'] text-[0.82rem] transition-all ${
                      activePage === item.id
                        ? 'bg-teal/10 text-teal'
                        : 'text-gray bg-transparent hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    <Icon size={16} className="shrink-0" />
                    {item.label}
                    {item.badge && (
                      <span
                        className={`ml-auto rounded-full px-1.5 py-0 text-[0.6rem] font-bold ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
          <div className="mt-auto border-t border-white/[0.07] p-3">
            <button
              onClick={() => navigate('/')}
              className="text-red hover:bg-red/10 flex w-full items-center gap-2.5 rounded px-3 py-2 text-left font-['DM_Sans'] text-[0.82rem] transition-colors"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Main */}
        <div className="bg-navy flex-1 overflow-y-auto">
          <div className="min-h-full p-6">
            {typeof children === 'function' ? children(activePage, handleNav) : children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantLayout;
