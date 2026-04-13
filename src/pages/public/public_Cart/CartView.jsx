import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Lock, Home } from 'lucide-react';

const initialCartItems = [
  {
    id: 1,
    icon: '\u{1F4F1}',
    store: 'TechZone MN',
    name: 'Wireless Earbuds Pro Max',
    variant: 'Color: Black · In Stock',
    qty: 1,
    price: 49.99,
    old: 89.99,
    off: 44,
  },
  {
    id: 2,
    icon: '\u{1F45F}',
    store: 'SoleStyle',
    name: 'Urban Runner Sneakers',
    variant: 'Size: 10 · Color: White',
    qty: 1,
    price: 64.99,
    old: 110.0,
    off: 41,
  },
  {
    id: 3,
    icon: '\u{1F3A7}',
    store: 'AudioPro',
    name: 'Studio Headphones - Deep Bass',
    variant: 'Color: Midnight Black',
    qty: 2,
    price: 79.99,
    old: 149.99,
    off: 47,
  },
  {
    id: 4,
    icon: '\u{1F373}',
    store: 'HomeChef',
    name: 'Non-Stick Cookware Set 5pc',
    variant: 'Color: Graphite',
    qty: 1,
    price: 89.0,
    old: 149.0,
    off: 40,
  },
  {
    id: 5,
    icon: '\u{1F576}\uFE0F',
    store: 'VisionX',
    name: 'Premium Polarized Sunglasses',
    variant: 'Frame: Tortoise',
    qty: 1,
    price: 28.99,
    old: 59.99,
    off: 52,
  },
];

const CartView = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [selectedShipping, setSelectedShipping] = useState({ name: 'Standard Delivery', cost: 0 });
  const [processing, setProcessing] = useState(false);

  const changeQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, Math.min(99, item.qty + delta)) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount + selectedShipping.cost) * 0.075;
  const total = subtotal - discount + selectedShipping.cost + tax;

  const applyCoupon = () => {
    const val = couponCode.trim().toUpperCase();
    if (val === 'ESUUQ10' || val === 'SAVE10') {
      setCouponApplied(true);
      setCouponError(false);
    } else {
      setCouponError(true);
      setTimeout(() => setCouponError(false), 1500);
    }
  };

  const goTo = (step) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const placeOrder = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      goTo(4);
    }, 2000);
  };

  const steps = [
    { num: 1, label: 'Cart' },
    { num: 2, label: 'Shipping' },
    { num: 3, label: 'Payment' },
    { num: 4, label: 'Confirm' },
  ];

  const shippingOptions = [
    { name: 'Standard Delivery', days: '5–7 business days', cost: 0 },
    { name: 'Express Delivery', days: '2–3 business days', cost: 7.99 },
    { name: '⚡ Next Day Delivery', days: 'Tomorrow by 8 PM', cost: 19.99 },
  ];

  const paymentMethods = [
    {
      id: 'card',
      icon: '\u{1F4B3}',
      name: 'Credit / Debit Card',
      desc: 'Visa, Mastercard, Amex, Discover',
      logos: [
        { src: 'https://media.assettype.com/sunstar/2025-11-12/8w4ntbmy/visa-logo-800x450.webp?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true', alt: 'Visa' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/250px-MasterCard_Logo.svg.png', alt: 'Mastercard' },
        { src: '/img/payments/american-express.svg', alt: 'American Express' },
        { src: '/img/payments/discover.svg', alt: 'Discover' },
      ],
    },
    {
      id: 'stripe',
      icon: '\u26A1',
      name: 'Stripe Pay',
      desc: 'Fast, secure one-click payment',
      logos: [{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_b7cYDTEaXxYsRDAdsVXYknigIr16CNbZQ&s', alt: 'Stripe' }],
    },
    {
      id: 'paypal',
      icon: '\u{1F17F}\uFE0F',
      name: 'PayPal',
      desc: 'Pay with your PayPal account',
      logos: [{ src: 'https://www.top-bank.ch/images/logo_540/paypal.png', alt: 'PayPal' }],
    },
    {
      id: 'apple',
      icon: '\u{1F34E}',
      name: 'Apple Pay',
      desc: 'Touch ID / Face ID payment',
      logos: [{ src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/960px-Apple_Pay_logo.svg.png', alt: 'Apple' }],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <div className="bg-navy2 border-b border-white/[0.07] px-3 py-3 min-[480px]:px-4 min-[640px]:px-8">
        <div className=" flex container mx-auto items-center overflow-x-auto">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <div className="flex items-center gap-1 min-[480px]:gap-2 shrink-0">
                <div
                  className={`flex h-6 w-6 min-[480px]:h-7 min-[480px]:w-7 shrink-0 items-center justify-center rounded-full font-['Syne'] text-[0.65rem] min-[480px]:text-xs font-bold transition-all ${
                    currentStep > step.num
                      ? 'border-teal bg-teal/10 text-teal border-2'
                      : currentStep === step.num
                        ? 'border-teal bg-teal text-navy border-2'
                        : 'text-gray border-2 border-white/[0.07]'
                  }`}
                >
                  {currentStep > step.num ? '✓' : step.num}
                </div>
                <span
                  className={`text-[0.65rem] min-[480px]:text-[0.72rem] min-[640px]:text-[0.78rem] font-medium transition-colors ${
                    currentStep >= step.num ? 'text-teal' : 'text-gray'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-1 min-[480px]:mx-2 h-px flex-1 transition-colors ${
                    currentStep > step.num ? 'bg-teal' : 'bg-white/[0.07]'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div
        className={`mx-auto container gap-6 min-[900px]:gap-8 px-3 min-[480px]:px-4 min-[640px]:px-8 py-6 min-[640px]:py-8 ${
          currentStep === 4
            ? 'block'
            : 'grid grid-cols-1 items-start min-[1024px]:grid-cols-[1fr_380px]'
        }`}
      >
        {/* Left Column */}
        <div>
          {/* Step 1: Cart */}
          {currentStep === 1 && (
            <div className="animate-fadeUp">
              <div className="bg-card mb-4 min-[640px]:mb-5 overflow-hidden rounded-md border border-white/[0.07]">
                <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between border-b border-white/[0.07] px-4 min-[480px]:px-5 py-3 min-[480px]:py-4 gap-2 min-[480px]:gap-0">
                  <h2 className="font-['Syne'] text-sm min-[480px]:text-base font-bold text-white">
                    🛒 Your Cart{' '}
                    <span className="text-gray text-xs min-[480px]:text-sm font-normal">({totalQty} items)</span>
                  </h2>
                  {subtotal > 50 && (
                    <span className="border-teal/25 bg-teal/10 text-teal inline-flex items-center gap-1 min-[480px]:gap-1.5 rounded-full border px-2 min-[480px]:px-2.5 py-0.5 min-[480px]:py-1 text-[0.65rem] min-[480px]:text-[0.72rem] whitespace-nowrap">
                      Free shipping on this order!
                    </span>
                  )}
                </div>
                <div className="px-3 min-[480px]:px-5 py-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col min-[480px]:grid min-[480px]:grid-cols-[60px_1fr_auto] min-[640px]:grid-cols-[72px_1fr_auto] gap-3 min-[480px]:gap-4 border-b border-white/[0.07] py-3 min-[480px]:py-4 first:pt-0 last:border-b-0 last:pb-0"
                    >
                      <div className="bg-navy3 flex h-14 min-[480px]:h-16 min-[640px]:h-18 w-14 min-[480px]:w-16 min-[640px]:w-18 shrink-0 items-center justify-center rounded text-lg min-[480px]:text-xl min-[640px]:text-[2rem]">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-teal mb-0.5 text-[0.6rem] min-[480px]:text-[0.65rem] font-bold tracking-widest uppercase">
                          {item.store}
                        </div>
                        <div className="mb-1 text-[0.75rem] min-[480px]:text-[0.9rem] leading-snug font-medium text-white">
                          {item.name}
                        </div>
                        <div className="text-gray text-[0.65rem] min-[480px]:text-[0.75rem]">{item.variant}</div>
                        <div className="mt-2 flex flex-wrap items-center gap-1.5 min-[480px]:gap-2">
                          <div className="flex overflow-hidden rounded border border-white/[0.07]">
                            <button
                              onClick={() => changeQty(item.id, -1)}
                              className="bg-navy3 hover:bg-navy2 flex h-6 w-6 min-[480px]:h-7 min-[480px]:w-7 items-center justify-center text-[0.8rem] min-[480px]:text-[0.9rem] text-white transition-colors"
                            >
                              −
                            </button>
                            <input
                              type="text"
                              value={item.qty}
                              readOnly
                              className="h-6 w-8 min-[480px]:h-7 min-[480px]:w-9 border-none bg-transparent text-center font-['DM_Sans'] text-[0.75rem] min-[480px]:text-[0.85rem] text-white outline-none"
                            />
                            <button
                              onClick={() => changeQty(item.id, 1)}
                              className="bg-navy3 hover:bg-navy2 flex h-6 w-6 min-[480px]:h-7 min-[480px]:w-7 items-center justify-center text-[0.8rem] min-[480px]:text-[0.9rem] text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button className="text-gray hover:text-teal bg-transparent px-1.5 min-[480px]:px-2 py-0.5 min-[480px]:py-1 text-[0.65rem] min-[480px]:text-[0.78rem] transition-colors whitespace-nowrap">
                            ♡ Save
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray hover:text-red bg-transparent px-1.5 min-[480px]:px-2 py-0.5 min-[480px]:py-1 text-[0.65rem] min-[480px]:text-[0.78rem] transition-colors whitespace-nowrap"
                          >
                            ✕ Remove
                          </button>
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="font-['Syne'] text-sm min-[480px]:text-base font-bold text-white">
                          ${(item.price * item.qty).toFixed(2)}
                        </div>
                        <div className="text-gray mt-0.5 text-[0.65rem] min-[480px]:text-[0.75rem] line-through">
                          ${(item.old * item.qty).toFixed(2)}
                        </div>
                        <div className="text-red mt-0.5 text-[0.6rem] min-[480px]:text-[0.7rem]">-{item.off}%</div>
                      </div>
                    </div>
                  ))}

                  {/* Coupon */}
                  <div className="mt-3 min-[480px]:mt-4 border-t border-white/[0.07] pt-3 min-[480px]:pt-4">
                    <div className="text-gray2 mb-2 text-[0.75rem] min-[480px]:text-[0.82rem] font-medium">
                      🏷 Have a coupon code?
                    </div>
                    <div className="flex flex-col min-[480px]:flex-row gap-2 min-[480px]:gap-3">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className={`bg-navy3 placeholder:text-gray flex-1 rounded px-3 min-[480px]:px-4 py-2 min-[480px]:py-2.5 font-['DM_Sans'] text-[0.8rem] min-[480px]:text-[0.85rem] text-white transition-colors outline-none ${
                          couponError
                            ? 'border-red border'
                            : 'focus:border-teal border border-white/[0.07]'
                        }`}
                      />
                      <button
                        onClick={applyCoupon}
                        className="bg-navy3 text-teal hover:border-teal hover:bg-teal/10 rounded border border-white/[0.07] px-4 min-[480px]:px-5 py-2 min-[480px]:py-2.5 font-['DM_Sans'] text-[0.75rem] min-[480px]:text-[0.82rem] font-medium whitespace-nowrap transition-all"
                      >
                        Apply
                      </button>
                    </div>
                    {couponApplied && (
                      <div className="mt-2 flex items-center gap-1.5 text-[0.7rem] min-[480px]:text-[0.78rem] text-green-500">
                        ✓ Coupon <strong>ESUUQ10</strong> applied — 10% off!
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col min-[640px]:flex-row justify-end">
                <button
                  onClick={() => goTo(2)}
                  className="bg-teal text-navy hover:bg-teal2 w-full min-[640px]:w-auto rounded px-4 min-[640px]:px-6 py-3 font-['DM_Sans'] text-[0.8rem] min-[640px]:text-[0.85rem] font-medium transition-all hover:-translate-y-0.5"
                >
                  Continue to Shipping →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Shipping */}
          {currentStep === 2 && (
            <div className="animate-fadeUp">
              <div className="bg-card mb-4 min-[640px]:mb-5 overflow-hidden rounded-md border border-white/[0.07]">
                <div className="border-b border-white/[0.07] px-4 min-[480px]:px-5 py-3 min-[480px]:py-4">
                  <h2 className="font-['Syne'] text-sm min-[480px]:text-base font-bold text-white">
                    📦 Shipping Address
                  </h2>
                </div>
                <div className="px-4 min-[480px]:px-5 py-4 min-[480px]:py-5">
                  <div className="grid grid-cols-1 gap-3 min-[480px]:gap-4 min-[580px]:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        First Name
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        Last Name
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="col-span-full flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="col-span-full flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="col-span-full flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        Street Address
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="123 Main Street, Apt 4B"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        City
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="Savage"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        State
                      </label>
                      <select className="bg-navy3 focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none">
                        <option value="">Select State</option>
                        <option>Minnesota</option>
                        <option>Iowa</option>
                        <option>Wisconsin</option>
                        <option>Illinois</option>
                        <option>Ohio</option>
                        <option>Michigan</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        Zip Code
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="55378"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                        Country
                      </label>
                      <select className="bg-navy3 focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>

                  <h3 className="mt-4 min-[480px]:mt-5 mb-2 min-[480px]:mb-3 font-['Syne'] text-[0.75rem] min-[480px]:text-[0.85rem] font-bold tracking-wide text-white">
                    🚚 Shipping Method
                  </h3>
                  <div className="flex flex-col gap-2 min-[480px]:gap-2.5">
                    {shippingOptions.map((opt) => (
                      <div
                        key={opt.name}
                        onClick={() => setSelectedShipping(opt)}
                        className={`flex cursor-pointer items-center gap-3 rounded border px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 transition-colors ${
                          selectedShipping.name === opt.name
                            ? 'border-teal bg-teal/5'
                            : 'bg-navy3 hover:border-teal/30 border-white/[0.07]'
                        }`}
                      >
                        <div
                          className={`flex h-3 w-3 min-[480px]:h-3.5 min-[480px]:w-3.5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            selectedShipping.name === opt.name ? 'border-teal' : 'border-gray'
                          }`}
                        >
                          {selectedShipping.name === opt.name && (
                            <div className="bg-teal h-1 w-1 min-[480px]:h-1.5 min-[480px]:w-1.5 rounded-full" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[0.75rem] min-[480px]:text-[0.85rem] font-medium text-white">{opt.name}</div>
                          <div className="text-gray text-[0.65rem] min-[480px]:text-[0.72rem]">{opt.days}</div>
                        </div>
                        <div
                          className={`text-[0.75rem] min-[480px]:text-[0.85rem] font-medium whitespace-nowrap ${opt.cost === 0 ? 'text-green-500' : 'text-white'}`}
                        >
                          {opt.cost === 0 ? 'FREE' : `$${opt.cost.toFixed(2)}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col min-[480px]:flex-row justify-between gap-2 min-[480px]:gap-3">
                <button
                  onClick={() => goTo(1)}
                  className="hover:border-teal hover:text-teal rounded border border-white/[0.07] bg-transparent px-4 min-[480px]:px-6 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.85rem] text-white transition-all order-2 min-[480px]:order-1"
                >
                  ← Back to Cart
                </button>
                <button
                  onClick={() => goTo(3)}
                  className="bg-teal text-navy hover:bg-teal2 rounded px-4 min-[480px]:px-6 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.85rem] font-medium transition-all hover:-translate-y-0.5 order-1 min-[480px]:order-2"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <div className="animate-fadeUp">
              <div className="bg-card mb-4 min-[640px]:mb-5 overflow-hidden rounded-md border border-white/[0.07]">
                <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between border-b border-white/[0.07] px-4 min-[480px]:px-5 py-3 min-[480px]:py-4 gap-2 min-[480px]:gap-0">
                  <h2 className="font-['Syne'] text-sm min-[480px]:text-base font-bold text-white flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-white" />
                    Payment Details
                  </h2>
                  <span className="border-teal/25 bg-teal/10 text-teal inline-flex items-center gap-1 min-[480px]:gap-1.5 rounded border px-2 min-[480px]:px-2.5 py-0.5 min-[480px]:py-1 text-[0.65rem] min-[480px]:text-[0.72rem] whitespace-nowrap">
                    <Lock className="h-3 w-3" />
                    <span>256-bit SSL</span>
                  </span>
                </div>
                <div className="px-4 min-[480px]:px-5 py-4 min-[480px]:py-5">
                  <div className="mb-4 min-[480px]:mb-5 flex flex-col gap-2.5 min-[480px]:gap-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`flex cursor-pointer items-center gap-1 min-[480px]:gap-2 rounded border px-3 min-[480px]:px-4 py-3 min-[480px]:py-3.5 transition-all ${
                          selectedPayment === method.id
                            ? 'border-teal bg-teal/10'
                            : 'bg-navy3 hover:border-teal/30 border-white/[0.07]'
                        }`}
                      >
                        <div
                          className={`flex h-3.5 w-3.5 min-[480px]:h-4 min-[480px]:w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            selectedPayment === method.id ? 'border-teal' : 'border-gray'
                          }`}
                        >
                          {selectedPayment === method.id && (
                            <div className="bg-teal h-1.5 w-1.5 min-[480px]:h-2 min-[480px]:w-2 rounded-full" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[0.8rem] min-[480px]:text-[0.88rem] font-medium text-white">{method.name}</div>
                          <div className="text-gray text-[0.65rem] min-[480px]:text-[0.72rem]">{method.desc}</div>
                        </div>
                        {method.logos.length > 0 && (
                          <div className="ml-auto hidden min-[480px]:flex gap-2 items-center">
                            {method.logos.map((logo, idx) => (
                              <div
                                key={logo.alt || idx}
                                className="bg-white rounded-sm p-1 border border-white/[0.06] flex items-center justify-center h-6 w-12"
                              >
                                <img
                                  src={logo.src || logo}
                                  alt={logo.alt || `logo-${idx}`}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {selectedPayment === 'card' && (
                    <div className="space-y-2.5 min-[480px]:space-y-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                          Cardholder Name
                        </label>
                        <input
                          className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                          Card Number
                        </label>
                        <input
                          className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 min-[480px]:gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                            Expiry Date
                          </label>
                          <input
                            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                            placeholder="MM / YY"
                            maxLength={7}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-gray text-[0.7rem] min-[480px]:text-[0.75rem] font-medium tracking-widest uppercase">
                            CVV
                          </label>
                          <input
                            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.88rem] text-white transition-colors outline-none"
                            placeholder="•••"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-navy3 text-gray mt-4 min-[480px]:mt-5 flex items-center gap-2 rounded border border-white/[0.07] px-3 min-[480px]:px-4 py-2.5 min-[480px]:py-3 text-[0.7rem] min-[480px]:text-[0.78rem]">
                    <Lock className="h-4 w-4 text-teal" />
                    <span>Your payment is secured and encrypted. We never store your card details.</span>
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-card mb-4 min-[640px]:mb-5 overflow-hidden rounded-md border border-white/[0.07]">
                <div className="border-b border-white/[0.07] px-4 min-[480px]:px-5 py-3 min-[480px]:py-4">
                  <h2 className="font-['Syne'] text-sm min-[480px]:text-base font-bold text-white flex items-center gap-2">
                    <Home className="h-4 w-4 text-white" />
                    Billing Address
                  </h2>
                </div>
                <div className="px-4 min-[480px]:px-5 py-3 min-[480px]:py-4">
                  <label className="flex cursor-pointer items-center gap-2.5 text-[0.8rem] min-[480px]:text-[0.85rem] text-white">
                    <input type="checkbox" defaultChecked className="accent-teal h-4 w-4" />
                    Same as shipping address
                  </label>
                </div>
              </div>

              <div className="flex flex-col min-[480px]:flex-row justify-between gap-2 min-[480px]:gap-3">
                <button
                  onClick={() => goTo(2)}
                  className="hover:border-teal hover:text-teal rounded border border-white/[0.07] bg-transparent px-4 min-[480px]:px-6 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.85rem] text-white transition-all order-2 min-[480px]:order-1"
                >
                  ← Back to Shipping
                </button>
                <button
                  onClick={placeOrder}
                  className="bg-teal text-navy hover:bg-teal2 rounded px-4 min-[480px]:px-6 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.85rem] font-medium transition-all hover:-translate-y-0.5 order-1 min-[480px]:order-2"
                >
                  Place Order →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {currentStep === 4 && (
            <div className="col-span-full animate-fadeUp py-8 min-[640px]:py-16 px-4 min-[640px]:px-0 text-center">
              <div className="animate-pop text-[3rem] min-[480px]:text-[4rem] min-[640px]:text-[5rem]">✅</div>
              <h1 className="mb-2 min-[480px]:mb-3 font-['Syne'] text-xl min-[480px]:text-2xl min-[640px]:text-[2rem] font-extrabold text-white">
                Order Placed!
              </h1>
              <p className="text-gray mx-auto mb-6 min-[480px]:mb-8 max-w-120 text-sm min-[480px]:text-base leading-relaxed">
                Thank you for shopping with ESUUQ. Your order has been confirmed and is being
                processed by our merchants.
              </p>
              <div className="border-teal/30 bg-teal/10 text-teal mb-6 min-[480px]:mb-8 inline-flex items-center gap-2 min-[480px]:gap-2.5 rounded border px-4 min-[480px]:px-5 py-2 min-[480px]:py-2.5 font-['Syne'] text-sm min-[480px]:text-base font-bold">
                📦 Order #ESQ-2026-00847
              </div>
              <div className="flex flex-col min-[480px]:flex-row flex-wrap justify-center gap-2 min-[480px]:gap-4">
                <Link
                  to="/"
                  className="bg-teal text-navy hover:bg-teal2 rounded px-6 min-[480px]:px-8 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.85rem] font-medium no-underline transition-colors"
                >
                  Continue Shopping
                </Link>
                <button className="hover:border-teal hover:text-teal rounded border border-white/[0.07] bg-transparent px-6 min-[480px]:px-8 py-2.5 min-[480px]:py-3 text-[0.8rem] min-[480px]:text-[0.85rem] text-white transition-all">
                  Track Your Order
                </button>
              </div>

              {/* Timeline */}
              <div className="mx-auto mt-8 min-[480px]:mt-12 max-w-100 px-4 min-[480px]:px-0 text-left">
                <h3 className="mb-4 text-center font-['Syne'] text-[0.75rem] min-[480px]:text-[0.85rem] font-bold tracking-widest text-white uppercase">
                  Order Timeline
                </h3>
                {[
                  { label: '✅ Order Confirmed', time: 'Just now', active: true },
                  { label: '📦 Merchant Processing', time: 'Within 1–2 hours', active: false },
                  { label: '🚚 Out for Delivery', time: 'Estimated 5–7 days', active: false },
                  { label: '🏠 Delivered', time: 'To your doorstep', active: false },
                ].map((item, i, arr) => (
                  <div key={i} className="mb-4 min-[480px]:mb-5 flex gap-3 min-[480px]:gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-3 w-3 min-[480px]:h-3.5 min-[480px]:w-3.5 shrink-0 rounded-full ${
                          item.active ? 'bg-teal' : 'bg-navy3 border-2 border-white/[0.07]'
                        }`}
                      />
                      {i < arr.length - 1 && (
                        <div className="min-h-6 w-px flex-1 bg-white/[0.07]" />
                      )}
                    </div>
                    <div>
                      <div className="text-[0.8rem] min-[480px]:text-[0.85rem] font-medium text-white">{item.label}</div>
                      <div className="text-gray text-[0.65rem] min-[480px]:text-[0.72rem]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        {currentStep !== 4 && (
          <div className="bg-card sticky top-20 rounded-md border border-white/[0.07] p-3 min-[480px]:p-4 min-[640px]:p-5">
            <h3 className="mb-3 min-[480px]:mb-4 min-[640px]:mb-5 font-['Syne'] text-sm min-[480px]:text-base font-bold text-white">Order Summary</h3>
            <div className="mb-4 min-[640px]:mb-5">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-2.5 min-[480px]:mb-3 flex items-center gap-2.5 min-[640px]:gap-3">
                  <div className="bg-navy3 flex h-9 min-[480px]:h-10 min-[640px]:h-11 w-9 min-[480px]:w-10 min-[640px]:w-11 shrink-0 items-center justify-center rounded text-base min-[480px]:text-lg min-[640px]:text-xl">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.7rem] min-[480px]:text-[0.75rem] min-[640px]:text-[0.8rem] leading-tight text-white truncate">{item.name}</div>
                    <div className="text-gray text-[0.6rem] min-[480px]:text-[0.65rem] min-[640px]:text-[0.72rem]">Qty: {item.qty}</div>
                  </div>
                  <div className="text-[0.75rem] min-[480px]:text-[0.8rem] min-[640px]:text-[0.85rem] font-medium whitespace-nowrap text-white">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/[0.07] pt-2.5 min-[480px]:pt-3 min-[640px]:pt-3">
              <div className="flex justify-between py-1 min-[480px]:py-1.5 text-[0.7rem] min-[480px]:text-[0.8rem] min-[640px]:text-[0.85rem]">
                <span className="text-gray">Subtotal ({totalQty} items)</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between py-1 min-[480px]:py-1.5 text-[0.7rem] min-[480px]:text-[0.8rem] min-[640px]:text-[0.85rem]">
                  <span className="text-gray">Coupon (ESUUQ10)</span>
                  <span className="text-green-500">−${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between py-1 min-[480px]:py-1.5 text-[0.7rem] min-[480px]:text-[0.8rem] min-[640px]:text-[0.85rem]">
                <span className="text-gray">Shipping</span>
                <span className={selectedShipping.cost === 0 ? 'text-green-500' : 'text-white'}>
                  {selectedShipping.cost === 0 ? 'FREE' : `$${selectedShipping.cost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between py-1 min-[480px]:py-1.5 text-[0.7rem] min-[480px]:text-[0.8rem] min-[640px]:text-[0.85rem]">
                <span className="text-gray">Tax (7.5%)</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="mt-2 min-[480px]:mt-2.5 min-[640px]:mt-3 flex items-center justify-between border-t border-white/[0.07] pt-2.5 min-[480px]:pt-3 min-[640px]:pt-3">
                <span className="font-['Syne'] text-[0.85rem] min-[480px]:text-[0.9rem] min-[640px]:text-[0.95rem] font-bold text-white">Total</span>
                <span className="text-teal font-['Syne'] text-lg min-[480px]:text-xl min-[640px]:text-xl font-extrabold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                if (currentStep === 1) goTo(2);
                else if (currentStep === 2) goTo(3);
                else if (currentStep === 3) placeOrder();
              }}
              disabled={processing}
              className="bg-teal text-navy hover:bg-teal2 mt-4 min-[640px]:mt-5 w-full rounded py-3 min-[640px]:py-4 font-['Syne'] text-[0.75rem] min-[480px]:text-[0.85rem] min-[640px]:text-[0.95rem] font-bold tracking-wide transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing
                ? '⏳ Processing...'
                : currentStep === 1
                  ? 'Proceed to Shipping →'
                  : currentStep === 2
                    ? 'Continue to Payment →'
                    : 'Place Order →'}
            </button>
            <div className="text-gray mt-2.5 min-[640px]:mt-3.5 flex items-center justify-center gap-2 text-[0.65rem] min-[480px]:text-[0.7rem] min-[640px]:text-[0.72rem]">
              <Lock className="h-4 w-4" />
              <span>Secure & encrypted checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
