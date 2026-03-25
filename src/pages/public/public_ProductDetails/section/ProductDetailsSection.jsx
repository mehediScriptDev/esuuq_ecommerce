import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
  Minus,
  Plus,
  Share2,
  Eye,
  CheckCircle2,
  Clock,
  ArrowRight,
  Store,
} from 'lucide-react';
import ProductCard from '../../../../components/marketplace/ProductCard';

const mockProducts = {
  'wireless-earbuds-pro-max': {
    name: 'Wireless Earbuds Pro Max',
    store: 'TechZone MN',
    storeRating: 4.9,
    price: 49.99,
    oldPrice: 89.99,
    off: 44,
    rating: 4.8,
    reviews: 1204,
    sold: 834,
    description:
      'Experience crystal-clear audio with our premium Wireless Earbuds Pro Max. Featuring advanced noise cancellation, 32-hour battery life, and IPX5 water resistance. Perfect for music, calls, and workouts.',
    features: [
      'Active Noise Cancellation',
      '32-hour Battery Life',
      'IPX5 Water Resistant',
      'Bluetooth 5.3',
      'Touch Controls',
      'Wireless Charging Case',
    ],
    specs: {
      Brand: 'TechZone',
      Model: 'Pro Max',
      Color: 'Black',
      Connectivity: 'Bluetooth 5.3',
      Battery: '8hrs (32hrs w/ case)',
      Weight: '5.4g each',
    },
    colors: ['Black', 'White', 'Navy', 'Red'],
    images: ['📱', '🎧', '📦', '🔋'],
    category: 'Electronics',
  },
};

const defaultProduct = {
  name: 'Premium Headphones Plus',
  store: 'ESUUQ Official',
  storeRating: 4.7,
  price: 59.99,
  oldPrice: 99.99,
  off: 40,
  rating: 4.6,
  reviews: 856,
  sold: 421,
  description:
    'High-quality product with premium materials and excellent craftsmanship. Built to last and designed for everyday use.',
  features: [
    'Premium Quality',
    'Fast Shipping',
    'Easy Returns',
    '1 Year Warranty',
    'Eco-Friendly',
    'Gift-Ready Packaging',
  ],
  specs: { Brand: 'ESUUQ', Material: 'Premium', Warranty: '1 Year', Origin: 'USA' },
  colors: ['Black', 'White', 'Gray'],
  images: ['🛍️', '📦', '⭐', '🎁'],
  category: 'General',
};

const ProductDetailsSection = () => {
  const { id } = useParams();
  const product = mockProducts[id] || defaultProduct;
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specs', label: 'Specifications' },
    { id: 'reviews', label: `Reviews (${product.reviews})` },
  ];

  const sampleReviews = [
    {
      name: 'Ahmed M.',
      rating: 5,
      date: 'Mar 12, 2026',
      text: 'Absolutely love this! Quality is amazing and fast delivery.',
      verified: true,
    },
    {
      name: 'Sara L.',
      rating: 5,
      date: 'Mar 10, 2026',
      text: "Best purchase I've made. Highly recommend to everyone!",
      verified: true,
    },
    {
      name: 'James K.',
      rating: 4,
      date: 'Mar 8, 2026',
      text: 'Great product overall. Took a star off for packaging.',
      verified: false,
    },
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Breadcrumb - Scrollable on mobile */}
      <div className="bg-navy2/50 no-scrollbar overflow-x-auto border-b border-white/[0.07]">
        <div className="container mx-auto flex items-center gap-2 px-4 py-3 text-[0.65rem] font-bold tracking-widest whitespace-nowrap uppercase min-[640px]:px-8 min-[640px]:text-[0.7rem]">
          <Link
            to="/"
            className="text-gray hover:text-teal uppercase no-underline transition-colors"
          >
            Marketplace
          </Link>
          <ChevronRight size={12} className="shrink-0 text-white/20" />
          <Link
            to={`/${product.category?.toLowerCase()}`}
            className="text-gray hover:text-teal uppercase no-underline transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight size={12} className="shrink-0 text-white/20" />
          <span className="text-teal truncate uppercase">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 min-[640px]:px-8 min-[900px]:py-10">
        <div className="grid grid-cols-1 gap-8 min-[900px]:gap-12 min-[1100px]:grid-cols-[1fr_450px]">
          {/* LEFT: Image Gallery */}
          <div className="space-y-4">
            <div className="group relative flex h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] shadow-inner min-[480px]:h-[400px] min-[640px]:h-[500px]">
              <div className="text-[6rem] transition-transform duration-700 group-hover:scale-105 min-[640px]:text-[8rem]">
                {product.images[selectedImage]}
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all min-[640px]:h-10 min-[640px]:w-10 ${wishlisted ? 'bg-red border-red text-white' : 'bg-navy/80 hover:text-navy border-white/10 text-white hover:bg-white'}`}
                >
                  <Heart size={18} className={wishlisted ? 'fill-white' : ''} />
                </button>
                <button className="bg-navy/80 hover:text-navy flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-all hover:bg-white min-[640px]:h-10 min-[640px]:w-10">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
            <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-0.5 pb-2 min-[640px]:gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex h-20 w-20 shrink-0 snap-start items-center justify-center rounded-xl border text-2xl transition-all min-[640px]:h-24 min-[640px]:w-24 min-[640px]:text-3xl ${selectedImage === i ? 'border-teal bg-teal/10 scale-[0.96]' : 'bg-navy2 border-white/5 hover:border-white/20'}`}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col">
            <div className="mb-3 flex items-center gap-2">
              <span className="bg-teal/10 text-teal rounded px-1.5 py-0.5 text-[0.6rem] font-black tracking-widest uppercase">
                Official Store
              </span>
              <span className="hover:text-teal flex cursor-pointer items-center gap-1 text-[0.7rem] font-bold text-white min-[640px]:text-[0.75rem]">
                <Store size={12} /> {product.store}{' '}
                <CheckCircle2 size={12} className="fill-blue-500/10 text-blue-500" />
              </span>
            </div>

            <h1 className="mb-4 font-['Syne'] text-[1.8rem] leading-[1.1] font-black text-white min-[640px]:text-[2.2rem]">
              {product.name}
            </h1>

            <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-white/5 pb-6 min-[640px]:gap-4">
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < 4 ? 'fill-yellow text-yellow' : 'text-white/10'}
                    />
                  ))}
                </div>
                <span className="ml-1 text-[0.85rem] font-bold text-white">{product.rating}</span>
              </div>
              <div className="hidden h-4 w-px bg-white/10 min-[640px]:block" />
              <span className="text-gray2 text-[0.75rem] font-medium min-[640px]:text-[0.8rem]">
                {product.reviews.toLocaleString()} Reviews
              </span>
              <div className="hidden h-4 w-px bg-white/10 min-[640px]:block" />
              <span className="text-teal text-[0.75rem] font-medium min-[640px]:text-[0.8rem]">
                {product.sold.toLocaleString()} Sold
              </span>
            </div>

            <div className="mb-6 min-[640px]:mb-8">
              <div className="mb-1 flex flex-wrap items-baseline gap-2 min-[640px]:gap-3">
                <span className="font-['Syne'] text-[2.2rem] font-black text-white min-[640px]:text-[2.8rem]">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray/40 text-[1rem] line-through min-[640px]:text-[1.2rem]">
                  ${product.oldPrice.toFixed(2)}
                </span>
                <span className="bg-red rounded px-1.5 py-0.5 text-[0.65rem] font-black text-white min-[640px]:px-2 min-[640px]:py-1 min-[640px]:text-[0.75rem]">
                  -{product.off}% SAVING
                </span>
              </div>
              <p className="flex items-center gap-1 text-[0.78rem] font-bold text-green-500 min-[640px]:text-[0.82rem]">
                <CheckCircle2 size={14} /> In Stock & Ready to ship
              </p>
            </div>

            {/* Variant: Colors */}
            <div className="mb-6">
              <div className="text-gray mb-3 text-[0.65rem] font-black tracking-widest uppercase min-[640px]:text-[0.7rem]">
                Select Color:{' '}
                <span className="ml-1 text-white">{product.colors[selectedColor]}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`rounded-full border px-4 py-2 text-[0.75rem] font-bold transition-all min-[640px]:px-5 min-[640px]:py-2.5 min-[640px]:text-[0.82rem] ${selectedColor === i ? 'border-teal bg-teal text-navy' : 'bg-navy2 hover:border-teal/50 border-white/10 text-white'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty & Add to Cart */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col items-stretch gap-4 min-[480px]:flex-row min-[480px]:items-center">
                <div className="bg-navy3 flex min-h-[52px] items-center rounded-lg border border-white/5 p-1">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="flex flex-1 items-center justify-center rounded-md py-2 text-white transition-all hover:bg-white/5 min-[480px]:w-10"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center text-[1rem] font-bold text-white">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="flex flex-1 items-center justify-center rounded-md py-2 text-white transition-all hover:bg-white/5 min-[480px]:w-10"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <button className="bg-teal hover:bg-teal2 text-navy shadow-teal/20 flex h-[52px] flex-1 transform items-center justify-center gap-3 rounded-lg text-[0.9rem] font-black tracking-widest uppercase shadow-lg transition-all hover:-translate-y-1 active:translate-y-0 min-[640px]:text-[0.95rem]">
                  <ShoppingCart size={20} /> Add To Cart
                </button>
              </div>
              <button className="h-[52px] w-full rounded-lg border border-white/10 text-[0.9rem] font-bold text-white transition-all hover:bg-white/5">
                Buy It Now
              </button>
            </div>

            {/* Features list */}
            <div className="mb-8 grid grid-cols-1 gap-x-4 gap-y-3 border-t border-white/5 pt-6 min-[480px]:grid-cols-2">
              {product.features.slice(0, 4).map((f, i) => (
                <div
                  key={i}
                  className="text-gray2 flex items-center gap-2.5 text-[0.75rem] min-[640px]:text-[0.8rem]"
                >
                  <CheckCircle2 size={14} className="text-teal shrink-0" /> {f}
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 min-[640px]:gap-3">
              {[
                { icon: Truck, l: 'Fast Delivery' },
                { icon: Shield, l: 'Safe Payment' },
                { icon: RotateCcw, l: 'Easy Returns' },
              ].map((b, i) => (
                <div
                  key={i}
                  className="bg-navy2/50 rounded-xl border border-white/5 p-2.5 text-center min-[640px]:p-3"
                >
                  <b.icon size={18} className="text-teal mx-auto mb-1.5" />
                  <div className="text-[0.55rem] leading-tight font-bold tracking-widest whitespace-nowrap text-white uppercase min-[640px]:text-[0.65rem]">
                    {b.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Info Tabs */}
        <div className="bg-card/30 mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md min-[900px]:mt-20">
          <div className="no-scrollbar flex snap-x overflow-x-auto border-b border-white/10 bg-[#0F172A]">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`relative snap-start px-6 py-4 text-[0.75rem] font-black tracking-widest whitespace-nowrap uppercase transition-all min-[640px]:px-8 min-[640px]:py-5 min-[640px]:text-[0.82rem] ${activeTab === t.id ? 'text-teal bg-navy/20' : 'text-gray/50 hover:text-white'}`}
              >
                {t.label}
                {activeTab === t.id && (
                  <div className="bg-teal animate-growWidth absolute right-0 bottom-0 left-0 h-1" />
                )}
              </button>
            ))}
          </div>

          <div className="p-6 min-[640px]:p-10 min-[900px]:p-12">
            {activeTab === 'description' && (
              <div className="animate-fadeUp max-w-[800px]">
                <h3 className="mb-4 font-['Syne'] text-[1.2rem] font-black text-white min-[640px]:text-[1.4rem]">
                  Product Overview
                </h3>
                <p className="text-gray/80 mb-8 text-[0.9rem] leading-relaxed min-[640px]:text-[1rem]">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-teal mb-4 text-[0.65rem] font-black tracking-widest uppercase min-[640px]:text-[0.7rem]">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {product.features.map((f, i) => (
                        <li
                          key={i}
                          className="text-gray2 flex items-start gap-2 text-[0.85rem] min-[640px]:text-[0.9rem]"
                        >
                          <ArrowRight size={14} className="text-teal mt-1 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className="animate-fadeUp grid grid-cols-1 gap-x-12 md:grid-cols-2">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between border-b border-white/5 py-3.5 min-[640px]:py-4"
                  >
                    <span className="text-gray text-[0.75rem] leading-none font-black tracking-widest uppercase">
                      {k}
                    </span>
                    <span className="text-right text-[0.8rem] leading-none font-bold text-white min-[640px]:text-[0.88rem]">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="animate-fadeUp space-y-6">
                <div className="mb-8 flex flex-col items-center gap-8 border-b border-white/10 pb-8 min-[900px]:mb-10 min-[900px]:gap-12 min-[900px]:pb-10 md:flex-row">
                  <div className="text-center">
                    <div className="mb-2 text-[3.5rem] leading-none font-black text-white min-[640px]:text-[4rem]">
                      {product.rating}
                    </div>
                    <div className="mb-1 flex justify-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow text-yellow" />
                      ))}
                    </div>
                    <div className="text-gray text-[0.65rem] font-bold tracking-widest uppercase">
                      Global Score
                    </div>
                  </div>
                  <div className="w-full max-w-[400px] flex-1 space-y-2.5">
                    {[5, 4, 3, 2, 1].map((s) => (
                      <div key={s} className="flex items-center gap-4">
                        <span className="w-2 text-[0.7rem] font-bold text-white">{s}</span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="bg-teal h-full rounded-full transition-all duration-1000"
                            style={{ width: s === 5 ? '88%' : s === 4 ? '12%' : '0%' }}
                          />
                        </div>
                        <span className="text-gray w-8 text-right text-[0.65rem] font-bold">
                          {s === 5 ? '88%' : s === 4 ? '12%' : '0%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  {sampleReviews.map((r, i) => (
                    <div
                      key={i}
                      className="bg-navy2/30 hover:bg-navy2/50 rounded-xl border border-white/5 p-4 transition-colors min-[640px]:p-6"
                    >
                      <div className="mb-4 flex flex-col justify-between gap-3 min-[480px]:flex-row min-[480px]:items-center">
                        <div className="flex items-center gap-3">
                          <div className="from-teal text-navy flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br to-blue-500 text-[0.88rem] font-bold">
                            {r.name.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-[0.9rem] leading-tight font-bold text-white">
                              {r.name}{' '}
                              {r.verified && <CheckCircle2 size={12} className="text-teal" />}
                            </div>
                            <div className="text-gray mt-0.5 text-[0.65rem] font-bold tracking-widest uppercase">
                              {r.verified ? 'Verified' : 'Guest'}
                            </div>
                          </div>
                        </div>
                        <span className="text-gray/40 text-[0.7rem]">{r.date}</span>
                      </div>
                      <div className="mb-3 flex gap-0.5">
                        {[...Array(r.rating)].map((_, j) => (
                          <Star key={j} size={12} className="fill-yellow text-yellow" />
                        ))}
                      </div>
                      <p className="text-gray2 text-[0.88rem] leading-relaxed italic">"{r.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 min-[900px]:mt-24">
          <div className="mb-8 flex flex-col justify-between gap-4 min-[480px]:flex-row min-[480px]:items-center">
            <h2 className="font-['Syne'] text-[1.4rem] font-black text-white min-[640px]:text-[1.8rem]">
              Recommended <span className="text-teal">For You</span>
            </h2>
            <Link
              to={`/${product.category?.toLowerCase()}`}
              className="group text-gray hover:text-teal flex items-center gap-2 text-[0.75rem] font-black tracking-widest uppercase transition-all"
            >
              Explore Category{' '}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 min-[640px]:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <ProductCard
                key={i}
                product={{
                  name: `Premium ${product.category} Model ${i}`,
                  store: product.store,
                  price: '$39.99',
                  old: '$65.00',
                  icon: product.images[0],
                  rating: '4.8',
                  reviews: i * 5,
                  badge: i === 1 ? 'NEW' : '',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
