import React from 'react';
import { Store, MapPin, Phone, Mail, Globe, Clock, Save, Plus, Image as ImageIcon } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';

const MerchantProfile = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <MerchantPageHeader
        title={
          <>
            Store <span className="text-teal">Profile</span>
          </>
        }
        subtitle="Customize your public store presence"
      />
      <div className="flex gap-2.5">
        <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded border border-transparent px-4 py-1.5 text-[0.8rem] font-bold transition-colors">
          <Save size={14} strokeWidth={3} /> Save Profile
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        {/* Banner + Logo */}
        <div className="bg-card hover:border-teal/20 transition-colors relative h-48 overflow-hidden rounded-lg border border-white/[0.07]">
          <div className="from-teal/10 text-teal/40 absolute inset-0 flex items-center justify-center bg-linear-to-br to-blue-500/10 transition-colors">
            <ImageIcon size={48} />
          </div>
          <button className="bg-navy/80 hover:bg-navy absolute top-4 right-4 rounded-full border border-white/10 px-4 py-1.5 text-[0.7rem] font-bold tracking-wider text-white transition-colors backdrop-blur-sm">
            Change Banner
          </button>
          
          <div className="border-navy from-teal text-navy absolute -bottom-10 left-8 flex h-24 w-24 items-center justify-center rounded-full border-4 bg-linear-to-br to-blue-500 font-syne text-[2.5rem] font-black shadow-xl">
            T
            <button className="bg-navy border-navy absolute right-0 bottom-0 rounded-full border-2 p-1 text-white hover:text-teal transition-colors">
              <Plus size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
        
        <div className="space-y-6 pt-10">
          <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
            <h3 className="mb-6 flex items-center gap-2 font-syne text-[1.1rem] font-bold text-white">
              <Store size={18} className="text-teal" /> General Info
            </h3>
            
            <div className="space-y-5">
              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                  Store Name
                </label>
                <input
                  defaultValue="TechZone MN"
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                  Tagline
                </label>
                <input
                  defaultValue="Premium Electronics and Accessories"
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                  Store Bio
                </label>
                <textarea
                  defaultValue="Established in 2024, TechZone is your one-stop shop for high-performance audio, tech accessories, and gaming gear. We prioritize quality and customer satisfaction above all."
                  className="bg-navy3 focus:border-teal h-28 w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors resize-none leading-relaxed"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
            <h3 className="mb-6 flex items-center gap-2 font-syne text-[1.1rem] font-bold text-white">
              <MapPin size={18} className="text-teal" /> Business Address
            </h3>
            
            <div className="grid grid-cols-1 gap-5 min-[580px]:grid-cols-2">
              <div className="col-span-full">
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                  Street Address
                </label>
                <input
                  defaultValue="4290 Burnsville Center"
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                  City
                </label>
                <input
                  defaultValue="Burnsville"
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                  State / ZIP
                </label>
                <div className="flex gap-3">
                  <input
                    defaultValue="MN"
                    className="bg-navy3 focus:border-teal w-20 rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none text-center transition-colors"
                  />
                  <input
                    defaultValue="55306"
                    className="bg-navy3 focus:border-teal flex-1 rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="col-span-full">
                <label className="text-gray mb-2 block text-[0.7rem] font-bold tracking-widest uppercase">
                  Country
                </label>
                <select className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none cursor-pointer transition-colors">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
          <h3 className="mb-6 font-syne text-[1.1rem] font-bold text-white">
            Contact & Social
          </h3>
          <div className="space-y-3">
            <div className="bg-navy3 hover:border-white/20 transition-colors flex items-center gap-4 rounded border border-white/[0.07] px-4 py-3 cursor-pointer group">
              <Mail size={16} className="text-gray group-hover:text-teal transition-colors" />
              <span className="text-[0.88rem] text-white font-medium">techzone@esuuq.com</span>
            </div>
            <div className="bg-navy3 hover:border-white/20 transition-colors flex items-center gap-4 rounded border border-white/[0.07] px-4 py-3 cursor-pointer group">
              <Phone size={16} className="text-gray group-hover:text-teal transition-colors" />
              <span className="text-[0.88rem] text-white font-medium">+1-612-555-0199</span>
            </div>
            <div className="bg-navy3 hover:border-white/20 transition-colors flex items-center gap-4 rounded border border-white/[0.07] px-4 py-3 cursor-pointer group">
              <Globe size={16} className="text-gray group-hover:text-teal transition-colors" />
              <span className="text-[0.88rem] text-white font-medium">techzone.com</span>
            </div>
          </div>
          <button className="text-gray hover:border-teal hover:text-teal mt-5 w-full rounded border border-white/10 py-2.5 text-[0.75rem] font-bold uppercase tracking-wider transition-all">
            + Add Social Link
          </button>
        </div>
        
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
          <h3 className="mb-6 flex items-center gap-2 font-syne text-[1.1rem] font-bold text-white">
            <Clock size={16} className="text-teal" /> Store Status
          </h3>
          <div className="flex items-center justify-between p-4 bg-navy3 rounded-lg border border-white/[0.07]">
            <div>
              <div className="text-[0.88rem] font-bold text-white mb-1">Open for Orders</div>
              <div className="text-[0.7rem] font-bold uppercase tracking-widest text-teal">Publicly visible</div>
            </div>
            <button className="bg-teal relative h-6 w-11 rounded-full cursor-pointer transition-colors shadow-[0_0_15px_rgba(0,201,167,0.3)]">
              <span className="absolute top-[2px] right-[2px] h-5 w-5 rounded-full bg-navy shadow-sm transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MerchantProfile;
