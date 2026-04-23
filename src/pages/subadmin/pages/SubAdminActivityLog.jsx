import React from 'react';
import { ClipboardList } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { activities } from '../components/subAdminData';

const SubAdminActivityLog = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>Activity </span><span className="text-teal">Log</span></>}
        subtitle="Chronological record of your moderation and support actions"
      />

      <div className="bg-card border-border rounded-md border p-3">
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={`${activity.action}-${activity.time}`} className="border-border flex items-start gap-2.5 rounded-md border p-3">
              <div className={`${activity.tone} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded`}>
                <ClipboardList size={14} />
              </div>
              <div>
                <p className="text-[0.875rem] text-white">{activity.action}</p>
                <p className="text-[0.75rem] text-gray">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubAdminActivityLog;
