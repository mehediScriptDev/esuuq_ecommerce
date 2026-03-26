import React from 'react';
import { Download, Plus } from 'lucide-react';
import DashboardPageHeader from '../components/DashboardPageHeader';
const orders = [
  {
    id: '#ESQ-00847',
    customer: 'Ahmed M.',
    merchant: 'TechZone MN',
    items: '3 items',
    total: '$392.95',
    payment: 'Paid',
    paymentC: 'text-green-500 bg-green-500/10',
    status: 'Delivered',
    statusC: 'text-green-500 bg-green-500/10',
    date: 'Mar 12',
  },
  {
    id: '#ESQ-00846',
    customer: 'Fatima O.',
    merchant: 'SoleStyle',
    items: '1 item',
    total: '$124.50',
    payment: 'Paid',
    paymentC: 'text-green-500 bg-green-500/10',
    status: 'Shipping',
    statusC: 'text-yellow bg-yellow/10',
    date: 'Mar 12',
  },
  {
    id: '#ESQ-00845',
    customer: 'James K.',
    merchant: 'HomeChef',
    items: '2 items',
    total: '$89.00',
    payment: 'Paid',
    paymentC: 'text-green-500 bg-green-500/10',
    status: 'Processing',
    statusC: 'text-blue-500 bg-blue-500/10',
    date: 'Mar 11',
  },
  {
    id: '#ESQ-00844',
    customer: 'Sara L.',
    merchant: 'VisionX',
    items: '4 items',
    total: '$214.99',
    payment: 'Paid',
    paymentC: 'text-green-500 bg-green-500/10',
    status: 'Delivered',
    statusC: 'text-green-500 bg-green-500/10',
    date: 'Mar 11',
  },
  {
    id: '#ESQ-00843',
    customer: 'David P.',
    merchant: 'AudioPro',
    items: '1 item',
    total: '$49.99',
    payment: 'Refunded',
    paymentC: 'text-red bg-red/10',
    status: 'Cancelled',
    statusC: 'text-red bg-red/10',
    date: 'Mar 10',
  },
  {
    id: '#ESQ-00842',
    customer: 'Mia R.',
    merchant: 'LuxeCarry',
    items: '2 items',
    total: '$178.00',
    payment: 'Pending',
    paymentC: 'text-yellow bg-yellow/10',
    status: 'Pending',
    statusC: 'text-yellow bg-yellow/10',
    date: 'Mar 10',
  },
];
const filters = [
  'All (1,847)',
  'Pending (12)',
  'Processing (84)',
  'Shipped (203)',
  'Delivered (1,490)',
  'Cancelled (58)',
  'Returns (24)',
];
const Pill = ({ children, className }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);

const AdminOrders = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <DashboardPageHeader
        title={<span>Order <span className="text-teal">Management</span></span>}
        subtitle="Monitor and manage all orders across merchants"
      />
      <div className="flex gap-3">
        <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem] transition-colors">
          <Download size={14} /> Export
        </button>
        <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
          <Plus size={14} /> Manual Order
        </button>
      </div>
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
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">All Orders</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none"
            placeholder="Search orders..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.78rem] outline-none">
            <option>All Status</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      <div className="space-y-3 p-4 md:hidden">
        {orders.map((o) => (
          <div key={o.id} className="bg-navy3 rounded-md border border-white/[0.07] p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="text-teal text-[0.82rem] font-medium">{o.id}</div>
              <Pill className={o.statusC}>{o.status}</Pill>
            </div>
            <div className="space-y-1 text-[0.76rem]">
              <div className="text-gray">Customer: <span className="text-white">{o.customer}</span></div>
              <div className="text-gray">Merchant: <span className="text-white">{o.merchant}</span></div>
              <div className="text-gray">Items: <span className="text-white">{o.items}</span></div>
              <div className="text-gray">Total: <span className="text-white font-semibold">{o.total}</span></div>
              <div className="text-gray">Payment: <Pill className={o.paymentC}>{o.payment}</Pill></div>
              <div className="text-gray">Date: <span className="text-white">{o.date}</span></div>
            </div>
            <button className="text-gray2 hover:border-teal hover:text-teal mt-3 rounded border border-white/[0.07] px-3 py-1 text-[0.75rem]">
              View
            </button>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {[
                '',
                'Order ID',
                'Customer',
                'Merchant',
                'Items',
                'Total',
                'Payment',
                'Status',
                'Date',
                'Actions',
              ].map((h) => (
                <th
                  key={h}
                  className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest whitespace-nowrap uppercase"
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
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/2"
              >
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-teal" />
                </td>
                <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{o.id}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{o.customer}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{o.merchant}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{o.items}</td>
                <td className="px-4 py-3 text-[0.82rem] font-semibold text-white">{o.total}</td>
                <td className="px-4 py-3">
                  <Pill className={o.paymentC}>{o.payment}</Pill>
                </td>
                <td className="px-4 py-3">
                  <Pill className={o.statusC}>{o.status}</Pill>
                </td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{o.date}</td>
                <td className="px-4 py-3">
                  <button className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.75rem]">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default AdminOrders;
