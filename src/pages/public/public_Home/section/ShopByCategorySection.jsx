import React from 'react';
import CategoryCard from '../../../../components/marketplace/CategoryCard';

const ShopByCategorySection = () => {
  const categories = [
    { icon: '\u{1F4F1}', name: 'Electronics', items: '2,400', path: '/electronics' },
    { icon: '\u{1F457}', name: 'Fashion', items: '3,800', path: '/fashion' },
    { icon: '\u{1F3E1}', name: 'Home & Garden', items: '1,900', path: '/home-garden' },
    { icon: '\u{1F484}', name: 'Beauty', items: '1,200', path: '/beauty' },
    { icon: '\u{1F34E}', name: 'Grocery', items: '850', path: '/food-grocery' },
    { icon: '\u26BD', name: 'Sports', items: '1,100', path: '/sports' },
    { icon: '\u{1F4DA}', name: 'Books', items: '5,000', path: '/books' },
    { icon: '\u{1F9F8}', name: 'Toys & Kids', items: '700', path: '/toys-kids' },
    { icon: '\u{1F527}', name: 'Tools & DIY', items: '600', path: '/tools-diy' },
    { icon: '\u{1F43E}', name: 'Pet Supplies', items: '450', path: '/pet-supplies' },
    { icon: '\u{1F48A}', name: 'Health', items: '900', path: '/health' },
    { icon: '\u{1F697}', name: 'Automotive', items: '380' },
  ];

  return (
    <section className="px-3 py-8 min-[640px]:px-4 min-[900px]:px-8 min-[900px]:py-12">
      <div className="container mx-auto">
        <div className="mb-6 flex items-baseline justify-between gap-2 min-[640px]:mb-7 min-[640px]:gap-4">
          <h2 className="font-['Syne'] text-[1.1rem] font-bold text-white min-[640px]:text-[1.3rem]">
            Shop by <span className="text-teal">Category</span>
          </h2>
          <a
            href="#"
            className="text-teal text-[0.8rem] font-medium whitespace-nowrap hover:opacity-70 min-[640px]:text-[0.8rem]"
          >
            All categories {'\u2192'}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 min-[640px]:gap-3 min-[768px]:gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {categories.map((cat, index) => (
            <CategoryCard
              key={index}
              icon={cat.icon}
              name={cat.name}
              itemCount={cat.items}
              path={cat.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
