import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-react';

const ProductInfo = ({ product }) => {
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  const colors = Array.isArray(product.colors) ? product.colors : [];
  const sizes = Array.isArray(product.sizes) ? product.sizes : [];

  const savings = useMemo(() => {
    const current = Number(product.price) || 0;
    const old = Number(product.oldPrice) || 0;
    if (!old || old <= current) {
      return 0;
    }
    return old - current;
  }, [product.oldPrice, product.price]);

  return (
    <div className="flex flex-col space-y-5">
      {/* Product Title and Rating */}
      <div className="space-y-1.5">
        <h1 className="font-['Syne'] text-2xl font-bold tracking-tight text-white lg:text-3xl">
          {product.name}
        </h1>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < 4 ? 'fill-yellow text-yellow' : 'text-white/10'}
              />
            ))}
          </div>
          <span className="text-gray/50 text-xs lg:text-sm font-medium">({product.reviews} reviews)</span>
        </div>
      </div>

      {/* Price Section */}
      <div className="space-y-3.5">
        <div className="flex items-baseline gap-3.5">
          <span className="font-['Syne'] text-2xl font-bold text-white lg:text-3xl">
            ৳{Number(product.price).toLocaleString()}
          </span>
          <span className="text-gray/30 text-base line-through lg:text-lg">
            ৳{Number(product.oldPrice).toLocaleString()}
          </span>
          <span className="bg-teal/10 text-teal px-2 py-0.5 text-xs lg:text-sm font-bold leading-none">
            Save ৳{savings.toLocaleString()}
          </span>
        </div>

        {/* Color Selection - Circles */}
        <div className="space-y-2.5">
          <h3 className="text-gray/70 text-xs lg:text-sm font-bold uppercase tracking-wider">
            Color: <span className="text-white ml-0.5 lowercase font-normal">Select</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {colors.map((color, idx) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(idx)}
                className={`group relative h-7 w-7 overflow-hidden rounded-full border ring-2 ring-offset-2 ring-offset-navy transition-all lg:h-8 lg:w-8 ${
                  selectedColor === idx
                    ? 'border-teal ring-teal'
                    : 'border-white/10 ring-transparent hover:border-white/30'
                }`}
                title={color}
              >
                <span 
                  className="absolute inset-0" 
                  style={{ backgroundColor: color.toLowerCase() === 'gray' ? '#666' : color.toLowerCase() }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection - Boxes */}
        <div className="space-y-2.5">
          <h3 className="text-gray/70 text-xs lg:text-sm font-bold uppercase tracking-wider">
            Size: <span className="text-white ml-0.5 lowercase font-normal">Select</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size, idx) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(idx)}
                className={`flex h-9 w-11 items-center justify-center rounded-xs border text-xs lg:text-sm font-bold transition-all lg:h-10 lg:w-12 ${
                  selectedSize === idx
                    ? 'border-teal bg-teal/10 text-white'
                    : 'border-white/10 text-gray2 hover:border-white/30'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons and Actions */}
      <div className="space-y-5 pt-1.5">
        <div className="flex flex-wrap items-center gap-3.5">
          <div className="bg-navy2/50 flex items-center rounded-xs border border-white/10 p-0.5">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-9 w-8 items-center justify-center text-gray hover:text-white lg:h-10 lg:w-9"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-sm lg:text-base font-bold text-white">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="flex h-9 w-8 items-center justify-center text-gray hover:text-white lg:h-10 lg:w-9"
            >
              <Plus size={14} />
            </button>
          </div>
          
          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xs bg-teal px-6 text-xs lg:text-sm font-bold uppercase tracking-widest text-navy transition-all active:scale-95 lg:h-12 lg:px-8"
          >
            <ShoppingCart size={16} /> Select a Size
          </button>

          <button className="bg-navy2/50 hover:bg-navy2 flex h-11 w-11 items-center justify-center rounded-xs border border-white/10 text-gray2 transition-colors hover:text-white lg:h-12 lg:w-12">
            <Heart size={18} />
          </button>
          <button className="bg-navy2/50 hover:bg-navy2 flex h-11 w-11 items-center justify-center rounded-xs border border-white/10 text-gray2 transition-colors hover:text-white lg:h-12 lg:w-12">
            <Share2 size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs lg:text-sm font-bold text-teal">
          <CheckCircle2 size={16} /> In Stock ({product.stock} available)
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-navy2/30 grid grid-cols-1 gap-3.5 rounded-xs border border-white/5 p-4 sm:grid-cols-3">
        {[
          { icon: Truck, title: 'Free Delivery', text: 'Orders over ৳2000', color: 'text-blue-400' },
          { icon: RotateCcw, title: 'Easy Returns', text: '7-day return policy', color: 'text-green-500' },
          { icon: Shield, title: 'Authentic', text: '100% genuine product', color: 'text-purple-400' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <item.icon size={18} className={item.color} />
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-white leading-tight mb-0.5 uppercase tracking-wide">{item.title}</span>
              <span className="text-[12px] text-gray/50 leading-tight">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
