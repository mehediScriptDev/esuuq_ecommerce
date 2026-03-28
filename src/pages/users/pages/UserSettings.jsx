import React from 'react';
import UserPageHeader from '../components/UserPageHeader';
import UserToggle from '../components/UserToggle';

const notificationSettings = [
  {
    id: 'order-updates',
    label: 'Order Updates',
    sub: 'Email and push notifications for order status',
    on: true,
  },
  {
    id: 'offers',
    label: 'Promotional Offers',
    sub: 'Deals, discounts and flash sales',
    on: true,
  },
  {
    id: 'arrivals',
    label: 'New Arrivals',
    sub: 'Alerts for new products in your categories',
    on: false,
  },
  {
    id: 'price-drops',
    label: 'Wishlist Price Drops',
    sub: 'Notify when wishlist items go on sale',
    on: true,
  },
];

const securitySettings = [
  {
    id: 'two-factor',
    label: 'Two-Factor Authentication',
    sub: 'Add an extra layer of protection',
    on: false,
  },
  {
    id: 'login-alerts',
    label: 'Login Alerts',
    sub: 'Email me when someone signs into my account',
    on: true,
  },
];

const UserSettings = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-5">
        <UserPageHeader
          title={
            <span>
              Account <span className="text-teal">Settings</span>
            </span>
          }
          subtitle="Manage your preferences and security"
        />
      </div>

      <div className="space-y-4">
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">Notifications</h3>
          {notificationSettings.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-white/[0.07] py-3.5 last:border-b-0"
            >
              <div>
                <div className="text-[0.85rem] font-medium text-white">{item.label}</div>
                <div className="text-gray text-[0.72rem]">{item.sub}</div>
              </div>
              <UserToggle defaultOn={item.on} />
            </div>
          ))}
        </div>

        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">Security</h3>
          {securitySettings.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-white/[0.07] py-3.5 last:border-b-0"
            >
              <div>
                <div className="text-[0.85rem] font-medium text-white">{item.label}</div>
                <div className="text-gray text-[0.72rem]">{item.sub}</div>
              </div>
              <UserToggle defaultOn={item.on} />
            </div>
          ))}

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem]"
            >
              Change Password
            </button>
            <button
              type="button"
              className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem]"
            >
              Manage Devices
            </button>
          </div>
        </div>

        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-red">Danger Zone</h3>
          <div className="flex items-center justify-between border-b border-white/[0.07] py-3.5">
            <div>
              <div className="text-[0.85rem] font-medium text-white">Deactivate Account</div>
              <div className="text-gray text-[0.72rem]">Temporarily disable your account</div>
            </div>
            <button
              type="button"
              className="rounded border border-red/25 bg-red/10 px-3 py-1.5 text-[0.75rem] text-red"
            >
              Deactivate
            </button>
          </div>

          <div className="flex items-center justify-between pt-3.5">
            <div>
              <div className="text-[0.85rem] font-medium text-white">Delete Account</div>
              <div className="text-gray text-[0.72rem]">Permanently delete all your data</div>
            </div>
            <button
              type="button"
              className="rounded border border-red/25 bg-red/10 px-3 py-1.5 text-[0.75rem] text-red"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
