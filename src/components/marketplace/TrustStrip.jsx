import React from 'react';

const TrustStrip = () => {
  const trustItems = [
    { icon: '🚚', title: 'Free Delivery', subtitle: 'On orders over $50' },
    { icon: '🔒', title: 'Secure Payments', subtitle: 'Stripe-powered checkout' },
    { icon: '↩️', title: 'Easy Returns', subtitle: '30-day return policy' },
    { icon: '💬', title: '24/7 Support', subtitle: 'Chat, email & phone' },
  ];

  return (
    <div className="bg-navy2 border-y border-white/10 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-gray">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
