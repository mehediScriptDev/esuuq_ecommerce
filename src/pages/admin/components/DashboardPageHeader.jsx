import React from 'react';

const DashboardPageHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={className}>
      <h1 className="font-['Syne'] text-[1.3rem] lg:text-[1.5rem] font-bold text-white">{title}</h1>
      <p className="text-gray text-[0.8rem] lg:text-[0.875rem] xl:text-[1rem]">{subtitle}</p>
    </div>
  );
};

export default DashboardPageHeader;
