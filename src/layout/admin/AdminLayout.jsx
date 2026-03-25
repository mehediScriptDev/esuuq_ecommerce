import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  LogOut,
  Search,
  Bell,
  Mail,
  ChevronDown,
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navSections = [
    {
      label: 'Main',
      items: [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'orders', icon: Package, label: 'Orders', badge: '12', badgeColor: 'bg-red' },
        { id: 'products', icon: ShoppingBag, label: 'Products' },
        {
          id: 'merchants',
          icon: Store,
          label: 'Merchants',
          badge: '3',
          badgeColor: 'bg-teal text-navy',
        },
        { id: 'customers', icon: Users, label: 'Customers' },
        { id: 'delivery', icon: Truck, label: 'Delivery' },
      ],
    },
    {
      label: 'Finance',
      items: [
        { id: 'revenue', icon: DollarSign, label: 'Revenue' },
        { id: 'payouts', icon: CreditCard, label: 'Payouts' },
        { id: 'commission', icon: TrendingUp, label: 'Commission' },
      ],
    },
    {
      label: 'Content',
      items: [
        { id: 'categories', icon: FolderOpen, label: 'Categories' },
        { id: 'banners', icon: Image, label: 'Banners' },
        { id: 'coupons', icon: Tag, label: 'Coupons' },
      ],
    },
    {
      label: 'System',
      items: [
        { id: 'analytics', icon: BarChart3, label: 'Analytics' },
        { id: 'settings', icon: Settings, label: 'Settings' },
      ],
    },
  ];

  const handleNav = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="bg-navy flex h-screen flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="z-50 flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] bg-[rgba(10,15,30,0.98)] px-6">
        <Link
          to="/"
          className="font-['Syne'] text-[1.4rem] font-extrabold tracking-tight text-white no-underline"
        >
          ES<span className="text-teal">UUQ</span>
          <sub className="text-gray ml-1 align-middle text-[0.55rem] font-normal tracking-[0.12em] uppercase">
            Admin
          </sub>
        </Link>
        <div className="flex items-center gap-4">
          <div className="bg-navy3 focus-within:border-teal hidden items-center gap-2 rounded border border-white/[0.07] px-3 py-1.5 transition-colors min-[700px]:flex">
            <Search size={14} className="text-gray" />
            <input
              type="text"
              placeholder="Search anything..."
              className="placeholder:text-gray w-44 border-none bg-transparent text-[0.82rem] text-white outline-none"
            />
          </div>
          <button
            className="text-gray hover:bg-teal/10 hover:text-teal relative rounded p-1.5 transition-colors"
            title="Notifications"
          >
            <Bell size={18} />
            <div className="bg-red absolute top-1 right-1 h-2 w-2 rounded-full" />
          </button>
          <button
            className="text-gray hover:bg-teal/10 hover:text-teal rounded p-1.5 transition-colors"
            title="Messages"
          >
            <Mail size={18} />
          </button>
          <button
            className="text-gray hover:bg-teal/10 hover:text-teal rounded p-1.5 transition-colors"
            title="Settings"
            onClick={() => handleNav('settings')}
          >
            <Settings size={18} />
          </button>
          <div className="flex cursor-pointer items-center gap-2.5">
            <div className="from-teal text-navy flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br to-purple-500 text-[0.8rem] font-bold">
              A
            </div>
            <div className="hidden flex-col min-[700px]:flex">
              <span className="text-[0.78rem] font-medium text-white">Admin User</span>
              <span className="text-teal text-[0.65rem]">Super Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="scrollbar-hide hidden w-[220px] shrink-0 flex-col overflow-y-auto border-r border-white/[0.07] bg-[#0D1626] min-[700px]:flex">
          {navSections.map((section) => (
            <div key={section.label} className="px-3 pt-4 pb-2">
              <div className="text-gray mb-1.5 px-3 text-[0.6rem] font-medium tracking-[0.18em] uppercase">
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
                        className={`ml-auto rounded-full px-1.5 py-0 text-[0.6rem] font-bold ${item.badgeColor || 'bg-red text-white'}`}
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

        {/* Main Content */}
        <div className="bg-navy flex-1 overflow-y-auto">
          <div className="min-h-full p-6">
            {typeof children === 'function' ? children(activePage, handleNav) : children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
