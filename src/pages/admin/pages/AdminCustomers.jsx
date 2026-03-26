import React from 'react';
import { Users, UserPlus, Star, Moon, Download } from 'lucide-react';
import DashboardPageHeader from '../components/DashboardPageHeader';
import AdminStats from '../components/AdminStats';
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
      <DashboardPageHeader
        title={<span>Customer <span className="text-teal">Management</span></span>}
        subtitle="View and manage all registered customers"
      />
      <button className="text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border border-white/[0.07] px-4 py-1.5 text-[0.8rem]">
        <Download size={14} /> Export CSV
      </button>
    </div>
    <AdminStats stats={stats} />
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[1rem] font-bold text-white">All Customers</h3>
        <div className="flex min-[400px]:flex-row flex-col gap-2 w-full lg:w-auto lg:ml-auto">
          <input
            className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none w-full lg:w-auto"
            placeholder="Search customers..."
          />
          <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.78rem] outline-none w-full lg:w-auto">
            <option>All Status</option>
          </select>
        </div>
      </div>
      <div className="space-y-3 p-4 md:hidden">
        {customers.map((c) => (
          <div key={c.name} className="bg-navy3 rounded-md border border-white/[0.07] p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br ${c.grad} text-navy text-[0.65rem] font-bold`}
                >
                  {c.initial}
                </div>
                <span className="text-[0.82rem] font-medium text-white">{c.name}</span>
              </div>
              <Pill c={c.sc}>{c.status}</Pill>
            </div>
            <div className="space-y-1 text-[0.875rem]">
              <div className="text-gray">{c.email}</div>
              <div className="text-gray">Orders: <span className="text-white">{c.orders}</span></div>
              <div className="text-gray">Spent: <span className="text-teal font-medium">{c.spent}</span></div>
              <div className="text-gray">Joined: <span className="text-white">{c.joined}</span></div>
            </div>
            <button className="text-gray2 hover:border-teal hover:text-teal mt-3 rounded-md border border-white/[0.07] w-full px-4 py-2 text-[0.85rem] font-medium">
              View
            </button>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto md:block">
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
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/2"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br ${c.grad} text-navy text-[0.65rem] font-bold`}
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
                  <button className="block w-full text-gray2 hover:border-teal hover:text-teal rounded-md border border-white/[0.07] px-4 py-2 text-[0.85rem] font-medium">
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
