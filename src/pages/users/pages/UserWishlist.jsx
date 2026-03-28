import React from 'react';
import UserPageHeader from '../components/UserPageHeader';

const wishlistItems = [
  { id: 1, image: 'https://loremflickr.com/300/300/fashion?seed=4', name: 'Premium Polarized Sunglasses', price: '$28.99' },
  { id: 2, image: 'https://loremflickr.com/300/300/furniture?seed=3', name: 'Adjustable Laptop Stand', price: '$34.99' },
  { id: 3, image: 'https://loremflickr.com/300/300/fashion?seed=5', name: 'Leather Crossbody Bag', price: '$54.99' },
  { id: 4, image: 'https://loremflickr.com/300/300/plants?seed=1', name: 'Indoor Plant Collection 3-Pack', price: '$39.99' },
  { id: 5, image: 'https://loremflickr.com/300/300/food?seed=1', name: 'Non-Stick Cookware Set 5pc', price: '$89.00' },
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
            className="group bg-card overflow-hidden rounded-md border border-white/[0.07] transition-all hover:-translate-y-0.5 hover:border-teal/30"
          >
            <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#0F172A]">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <button
                type="button"
                className="text-gray hover:text-red absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/30 text-[0.72rem]"
              >
                ✕
              </button>
            </div>
            <div className="p-3">
              <div className="mb-1 text-[0.875rem] xl:text-[1rem] font-medium text-white">{item.name}</div>
              <div className="font-['Syne'] text-[0.875rem] font-bold text-white">{item.price}</div>
              <button
                type="button"
                className="bg-teal text-navy hover:bg-teal2 mt-2 w-full rounded px-3 py-1.5 text-[0.74rem] font-medium"
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
