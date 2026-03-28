import React, { useEffect, useState } from 'react';
import { Heart, Share2 } from 'lucide-react';

const ProductGallery = ({ product, wishlisted, onWishlistToggle }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setSelectedImage(0);
  }, [product.name]);

  const images = Array.isArray(product.images) && product.images.length > 0 ? product.images : ['/img/home/default.jpg'];

  return (
    <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
      <div className="group relative aspect-square overflow-hidden rounded-md border border-white/10 bg-card">
        <img
          src={images[selectedImage]}
          alt={product.name}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105 sm:p-10"
        />

        <div className="absolute right-3 top-3 flex gap-2 sm:right-4 sm:top-4">
          <button
            type="button"
            onClick={onWishlistToggle}
            className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors ${
              wishlisted
                ? 'border-red bg-red text-white'
                : 'border-white/15 bg-navy/60 text-white hover:border-teal hover:text-teal'
            }`}
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart size={16} className={wishlisted ? 'fill-white' : ''} />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-navy/60 text-white transition-colors hover:border-teal hover:text-teal"
            aria-label="Share product"
          >
            <Share2 size={16} />
          </button>
        </div>

        <span className="absolute bottom-3 left-3 rounded-md border border-teal/40 bg-teal/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal sm:bottom-4 sm:left-4">
          In Stock
        </span>
      </div>

      <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
        {images.map((img, idx) => (
          <button
            key={`${img}-${idx}`}
            type="button"
            onClick={() => setSelectedImage(idx)}
            className={`overflow-hidden rounded-md border bg-navy2/40 transition-colors ${
              selectedImage === idx ? 'border-teal' : 'border-white/10 hover:border-white/30'
            }`}
            aria-label={`Select image ${idx + 1}`}
          >
            <img src={img} alt="" className="h-16 w-full object-contain p-2 sm:h-20" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
