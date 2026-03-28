import React from 'react';
import UserPageHeader from '../components/UserPageHeader';

const wishlistItems = [
  { id: 1, emoji: '🕶️', name: 'Premium Polarized Sunglasses', price: '$28.99' },
  { id: 2, emoji: '💻', name: 'Adjustable Laptop Stand', price: '$34.99' },
  { id: 3, emoji: '👜', name: 'Leather Crossbody Bag', price: '$54.99' },
  { id: 4, emoji: '🌿', name: 'Indoor Plant Collection 3-Pack', price: '$39.99' },
  { id: 5, emoji: '🍳', name: 'Non-Stick Cookware Set 5pc', price: '$89.00' },
];

const UserWishlist = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-5">
        <UserPageHeader
          title={
            <span>
              My <span className="text-teal">Wishlist</span>
            </span>
          }
          subtitle="5 items saved · Share or add to cart"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 min-[580px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-card overflow-hidden rounded-md border border-white/[0.07] transition-all hover:-translate-y-0.5 hover:border-teal/30"
          >
            <div className="bg-navy3 relative flex h-31 items-center justify-center border-b border-white/[0.07] text-[2.3rem]">
              {item.emoji}
              <button
                type="button"
                className="text-gray hover:text-red absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/30 text-[0.72rem]"
              >
                ✕
              </button>
            </div>
            <div className="p-3">
              <div className="mb-1 text-[0.8rem] font-medium text-white">{item.name}</div>
              <div className="font-['Syne'] text-[0.92rem] font-bold text-white">{item.price}</div>
              <button
                type="button"
                className="bg-teal text-navy hover:bg-teal2 mt-2 w-full rounded px-3 py-1.5 text-[0.76rem] font-medium"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserWishlist;
