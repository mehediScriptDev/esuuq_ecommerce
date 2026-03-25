import React from 'react';
import { Users, UserPlus, Star, Moon, Download } from 'lucide-react';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);
const stats = [
  {
    icon: Users,
    bg: 'bg-teal/10',
    val: '24,580',
    label: 'Total Customers',
    trend: '↑ 8%',
    up: true,
  },
  {
    icon: UserPlus,
    bg: 'bg-purple-500/10',
    val: '128',
    label: 'New Today',
    trend: '↑ 12%',
    up: true,
  },
  { icon: Star, bg: 'bg-yellow/10', val: '4,820', label: 'Repeat Buyers', trend: '↑ 3%', up: true },
  { icon: Moon, bg: 'bg-red/10', val: '1,240', label: 'Inactive (30d)', trend: '↓ 5%', up: false },
];
const customers = [
  {
    name: 'Ahmed M.',
    initial: 'A',
    grad: 'from-teal to-blue-500',
    email: 'ahmed@email.com',
    orders: 14,
    spent: '$1,240',
    joined: 'Jan 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Fatima O.',
    initial: 'F',
    grad: 'from-purple-500 to-blue-500',
    email: 'fatima@email.com',
    orders: 8,
    spent: '$680',
    joined: 'Feb 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'James K.',
    initial: 'J',
    grad: 'from-yellow to-orange-500',
    email: 'james@email.com',
    orders: 3,
    spent: '$214',
    joined: 'Mar 2026',
    status: 'Active',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'David P.',
    initial: 'D',
    grad: 'from-red to-orange-500',
    email: 'david@email.com',
    orders: 1,
    spent: '$49',
    joined: 'Mar 2026',
    status: 'Flagged',
    sc: 'text-red bg-red/10',
  },
];
const AdminCustomers = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.3rem] font-bold text-white">
          Customer <span className="text-teal">Management</span>
        </h1>
        <p className="text-gray mt-1 text-[0.8rem]">View and manage all registered customers</p>
      </div>
      <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem]">
        <Download size={14} /> Export CSV
      </button>
    </div>
    <div className="mb-5 grid grid-cols-1 gap-4 min-[580px]:grid-cols-2 min-[1100px]:grid-cols-4">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="bg-card rounded-md border border-white/[0.07] p-5">
            <div className="mb-3 flex items-start justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-md ${s.bg}`}>
                <Icon size={20} className="text-teal" />
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[0.72rem] font-medium ${s.up ? 'bg-green-500/10 text-green-500' : 'bg-red/10 text-red'}`}
              >
                {s.trend}
              </span>
            </div>
            <div className="font-['Syne'] text-[1.4rem] font-extrabold text-white">{s.val}</div>
            <div className="text-gray mt-1 text-[0.72rem]">{s.label}</div>
          </div>
        );
      })}
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">All Customers</h3>
        <div className="flex gap-2">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none"
            placeholder="Search customers..."
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
              {['Customer', 'Email', 'Orders', 'Spent', 'Joined', 'Status', 'Actions'].map((h) => (
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
            {customers.map((c) => (
              <tr
                key={c.name}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${c.grad} text-navy text-[0.65rem] font-bold`}
                    >
                      {c.initial}
                    </div>
                    <span className="text-[0.82rem] text-white">{c.name}</span>
                  </div>
                </td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{c.email}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{c.orders}</td>
                <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{c.spent}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{c.joined}</td>
                <td className="px-4 py-3">
                  <Pill c={c.sc}>{c.status}</Pill>
                </td>
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
export default AdminCustomers;
