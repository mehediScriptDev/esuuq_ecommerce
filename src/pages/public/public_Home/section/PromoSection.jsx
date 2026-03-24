import React from 'react';
import PromoCard from '../../../../components/marketplace/PromoCard';

const PromoSection = () => {
  return (
    <section className="container mx-auto px-3 py-8 min-[640px]:px-4 min-[900px]:px-8 min-[900px]:py-12">
      <div className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-[2fr_1fr]">
        <PromoCard icon="\u{1F4F1}" tag="New Arrivals" title="Latest Electronics" subtitle="Up to 40% Off" variant="big" />
        <div className="flex flex-col gap-4">
          <PromoCard icon="\u{1F457}" tag="Fashion Week" title="Style Sale" subtitle="From $9.99" variant="small" buttonText="Explore" />
          <PromoCard icon="\u{1F381}" tag="Gift Ideas" title="Gift Bundles" subtitle="Curated sets" variant="small2" buttonText="Browse" />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
