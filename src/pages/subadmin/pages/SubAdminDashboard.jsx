import React from 'react';
import {
  AlertTriangle,
  CheckCircle,
  Clock3,
  Flag,
  Headset,
  Search,
  ShieldAlert,
  Store,
  Ticket,
  Users,
} from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import {
  activities,
  dashboardStats,
  flaggedReviews,
  merchantApprovals,
  supportTickets,
  users,
} from '../components/subAdminData';

const statIcons = [Ticket, Store, Flag, CheckCircle, Clock3];

const SubAdminDashboard = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>Sub-Admin </span><span className="text-teal">Dashboard</span></>}
        subtitle="Moderation and support overview"
        actions={
          <>
            <button className="border-border text-gray2 hover:border-teal hover:text-teal flex items-center gap-1.5 rounded border px-3 py-1.5 text-[0.8rem] transition-colors">
              <Headset size={14} /> Export Log
            </button>
            <button className="bg-teal text-navy hover:bg-teal2 rounded px-3 py-1.5 text-[0.8rem] font-semibold">
              New Report
            </button>
          </>
        }
      />

      <div className="mb-5 flex items-start gap-3 rounded-md border border-purple-500/40 bg-purple-500/10 px-4 py-3">
        <ShieldAlert size={18} className="mt-0.5 shrink-0 text-purple-300" />
        <p className="text-gray2 text-[0.875rem]">
          <span className="font-semibold text-purple-300">Restricted Access:</span> You have moderation and support permissions only. Financial data and platform settings are handled by admin.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {dashboardStats.map((stat, idx) => {
          const Icon = statIcons[idx] || Ticket;
          return (
            <div key={stat.label} className="bg-card hover:border-teal/20 rounded-md border border-white/[0.07] p-5 transition-colors">
              <Icon size={20} className={`${stat.iconTone} mb-3`} />
              <div className="text-gray mb-1 text-[0.875rem] font-semibold">{stat.label}</div>
              <div className="font-['Syne'] text-[1.7rem] font-extrabold text-white">{stat.value}</div>
              <div className={`${stat.tone} mt-1 text-[0.875rem]`}>{stat.note}</div>
            </div>
          );
        })}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.65fr_1fr]">
        <div className="bg-card border-border overflow-hidden rounded-md border">
          <div className="border-border flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-['Syne'] text-[1rem] font-bold text-white">Support Tickets</h3>
            <div className="flex gap-1 rounded-md bg-[#1E2A3A] p-1 text-[0.75rem]">
              <button className="rounded bg-card px-2 py-1 text-white">Open</button>
              <button className="text-gray rounded px-2 py-1">In Progress</button>
              <button className="text-gray rounded px-2 py-1">Resolved</button>
            </div>
          </div>
          <div className="space-y-2 p-3">
            {supportTickets.map((ticket) => (
              <div key={ticket.id} className="border-border hover:border-teal/30 rounded-md border p-3 transition-colors">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-gray text-[0.75rem]">{ticket.id}</span>
                  <span className={`${ticket.priorityClass} inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {ticket.priority}
                  </span>
                </div>
                <p className="mb-1 text-[0.875rem] font-semibold text-white">{ticket.title}</p>
                <p className="text-gray text-[0.8rem]">{ticket.meta}</p>
              </div>
            ))}
            <button className="border-border text-gray2 hover:border-teal hover:text-teal w-full rounded border px-3 py-2 text-[0.8rem] font-medium transition-colors">
              View All Tickets
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-card border-border rounded-md border p-3">
            <h3 className="mb-2 font-['Syne'] text-[1rem] font-bold text-white">Quick Actions</h3>
            <div className="space-y-1.5">
              {[
                { icon: Store, text: 'Review Merchant Applications (7)' },
                { icon: AlertTriangle, text: 'Moderate Flagged Reviews (5)' },
                { icon: Flag, text: 'Review Flagged Content (3)' },
                { icon: Ticket, text: 'View Order Disputes (2)' },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <button key={action.text} className="bg-navy3 border-border text-gray2 hover:border-teal hover:text-teal flex w-full items-center gap-2 rounded border px-3 py-2 text-[0.8rem] transition-colors">
                    <Icon size={14} /> {action.text}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-card border-border rounded-md border p-3">
            <h3 className="mb-2 font-['Syne'] text-[1rem] font-bold text-white">My Permissions</h3>
            {[
              ['Support Tickets', true],
              ['Merchant Approvals', true],
              ['Review Moderation', true],
              ['User Management', true],
              ['Financial Data', false],
              ['Platform Settings', false],
            ].map(([name, on]) => (
              <div key={name} className="border-border flex items-center justify-between border-b py-2.5 last:border-none">
                <span className="text-[0.875rem] text-gray2">{name}</span>
                <span className={`h-5 w-9 rounded-full border ${on ? 'border-teal bg-teal' : 'border-white/10 bg-[#1E2A3A'} relative`}>
                  <span className={`absolute top-0.5 h-3.5 w-3.5 rounded-full bg-white transition-all ${on ? 'left-4.5' : 'left-0.5'}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="bg-card border-border overflow-hidden rounded-md border">
          <div className="border-border flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-['Syne'] text-[1rem] font-bold text-white">Merchant Approvals</h3>
            <span className="text-yellow bg-yellow/10 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold">7 Pending</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-155">
              <thead>
                <tr className="bg-navy3">
                  {['Store Name', 'Owner', 'Category', 'Applied', 'Actions'].map((head) => (
                    <th key={head} className="text-gray px-3 py-2 text-left text-[0.7rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {merchantApprovals.map((row) => (
                  <tr key={row.store} className="border-border border-b last:border-none">
                    <td className="px-3 py-2.5 text-[0.875rem] font-semibold text-white">{row.store}</td>
                    <td className="px-3 py-2.5 text-[0.8rem] text-gray2">{row.owner}</td>
                    <td className="px-3 py-2.5"><span className={`${row.categoryClass} rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}>{row.category}</span></td>
                    <td className="px-3 py-2.5 text-[0.8rem] text-gray">{row.applied}</td>
                    <td className="px-3 py-2.5">
                      <div className="flex gap-1.5">
                        <button className="text-green-500 bg-green-500/10 rounded border border-green-500/30 px-2 py-1 text-[0.7rem] font-semibold">Approve</button>
                        <button className="text-red bg-red/10 rounded border border-red/30 px-2 py-1 text-[0.7rem] font-semibold">Reject</button>
                        <button className="border-border text-gray2 rounded border px-2 py-1 text-[0.7rem] font-semibold">View</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-card border-border overflow-hidden rounded-md border">
          <div className="border-border flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-['Syne'] text-[1rem] font-bold text-white">Flagged Reviews</h3>
            <span className="text-red bg-red/10 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold">5 Needs Action</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-155">
              <thead>
                <tr className="bg-navy3">
                  {['Review', 'Product', 'Rating', 'Reason', 'Actions'].map((head) => (
                    <th key={head} className="text-gray px-3 py-2 text-left text-[0.7rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {flaggedReviews.map((row) => (
                  <tr key={row.review} className="border-border border-b last:border-none">
                    <td className="px-3 py-2.5">
                      <div className="max-w-40 truncate text-[0.875rem] text-white">{row.review}</div>
                      <div className="text-gray text-[0.75rem]">by {row.by}</div>
                    </td>
                    <td className="px-3 py-2.5 text-[0.8rem] text-gray2">{row.product}</td>
                    <td className="px-3 py-2.5 text-[0.875rem] text-yellow">{row.rating}</td>
                    <td className="px-3 py-2.5"><span className={`${row.reasonClass} rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}>{row.reason}</span></td>
                    <td className="px-3 py-2.5">
                      <div className="flex gap-1.5">
                        <button className="text-green-500 bg-green-500/10 rounded border border-green-500/30 px-2 py-1 text-[0.7rem] font-semibold">Keep</button>
                        <button className="text-red bg-red/10 rounded border border-red/30 px-2 py-1 text-[0.7rem] font-semibold">Remove</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="bg-card border-border overflow-hidden rounded-md border">
          <div className="border-border flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-['Syne'] text-[1rem] font-bold text-white">User Management</h3>
            <button className="border-border text-gray2 rounded border px-2.5 py-1 text-[0.75rem]">View All</button>
          </div>
          <div className="p-3">
            <div className="bg-navy3 border-border mb-3 flex items-center gap-2 rounded border px-3 py-2">
              <Search size={14} className="text-gray" />
              <input className="text-gray2 placeholder:text-gray w-full bg-transparent text-[0.875rem] outline-none" placeholder="Search users by name or email..." />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-140">
                <thead>
                  <tr className="bg-navy3">
                    {['User', 'Role', 'Status', 'Actions'].map((head) => (
                      <th key={head} className="text-gray px-3 py-2 text-left text-[0.7rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.email} className="border-border border-b last:border-none">
                      <td className="px-3 py-2.5">
                        <div className="text-[0.875rem] font-semibold text-white">{user.name}</div>
                        <div className="text-gray text-[0.75rem]">{user.email}</div>
                      </td>
                      <td className="px-3 py-2.5"><span className={`${user.roleClass} rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}>{user.role}</span></td>
                      <td className="px-3 py-2.5"><span className={`${user.statusClass} inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{user.status}</span></td>
                      <td className="px-3 py-2.5">
                        <div className="flex gap-1.5">
                          <button className="border-border text-gray2 rounded border px-2 py-1 text-[0.7rem] font-semibold">View</button>
                          <button className="text-yellow bg-yellow/10 rounded border border-yellow/40 px-2 py-1 text-[0.7rem] font-semibold">Warn</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-card border-border rounded-md border">
          <div className="border-border flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-['Syne'] text-[1rem] font-bold text-white">My Activity Log</h3>
            <span className="text-gray text-[0.75rem]">Today</span>
          </div>
          <div className="p-3">
            {activities.map((activity) => (
              <div key={`${activity.action}-${activity.time}`} className="border-border flex items-start gap-2.5 border-b py-2.5 last:border-none">
                <span className={`${activity.tone} inline-flex h-7 w-7 items-center justify-center rounded`}>•</span>
                <div>
                  <p className="text-[0.875rem] text-white">{activity.action}</p>
                  <p className="text-gray text-[0.75rem]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminDashboard;
