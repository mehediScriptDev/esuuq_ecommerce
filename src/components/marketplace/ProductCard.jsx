import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, inScroll = false }) => {
  const [isWishlisted, setIsWishlisted] = useState(product.wishlist || false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const getBadgeClass = (badge) => {
    switch (badge) {
      case 'NEW':
        return 'bg-teal text-navy';
      case 'HOT':
        return 'bg-yellow text-navy';
      default:
        return 'bg-red text-white';
    }
  };

  return (
    <div
      className={`bg-card border border-white/10 rounded overflow-hidden transition-all duration-200 hover:border-teal/50 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
        inScroll ? 'shrink-0  w-52' : 'w-full'
      }`}
    >
      {/* IMAGE SECTION */}
      <div className="relative bg-navy3 h-44 flex items-center justify-center overflow-hidden group">
        {/* PRODUCT ICON */}
        <span className="text-6xl group-hover:scale-110 transition-transform">{product.icon}</span>

        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-navy/30 opacity-0 group-hover:opacity-100 transition" />

        {/* BADGE */}
        {product.badge && (
          <span
            className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${getBadgeClass(
              product.badge
            )}`}
          >
            {product.badge}
          </span>
        )}

        {/* WISHLIST BUTTON */}
        <button
          onClick={handleWishlist}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg transition ${
            isWishlisted
              ? 'text-red-light bg-red/20'
              : 'text-gray2 bg-navy/70 hover:text-red-light hover:bg-red/20'
          }`}
        >
          ❤
        </button>
      </div>

      {/* INFO SECTION */}
      <div className="p-3">
        {/* STORE NAME */}
        <div className="text-xs font-bold text-teal uppercase tracking-wide mb-2">{product.store}</div>

        {/* PRODUCT NAME */}
        <h3 className="text-sm font-medium text-white mb-2 line-clamp-1">{product.name}</h3>

        {/* RATING */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow text-xs">★★★★★</span>
          <span className="text-xs font-semibold text-white">{product.rating}</span>
          <span className="text-xs text-gray">({product.reviews})</span>
        </div>

        {/* PRICE */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-white">{product.price}</span>
          <span className="text-sm text-gray line-through">{product.old}</span>
          <span className="text-xs font-medium text-red-light">{product.off}</span>
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={handleAddToCart}
          className={`w-full text-sm font-medium py-2 rounded border transition-all ${
            isAdded
              ? 'bg-teal text-navy border-teal'
              : 'border-teal/30 text-teal hover:bg-teal hover:text-navy hover:border-teal'
          }`}
        >
          {isAdded ? '✓ Added!' : '+ Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
