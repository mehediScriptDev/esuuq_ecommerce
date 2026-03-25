import React from 'react';
import { Link } from 'react-router-dom';

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
    </div>
  );
};

export default Sidebar;
