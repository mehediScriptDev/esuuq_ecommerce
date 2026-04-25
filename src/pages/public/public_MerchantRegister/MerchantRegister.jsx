import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CATEGORIES = [
  'Electronics', 'Fashion & Clothing', 'Home & Garden', 'Beauty & Health',
  'Food & Grocery', 'Sports & Outdoors', 'Books & Education', 'Toys & Kids',
  'Automotive', 'Pet Supplies', 'Other',
];

const RETURN_POLICIES = ['7 days return', '14 days return', '30 days return', 'No returns'];

const COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Somalia',
  'Kenya', 'Ethiopia', 'Uganda', 'Tanzania', 'Other',
];

const BENEFITS = [
  { icon: '💸', title: 'Low Commission — Only 8%', desc: 'Lower than any other platform' },
  { icon: '🌍', title: 'East African Audience', desc: 'Reach thousands of buyers in your community' },
  { icon: '📦', title: 'Full Dashboard', desc: 'Manage orders, products & earnings in one place' },
  { icon: '💳', title: 'Fast Payouts', desc: 'Paid directly to your bank account' },
  { icon: '🛡️', title: 'Seller Protection', desc: 'Dispute resolution and seller support included' },
];

const STATS = [
  { label: 'Active Merchants', value: '500+' },
  { label: 'Products Listed', value: '10,000+' },
  { label: 'Monthly Customers', value: '25,000+' },
  { label: 'Avg Seller Rating', value: '4.8 ★' },
  { label: 'Commission Rate', value: 'Only 8%' },
];

const TIMELINE = [
  { step: 1, title: 'Submit Application', desc: 'Fill in your store details and submit' },
  { step: 2, title: 'Wait for Approval', desc: 'Our team reviews within 1–2 business days' },
  { step: 3, title: 'List Your Products', desc: 'Add products with photos, prices and stock' },
  { step: 4, title: 'Start Selling', desc: 'Receive orders and get paid to your bank' },
];

const STEPS = [
  { num: 1, label: 'Store Info' },
  { num: 2, label: 'Verification' },
  { num: 3, label: 'Review' },
  { num: 4, label: 'Go Live' },
];

/* ── Reusable tiny components ── */
const InputField = ({ label, required, optional, hint, ...props }) => (
  <div className="mb-3.5">
    <label className="mb-1.5 block text-[0.77rem] font-semibold text-gray2">
      {label}
      {required && <span className="ml-0.5 text-teal">*</span>}
      {optional && <span className="ml-1 text-[0.7rem] font-normal text-gray">(optional)</span>}
    </label>
    <input
      className="w-full rounded-lg border border-white/[0.07] bg-navy3 px-3.5 py-2.5 font-['DM_Sans'] text-[0.875rem] text-white outline-none placeholder:text-gray transition-all duration-150 focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,201,167,0.1)]"
      {...props}
    />
    {hint && <div className="mt-1 text-[0.71rem] text-gray">{hint}</div>}
  </div>
);

const SelectField = ({ label, required, options, placeholder, ...props }) => (
  <div className="mb-3.5">
    <label className="mb-1.5 block text-[0.77rem] font-semibold text-gray2">
      {label}
      {required && <span className="ml-0.5 text-teal">*</span>}
    </label>
    <select
      className="w-full cursor-pointer appearance-none rounded-lg border border-white/[0.07] bg-navy3 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%2712%27%20fill=%27%2364748B%27%20viewBox=%270%200%2016%2016%27%3E%3Cpath%20d=%27M1.5%205.5l6.5%206%206.5-6%27/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_13px_center] bg-no-repeat px-3.5 py-2.5 font-['DM_Sans'] text-[0.875rem] text-white outline-none transition-all duration-150 focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,201,167,0.1)]"
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  </div>
);

const UploadZone = ({ icon, text, sub }) => (
  <div className="mb-3.5">
    <div className="cursor-pointer rounded-[10px] border-2 border-dashed border-white/[0.07] p-6 text-center transition-all duration-150 hover:border-[rgba(0,201,167,0.25)] hover:bg-[rgba(0,201,167,0.08)]">
      <div className="mb-1.5 text-[1.8rem]">{icon}</div>
      <div className="mb-0.5 text-[0.8rem] text-gray2">{text}</div>
      <div className="text-[0.7rem] text-gray">{sub}</div>
    </div>
  </div>
);

const MerchantRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    storeName: '', storeDescription: '', category: '', returnPolicy: '30 days return',
    firstName: '', lastName: '', email: '', phone: '',
    country: 'United States', city: '',
    businessName: '', taxId: '', businessAddress: '',
    password: '', confirmPassword: '',
  });

  const [agreements, setAgreements] = useState({ terms: true, products: false });
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const toggleAgreement = useCallback((key) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowModal(true);
    }, 1800);
  }, []);

  return (
    <div className="min-h-screen bg-navy font-['DM_Sans'] text-gray2">

      {/* ───── NAV ───── */}
      <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-white/[0.07] bg-navy2 px-4 min-[640px]:px-10">
        <Link to="/" className="font-['Syne'] text-[1.7rem] font-extrabold text-white no-underline">
          <span className="text-teal">ES</span>UUQ
        </Link>
        <div className="flex gap-3">
          <Link to="/auth/login" className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] bg-transparent px-5 py-2 text-[0.85rem] font-semibold text-gray2 transition-all duration-150 hover:border-[rgba(0,201,167,0.25)] hover:text-white">
            Sign In
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border-none bg-teal px-5 py-2 font-['DM_Sans'] text-[0.85rem] font-semibold text-navy transition-all duration-150 hover:bg-teal2"
          >
            🏪 Apply Now
          </button>
        </div>
      </nav>

      {/* ───── HERO ───── */}
      <div className="border-b border-white/[0.07] bg-[linear-gradient(135deg,var(--color-navy2)_0%,var(--color-navy)_100%)] px-4 py-12 text-center min-[640px]:px-10">
        <div className="mb-4.5 inline-flex items-center gap-1.5 rounded-[20px] border border-[rgba(0,201,167,0.25)] bg-[rgba(0,201,167,0.08)] px-3.5 py-1 text-[0.75rem] font-semibold tracking-[0.08em] text-teal">
          🚀 Join 500+ Merchants on ESUUQ
        </div>
        <h1 className="mb-3 font-['Syne'] text-[1.6rem] font-extrabold leading-[1.15] text-white min-[640px]:text-[2.6rem]">
          Start Selling on <span className="text-teal">ESUUQ</span>
        </h1>
        <p className="mx-auto mb-7 max-w-[500px] text-[0.95rem] leading-[1.7] text-gray">
          Reach thousands of East African customers. Set up your store in minutes and start earning today.
        </p>

        {/* Steps */}
        <div className="flex flex-wrap items-center justify-center">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.num}>
              <div className="flex items-center gap-2">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.8rem] font-bold ${s.num === 1 ? 'bg-teal text-navy' : 'border border-white/[0.07] bg-navy3 text-gray'}`}>
                  {s.num}
                </div>
                <div className={`text-[0.78rem] font-semibold ${s.num === 1 ? 'text-teal' : 'text-gray'}`}>
                  {s.label}
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="mx-1 h-0.5 w-6 bg-white/[0.07] min-[640px]:w-11" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ───── BODY ───── */}
      <div className="mx-auto grid max-w-[1080px] items-start gap-6 px-4 py-8 min-[640px]:px-10 min-[860px]:grid-cols-[1fr_340px]">

        {/* ─── FORM ─── */}
        <form className="overflow-hidden rounded-2xl border border-white/[0.07] bg-navy2" onSubmit={handleSubmit}>

          {/* Store Information */}
          <div className="border-b border-white/[0.07] px-5 py-6 min-[640px]:px-[30px]">
            <div className="mb-1 font-['Syne'] text-[0.95rem] font-bold text-white">🏪 Store Information</div>
            <div className="mb-4.5 text-[0.78rem] text-gray">This is what customers will see when they visit your store.</div>

            <InputField label="Store Name" required name="storeName" value={form.storeName} onChange={handleChange} placeholder="e.g. Barwaaqo Electronics" hint="This will be your public store name on ESUUQ" />

            <div className="mb-3.5">
              <label className="mb-1.5 block text-[0.77rem] font-semibold text-gray2">
                Store Description <span className="ml-0.5 text-teal">*</span>
              </label>
              <textarea
                className="min-h-[85px] w-full resize-y rounded-lg border border-white/[0.07] bg-navy3 px-3.5 py-2.5 font-['DM_Sans'] text-[0.875rem] text-white outline-none placeholder:text-gray transition-all duration-150 focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,201,167,0.1)]"
                name="storeDescription" value={form.storeDescription} onChange={handleChange}
                placeholder="Describe what you sell and what makes your store special..."
                required
              />
            </div>

            <div className="grid gap-3.5 min-[640px]:grid-cols-2">
              <SelectField label="Main Category" required name="category" value={form.category} onChange={handleChange} placeholder="Select category" options={CATEGORIES} />
              <SelectField label="Return Policy" required name="returnPolicy" value={form.returnPolicy} onChange={handleChange} options={RETURN_POLICIES} />
            </div>

            <div className="grid gap-3.5 min-[640px]:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[0.77rem] font-semibold text-gray2">
                  Store Logo <span className="ml-1 text-[0.7rem] font-normal text-gray">(optional)</span>
                </label>
                <UploadZone icon="🖼️" text="Upload store logo" sub="PNG, JPG — max 2MB" />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.77rem] font-semibold text-gray2">
                  Store Banner <span className="ml-1 text-[0.7rem] font-normal text-gray">(optional)</span>
                </label>
                <UploadZone icon="🎨" text="Upload banner image" sub="PNG, JPG — max 5MB" />
              </div>
            </div>
          </div>

          {/* Your Information */}
          <div className="border-b border-white/[0.07] px-5 py-6 min-[640px]:px-[30px]">
            <div className="mb-1 font-['Syne'] text-[0.95rem] font-bold text-white">👤 Your Information</div>
            <div className="mb-4.5 text-[0.78rem] text-gray">Kept private. Used for account verification only.</div>

            <div className="grid gap-3.5 min-[640px]:grid-cols-2">
              <InputField label="First Name" required name="firstName" value={form.firstName} onChange={handleChange} placeholder="Ahmed" />
              <InputField label="Last Name" required name="lastName" value={form.lastName} onChange={handleChange} placeholder="Hassan" />
            </div>
            <div className="grid gap-3.5 min-[640px]:grid-cols-2">
              <InputField label="Email Address" required type="email" name="email" value={form.email} onChange={handleChange} placeholder="ahmed@store.com" />
              <InputField label="Phone Number" required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 612 555 0198" />
            </div>
            <div className="grid gap-3.5 min-[640px]:grid-cols-2">
              <SelectField label="Country" required name="country" value={form.country} onChange={handleChange} options={COUNTRIES} />
              <InputField label="City" required name="city" value={form.city} onChange={handleChange} placeholder="Minneapolis" />
            </div>
          </div>

          {/* Business Details */}
          <div className="border-b border-white/[0.07] px-5 py-6 min-[640px]:px-[30px]">
            <div className="mb-1 font-['Syne'] text-[0.95rem] font-bold text-white">
              🏢 Business Details <span className="ml-1.5 text-[0.7rem] font-normal text-gray">(Optional — speeds up approval)</span>
            </div>
            <div className="mb-4.5 text-[0.78rem] text-gray">If you have a registered business, enter the details here.</div>

            <div className="grid gap-3.5 min-[640px]:grid-cols-2">
              <InputField label="Business Name" optional name="businessName" value={form.businessName} onChange={handleChange} placeholder="Barwaaqo LLC" />
              <InputField label="Tax ID / Business Number" optional name="taxId" value={form.taxId} onChange={handleChange} placeholder="EIN or Business Number" />
            </div>
            <InputField label="Business Address" optional name="businessAddress" value={form.businessAddress} onChange={handleChange} placeholder="123 Main Street, Minneapolis, MN 55401" />
          </div>

          {/* Password */}
          <div className="border-b border-white/[0.07] px-5 py-6 min-[640px]:px-[30px]">
            <div className="mb-1 font-['Syne'] text-[0.95rem] font-bold text-white">🔐 Create Your Password</div>
            <div className="mb-4.5 text-[0.78rem] text-gray">Set a strong password to protect your merchant account.</div>

            <div className="grid gap-3.5 min-[640px]:grid-cols-2">
              <InputField label="Password" required type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 8 characters" />
              <InputField label="Confirm Password" required type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Repeat password" />
            </div>
          </div>

          {/* Agreement */}
          <div className="px-5 py-6 min-[640px]:px-[30px]">
            <div className="mb-4 font-['Syne'] text-[0.95rem] font-bold text-white">📋 Agreement</div>

            <div
              onClick={() => toggleAgreement('terms')}
              className="mb-3 flex cursor-pointer items-start gap-3 rounded-[10px] border border-white/[0.07] bg-navy3 p-3.5 transition-colors duration-150 hover:border-[rgba(0,201,167,0.25)]"
            >
              <div className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded text-[0.7rem] transition-all duration-150 ${agreements.terms ? 'border-teal bg-teal font-black text-navy' : 'border border-gray'}`}>
                {agreements.terms && '✓'}
              </div>
              <div className="text-[0.79rem] leading-[1.6] text-gray2">
                I agree to the <a href="#" className="text-teal no-underline hover:underline">ESUUQ Merchant Terms &amp; Conditions</a> and understand that ESUUQ charges a commission on each sale. My store will be reviewed before going live.
              </div>
            </div>

            <div
              onClick={() => toggleAgreement('products')}
              className="mb-3 flex cursor-pointer items-start gap-3 rounded-[10px] border border-white/[0.07] bg-navy3 p-3.5 transition-colors duration-150 hover:border-[rgba(0,201,167,0.25)]"
            >
              <div className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded text-[0.7rem] transition-all duration-150 ${agreements.products ? 'border-teal bg-teal font-black text-navy' : 'border border-gray'}`}>
                {agreements.products && '✓'}
              </div>
              <div className="text-[0.79rem] leading-[1.6] text-gray2">
                I confirm that all products I list comply with <a href="#" className="text-teal no-underline hover:underline">ESUUQ's product guidelines</a> and that I will not sell prohibited or counterfeit items.
              </div>
            </div>

            <div className="mt-4.5">
              <button
                type="submit"
                disabled={submitting}
                className="w-full cursor-pointer rounded-[10px] border-none bg-teal px-4 py-3.5 font-['Syne'] text-[0.95rem] font-bold text-navy transition-all duration-150 hover:bg-teal2 disabled:cursor-wait disabled:opacity-70"
              >
                {submitting ? '⏳ Submitting...' : '🚀 Submit Application'}
              </button>
              <div className="mt-2 text-center text-[0.73rem] text-gray">
                Applications are reviewed within 1–2 business days
              </div>
            </div>
          </div>
        </form>

        {/* ─── SIDEBAR ─── */}
        <aside className="flex flex-col gap-4 max-[859px]:order-first">

          {/* Benefits */}
          <div className="rounded-[14px] border border-white/[0.07] bg-navy2 p-5">
            <div className="mb-3.5 font-['Syne'] text-[0.88rem] font-bold text-white">🎯 Why Sell on ESUUQ?</div>
            {BENEFITS.map((b) => (
              <div className="mb-2.5 flex items-start gap-2.5 last:mb-0" key={b.title}>
                <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] border border-[rgba(0,201,167,0.25)] bg-[rgba(0,201,167,0.08)] text-[0.75rem]">
                  {b.icon}
                </div>
                <div className="text-[0.8rem] leading-[1.5] text-gray2">
                  <strong className="block text-[0.81rem] text-white">{b.title}</strong>
                  {b.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="rounded-[14px] border border-white/[0.07] bg-navy2 p-5">
            <div className="mb-3.5 font-['Syne'] text-[0.88rem] font-bold text-white">📊 Platform Stats</div>
            {STATS.map((s) => (
              <div className="flex justify-between border-b border-white/[0.07] py-2 last:border-b-0" key={s.label}>
                <span className="text-[0.77rem] text-gray">{s.label}</span>
                <span className="text-[0.83rem] font-bold text-teal">{s.value}</span>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="rounded-[14px] border border-white/[0.07] bg-navy2 p-5">
            <div className="mb-3.5 font-['Syne'] text-[0.88rem] font-bold text-white">⚡ How It Works</div>
            {TIMELINE.map((t) => (
              <div className="mb-3 flex gap-2.5 last:mb-0" key={t.step}>
                <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border-2 border-[rgba(0,201,167,0.25)] bg-[rgba(0,201,167,0.08)] text-[0.73rem] font-bold text-teal">
                  {t.step}
                </div>
                <div className="pt-0.5 text-[0.79rem] leading-[1.5] text-gray2">
                  <strong className="block text-white">{t.title}</strong>
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* ───── SUCCESS MODAL ───── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[200] flex animate-[fadeIn_0.25s_ease] items-center justify-center bg-black/75"
          onClick={() => setShowModal(false)}
        >
          <div
            className="mx-5 max-w-[400px] animate-[slideUp_0.35s_ease] rounded-[20px] border border-[rgba(0,201,167,0.25)] bg-navy2 px-9 py-11 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3.5 text-5xl">🎉</div>
            <div className="mb-2.5 font-['Syne'] text-[1.4rem] font-bold text-white">Application Submitted!</div>
            <div className="mb-6 text-[0.87rem] leading-[1.6] text-gray">
              Our team will review your application and contact you within 1–2 business days.
            </div>
            <button
              onClick={() => navigate('/')}
              className="w-full cursor-pointer rounded-lg border-none bg-teal px-5 py-3 font-['DM_Sans'] text-[0.85rem] font-semibold text-navy transition-all duration-150 hover:bg-teal2"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantRegister;
