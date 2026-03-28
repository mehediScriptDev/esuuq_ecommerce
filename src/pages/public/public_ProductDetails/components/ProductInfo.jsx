import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Minus,
  Plus,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Store,
  Truck,
} from 'lucide-react';

const ProductInfo = ({ product }) => {
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = Array.isArray(product.colors) ? product.colors : [];

  const savings = useMemo(() => {
    const current = Number(product.price) || 0;
    const old = Number(product.oldPrice) || 0;
    if (!old || old <= current) {
      return 0;
    }
    return old - current;
  }, [product.oldPrice, product.price]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal">
          <CheckCircle2 size={12} /> Verified Store
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-gray2">
          <Store size={14} className="text-teal" />
          <span className="font-medium text-white">{product.store}</span>
        </span>
        <span className="inline-flex items-center gap-1 text-sm text-white">
          <Star size={14} className="fill-yellow text-yellow" />
          {product.storeRating}
        </span>
      </div>

      <div>
        <h1 className="font-['Syne'] text-[2rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
          {product.name}
        </h1>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-gray2 sm:text-base">
          {product.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-md border border-white/10 bg-card p-4 sm:grid-cols-3 sm:p-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray2">Rating</p>
          <p className="mt-1 text-lg font-semibold text-white">{product.rating} / 5</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray2">Reviews</p>
          <p className="mt-1 text-lg font-semibold text-white">{Number(product.reviews).toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray2">Sold</p>
          <p className="mt-1 text-lg font-semibold text-white">{Number(product.sold).toLocaleString()}+</p>
        </div>
      </div>

      <div className="rounded-md border border-white/10 bg-card p-5">
        <div className="flex flex-wrap items-end gap-3">
          <span className="font-['Syne'] text-[2.1rem] font-bold text-white sm:text-[2.6rem]">
            ${Number(product.price).toFixed(2)}
          </span>
          <span className="pb-1 text-lg text-gray line-through sm:text-xl">${Number(product.oldPrice).toFixed(2)}</span>
          <span className="mb-1 rounded-full bg-red/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-red">
            -{product.off}%
          </span>
        </div>
        <p className="mt-2 text-sm text-teal">You save ${savings.toFixed(2)} today</p>
      </div>

      <div className="space-y-6 rounded-md border border-white/10 bg-card p-5">
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray2">Color</h3>
          <div className="flex flex-wrap gap-2.5">
            {colors.map((color, idx) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(idx)}
                className={`rounded-md border px-3.5 py-2 text-sm font-medium transition-colors ${
                  selectedColor === idx
                    ? 'border-teal bg-teal text-navy'
                    : 'border-white/15 bg-navy2/50 text-white hover:border-white/35'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray2">Quantity</h3>
          <div className="inline-flex items-center rounded-md border border-white/15 bg-navy2/50 p-1.5">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-9 w-9 items-center justify-center rounded text-white transition-colors hover:bg-white/10"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="w-10 text-center text-base font-semibold text-white">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="flex h-9 w-9 items-center justify-center rounded text-white transition-colors hover:bg-white/10"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-teal px-5 text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-teal2"
          >
            <ShoppingCart size={16} />
            Add To Bag
          </button>
          <button
            type="button"
            className="h-12 rounded-md border border-white/20 bg-white text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-white/90"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { icon: Truck, title: 'Fast Delivery', text: 'Ships within 24 hours' },
          { icon: Shield, title: 'Secure Payment', text: 'Protected checkout' },
          { icon: RotateCcw, title: 'Easy Returns', text: '30 day return policy' },
        ].map((item) => (
          <div key={item.title} className="rounded-md border border-white/10 bg-card p-4">
            <item.icon size={18} className="mb-2 text-teal" />
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-xs text-gray2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
