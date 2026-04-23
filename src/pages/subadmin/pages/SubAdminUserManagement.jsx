import React from 'react';
import { Search, UserRoundCog } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { users } from '../components/subAdminData';

const SubAdminUserManagement = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>User </span><span className="text-teal">Management</span></>}
        subtitle="Monitor user account status and enforce platform rules"
      />

      <div className="bg-card border-border rounded-md border p-3">
        <div className="bg-navy3 border-border mb-3 flex items-center gap-2 rounded border px-3 py-2">
          <Search size={14} className="text-gray" />
          <input className="text-gray2 placeholder:text-gray w-full bg-transparent text-[0.82rem] outline-none" placeholder="Search users by name or email..." />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-navy3">
                {['User', 'Role', 'Status', 'Risk Score', 'Actions'].map((head) => (
                  <th key={head} className="text-gray px-3 py-2 text-left text-[0.7rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.email} className="border-border border-b last:border-none">
                  <td className="px-3 py-2.5">
                    <div className="inline-flex items-center gap-2">
                      <UserRoundCog size={13} className="text-teal" />
                      <div>
                        <div className="text-[0.875rem] font-semibold text-white">{user.name}</div>
                        <div className="text-gray text-[0.75rem]">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2.5"><span className={`${user.roleClass} rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}>{user.role}</span></td>
                  <td className="px-3 py-2.5"><span className={`${user.statusClass} rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}>{user.status}</span></td>
                  <td className="px-3 py-2.5 text-[0.8rem] text-white">{idx === 1 ? 'High' : idx === 2 ? 'Medium' : 'Low'}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1.5">
                      <button className="border-border text-gray2 rounded border px-2 py-1 text-[0.7rem] font-semibold">View</button>
                      <button className="text-yellow bg-yellow/10 rounded border border-yellow/40 px-2 py-1 text-[0.7rem] font-semibold">Warn</button>
                      <button className="text-red bg-red/10 rounded border border-red/30 px-2 py-1 text-[0.7rem] font-semibold">Suspend</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubAdminUserManagement;
