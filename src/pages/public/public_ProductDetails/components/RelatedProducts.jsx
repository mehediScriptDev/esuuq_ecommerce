import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../../components/marketplace/ProductCard';

const toCardProduct = (item) => ({
  name: item.name,
  store: item.store || 'Sneaker Hub',
  price: `৳${Number(item.price).toLocaleString()}`,
  old: `৳${Number(item.oldPrice).toLocaleString()}`,
  image: item.images?.[0] || '/img/products/sneaker-black.png',
  rating: item.rating || 4.5,
  reviews: item.reviews || 95,
  badge: item.off ? `-${item.off}%` : '',
});

const RelatedProducts = ({ items = [] }) => {
  return (
    <section className="mt-16 sm:mt-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-['Syne'] text-2xl font-bold text-white sm:text-3xl">Related Products</h2>
        <Link
          to="/"
          className="text-gray/40 hover:text-white transition-colors text-[0.7rem] font-bold uppercase tracking-widest flex items-center gap-1"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} product={toCardProduct(item)} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
