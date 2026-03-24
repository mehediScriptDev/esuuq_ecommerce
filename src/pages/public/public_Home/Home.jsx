import React from 'react';
import ProductCard from '../../../components/marketplace/ProductCard';
import CategoryCard from '../../../components/marketplace/CategoryCard';
import PromoCard from '../../../components/marketplace/PromoCard';
import TrustStrip from '../../../components/marketplace/TrustStrip';
import CountdownTimer from '../../../components/marketplace/CountdownTimer';

const Home = () => {
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

  const categories = [
    { icon: '\u{1F4F1}', name: 'Electronics', items: '2,400' },
    { icon: '\u{1F457}', name: 'Fashion', items: '3,800' },
    { icon: '\u{1F3E1}', name: 'Home & Garden', items: '1,900' },
    { icon: '\u{1F484}', name: 'Beauty', items: '1,200' },
    { icon: '\u{1F34E}', name: 'Grocery', items: '850' },
    { icon: '\u26BD', name: 'Sports', items: '1,100' },
    { icon: '\u{1F4DA}', name: 'Books', items: '5,000' },
    { icon: '\u{1F9F8}', name: 'Toys & Kids', items: '700' },
    { icon: '\u{1F527}', name: 'Tools & DIY', items: '600' },
    { icon: '\u{1F43E}', name: 'Pet Supplies', items: '450' },
    { icon: '\u{1F48A}', name: 'Health', items: '900' },
    { icon: '\u{1F697}', name: 'Automotive', items: '380' },
  ];

  return (
    <>
      <section className="relative min-h-[420px] overflow-hidden bg-[linear-gradient(120deg,#0A1628_0%,#0D2137_40%,#091520_100%)] px-4 py-12 min-[900px]:px-8 min-[900px]:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-8 [background-image:radial-gradient(circle_at_20%_50%,var(--color-teal)_0%,transparent_40%),radial-gradient(circle_at_80%_20%,#3B82F6_0%,transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-4 [background-image:radial-gradient(circle,var(--color-white)_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="container relative z-10 mx-auto grid items-center gap-8 min-[900px]:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-[2px] border border-[rgba(0,201,167,0.3)] bg-[rgba(0,201,167,0.12)] px-4 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-teal">
              {'\u26A1'} New Marketplace {'\u2014'} Now Open
            </div>
            <h1 className="font-['Syne'] text-[clamp(2.4rem,4vw,3.6rem)] font-extrabold leading-[1.1] text-white">
              Shop <span className="text-teal">Everything</span>
              <br />
              Delivered to
              <br />
              Your Door
            </h1>
            <p className="mt-4 max-w-[420px] text-base leading-[1.7] text-gray">
              Thousands of products from verified local and global merchants {'\u2014'} all in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#featured" className="inline-block bg-teal px-8 py-3 text-[0.85rem] font-medium tracking-[0.06em] text-navy transition hover:bg-teal2">Shop Now</a>
              <a href="#merchants" className="inline-block border border-white/20 px-8 py-3 text-[0.85rem] text-white transition hover:border-teal hover:text-teal">Sell on ESUUQ</a>
            </div>
            <div className="mt-8 flex gap-8">
              <div><div className="font-['Syne'] text-[1.4rem] font-bold text-white">500+</div><div className="text-[0.72rem] text-gray">Merchants</div></div>
              <div><div className="font-['Syne'] text-[1.4rem] font-bold text-white">10K+</div><div className="text-[0.72rem] text-gray">Products</div></div>
              <div><div className="font-['Syne'] text-[1.4rem] font-bold text-white">4.8{'\u2605'}</div><div className="text-[0.72rem] text-gray">Avg Rating</div></div>
            </div>
          </div>

          <div className="hidden grid-cols-2 gap-4 min-[900px]:grid">
            <div className="col-span-2 flex items-center gap-4 rounded-[4px] border border-[rgba(0,201,167,0.2)] bg-[rgba(0,201,167,0.07)] p-5">
              <div className="text-3xl">{'\u26A1'}</div>
              <div>
                <div className="text-[0.82rem] font-medium text-white">Flash Deals Today</div>
                <div className="text-[0.72rem] text-teal">Up to 60% off {'\u00B7'} Ends in 4h</div>
              </div>
            </div>
            {[
              ['\u{1F4F1}', 'Electronics', '2,400+ items'],
              ['\u{1F457}', 'Fashion', '3,800+ items'],
              ['\u{1F3E1}', 'Home & Garden', '1,900+ items'],
              ['\u{1F484}', 'Beauty', '1,200+ items'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="rounded-[4px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-teal">
                <div className="text-3xl">{icon}</div>
                <div className="mt-2 text-[0.82rem] font-medium text-white">{title}</div>
                <div className="text-[0.72rem] text-teal">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      <section id="featured" className="container mx-auto px-4 py-12 min-[900px]:px-8">
        <div className="mb-6 flex items-center gap-4 rounded-[4px] border border-[rgba(255,77,77,0.25)] bg-[linear-gradient(90deg,#FF4D4D22,#FF4D4D11)] px-5 py-2.5">
          <span className="font-['Syne'] text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[#FF6B6B]">{'\u26A1'} Flash Deals</span>
          <CountdownTimer />
          <span className="ml-auto text-[0.78rem] text-gray">Hurry! Limited stock</span>
        </div>

        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-['Syne'] text-[1.3rem] font-bold text-white">Today's <span className="text-teal">Best Deals</span></h2>
          <a href="#" className="text-[0.8rem] font-medium text-teal hover:opacity-70">See all deals {'\u2192'}</a>
        </div>

        <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
          {products.slice(0, 6).map((product, index) => (
            <div key={index}><ProductCard product={product} inScroll={true} /></div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 min-[900px]:px-8">
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-['Syne'] text-[1.3rem] font-bold text-white">Shop by <span className="text-teal">Category</span></h2>
          <a href="#" className="text-[0.8rem] font-medium text-teal hover:opacity-70">All categories {'\u2192'}</a>
        </div>
        <div className="grid grid-cols-2 gap-4 min-[700px]:grid-cols-3 min-[900px]:grid-cols-6">
          {categories.map((cat, index) => <CategoryCard key={index} icon={cat.icon} name={cat.name} itemCount={cat.items} />)}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 min-[900px]:px-8">
        <div className="grid grid-cols-1 gap-4 min-[900px]:grid-cols-[2fr_1fr]">
          <PromoCard icon="\u{1F4F1}" tag="New Arrivals" title="Latest Electronics" subtitle="Up to 40% Off" variant="big" />
          <div className="flex flex-col gap-4">
            <PromoCard icon="\u{1F457}" tag="Fashion Week" title="Style Sale" subtitle="From $9.99" variant="small" buttonText="Explore" />
            <PromoCard icon="\u{1F381}" tag="Gift Ideas" title="Gift Bundles" subtitle="Curated sets" variant="small2" buttonText="Browse" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 min-[900px]:px-8">
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-['Syne'] text-[1.3rem] font-bold text-white">Featured <span className="text-teal">Products</span></h2>
          <a href="#" className="text-[0.8rem] font-medium text-teal hover:opacity-70">View all {'\u2192'}</a>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4">
          {products.map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
      </section>

      <section id="merchants" className="mx-4 mb-8 rounded-[4px] border border-[rgba(0,201,167,0.15)] bg-[linear-gradient(120deg,#091830,#0D2137)] p-8 min-[900px]:mx-8 min-[900px]:p-10">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <h3 className="font-['Syne'] text-[1.3rem] font-bold text-white">Start Selling on ESUUQ</h3>
            <p className="mt-1.5 text-[0.9rem] text-gray">Join hundreds of merchants reaching thousands of customers every day.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {['Easy onboarding', 'Low commission rates', 'Real-time analytics', 'Fast payouts'].map((perk) => (
              <span key={perk} className="text-[0.8rem] text-gray2 before:mr-2 before:font-bold before:text-teal before:content-['\u2713']">{perk}</span>
            ))}
          </div>
          <a href="#" className="inline-block bg-teal px-8 py-3 text-[0.85rem] font-medium tracking-[0.06em] text-navy transition hover:bg-teal2">Become a Merchant</a>
        </div>
      </section>
    </>
  );
};

export default Home;
