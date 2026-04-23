import React from 'react';
import { Star } from 'lucide-react';
import SubAdminPageHeader from '../components/SubAdminPageHeader';
import { flaggedReviews } from '../components/subAdminData';

const SubAdminReviewModeration = () => {
  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <SubAdminPageHeader
        title={<><span>Review </span><span className="text-teal">Moderation</span></>}
        subtitle="Inspect and moderate user-submitted product reviews"
      />

      <div className="bg-card border-border overflow-hidden rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="bg-navy3">
                {['Review', 'Product', 'Rating', 'Reason', 'Moderator Action'].map((head) => (
                  <th key={head} className="text-gray px-3 py-2 text-left text-[0.66rem] font-semibold tracking-[0.08em] uppercase">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {flaggedReviews.map((row) => (
                <tr key={row.review} className="border-border border-b last:border-none">
                  <td className="px-3 py-2.5">
                    <div className="text-[0.875rem] text-white max-w-[220px] truncate">{row.review}</div>
                    <div className="text-[0.75rem] text-gray">by {row.by}</div>
                  </td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-gray2">{row.product}</td>
                  <td className="px-3 py-2.5 text-[0.875rem] text-yellow inline-flex items-center gap-1"><Star size={12} className="fill-yellow" />{row.rating}</td>
                  <td className="px-3 py-2.5"><span className={`${row.reasonClass} rounded-full px-2 py-0.5 text-[0.7rem] font-semibold`}>{row.reason}</span></td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1.5">
                      <button className="text-green-500 bg-green-500/10 rounded border border-green-500/30 px-2 py-1 text-[0.7rem] font-semibold">Keep</button>
                      <button className="text-red bg-red/10 rounded border border-red/30 px-2 py-1 text-[0.7rem] font-semibold">Remove</button>
                      <button className="text-yellow bg-yellow/10 rounded border border-yellow/40 px-2 py-1 text-[0.7rem] font-semibold">Warn User</button>
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

export default SubAdminReviewModeration;
