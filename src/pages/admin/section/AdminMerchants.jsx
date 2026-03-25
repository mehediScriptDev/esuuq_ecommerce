import React from 'react';
import { Download, Plus, Check, X } from 'lucide-react';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);
const pending = [
  {
    biz: 'Savana Cuisine',
    owner: 'Mohamed A.',
    cat: 'Food & Grocery',
    date: 'Mar 11, 2026',
    docs: 'Uploaded',
    dc: 'text-blue-500 bg-blue-500/10',
  },
  {
    biz: 'FreshThreads Co.',
    owner: 'Lena M.',
    cat: 'Fashion',
    date: 'Mar 10, 2026',
    docs: 'Uploaded',
    dc: 'text-blue-500 bg-blue-500/10',
  },
  {
    biz: 'GadgetHub',
    owner: 'Kevin T.',
    cat: 'Electronics',
    date: 'Mar 9, 2026',
    docs: 'Pending',
    dc: 'text-yellow bg-yellow/10',
  },
];
const merchants = [
  {
    name: 'TechZone MN',
    cat: 'Electronics',
    prods: 248,
    rev: '$24,300',
    comm: '$2,430',
    rating: '4.9',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'SoleStyle',
    cat: 'Fashion',
    prods: 183,
    rev: '$18,200',
    comm: '$1,820',
    rating: '4.7',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'HomeChef',
    cat: 'Home',
    prods: 96,
    rev: '$11,400',
    comm: '$1,140',
    rating: '4.8',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'AudioPro',
    cat: 'Electronics',
    prods: 64,
    rev: '$9,800',
    comm: '$980',
    rating: '4.6',
    status: 'Warning',
    sc: 'text-yellow bg-yellow/10',
  },
  {
    name: 'VisionX',
    cat: 'Beauty',
    prods: 41,
    rev: '$5,200',
    comm: '$520',
    rating: '4.5',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'GreenHome',
    cat: 'Garden',
    prods: 28,
    rev: '$3,100',
    comm: '$310',
    rating: '4.3',
    status: 'Suspended',
    sc: 'text-red bg-red/10',
  },
];
const AdminMerchants = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.3rem] font-bold text-white">
          Merchant <span className="text-teal">Management</span>
        </h1>
        <p className="text-gray mt-1 text-[0.8rem]">Approve, manage and monitor all sellers</p>
      </div>
      <div className="flex gap-3">
        <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem]">
          <Download size={14} /> Export
        </button>
        <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
          <Plus size={14} /> Add Merchant
        </button>
      </div>
    </div>
    {/* Pending */}
    <div className="border-yellow/30 bg-card mb-4 overflow-hidden rounded-md border">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">
          ⏳ Pending Approvals (3)
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {['Business', 'Owner', 'Category', 'Applied', 'Documents', 'Actions'].map((h) => (
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
            {pending.map((p) => (
              <tr key={p.biz} className="border-b border-white/[0.07] last:border-b-0">
                <td className="px-4 py-3 text-[0.82rem] font-semibold text-white">{p.biz}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.owner}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{p.cat}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{p.date}</td>
                <td className="px-4 py-3">
                  <Pill c={p.dc}>{p.docs}</Pill>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1.5">
                    <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1 rounded px-3 py-1 text-[0.75rem] font-medium">
                      <Check size={12} /> Approve
                    </button>
                    <button className="border-red/20 bg-red/10 text-red hover:bg-red/20 flex items-center gap-1 rounded border px-3 py-1 text-[0.75rem]">
                      <X size={12} /> Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {/* Active */}
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">
          Active Merchants (312)
        </h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none"
            placeholder="Search merchants..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.78rem] outline-none">
            <option>All Categories</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy3">
              {[
                'Merchant',
                'Category',
                'Products',
                'Revenue',
                'Commission',
                'Rating',
                'Status',
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
            {merchants.map((m) => (
              <tr
                key={m.name}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3 text-[0.82rem] font-semibold text-white">{m.name}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{m.cat}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{m.prods}</td>
                <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{m.rev}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{m.comm}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">⭐ {m.rating}</td>
                <td className="px-4 py-3">
                  <Pill c={m.sc}>{m.status}</Pill>
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray2 hover:border-teal hover:text-teal rounded border border-white/[0.07] px-3 py-1 text-[0.75rem]">
                    Manage
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
export default AdminMerchants;
