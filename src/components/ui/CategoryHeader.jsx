import React from 'react';

const CategoryHeader = ({ title, description, className = '' }) => {
  return (
    <div className={className}>
      <h1 className="font-['Syne'] text-[1.4rem] font-bold text-white min-[640px]:text-[1.8rem]">
        {title}
      </h1>
      {description && <p className="text-gray mt-1 text-[0.82rem]">{description}</p>}
    </div>
  );
};

export default CategoryHeader;
