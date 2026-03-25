import React from 'react';
import { Save, X, Plus, Image as ImageIcon, Check } from 'lucide-react';

const MerchantAddProduct = ({ onNav }) => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.25rem] font-bold text-white">
          Add New <span className="text-teal">Product</span>
        </h1>
        <p className="text-gray mt-1 text-[0.78rem]">Create a new listing for your store</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => onNav?.('products')}
          className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem]"
        >
          Cancel
        </button>
        <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
          <Save size={14} /> Save & Publish
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 min-[1100px]:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 font-['Syne'] text-[0.88rem] font-bold text-white">
            📝 Product Details
          </h3>
          <div className="mb-4">
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              Product Name
            </label>
            <input
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
              placeholder="e.g. Wireless Earbuds Pro Max"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              Description
            </label>
            <textarea
              className="bg-navy3 focus:border-teal h-32 w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
              placeholder="Describe your product specs..."
            />
          </div>
          <div className="grid grid-cols-1 gap-4 min-[580px]:grid-cols-2">
            <div>
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                Category
              </label>
              <select className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none">
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
            </div>
            <div>
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                SKU
              </label>
              <input
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
                placeholder="e.g. TZ-EAR-006"
              />
            </div>
            <div>
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                Price ($)
              </label>
              <input
                type="number"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
                placeholder="49.99"
              />
            </div>
            <div>
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                Compare At ($)
              </label>
              <input
                type="number"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
                placeholder="89.99"
              />
            </div>
            <div>
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                Stock Quantity
              </label>
              <input
                type="number"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
                placeholder="100"
              />
            </div>
            <div>
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                Alert At
              </label>
              <input
                type="number"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
                placeholder="10"
              />
            </div>
          </div>
        </div>
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 font-['Syne'] text-[0.88rem] font-bold text-white">🎨 Variants</h3>
          <div className="mb-4">
            <label className="text-gray mb-2 block text-[0.7rem] font-medium tracking-widest uppercase">
              Colors
            </label>
            <div className="mb-3 flex flex-wrap gap-2">
              {['Black', 'White', 'Red'].map((c) => (
                <span
                  key={c}
                  className="bg-navy3 inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] px-3 py-1 text-[0.75rem] text-white"
                >
                  {c} <X size={12} className="text-gray hover:text-red cursor-pointer" />
                </span>
              ))}
            </div>
            <input
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2 text-[0.82rem] text-white outline-none"
              placeholder="Add color variant..."
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 font-['Syne'] text-[0.88rem] font-bold text-white">
            🖼 Product Images
          </h3>
          <div className="bg-navy3/30 hover:border-teal hover:bg-teal/5 flex flex-col items-center justify-center rounded-md border-2 border-dashed border-white/[0.07] py-8 text-center transition-all">
            <div className="bg-teal/10 text-teal mb-2 rounded-full p-3">
              <ImageIcon size={24} />
            </div>
            <div className="text-[0.85rem] font-medium text-white">Drop images here</div>
            <div className="text-gray text-[0.7rem]">PNG, JPG up to 10MB</div>
          </div>
        </div>
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 font-['Syne'] text-[0.85rem] font-bold text-white">⚙️ Visibility</h3>
          <div className="space-y-3">
            {[
              { l: 'Published', d: 'Visible to customers' },
              { l: 'Featured', d: 'Show on shopfront' },
            ].map((item) => (
              <div key={item.l} className="flex items-center justify-between">
                <div>
                  <div className="text-[0.82rem] font-medium text-white">{item.l}</div>
                  <div className="text-gray text-[0.7rem]">{item.d}</div>
                </div>
                <button className="bg-teal relative h-5 w-9 rounded-full">
                  <span className="absolute top-0.75 right-0.75 h-3.5 w-3.5 rounded-full bg-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MerchantAddProduct;
