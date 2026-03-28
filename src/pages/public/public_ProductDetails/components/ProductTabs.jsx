import React, { useState } from 'react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'reviews', label: `Reviews (${product.reviews})` },
    { id: 'shipping', label: 'Shipping' },
  ];

  const sampleReviews = [
    {
      name: 'Ahmed K.',
      rating: 5,
      date: '2 days ago',
      text: 'Excellent quality! Exactly as described. Very comfortable.',
      initials: 'A',
    },
    {
      name: 'Rashed M.',
      rating: 4,
      date: '1 week ago',
      text: 'Good product for the price. Delivery was quick.',
      initials: 'R',
    },
    {
      name: 'Sakib H.',
      rating: 5,
      date: '2 weeks ago',
      text: 'Love it! Will definitely buy again. Highly recommended.',
      initials: 'S',
    },
  ];

  return (
    <section className="mt-10 sm:mt-12 lg:mt-16">
      <div className="flex border-b border-white/10 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-3 text-xs font-bold tracking-widest uppercase transition-all lg:px-6 lg:py-4 lg:text-sm ${
              activeTab === tab.id
                ? 'text-teal'
                : 'text-gray/40 hover:text-white'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-teal shadow-[0_-2px_6px_rgba(0,201,167,0.3)]" />
            )}
          </button>
        ))}
      </div>

      <div className="py-6 sm:py-8 lg:py-10">
        {activeTab === 'description' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
            <p className="max-w-4xl text-sm leading-relaxed text-gray2 lg:text-base">
              {product.description}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10">
              <div className="space-y-3">
                <h3 className="text-xs lg:text-sm font-bold uppercase tracking-wider text-white">Materials</h3>
                <p className="text-sm leading-relaxed text-gray/60">{product.materials}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs lg:text-sm font-bold uppercase tracking-wider text-white">Care Instructions</h3>
                <p className="text-sm leading-relaxed text-gray/60">{product.care}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8 lg:space-y-10">
            <div className="flex flex-col gap-1.5">
              <div className="font-['Syne'] text-[2.8rem] font-bold leading-none text-white lg:text-[3.5rem]">4.3</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < 4 ? 'fill-yellow text-yellow' : 'text-white/10'}
                  />
                ))}
              </div>
              <p className="text-xs lg:text-sm font-medium text-gray/40">95 reviews</p>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {sampleReviews.map((review, i) => (
                <div key={i} className="space-y-3 border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-teal/10 flex h-8 w-8 items-center justify-center rounded-xs text-[0.75rem] font-bold text-teal lg:h-9 lg:w-9 lg:text-sm">
                        {review.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white leading-none">{review.name}</span>
                        <span className="text-[0.65rem] lg:text-xs text-gray/40 font-medium mt-1">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className={j < review.rating ? 'fill-yellow text-yellow' : 'text-white/5'}
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-gray/70">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8 lg:space-y-10">
            <div className="space-y-3">
              <h3 className="text-xs lg:text-sm font-bold uppercase tracking-wider text-white">Delivery Information</h3>
              <ul className="space-y-1.5 text-sm text-gray/60 lg:space-y-2">
                <li>• Inside Dhaka: {product.shipping?.dhaka}</li>
                <li>• Outside Dhaka: {product.shipping?.outside}</li>
                <li>• Free delivery on orders over ৳{product.shipping?.free_threshold}</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs lg:text-sm font-bold uppercase tracking-wider text-white">Return Policy</h3>
              <ul className="space-y-1.5 text-sm text-gray/60 lg:space-y-2">
                <li>• 7-day easy return policy</li>
                <li>• Product must be unused and in original packaging</li>
                <li>• Refund processed within 3-5 business days</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Star = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default ProductTabs;
