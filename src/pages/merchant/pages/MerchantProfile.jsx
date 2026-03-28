import React from 'react';
import { Store, MapPin, Phone, Mail, Globe, Clock, Save, Plus, Image as ImageIcon } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
const MerchantProfile = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <MerchantPageHeader title="Store" highlight="Profile" subtitle="Customize your public store presence" />
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Save size={14} /> Save Profile
      </button>
    </div>
    <div className="grid grid-cols-1 gap-6 min-[1100px]:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        {/* Banner + Logo */}
        <div className="bg-card relative h-45 overflow-hidden rounded-md border border-white/[0.07]">
          <div className="from-teal2/20 text-teal/40 absolute inset-0 flex items-center justify-center bg-linear-to-br to-blue-500/20">
            <ImageIcon size={48} />
          </div>
          <button className="bg-navy/80 hover:bg-navy absolute top-4 right-4 rounded-full border border-white/10 px-3 py-1 text-[0.62rem] font-bold text-white">
            Change Banner
          </button>
          <div className="border-navy from-teal text-navy absolute -bottom-10 left-8 flex h-20 w-20 items-center justify-center rounded-full border-4 bg-linear-to-br to-blue-500 font-['Syne'] text-[1.5rem] font-bold shadow-xl">
            T
            <button className="bg-teal text-navy border-navy absolute right-0 bottom-0 rounded-full border p-1">
              <Plus size={10} />
            </button>
          </div>
        </div>
        <div className="space-y-4 pt-6">
          <div className="bg-card rounded-md border border-white/[0.07] p-5">
            <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
              <Store size={16} className="text-teal" /> General Info
            </h3>
            <div className="mb-4">
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                Store Name
              </label>
              <input
                defaultValue="TechZone MN"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                Tagline
              </label>
              <input
                defaultValue="Premium Electronics and Accessories"
                className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.8rem] text-white outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                Store Bio
              </label>
              <textarea
                defaultValue="Established in 2024, TechZone is your one-stop shop for high-performance audio, tech accessories, and gaming gear. We prioritize quality and customer satisfaction above all."
                className="bg-navy3 focus:border-teal h-24 w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.8rem] text-white outline-none"
              />
            </div>
          </div>
          <div className="bg-card rounded-md border border-white/[0.07] p-5">
            <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
              <MapPin size={16} className="text-teal" /> Business Address
            </h3>
            <div className="grid grid-cols-1 gap-4 min-[580px]:grid-cols-2">
              <div>
                <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                  Street
                </label>
                <input
                  defaultValue="4290 Burnsville Center"
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.8rem] text-white outline-none"
                />
              </div>
              <div>
                <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                  City
                </label>
                <input
                  defaultValue="Burnsville"
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.8rem] text-white outline-none"
                />
              </div>
              <div>
                <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                  State/Zip
                </label>
                <div className="flex gap-2">
                  <input
                    defaultValue="MN"
                    className="bg-navy3 focus:border-teal w-20 rounded border border-white/[0.07] px-3 py-2.5 text-[0.8rem] text-white outline-none"
                  />
                  <input
                    defaultValue="55306"
                    className="bg-navy3 focus:border-teal flex-1 rounded border border-white/[0.07] px-3 py-2.5 text-[0.8rem] text-white outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
                  Country
                </label>
                <input
                  defaultValue="United States"
                  className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.8rem] text-white outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">
            Contact & Social
          </h3>
          <div className="space-y-3">
            <div className="bg-navy3 flex items-center gap-3 rounded border border-white/[0.07] p-2.5">
              <Mail size={16} className="text-gray" />
              <span className="text-[0.875rem] text-white">techzone@esuuq.com</span>
            </div>
            <div className="bg-navy3 flex items-center gap-3 rounded border border-white/[0.07] p-2.5">
              <Phone size={16} className="text-gray" />
              <span className="text-[0.875rem] text-white">+1-612-555-0199</span>
            </div>
            <div className="bg-navy3 flex items-center gap-3 rounded border border-white/[0.07] p-2.5">
              <Globe size={16} className="text-gray" />
              <span className="text-[0.875rem] text-white">techzone.com</span>
            </div>
          </div>
          <button className="text-gray2 hover:border-teal hover:text-teal mt-4 w-full rounded border border-white/[0.07] py-2 text-[0.75rem]">
            + Add Social Link
          </button>
        </div>
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
            <Clock size={16} className="text-teal" /> Store Status
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[0.8rem] font-bold text-white">Open for Orders</div>
              <div className="text-[0.68rem] text-green-500">Publicly visible</div>
            </div>
            <button className="bg-teal relative h-5 w-9 rounded-full">
              <span className="absolute top-0.75 right-0.75 h-3.5 w-3.5 rounded-full bg-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MerchantProfile;
