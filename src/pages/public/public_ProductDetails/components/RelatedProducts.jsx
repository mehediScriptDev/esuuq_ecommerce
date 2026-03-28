import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../../components/marketplace/ProductCard';

const toCardProduct = (item) => ({
  name: item.name,
  store: item.store,
  price: `$${Number(item.price).toFixed(2)}`,
  old: `$${Number(item.oldPrice).toFixed(2)}`,
  image: item.images?.[0] || '',
  rating: item.rating,
  reviews: item.reviews,
  badge: item.off >= 40 ? 'HOT' : '',
});

const RelatedProducts = ({ items = [] }) => {
  return (
    <section className="mt-14 sm:mt-16 lg:mt-20">
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <h2 className="font-['Syne'] text-[1.55rem] font-bold text-white sm:text-[1.9rem]">You May Also Like</h2>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-teal transition-colors hover:text-teal2 sm:text-sm"
        >
          View More <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {items.map((item) => (
          <ProductCard key={item.id} product={toCardProduct(item)} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
