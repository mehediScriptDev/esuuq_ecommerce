import React from 'react';
import { Save, X, Plus, Image as ImageIcon, Check } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';

const MerchantAddProduct = ({ onNav }) => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <MerchantPageHeader
        title={
          <>
            Add New <span className="text-teal">Product</span>
          </>
        }
        subtitle="Create a new listing for your store"
      />
      <div className="flex gap-2.5">
        <button
          onClick={() => onNav?.('products')}
          className="text-gray hover:border-teal hover:text-teal rounded border border-white/10 px-4 py-1.5 text-[0.8rem] font-bold transition-all"
        >
          Cancel
        </button>
        <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded border border-transparent px-4 py-1.5 text-[0.8rem] font-bold transition-all">
          <Save size={14} strokeWidth={3} /> Save & Publish
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-1 gap-6 min-[1100px]:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
          <h3 className="mb-5 font-syne text-[1.1rem] font-bold text-white">
            📝 Product Details
          </h3>
          <div className="mb-5">
            <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
              Product Name
            </label>
            <input
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
              placeholder="e.g. Wireless Earbuds Pro Max"
            />
          </div>
          <div className="mb-5">
            <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
              Description
            </label>
            <textarea
              className="bg-navy3 focus:border-teal h-32 w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors resize-none leading-relaxed"
              placeholder="Describe your product specs..."
            />
          </div>
          <div className="grid grid-cols-1 gap-5 min-[580px]:grid-cols-2">
            <div>
              <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                Category
              </label>
              <select className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none cursor-pointer transition-colors">
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
            </div>
            <div>
              <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                SKU
              </label>
              <input
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
                placeholder="e.g. TZ-EAR-006"
              />
            </div>
            <div>
              <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                Price ($)
              </label>
              <input
                type="number"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] font-black text-white outline-none transition-colors"
                placeholder="49.99"
              />
            </div>
            <div>
              <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                Compare At ($)
              </label>
              <input
                type="number"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
                placeholder="89.99"
              />
            </div>
            <div>
              <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                Stock Quantity
              </label>
              <input
                type="number"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] font-bold text-white outline-none transition-colors"
                placeholder="100"
              />
            </div>
            <div>
              <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                Alert At
              </label>
              <input
                type="number"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
                placeholder="10"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
          <h3 className="mb-5 font-syne text-[1.1rem] font-bold text-white">🎨 Variants</h3>
          <div className="mb-2">
            <label className="text-gray mb-3 block text-[0.7rem] font-bold tracking-widest uppercase">
              Colors
            </label>
            <div className="mb-4 flex flex-wrap gap-2.5">
              {['Black', 'White', 'Red'].map((c) => (
                <span
                  key={c}
                  className="bg-navy3 hover:border-white/20 transition-colors inline-flex items-center gap-2 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem] font-bold text-white"
                >
                  {c} <X size={14} strokeWidth={3} className="text-gray hover:text-red cursor-pointer transition-colors" />
                </span>
              ))}
            </div>
            <input
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
              placeholder="Add color variant..."
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
          <h3 className="mb-5 font-syne text-[1.1rem] font-bold text-white">
            🖼 Product Images
          </h3>
          <div className="bg-navy3/30 hover:border-teal hover:bg-teal/5 flex flex-col items-center justify-center rounded-lg border border-dashed border-white/[0.07] py-10 text-center transition-all cursor-pointer group">
            <div className="bg-teal/10 text-teal mb-3 rounded-full p-4 transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(0,201,167,0.1)]">
              <ImageIcon size={28} />
            </div>
            <div className="text-[0.88rem] font-bold text-white mb-1">Click or Drop images here</div>
            <div className="text-gray text-[0.7rem] font-medium tracking-wider uppercase">PNG, JPG up to 10MB</div>
          </div>
        </div>
        
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
          <h3 className="mb-5 font-syne text-[1.1rem] font-bold text-white">⚙️ Visibility</h3>
          <div className="space-y-4">
            {[
              { l: 'Published', d: 'Visible to customers' },
              { l: 'Featured', d: 'Show on shopfront' },
            ].map((item, id) => (
              <div key={item.l} className="flex items-center justify-between p-3 bg-navy3 rounded-md border border-white/[0.07]">
                <div>
                  <div className="text-[0.88rem] font-bold text-white">{item.l}</div>
                  <div className="text-gray mt-1 text-[0.65rem] font-bold uppercase tracking-widest">{item.d}</div>
                </div>
                <button className={`relative h-6 w-11 rounded-full cursor-pointer transition-colors ${id === 0 ? 'bg-teal shadow-[0_0_15px_rgba(0,201,167,0.3)]' : 'bg-white/10'}`}>
                  <span className={`absolute top-[2px] h-5 w-5 rounded-full shadow-sm transition-transform ${id === 0 ? 'bg-navy right-[2px]' : 'bg-gray left-[2px] w-[20px] h-[20px] rounded-full'}`} />
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
