import React from 'react';

const CategoryCard = ({ icon, name, itemCount, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-card border border-white/10 rounded p-6 text-center cursor-pointer transition-all hover:border-teal hover:bg-teal/5 hover:-translate-y-1"
    >
      <div className="text-4xl mb-3 mx-auto">{icon}</div>
      <h3 className="text-sm font-semibold text-white mb-1">{name}</h3>
      <p className="text-xs text-gray">{itemCount} items</p>
    </div>
  );
};

export default CategoryCard;
