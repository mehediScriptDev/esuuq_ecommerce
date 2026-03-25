import React from 'react';
import { Download, Check, X } from 'lucide-react';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);
const filters = [
  'All (648)',
  'New (5)',
  'Processing (18)',
  'Ready (8)',
  'Shipped (43)',
  'Delivered (562)',
  'Returns (12)',
];
const orders = [
  {
    id: '#ESQ-00848',
    customer: 'Layla H.',
    product: 'Wireless Earbuds Pro',
    qty: 1,
    total: '$49.99',
    date: 'Mar 12',
    status: 'New',
    sc: 'text-teal bg-teal/10',
    hasActions: true,
  },
  {
    id: '#ESQ-00847',
    customer: 'Ahmed M.',
    product: 'Wireless Earbuds Pro',
    qty: 1,
    total: '$49.99',
    date: 'Mar 12',
    status: 'Delivered',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    id: '#ESQ-00845',
    customer: 'James K.',
    product: 'USB-C Hub 7-in-1',
    qty: 2,
    total: '$69.98',
    date: 'Mar 11',
    status: 'Processing',
    sc: 'text-blue-500 bg-blue-500/10',
  },
  {
    id: '#ESQ-00841',
    customer: 'Sara L.',
    product: 'Studio Headphones',
    qty: 1,
    total: '$79.99',
    date: 'Mar 11',
    status: 'Shipped',
    sc: 'text-yellow bg-yellow/10',
  },
  {
    id: '#ESQ-00835',
    customer: 'David P.',
    product: 'Wireless Earbuds Pro',
    qty: 1,
    total: '$49.99',
    date: 'Mar 10',
    status: 'Return',
    sc: 'text-red bg-red/10',
    hasReturn: true,
  },
];
const MerchantOrders = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.25rem] font-bold text-white">
          Order <span className="text-teal">Management</span>
        </h1>
        <p className="text-gray mt-1 text-[0.78rem]">Accept, process, and manage your orders</p>
      </div>
      <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem]">
        <Download size={14} /> Export
      </button>
    </div>
    <div className="mb-4 flex flex-wrap gap-2">
      {filters.map((f, i) => (
        <button
          key={f}
          className={`rounded px-3 py-1.5 text-[0.75rem] font-medium transition-all ${i === 0 ? 'bg-teal text-navy' : 'text-gray2 hover:border-teal hover:text-teal border border-white/[0.07]'}`}
        >
          {f}
        </button>
      ))}
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.85rem] font-bold text-white">All Orders</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none"
            placeholder="Search orders..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.78rem] outline-none">
            <option>All Status</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {[
                'Order ID',
                'Customer',
                'Product(s)',
                'Qty',
                'Total',
                'Date',
                'Status',
                'Actions',
              ].map((h) => (
                <th
                  key={h}
                  className="text-gray px-4 py-2.5 text-left text-[0.68rem] font-semibold tracking-widest whitespace-nowrap uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr
                key={o.id}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
              >
                <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{o.id}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{o.customer}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{o.product}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{o.qty}</td>
                <td className="px-4 py-3 text-[0.82rem] font-semibold text-white">{o.total}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{o.date}</td>
                <td className="px-4 py-3">
                  <Pill c={o.sc}>{o.status}</Pill>
                </td>
                <td className="px-4 py-3">
                  {o.hasActions ? (
                    <div className="flex gap-1.5">
                      <button className="bg-teal text-navy flex items-center gap-1 rounded px-2.5 py-1 text-[0.72rem] font-medium">
                        <Check size={12} /> Accept
                      </button>
                      <button className="border-red/20 bg-red/10 text-red rounded border p-1">
                        <X size={12} />
                      </button>
                    </div>
                  ) : o.hasReturn ? (
                    <div className="flex gap-1.5">
                      <button className="bg-teal text-navy rounded px-2.5 py-1 text-[0.72rem]">
                        Approve
                      </button>
                      <button className="border-red/20 bg-red/10 text-red rounded border px-2.5 py-1 text-[0.72rem]">
                        Deny
                      </button>
                    </div>
                  ) : (
                    <button className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.75rem]">
                      Details
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default MerchantOrders;
