import React from 'react';
import { Truck, MapPin, CheckCircle, Clock, Plus } from 'lucide-react';
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
      <div>
        <h1 className="font-['Syne'] text-[1.3rem] font-bold text-white">
          Delivery <span className="text-teal">Partners</span>
        </h1>
        <p className="text-gray mt-1 text-[0.8rem]">Manage drivers and active deliveries</p>
      </div>
      <button className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
        <Plus size={14} /> Add Driver
      </button>
    </div>
    <div className="mb-5 grid grid-cols-1 gap-4 min-[580px]:grid-cols-2 min-[1100px]:grid-cols-4">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="bg-card rounded-md border border-white/[0.07] p-5">
            <div className="mb-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-md ${s.bg}`}>
                <Icon size={20} className="text-teal" />
              </div>
            </div>
            <div className="font-['Syne'] text-[1.7rem] font-extrabold text-white">{s.val}</div>
            <div className="text-gray mt-1 text-[0.75rem]">{s.label}</div>
          </div>
        );
      })}
    </div>
    <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
      <div className="border-b border-white/[0.07] px-5 py-3.5">
        <h3 className="font-['Syne'] text-[0.88rem] font-bold text-white">All Delivery Partners</h3>
      </div>
      <div className="overflow-x-auto">
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
                className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.02]"
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
export default AdminDelivery;
