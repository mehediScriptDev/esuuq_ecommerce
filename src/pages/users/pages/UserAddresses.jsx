import React from 'react';
import UserPageHeader from '../components/UserPageHeader';

const addresses = [
  {
    id: 'home',
    emoji: '🏠',
    type: 'Home',
    lines: ['88 Oak Street, Apt 3B', 'Prior Lake, MN 55372', 'United States'],
    isDefault: true,
  },
  {
    id: 'work',
    emoji: '💼',
    type: 'Work',
    lines: ['450 Corporate Blvd, Suite 200', 'Savage, MN 55378', 'United States'],
    isDefault: false,
  },
];

const UserAddresses = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-5">
        <UserPageHeader
          title={
            <span>
              My <span className="text-teal">Addresses</span>
            </span>
          }
          subtitle="Manage your delivery addresses"
        />
      </div>

      <div className="space-y-3">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`bg-card relative flex flex-wrap items-start gap-3 rounded-md border p-4 ${
              address.isDefault ? 'border-teal/40' : 'border-white/[0.07]'
            }`}
          >
            <div className="bg-navy3 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/[0.07] text-[1.1rem]">
              {address.emoji}
            </div>

            <div className="flex-1">
              <div className="text-teal mb-1 text-[0.68rem] font-semibold tracking-widest uppercase">
                {address.type}
              </div>
              <div className="text-[0.875rem] leading-relaxed text-white">
                {address.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.74rem]"
                >
                  Edit
                </button>
                {!address.isDefault ? (
                  <button
                    type="button"
                    className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.74rem]"
                  >
                    Set Default
                  </button>
                ) : null}
                <button
                  type="button"
                  className="rounded border border-red/25 bg-red/10 px-3 py-1 text-[0.74rem] text-red"
                >
                  Delete
                </button>
              </div>
            </div>

            {address.isDefault ? (
              <div className="absolute top-3 right-3 rounded-full border border-teal/35 bg-teal/10 px-2 py-0.5 text-[0.62rem] font-semibold text-teal">
                Default
              </div>
            ) : null}
          </div>
        ))}

        <button
          type="button"
          className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-2 text-[0.8rem] font-medium"
        >
          + Add New Address
        </button>
      </div>
    </div>
  );
};

export default UserAddresses;
