import React from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Smartphone, ShoppingBag } from 'lucide-react';

const Sidebar = ({ categories, selectedCategory, mobileMenuOpen, onSelectCategory }) => {
  return (
    <div
      className={`bg-navy2 fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-white/10 pt-6 transition-transform duration-300 min-[900px]:hidden ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {categories.map((cat) => {
        const IconComponent = cat.icon;
        return (
          <Link
            key={cat.id}
            to={cat.path}
            onClick={() => onSelectCategory(cat)}
            className={`mt-4 flex w-full items-center gap-3 border-l-4 px-4 py-3 text-[0.9rem] tracking-[0.04em] no-underline transition-colors ${
              selectedCategory === cat.name
                ? 'border-teal text-teal bg-[rgba(0,201,167,0.1)]'
                : 'text-gray2 hover:text-teal border-transparent hover:bg-[rgba(0,201,167,0.05)]'
            }`}
          >
            <IconComponent size={20} />
            {cat.name}
          </Link>
        );
      })}

      <div className="mx-4 my-6 h-px bg-white/10" />
      <div className="text-gray mb-2 px-6 text-[0.65rem] font-bold tracking-widest uppercase">
        Account & Portals
      </div>

      {[
        { path: '/login', name: 'Sign In / register', icon: User, color: 'text-teal' },
        { path: '/dashboard', name: 'My Dashboard', icon: Package, color: 'text-white' },
        { path: '/admin', name: 'Admin Portal', icon: Smartphone, color: 'text-white' },
        { path: '/merchant', name: 'Merchant Portal', icon: ShoppingBag, color: 'text-white' },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => onSelectCategory({ path: item.path })}
            className={`hover:bg-teal/5 flex w-full items-center gap-3 px-6 py-3 text-[0.85rem] no-underline transition-colors ${item.color}`}
          >
            <Icon size={18} />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
