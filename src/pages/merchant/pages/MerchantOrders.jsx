import React from 'react';
import { Download, Check, X } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';

const Pill = ({ children, c }) => (
  <MerchantPill className={c}>{children}</MerchantPill>
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
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <MerchantPageHeader
        title={
          <>
            Order <span className="text-teal">Management</span>
          </>
        }
        subtitle="Accept, process, and manage your orders"
      />
      <div className="flex gap-2.5">
        <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem] transition-colors">
          <Download size={14} /> Export
        </button>
      </div>
    </div>
    
    <div className="mb-4 flex flex-wrap gap-2">
      {filters.map((f, i) => (
        <button
          key={f}
          className={`rounded px-3 py-1.5 text-[0.75rem] font-medium transition-colors ${i === 0 ? 'bg-teal text-navy hover:bg-teal2' : 'text-gray2 hover:border-teal hover:text-teal border border-white/[0.07]'}`}
        >
          {f}
        </button>
      ))}
    </div>
    
    <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 flex-wrap gap-3">
        <h3 className="font-syne text-[1rem] font-bold text-white">All Orders</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.8rem] text-white outline-none transition-colors"
            placeholder="Search orders..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.8rem] outline-none cursor-pointer hover:border-white/20 transition-colors">
            <option>All Status</option>
            <option>New</option>
            <option>Processing</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden min-[800px]:block overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
            <tr className="border-b border-white/[0.07]">
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
                <th key={h} className="px-6 py-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[0.88rem] text-white">
            {orders.map((o) => (
              <tr
                key={o.id}
                className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2"
              >
                  <td className="text-teal px-6 py-4 font-bold">{o.id}</td>
                  <td className="px-6 py-4 font-medium">{o.customer}</td>
                  <td className="text-gray2 px-6 py-4 max-w-[140px] truncate">{o.product}</td>
                  <td className="px-6 py-4">{o.qty}</td>
                  <td className="px-6 py-4 font-black">{o.total}</td>
                  <td className="text-gray2 px-6 py-4">{o.date}</td>
                <td className="px-6 py-4">
                  <Pill c={o.sc}>{o.status}</Pill>
                </td>
                <td className="px-6 py-4">
                  {o.hasActions ? (
                    <div className="flex gap-1.5">
                      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1 rounded border border-transparent px-2.5 py-1 text-[0.72rem] font-bold transition-colors">
                        <Check size={12} strokeWidth={3} /> Accept
                      </button>
                      <button className="border-red/20 bg-red/10 text-red hover:bg-red/20 rounded border px-2 py-1 transition-colors">
                        <X size={12} strokeWidth={3} />
                      </button>
                    </div>
                  ) : o.hasReturn ? (
                    <div className="flex gap-1.5">
                      <button className="bg-teal text-navy hover:bg-teal2 rounded border border-transparent px-2.5 py-1 text-[0.72rem] font-bold transition-colors">
                        Approve
                      </button>
                      <button className="border-red/20 bg-red/10 text-red hover:bg-red/20 rounded border px-2.5 py-1 text-[0.72rem] font-bold transition-colors">
                        Deny
                      </button>
                    </div>
                  ) : (
                    <button className="text-gray hover:border-teal hover:text-teal rounded border border-white/10 px-3 py-1 text-[0.75rem] font-bold transition-all">
                      Details
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="min-[800px]:hidden divide-y divide-white/[0.07]">
        {orders.map((o) => (
          <div key={o.id} className="p-5 space-y-4 hover:bg-white/2 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-teal font-black text-[0.9rem]">{o.id}</span>
              <Pill c={o.sc}>{o.status}</Pill>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Customer</p>
                <p className="text-white text-sm font-bold">{o.customer}</p>
              </div>
              <div>
                <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Amount</p>
                <p className="text-white text-sm font-black">{o.total} <span className="text-[0.62rem] font-medium text-gray lowercase">({o.qty} item{o.qty > 1 ? 's' : ''})</span></p>
              </div>
            </div>
            <div>
              <p className="text-gray text-[0.62rem] font-bold tracking-widest uppercase mb-1">Product</p>
              <p className="text-white text-sm truncate">{o.product}</p>
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-white/[0.07]">
               <span className="text-gray text-xs">{o.date}</span>
               {o.hasActions ? (
                  <div className="flex gap-1.5">
                    <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1 rounded border border-transparent px-2.5 py-1 text-[0.72rem] font-bold transition-colors">
                      <Check size={12} strokeWidth={3} /> Accept
                    </button>
                    <button className="border-red/20 bg-red/10 text-red hover:bg-red/20 rounded border px-2 py-1 transition-colors">
                      <X size={12} strokeWidth={3} />
                    </button>
                  </div>
                ) : o.hasReturn ? (
                  <div className="flex gap-1.5">
                    <button className="bg-teal text-navy hover:bg-teal2 rounded border border-transparent px-2.5 py-1 text-[0.72rem] font-bold transition-colors">
                      Approve
                    </button>
                    <button className="border-red/20 bg-red/10 text-red hover:bg-red/20 rounded border px-2.5 py-1 text-[0.72rem] font-bold transition-colors">
                      Deny
                    </button>
                  </div>
                ) : (
                  <button className="text-gray hover:border-teal hover:text-teal rounded border border-white/10 px-3 py-1 text-[0.75rem] font-bold transition-all">
                    Details
                  </button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default MerchantOrders;
