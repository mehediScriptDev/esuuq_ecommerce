import React, { useState } from 'react';
import { Save, Settings, DollarSign, Bell, Lock, Key } from 'lucide-react';
import DashboardPageHeader from '../components/DashboardPageHeader';
const Toggle = ({ defaultOn = false }) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative h-5 w-9 shrink-0 rounded-full border-none transition-colors ${on ? 'bg-teal' : 'bg-white/[0.07]'}`}
    >
      <span
        className={`absolute top-0.75 h-3.5 w-3.5 rounded-full bg-white transition-all ${on ? 'left-4.5' : 'left-0.75'}`}
      />
    </button>
  );
};
const AdminSettings = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <DashboardPageHeader
        title={<span>Platform <span className="text-teal">Settings</span></span>}
        subtitle="Configure your marketplace preferences"
      />
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Save size={14} /> Save Changes
      </button>
    </div>
    <div className="grid grid-cols-1 gap-4 min-[900px]:grid-cols-2">
      {/* General */}
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
          <Settings size={16} className="text-teal" /> General Settings
        </h3>
        {[
          { l: 'Platform Name', v: 'ESUUQ Marketplace' },
          { l: 'Support Email', v: 'support@esuuq.com' },
        ].map((f) => (
          <div key={f.l} className="mb-3">
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              {f.l}
            </label>
            <input
              defaultValue={f.v}
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white transition-colors outline-none"
            />
          </div>
        ))}
        <div className="mb-3">
          <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
            Default Currency
          </label>
          <select className="bg-navy3 w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none">
            <option>USD — US Dollar</option>
            <option>EUR — Euro</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
            Timezone
          </label>
          <select className="bg-navy3 w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none">
            <option>America/Chicago (CT)</option>
            <option>America/New_York (ET)</option>
          </select>
        </div>
      </div>
      {/* Commission */}
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
          <DollarSign size={16} className="text-teal" /> Commission Settings
        </h3>
        {[
          { l: 'Default Commission Rate', v: '10%' },
          { l: 'Electronics Commission', v: '8%' },
          { l: 'Fashion Commission', v: '12%' },
          { l: 'Food & Grocery Commission', v: '15%' },
        ].map((f) => (
          <div key={f.l} className="mb-3">
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              {f.l}
            </label>
            <input
              defaultValue={f.v}
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white transition-colors outline-none"
            />
          </div>
        ))}
        <div className="mb-3">
          <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
            Payout Cycle
          </label>
          <select className="bg-navy3 w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none">
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>
      {/* Notifications */}
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
          <Bell size={16} className="text-teal" /> Notification Settings
        </h3>
        {[
          { l: 'New Order Alerts', s: 'Email + push on new orders', on: true },
          { l: 'Merchant Approvals', s: 'Alert when merchant applies', on: true },
          { l: 'Low Stock Alerts', s: 'Notify on inventory below 5', on: true },
          { l: 'Revenue Reports', s: 'Daily summary emails', on: false },
        ].map((item) => (
          <div
            key={item.l}
            className="flex items-center justify-between border-b border-white/[0.07] py-3.5 last:border-b-0"
          >
            <div>
              <div className="text-[0.85rem] font-medium text-white">{item.l}</div>
              <div className="text-gray text-[0.72rem]">{item.s}</div>
            </div>
            <Toggle defaultOn={item.on} />
          </div>
        ))}
      </div>
      {/* Security */}
      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
          <Lock size={16} className="text-teal" /> Security Settings
        </h3>
        {[
          { l: 'Two-Factor Auth (Admin)', s: 'Require 2FA for all admins', on: true },
          { l: 'API Rate Limiting', s: 'Limit 100 req/min per IP', on: true },
          { l: 'Audit Log', s: 'Log all admin actions', on: true },
        ].map((item) => (
          <div
            key={item.l}
            className="flex items-center justify-between border-b border-white/[0.07] py-3.5 last:border-b-0"
          >
            <div>
              <div className="text-[0.85rem] font-medium text-white">{item.l}</div>
              <div className="text-gray text-[0.72rem]">{item.s}</div>
            </div>
            <Toggle defaultOn={item.on} />
          </div>
        ))}
        <button className="text-gray2 flex items-center justify-center hover:border-teal hover:text-teal mt-4 w-full rounded border border-white/[0.07] py-2.5 text-[0.82rem] transition-colors  gap-2">
          <Key size={14} className="text-teal" /> Change Admin Password
        </button>
      </div>
    </div>
  </div>
);
export default AdminSettings;
