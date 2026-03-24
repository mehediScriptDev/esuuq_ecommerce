import React from 'react';
import ProductCard from '../../../../components/marketplace/ProductCard';

const FeaturedProductsSection = () => {
  const products = [
    { icon: '\u{1F4F1}', name: 'Wireless Earbuds Pro Max', store: 'TechZone MN', price: '$49.99', old: '$89.99', off: '-44%', rating: '4.8', reviews: '1.2k', badge: 'SALE', wishlist: false },
    { icon: '\u{1F45F}', name: 'Urban Runner Sneakers', store: 'SoleStyle', price: '$64.99', old: '$110.00', off: '-41%', rating: '4.6', reviews: '847', badge: 'HOT', wishlist: true },
    { icon: '\u{1F576}\uFE0F', name: 'Premium Polarized Sunglasses', store: 'VisionX', price: '$28.99', old: '$59.99', off: '-52%', rating: '4.7', reviews: '523', badge: 'SALE', wishlist: false },
    { icon: '\u{1F3A7}', name: 'Studio Headphones - Deep Bass', store: 'AudioPro', price: '$79.99', old: '$149.99', off: '-47%', rating: '4.9', reviews: '2.3k', badge: 'TOP', wishlist: false },
    { icon: '\u{1F4BB}', name: 'Laptop Stand Adjustable', store: 'DeskMate', price: '$34.99', old: '$55.00', off: '-36%', rating: '4.5', reviews: '312', badge: 'NEW', wishlist: false },
    { icon: '\u{1F373}', name: 'Non-Stick Cookware Set 5pc', store: 'HomeChef', price: '$89.00', old: '$149.00', off: '-40%', rating: '4.8', reviews: '654', badge: 'SALE', wishlist: false },
    { icon: '\u{1F45C}', name: 'Leather Crossbody Bag', store: 'LuxeCarry', price: '$54.99', old: '$95.00', off: '-42%', rating: '4.7', reviews: '433', badge: 'HOT', wishlist: true },
    { icon: '\u{1F33F}', name: 'Indoor Plant Collection 3-Pack', store: 'GreenHome', price: '$39.99', old: '$65.00', off: '-38%', rating: '4.6', reviews: '218', badge: 'NEW', wishlist: false },
  ];

  return (
    <section className="container mx-auto px-4 py-12 min-[900px]:px-8">
      <div className="mb-7 flex items-baseline justify-between">
        <h2 className="font-['Syne'] text-[1.3rem] font-bold text-white">Featured <span className="text-teal">Products</span></h2>
        <a href="#" className="text-[0.8rem] font-medium text-teal hover:opacity-70">View all {'\u2192'}</a>
      </div>
      <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4">
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
