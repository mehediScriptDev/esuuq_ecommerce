import React from 'react';
import UserPageHeader from '../components/UserPageHeader';

const payments = [
  {
    id: 'visa',
    label: 'VISA',
    logoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/4/40/Visa_Inc._logo_%281999%E2%80%932005%29.svg',
    number: 'Visa ending in ···· 4291',
    exp: 'Expires 08 / 27',
    isDefault: true,
  },
  {
    id: 'mastercard',
    label: 'MC',
    logoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png',
    number: 'Mastercard ending in ···· 7823',
    exp: 'Expires 03 / 26',
    isDefault: false,
  },
  {
    id: 'paypal',
    label: 'PP',
    logoSrc: 'https://1000logos.net/wp-content/uploads/2017/05/Font-Paypal-Logo-500x326.jpg',
    number: 'PayPal · ahmed@email.com',
    exp: 'Connected',
    isDefault: false,
  },
];

const UserPayments = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-5">
        <UserPageHeader
          title={
            <span>
              Payment <span className="text-teal">Methods</span>
            </span>
          }
          subtitle="Your saved cards and payment options"
        />
      </div>

      <div className="space-y-3">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className={`bg-card flex flex-wrap items-center gap-3 rounded-md border p-4 ${
              payment.isDefault ? 'border-teal/40' : 'border-white/[0.07]'
            }`}
          >
            <div className="flex h-8 w-12 shrink-0 items-center justify-center rounded">
              <img
                src={payment.logoSrc}
                alt={payment.label}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="text-[0.875rem] font-medium text-white">{payment.number}</div>
              <div className="text-gray mt-0.5 text-[0.875rem]">{payment.exp}</div>
            </div>

            {payment.isDefault ? (
              <span className="rounded-full border border-teal/35 bg-teal/10 px-2 py-0.5 text-[0.62rem] font-semibold text-teal">
                Default
              </span>
            ) : (
              <div className="flex gap-2">
                {payment.id !== 'paypal' ? (
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
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}

        <button
          type="button"
          className="bg-teal text-navy hover:bg-teal2 rounded px-4 py-2 text-[0.8rem] font-medium"
        >
          + Add Payment Method
        </button>
      </div>
    </div>
  );
};

export default UserPayments;
