import React from 'react';
import { Truck, MapPin, CheckCircle, Clock, Plus } from 'lucide-react';
import DashboardPageHeader from '../components/DashboardPageHeader';
import DashboardStats from '../../../components/DashboardStats';
const Pill = ({ children, c }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);
const stats = [
  { icon: Truck, bg: 'bg-teal/10', val: '84', label: 'Active Drivers' },
  { icon: MapPin, bg: 'bg-purple-500/10', val: '203', label: 'Live Deliveries' },
  { icon: CheckCircle, bg: 'bg-yellow/10', val: '97.2%', label: 'Success Rate' },
  { icon: Clock, bg: 'bg-red/10', val: '34 min', label: 'Avg Delivery Time' },
];
const drivers = [
  {
    name: 'Hassan M.',
    phone: '+1-612-555-0101',
    zone: 'Savage / Prior Lake',
    deliveries: 284,
    rating: '4.9',
    earnings: '$3,240',
    status: 'Online',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Carlos V.',
    phone: '+1-612-555-0184',
    zone: 'Burnsville / Eagan',
    deliveries: 197,
    rating: '4.7',
    earnings: '$2,180',
    status: 'Online',
    sc: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Ana K.',
    phone: '+1-612-555-0221',
    zone: 'Eden Prairie',
    deliveries: 143,
    rating: '4.8',
    earnings: '$1,620',
    status: 'Offline',
    sc: 'text-gray bg-gray/10',
  },
  {
    name: 'Mike J.',
    phone: '+1-612-555-0099',
    zone: 'Bloomington',
    deliveries: 89,
    rating: '4.4',
    earnings: '$980',
    status: 'Busy',
    sc: 'text-yellow bg-yellow/10',
  },
];
const AdminDelivery = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <DashboardPageHeader
        title={<span>Delivery <span className="text-teal">Partners</span></span>}
        subtitle="Manage drivers and active deliveries"
      />
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Plus size={14} /> Add Driver
      </button>
    </div>
    <DashboardStats stats={stats} />
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-['Syne'] text-[1rem] font-bold text-white">All Delivery Partners</h3>
          <div className="flex min-[400px]:flex-row flex-col gap-2 w-full lg:w-auto lg:ml-auto">
            <input
              className="bg-navy3 placeholder:text-gray focus:border-teal rounded border border-white/[0.07] px-3 py-1.5 text-[0.78rem] text-white outline-none w-full lg:w-auto"
              placeholder="Search drivers..."
            />
            <select className="bg-navy3 text-gray2 rounded border border-white/[0.07] px-2 py-1.5 text-[0.78rem] outline-none w-full lg:w-auto">
              <option>All Status</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Busy</option>
            </select>
          </div>
        </div>
      </div>
      <div className="space-y-3 p-4 md:hidden">
        {drivers.map((d) => (
          <div key={d.name} className="bg-navy3 rounded-md border border-white/[0.07] p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="text-[0.82rem] font-semibold text-white">{d.name}</div>
              <Pill c={d.sc}>{d.status}</Pill>
            </div>
            <div className="space-y-1 text-[0.875rem]">
              <div className="text-gray">Phone: <span className="text-white">{d.phone}</span></div>
              <div className="text-gray">Zone: <span className="text-white">{d.zone}</span></div>
              <div className="text-gray">Deliveries: <span className="text-white">{d.deliveries}</span></div>
              <div className="text-gray">Rating: <span className="text-white">{d.rating}</span></div>
              <div className="text-gray">Earnings: <span className="text-teal font-medium">{d.earnings}</span></div>
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
              {[
                'Driver',
                'Phone',
                'Zone',
                'Deliveries',
                'Rating',
                'Earnings',
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
            {drivers.map((d) => (
              <tr
                key={d.name}
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/2"
              >
                <td className="px-4 py-3 text-[0.82rem] font-semibold text-white">{d.name}</td>
                <td className="text-gray px-4 py-3 text-[0.82rem]">{d.phone}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{d.zone}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">{d.deliveries}</td>
                <td className="px-4 py-3 text-[0.82rem] text-white">⭐ {d.rating}</td>
                <td className="text-teal px-4 py-3 text-[0.82rem] font-medium">{d.earnings}</td>
                <td className="px-4 py-3">
                  <Pill c={d.sc}>{d.status}</Pill>
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
export default AdminDelivery;
