import React from 'react';
import UserPageHeader from '../components/UserPageHeader';

const UserProfile = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-5">
        <UserPageHeader
          title={
            <span>
              My <span className="text-teal">Profile</span>
            </span>
          }
          subtitle="Manage your personal information"
        />
      </div>

      <div className="bg-card rounded-md border border-white/[0.07] p-5">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <div className="from-teal to-blue-500 text-navy flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br font-['Syne'] text-[1.3rem] font-bold">
            A
          </div>
          <div>
            <div className="font-['Syne'] text-[1.06rem] font-bold text-white">Ahmed Mohamed</div>
            <div className="text-gray mt-0.5 text-[0.76rem]">Member since January 2026</div>
            <div className="mt-1 inline-flex items-center rounded-full border border-teal/40 bg-teal/10 px-2 py-0.5 text-[0.65rem] font-medium text-teal">
              Verified Member
            </div>
          </div>
          <button
            type="button"
            className="text-gray2 hover:border-teal hover:text-teal ml-auto rounded border border-white/[0.07] px-3 py-1.5 text-[0.75rem]"
          >
            Change Photo
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[700px]:grid-cols-2">
          <div>
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              First Name
            </label>
            <input
              defaultValue="Ahmed"
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
            />
          </div>
          <div>
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              Last Name
            </label>
            <input
              defaultValue="Mohamed"
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
            />
          </div>

          <div className="min-[700px]:col-span-2">
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              Email Address
            </label>
            <input
              defaultValue="ahmed@email.com"
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
            />
          </div>

          <div>
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              Phone Number
            </label>
            <input
              defaultValue="+1 (612) 555-0198"
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
            />
          </div>
          <div>
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              Date of Birth
            </label>
            <input
              type="date"
              defaultValue="1992-08-14"
              className="bg-navy3 focus:border-teal w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none"
            />
          </div>

          <div className="min-[700px]:col-span-2">
            <label className="text-gray mb-1 block text-[0.7rem] font-medium tracking-widest uppercase">
              Gender
            </label>
            <select className="bg-navy3 w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.85rem] text-white outline-none">
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          className="bg-teal text-navy hover:bg-teal2 mt-4 rounded px-4 py-2 text-[0.82rem] font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
