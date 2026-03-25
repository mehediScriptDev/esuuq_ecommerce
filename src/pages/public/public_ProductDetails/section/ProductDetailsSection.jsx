import React, { useState } from 'react';
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
} from 'lucide-react';

const mockProducts = {
  'wireless-earbuds-pro': {
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
  name: 'Premium Product',
  store: 'ESUUQ Store',
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
    },
    {
      name: 'Sara L.',
      rating: 5,
      date: 'Mar 10, 2026',
      text: "Best purchase I've made. Highly recommend to everyone!",
    },
    {
      name: 'James K.',
      rating: 4,
      date: 'Mar 8, 2026',
      text: 'Great product overall. Took a star off for packaging.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-navy2 border-b border-white/[0.07] px-4 py-3 min-[640px]:px-8">
        <div className="text-gray container mx-auto flex items-center gap-2 text-[0.78rem]">
          <Link to="/" className="text-gray hover:text-teal no-underline transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            to={`/${product.category?.toLowerCase()}`}
            className="text-gray hover:text-teal no-underline transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-teal">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 min-[640px]:px-8">
        {/* Product Top Section */}
        <div className="mb-10 grid grid-cols-1 gap-8 min-[900px]:grid-cols-[1fr_1fr]">
          {/* Image Gallery */}
          <div>
            <div className="bg-card mb-4 flex h-[340px] items-center justify-center rounded-lg border border-white/[0.07] text-[6rem] min-[640px]:h-[420px]">
              {product.images[selectedImage]}
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex h-16 w-16 items-center justify-center rounded border text-2xl transition-all min-[640px]:h-20 min-[640px]:w-20 ${
                    selectedImage === i
                      ? 'border-teal bg-teal/10'
                      : 'bg-navy3 hover:border-teal/40 border-white/[0.07]'
                  }`}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="text-teal mb-1 text-[0.7rem] font-bold tracking-[0.12em] uppercase">
              {product.store}
            </div>
            <h1 className="mb-3 font-['Syne'] text-[1.5rem] leading-tight font-extrabold text-white min-[640px]:text-[1.8rem]">
              {product.name}
            </h1>

            {/* Rating Row */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating) ? 'fill-yellow text-yellow' : 'text-gray/40'
                    }
                  />
                ))}
                <span className="ml-1 text-[0.85rem] font-medium text-white">{product.rating}</span>
              </div>
              <span className="text-gray text-[0.78rem]">
                ({product.reviews.toLocaleString()} reviews)
              </span>
              <span className="text-gray text-[0.78rem]">·</span>
              <div className="text-gray flex items-center gap-1 text-[0.78rem]">
                <Eye size={14} /> {product.sold.toLocaleString()} sold
              </div>
            </div>

            {/* Price */}
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-['Syne'] text-[2rem] font-extrabold text-white">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray text-base line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
              <span className="bg-red/10 text-red rounded px-2 py-0.5 text-[0.78rem] font-bold">
                -{product.off}% OFF
              </span>
            </div>

            {/* Colors */}
            {product.colors && (
              <div className="mb-5">
                <div className="text-gray mb-2 text-[0.75rem] font-medium tracking-widest uppercase">
                  Color: <span className="text-white">{product.colors[selectedColor]}</span>
                </div>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`rounded border px-4 py-2 text-[0.82rem] transition-all ${
                        selectedColor === i
                          ? 'border-teal bg-teal/10 text-teal'
                          : 'text-gray2 hover:border-teal/40 border-white/[0.07]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-5">
              <div className="text-gray mb-2 text-[0.75rem] font-medium tracking-widest uppercase">
                Quantity
              </div>
              <div className="inline-flex items-center overflow-hidden rounded border border-white/[0.07]">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="bg-navy3 hover:bg-navy2 flex h-10 w-10 items-center justify-center text-white transition-colors"
                >
                  <Minus size={16} />
                </button>
                <div className="flex h-10 w-14 items-center justify-center border-x border-white/[0.07] bg-transparent font-['DM_Sans'] text-[0.9rem] text-white">
                  {qty}
                </div>
                <button
                  onClick={() => setQty(Math.min(99, qty + 1))}
                  className="bg-navy3 hover:bg-navy2 flex h-10 w-10 items-center justify-center text-white transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-6 flex flex-wrap gap-3">
              <button className="bg-teal text-navy hover:bg-teal2 flex flex-1 items-center justify-center gap-2 rounded px-6 py-3.5 font-['DM_Sans'] text-[0.9rem] font-semibold transition-all hover:-translate-y-0.5">
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`flex h-[50px] w-[50px] items-center justify-center rounded border transition-all ${
                  wishlisted
                    ? 'border-red bg-red/10 text-red'
                    : 'text-gray2 hover:border-red hover:text-red border-white/[0.07]'
                }`}
              >
                <Heart size={20} className={wishlisted ? 'fill-red' : ''} />
              </button>
              <button className="text-gray2 hover:border-teal hover:text-teal flex h-[50px] w-[50px] items-center justify-center rounded border border-white/[0.07] transition-all">
                <Share2 size={20} />
              </button>
            </div>

            {/* Promises */}
            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3">
              {[
                { icon: Truck, label: 'Free Delivery', sub: 'Orders over $50' },
                { icon: Shield, label: '1 Year Warranty', sub: 'Full coverage' },
                { icon: RotateCcw, label: '30-Day Returns', sub: 'Hassle-free' },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-navy3 flex items-center gap-2.5 rounded border border-white/[0.07] p-3"
                >
                  <div className="bg-teal/10 flex h-9 w-9 shrink-0 items-center justify-center rounded">
                    <Icon size={18} className="text-teal" />
                  </div>
                  <div>
                    <div className="text-[0.78rem] font-medium text-white">{label}</div>
                    <div className="text-gray text-[0.68rem]">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
          <div className="flex border-b border-white/[0.07]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 border-b-2 px-4 py-3.5 text-[0.82rem] font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-teal text-teal'
                    : 'text-gray border-transparent hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-5 min-[640px]:p-6">
            {activeTab === 'description' && (
              <div className="animate-[fadeUp_0.4s_ease_both]">
                <p className="text-gray2 mb-5 text-[0.88rem] leading-relaxed">
                  {product.description}
                </p>
                <h3 className="mb-3 font-['Syne'] text-[0.9rem] font-bold text-white">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2">
                  {product.features.map((f, i) => (
                    <div key={i} className="text-gray2 flex items-center gap-2 text-[0.85rem]">
                      <div className="bg-teal/15 text-teal flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem]">
                        ✓
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className="animate-[fadeUp_0.4s_ease_both]">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val], i) => (
                      <tr key={key} className={i % 2 === 0 ? 'bg-navy3/50' : ''}>
                        <td className="text-gray px-4 py-3 text-[0.82rem] font-medium">{key}</td>
                        <td className="px-4 py-3 text-[0.82rem] text-white">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="animate-[fadeUp_0.4s_ease_both] space-y-4">
                {sampleReviews.map((review, i) => (
                  <div key={i} className="bg-navy3 rounded border border-white/[0.07] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="from-teal text-navy flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br to-blue-500 text-[0.7rem] font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <span className="text-[0.85rem] font-medium text-white">{review.name}</span>
                      </div>
                      <span className="text-gray text-[0.72rem]">{review.date}</span>
                    </div>
                    <div className="mb-2 flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className={j < review.rating ? 'fill-yellow text-yellow' : 'text-gray/40'}
                        />
                      ))}
                    </div>
                    <p className="text-gray2 text-[0.82rem] leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
