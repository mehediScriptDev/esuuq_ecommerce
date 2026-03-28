import React, { useMemo, useState } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const sampleReviews = [
  {
    name: 'Michael Chen',
    rating: 5,
    date: 'Mar 15, 2026',
    text: 'The audio quality is excellent for this price. Great battery life and very comfortable fit.',
    initials: 'MC',
  },
  {
    name: 'Sarah Peterson',
    rating: 4,
    date: 'Mar 10, 2026',
    text: 'Solid build quality and fast shipping. The overall experience has been really smooth.',
    initials: 'SP',
  },
  {
    name: 'Alex Rivera',
    rating: 5,
    date: 'Mar 5, 2026',
    text: 'Looks premium and performs exactly as described. I would definitely buy again.',
    initials: 'AR',
  },
];

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'Details' },
    { id: 'specs', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const ratingDistribution = useMemo(() => {
    return [
      { stars: 5, value: 92 },
      { stars: 4, value: 6 },
      { stars: 3, value: 1 },
      { stars: 2, value: 1 },
      { stars: 1, value: 0 },
    ];
  }, []);

  return (
    <section className="mt-14 rounded-md border border-white/10 bg-card p-5 sm:mt-16 sm:p-6 lg:mt-20 lg:p-8">
      <div className="mb-6 flex flex-wrap gap-2.5 border-b border-white/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
              activeTab === tab.id
                ? 'bg-teal text-navy'
                : 'bg-navy2/40 text-gray2 hover:bg-white/10 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'details' && (
        <div className="space-y-7">
          <div>
            <h2 className="font-['Syne'] text-[1.55rem] font-bold text-white sm:text-[1.9rem]">Product Overview</h2>
            <p className="mt-3 max-w-4xl text-[0.95rem] leading-relaxed text-gray2 sm:text-base">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray2">Key Features</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 rounded-md border border-white/10 bg-navy2/40 p-3.5">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal" />
                  <span className="text-sm leading-relaxed text-white sm:text-[0.95rem]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'specs' && (
        <div>
          <h2 className="mb-4 font-['Syne'] text-[1.55rem] font-bold text-white sm:text-[1.9rem]">Technical Specs</h2>
          <div className="overflow-hidden rounded-md border border-white/10">
            {Object.entries(product.specs).map(([key, value], index) => (
              <div
                key={key}
                className={`grid grid-cols-1 gap-2 border-b border-white/10 px-4 py-3 sm:grid-cols-[180px_1fr] sm:items-center ${
                  index % 2 === 0 ? 'bg-navy2/40' : 'bg-card'
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gray2">{key}</span>
                <span className="text-sm text-white sm:text-[0.95rem]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-7">
          <div className="grid grid-cols-1 gap-6 rounded-md border border-white/10 bg-navy2/40 p-4 sm:grid-cols-[170px_1fr] sm:p-5">
            <div className="text-center sm:text-left">
              <p className="font-['Syne'] text-[2.2rem] font-bold leading-none text-white sm:text-[2.8rem]">
                {product.rating}
              </p>
              <div className="mt-2 flex justify-center gap-0.5 sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(product.rating) ? 'fill-yellow text-yellow' : 'text-white/20'}
                  />
                ))}
              </div>
              <p className="mt-2 text-xs uppercase tracking-wide text-gray2">
                {Number(product.reviews).toLocaleString()} reviews
              </p>
            </div>

            <div className="space-y-2.5">
              {ratingDistribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="w-3 text-xs font-semibold text-white">{row.stars}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-teal" style={{ width: `${row.value}%` }} />
                  </div>
                  <span className="w-9 text-right text-xs text-gray2">{row.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            {sampleReviews.map((review) => (
              <article key={review.name} className="rounded-md border border-white/10 bg-navy2/40 p-4 sm:p-5">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal text-sm font-bold text-navy">
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-gray2">Verified Buyer</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray2">{review.date}</p>
                </div>

                <div className="mb-2.5 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < review.rating ? 'fill-yellow text-yellow' : 'text-white/20'}
                    />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductTabs;
