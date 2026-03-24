import React from 'react';

const Sidebar = ({ categories, selectedCategory, mobileMenuOpen, onSelectCategory }) => {
  return (
    <div
      className={`pt-6 fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-white/10 bg-navy2 transition-transform duration-300 min-[900px]:hidden ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {categories.map((cat) => {
        const IconComponent = cat.icon;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.name)}
            className={`mt-4 flex w-full items-center gap-3 border-l-4 px-4 py-3 text-[0.9rem] tracking-[0.04em] transition-colors ${
              selectedCategory === cat.name
                ? 'border-teal bg-[rgba(0,201,167,0.1)] text-teal'
                : 'border-transparent text-gray2 hover:bg-[rgba(0,201,167,0.05)] hover:text-teal'
            }`}
          >
            <IconComponent size={20} />
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;