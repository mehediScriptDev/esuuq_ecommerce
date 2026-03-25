import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      logos: ['VISA', 'MC'],
    },
    {
      id: 'stripe',
      icon: '\u26A1',
      name: 'Stripe Pay',
      desc: 'Fast, secure one-click payment',
      logos: ['Stripe'],
    },
    {
      id: 'paypal',
      icon: '\u{1F17F}\uFE0F',
      name: 'PayPal',
      desc: 'Pay with your PayPal account',
      logos: [],
    },
    {
      id: 'apple',
      icon: '\u{1F34E}',
      name: 'Apple Pay',
      desc: 'Touch ID / Face ID payment',
      logos: [],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <div className="bg-navy2 border-b border-white/[0.07] px-4 py-4 min-[640px]:px-8">
        <div className=" flex container mx-auto items-center">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-['Syne'] text-xs font-bold transition-all ${
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
                  className={`text-[0.78rem] font-medium transition-colors ${
                    currentStep >= step.num ? 'text-teal' : 'text-gray'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-2 h-px flex-1 transition-colors ${
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
        className={`mx-auto container gap-8 px-4 py-8 min-[640px]:px-8 ${
          currentStep === 4
            ? 'block'
            : 'grid grid-cols-1 items-start min-[900px]:grid-cols-[1fr_380px]'
        }`}
      >
        {/* Left Column */}
        <div>
          {/* Step 1: Cart */}
          {currentStep === 1 && (
            <div className="animate-fadeUp">
              <div className="bg-card mb-5 overflow-hidden rounded-md border border-white/[0.07]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <h2 className="font-['Syne'] text-base font-bold text-white">
                    🛒 Your Cart{' '}
                    <span className="text-gray text-sm font-normal">({totalQty} items)</span>
                  </h2>
                  {subtotal > 50 && (
                    <span className="border-teal/25 bg-teal/10 text-teal inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.72rem]">
                      Free shipping on this order!
                    </span>
                  )}
                </div>
                <div className="px-5 py-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-[72px_1fr_auto] gap-4 border-b border-white/[0.07] py-4 first:pt-0 last:border-b-0 last:pb-0"
                    >
                      <div className="bg-navy3 flex h-18 w-18 shrink-0 items-center justify-center rounded text-[2rem]">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-teal mb-0.5 text-[0.65rem] font-bold tracking-widest uppercase">
                          {item.store}
                        </div>
                        <div className="mb-1 text-[0.9rem] leading-snug font-medium text-white">
                          {item.name}
                        </div>
                        <div className="text-gray text-[0.75rem]">{item.variant}</div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex overflow-hidden rounded border border-white/[0.07]">
                            <button
                              onClick={() => changeQty(item.id, -1)}
                              className="bg-navy3 hover:bg-navy2 flex h-7 w-7 items-center justify-center text-[0.9rem] text-white transition-colors"
                            >
                              −
                            </button>
                            <input
                              type="text"
                              value={item.qty}
                              readOnly
                              className="h-7 w-9 border-none bg-transparent text-center font-['DM_Sans'] text-[0.85rem] text-white outline-none"
                            />
                            <button
                              onClick={() => changeQty(item.id, 1)}
                              className="bg-navy3 hover:bg-navy2 flex h-7 w-7 items-center justify-center text-[0.9rem] text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button className="text-gray hover:text-teal bg-transparent px-2 py-1 text-[0.78rem] transition-colors">
                            ♡ Save
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray hover:text-red bg-transparent px-2 py-1 text-[0.78rem] transition-colors"
                          >
                            ✕ Remove
                          </button>
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="font-['Syne'] text-base font-bold text-white">
                          ${(item.price * item.qty).toFixed(2)}
                        </div>
                        <div className="text-gray mt-0.5 text-[0.75rem] line-through">
                          ${(item.old * item.qty).toFixed(2)}
                        </div>
                        <div className="text-red mt-0.5 text-[0.7rem]">-{item.off}%</div>
                      </div>
                    </div>
                  ))}

                  {/* Coupon */}
                  <div className="mt-4 border-t border-white/[0.07] pt-4">
                    <div className="text-gray2 mb-2 text-[0.82rem] font-medium">
                      🏷 Have a coupon code?
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className={`bg-navy3 placeholder:text-gray flex-1 rounded px-4 py-2.5 font-['DM_Sans'] text-[0.85rem] text-white transition-colors outline-none ${
                          couponError
                            ? 'border-red border'
                            : 'focus:border-teal border border-white/[0.07]'
                        }`}
                      />
                      <button
                        onClick={applyCoupon}
                        className="bg-navy3 text-teal hover:border-teal hover:bg-teal/10 rounded border border-white/[0.07] px-5 py-2.5 font-['DM_Sans'] text-[0.82rem] font-medium whitespace-nowrap transition-all"
                      >
                        Apply
                      </button>
                    </div>
                    {couponApplied && (
                      <div className="mt-2 flex items-center gap-1.5 text-[0.78rem] text-green-500">
                        ✓ Coupon <strong>ESUUQ10</strong> applied — 10% off!
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => goTo(2)}
                  className="bg-teal text-navy hover:bg-teal2 rounded px-6 py-3 font-['DM_Sans'] text-[0.85rem] font-medium transition-all hover:-translate-y-0.5"
                >
                  Continue to Shipping →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Shipping */}
          {currentStep === 2 && (
            <div className="animate-fadeUp">
              <div className="bg-card mb-5 overflow-hidden rounded-md border border-white/[0.07]">
                <div className="border-b border-white/[0.07] px-5 py-4">
                  <h2 className="font-['Syne'] text-base font-bold text-white">
                    📦 Shipping Address
                  </h2>
                </div>
                <div className="px-5 py-5">
                  <div className="grid grid-cols-1 gap-4 min-[580px]:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        First Name
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        Last Name
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="col-span-full flex flex-col gap-1.5">
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="col-span-full flex flex-col gap-1.5">
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="col-span-full flex flex-col gap-1.5">
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        Street Address
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="123 Main Street, Apt 4B"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        City
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="Savage"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        State
                      </label>
                      <select className="bg-navy3 focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none">
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
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        Zip Code
                      </label>
                      <input
                        className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                        placeholder="55378"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                        Country
                      </label>
                      <select className="bg-navy3 focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>

                  <h3 className="mt-5 mb-3 font-['Syne'] text-[0.85rem] font-bold tracking-wide text-white">
                    🚚 Shipping Method
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {shippingOptions.map((opt) => (
                      <div
                        key={opt.name}
                        onClick={() => setSelectedShipping(opt)}
                        className={`flex cursor-pointer items-center gap-3 rounded border px-4 py-3 transition-colors ${
                          selectedShipping.name === opt.name
                            ? 'border-teal bg-teal/5'
                            : 'bg-navy3 hover:border-teal/30 border-white/[0.07]'
                        }`}
                      >
                        <div
                          className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            selectedShipping.name === opt.name ? 'border-teal' : 'border-gray'
                          }`}
                        >
                          {selectedShipping.name === opt.name && (
                            <div className="bg-teal h-1.5 w-1.5 rounded-full" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-[0.85rem] font-medium text-white">{opt.name}</div>
                          <div className="text-gray text-[0.72rem]">{opt.days}</div>
                        </div>
                        <div
                          className={`text-[0.85rem] font-medium ${opt.cost === 0 ? 'text-green-500' : 'text-white'}`}
                        >
                          {opt.cost === 0 ? 'FREE' : `$${opt.cost.toFixed(2)}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => goTo(1)}
                  className="hover:border-teal hover:text-teal rounded border border-white/[0.07] bg-transparent px-6 py-3 text-[0.85rem] text-white transition-all"
                >
                  ← Back to Cart
                </button>
                <button
                  onClick={() => goTo(3)}
                  className="bg-teal text-navy hover:bg-teal2 rounded px-6 py-3 text-[0.85rem] font-medium transition-all hover:-translate-y-0.5"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <div className="animate-fadeUp">
              <div className="bg-card mb-5 overflow-hidden rounded-md border border-white/[0.07]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <h2 className="font-['Syne'] text-base font-bold text-white">
                    💳 Payment Details
                  </h2>
                  <span className="border-teal/25 bg-teal/10 text-teal flex items-center gap-1.5 rounded border px-2.5 py-1 text-[0.72rem]">
                    🔒 256-bit SSL
                  </span>
                </div>
                <div className="px-5 py-5">
                  <div className="mb-5 flex flex-col gap-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`flex cursor-pointer items-center gap-3 rounded border px-4 py-3.5 transition-all ${
                          selectedPayment === method.id
                            ? 'border-teal bg-teal/10'
                            : 'bg-navy3 hover:border-teal/30 border-white/[0.07]'
                        }`}
                      >
                        <div
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            selectedPayment === method.id ? 'border-teal' : 'border-gray'
                          }`}
                        >
                          {selectedPayment === method.id && (
                            <div className="bg-teal h-2 w-2 rounded-full" />
                          )}
                        </div>
                        <span className="text-xl">{method.icon}</span>
                        <div className="flex-1">
                          <div className="text-[0.88rem] font-medium text-white">{method.name}</div>
                          <div className="text-gray text-[0.72rem]">{method.desc}</div>
                        </div>
                        {method.logos.length > 0 && (
                          <div className="ml-auto flex gap-1">
                            {method.logos.map((logo) => (
                              <span
                                key={logo}
                                className="bg-navy2 text-gray2 rounded border border-white/[0.07] px-1.5 py-0.5 text-[0.65rem]"
                              >
                                {logo}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {selectedPayment === 'card' && (
                    <div className="space-y-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                          Cardholder Name
                        </label>
                        <input
                          className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                          Card Number
                        </label>
                        <input
                          className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-3 min-[580px]:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                            Expiry Date
                          </label>
                          <input
                            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                            placeholder="MM / YY"
                            maxLength={7}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-gray text-[0.75rem] font-medium tracking-widest uppercase">
                            CVV
                          </label>
                          <input
                            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white transition-colors outline-none"
                            placeholder="•••"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-navy3 text-gray mt-5 flex items-center gap-2 rounded border border-white/[0.07] px-4 py-3 text-[0.78rem]">
                    🔒 Your payment is secured and encrypted. We never store your card details.
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-card mb-5 overflow-hidden rounded-md border border-white/[0.07]">
                <div className="border-b border-white/[0.07] px-5 py-4">
                  <h2 className="font-['Syne'] text-base font-bold text-white">
                    🏠 Billing Address
                  </h2>
                </div>
                <div className="px-5 py-4">
                  <label className="flex cursor-pointer items-center gap-2.5 text-[0.85rem] text-white">
                    <input type="checkbox" defaultChecked className="accent-teal h-4 w-4" />
                    Same as shipping address
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => goTo(2)}
                  className="hover:border-teal hover:text-teal rounded border border-white/[0.07] bg-transparent px-6 py-3 text-[0.85rem] text-white transition-all"
                >
                  ← Back to Shipping
                </button>
                <button
                  onClick={placeOrder}
                  className="bg-teal text-navy hover:bg-teal2 rounded px-6 py-3 text-[0.85rem] font-medium transition-all hover:-translate-y-0.5"
                >
                  Place Order →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {currentStep === 4 && (
            <div className="col-span-full animate-fadeUp py-16 text-center">
              <div className="animate-pop text-[5rem]">✅</div>
              <h1 className="mb-3 font-['Syne'] text-[2rem] font-extrabold text-white">
                Order Placed!
              </h1>
              <p className="text-gray mx-auto mb-8 max-w-120 text-base leading-relaxed">
                Thank you for shopping with ESUUQ. Your order has been confirmed and is being
                processed by our merchants.
              </p>
              <div className="border-teal/30 bg-teal/10 text-teal mb-8 inline-flex items-center gap-2.5 rounded border px-5 py-2.5 font-['Syne'] text-base font-bold">
                📦 Order #ESQ-2026-00847
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="bg-teal text-navy hover:bg-teal2 rounded px-8 py-3 text-[0.85rem] font-medium no-underline transition-colors"
                >
                  Continue Shopping
                </Link>
                <button className="hover:border-teal hover:text-teal rounded border border-white/[0.07] bg-transparent px-8 py-3 text-[0.85rem] text-white transition-all">
                  Track Your Order
                </button>
              </div>

              {/* Timeline */}
              <div className="mx-auto mt-12 max-w-100 text-left">
                <h3 className="mb-4 text-center font-['Syne'] text-[0.85rem] font-bold tracking-widest text-white uppercase">
                  Order Timeline
                </h3>
                {[
                  { label: '✅ Order Confirmed', time: 'Just now', active: true },
                  { label: '📦 Merchant Processing', time: 'Within 1–2 hours', active: false },
                  { label: '🚚 Out for Delivery', time: 'Estimated 5–7 days', active: false },
                  { label: '🏠 Delivered', time: 'To your doorstep', active: false },
                ].map((item, i, arr) => (
                  <div key={i} className="mb-5 flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-3.5 w-3.5 shrink-0 rounded-full ${
                          item.active ? 'bg-teal' : 'bg-navy3 border-2 border-white/[0.07]'
                        }`}
                      />
                      {i < arr.length - 1 && (
                        <div className="min-h-6 w-px flex-1 bg-white/[0.07]" />
                      )}
                    </div>
                    <div>
                      <div className="text-[0.85rem] font-medium text-white">{item.label}</div>
                      <div className="text-gray text-[0.72rem]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        {currentStep !== 4 && (
          <div className="bg-card sticky top-20 rounded-md border border-white/[0.07] p-5">
            <h3 className="mb-5 font-['Syne'] text-base font-bold text-white">Order Summary</h3>
            <div className="mb-5">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-3 flex items-center gap-3">
                  <div className="bg-navy3 flex h-11 w-11 shrink-0 items-center justify-center rounded text-xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.8rem] leading-tight text-white">{item.name}</div>
                    <div className="text-gray text-[0.72rem]">Qty: {item.qty}</div>
                  </div>
                  <div className="text-[0.85rem] font-medium whitespace-nowrap text-white">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/[0.07] pt-3">
              <div className="flex justify-between py-1.5 text-[0.85rem]">
                <span className="text-gray">Subtotal ({totalQty} items)</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between py-1.5 text-[0.85rem]">
                  <span className="text-gray">Coupon (ESUUQ10)</span>
                  <span className="text-green-500">−${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between py-1.5 text-[0.85rem]">
                <span className="text-gray">Shipping</span>
                <span className={selectedShipping.cost === 0 ? 'text-green-500' : 'text-white'}>
                  {selectedShipping.cost === 0 ? 'FREE' : `$${selectedShipping.cost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between py-1.5 text-[0.85rem]">
                <span className="text-gray">Tax (7.5%)</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-white/[0.07] pt-3">
                <span className="font-['Syne'] text-[0.95rem] font-bold text-white">Total</span>
                <span className="text-teal font-['Syne'] text-xl font-extrabold">
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
              className="bg-teal text-navy hover:bg-teal2 mt-5 w-full rounded py-4 font-['Syne'] text-[0.95rem] font-bold tracking-wide transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing
                ? '⏳ Processing...'
                : currentStep === 1
                  ? 'Proceed to Shipping →'
                  : currentStep === 2
                    ? 'Continue to Payment →'
                    : 'Place Order →'}
            </button>
            <div className="text-gray mt-3.5 flex items-center justify-center gap-2 text-[0.72rem]">
              🔒 Secure & encrypted checkout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
