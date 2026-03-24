import React from 'react';
import ProductCard from '../../../../components/marketplace/ProductCard';
import CountdownTimer from '../../../../components/marketplace/CountdownTimer';

const FlashDealsSection = () => {
  const products = [
    { icon: '\u{1F4F1}', name: 'Wireless Earbuds Pro Max', store: 'TechZone MN', price: '$49.99', old: '$89.99', off: '-44%', rating: '4.8', reviews: '1.2k', badge: 'SALE', wishlist: false },
    { icon: '\u{1F45F}', name: 'Urban Runner Sneakers', store: 'SoleStyle', price: '$64.99', old: '$110.00', off: '-41%', rating: '4.6', reviews: '847', badge: 'HOT', wishlist: true },
    { icon: '\u{1F576}\uFE0F', name: 'Premium Polarized Sunglasses', store: 'VisionX', price: '$28.99', old: '$59.99', off: '-52%', rating: '4.7', reviews: '523', badge: 'SALE', wishlist: false },
    { icon: '\u{1F3A7}', name: 'Studio Headphones - Deep Bass', store: 'AudioPro', price: '$79.99', old: '$149.99', off: '-47%', rating: '4.9', reviews: '2.3k', badge: 'TOP', wishlist: false },
    { icon: '\u{1F4BB}', name: 'Laptop Stand Adjustable', store: 'DeskMate', price: '$34.99', old: '$55.00', off: '-36%', rating: '4.5', reviews: '312', badge: 'NEW', wishlist: false },
    { icon: '\u{1F373}', name: 'Non-Stick Cookware Set 5pc', store: 'HomeChef', price: '$89.00', old: '$149.00', off: '-40%', rating: '4.8', reviews: '654', badge: 'SALE', wishlist: false },
  ];

  return (
    <section id="featured" className="px-3 py-8 min-[640px]:px-4 min-[900px]:px-8 min-[900px]:py-12">
      <div className="container mx-auto">
      <div className="mb-6 flex flex-col gap-3 rounded-sm border border-[rgba(255,77,77,0.25)] bg-[linear-gradient(90deg,#FF4D4D22,#FF4D4D11)] px-4 py-2.5 min-[640px]:flex-row min-[640px]:items-center min-[640px]:gap-4">
        <span className="font-['Syne'] text-[0.7rem] font-bold uppercase tracking-widest text-[#FF6B6B] min-[640px]:text-[0.8rem]">{'\u26A1'} Flash Deals</span>
        <CountdownTimer />
        <span className="text-[0.7rem] text-gray min-[640px]:ml-auto min-[640px]:text-[0.78rem]">Hurry! Limited stock</span>
      </div>

      <div className="mb-6 flex justify-between items-center gap-2 min-[640px]:flex-row min-[640px]:items-baseline min-[640px]:justify-between min-[640px]:gap-4">
        <h2 className="font-['Syne'] text-[1.1rem] font-bold text-white min-[640px]:text-[1.3rem]">Today's <span className="text-teal">Best Deals</span></h2>
        <a href="#" className="text-[0.8rem] font-medium text-teal hover:opacity-70 min-[640px]:text-[0.8rem]">See all deals {'\u2192'}</a>
      </div>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
        {products.map((product, index) => (
          <div key={index}><ProductCard product={product} inScroll={true} /></div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FlashDealsSection;
