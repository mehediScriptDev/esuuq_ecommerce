import React from 'react';
import UserPageHeader from '../components/UserPageHeader';

const payments = [
  {
    id: 'visa',
    label: 'VISA',
    logoBg: 'from-[#1a3a8a] to-[#2a4aaa]',
    number: 'Visa ending in ···· 4291',
    exp: 'Expires 08 / 27',
    isDefault: true,
  },
  {
    id: 'mastercard',
    label: 'MC',
    logoBg: 'from-[#8a1a1a] to-[#aa2a2a]',
    number: 'Mastercard ending in ···· 7823',
    exp: 'Expires 03 / 26',
    isDefault: false,
  },
  {
    id: 'paypal',
    label: 'PP',
    logoBg: 'from-[#003087] to-[#009cde]',
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
            <div
              className={`flex h-8 w-12 shrink-0 items-center justify-center rounded bg-gradient-to-br text-[0.66rem] font-bold text-white ${payment.logoBg}`}
            >
              {payment.label}
            </div>

            <div className="flex-1">
              <div className="text-[0.84rem] font-medium text-white">{payment.number}</div>
              <div className="text-gray mt-0.5 text-[0.72rem]">{payment.exp}</div>
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
