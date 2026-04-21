import React, { useEffect, useMemo, useState } from 'react';
import { Star } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import {
  addReplyToReview,
  getMyMerchantReviews,
  getMyMerchantStore,
  updateReplyToReview,
} from '../../../services/merchantService';

const MerchantReviews = () => {
  const [merchantId, setMerchantId] = useState('');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const load = async () => {
    try {
      setLoading(true);
      setError('');

      let id = merchantId;
      if (!id) {
        const store = await getMyMerchantStore();
        id = store?.id;
        setMerchantId(id || '');
      }
      if (!id) {
        setRows([]);
        return;
      }

      const payload = await getMyMerchantReviews(id, { page: 1, limit: 50, sort: 'newest' });
      setRows(Array.isArray(payload?.data) ? payload.data : []);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load reviews.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const breakdown = useMemo(() => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    rows.forEach((r) => {
      const value = Number(r.rating || 0);
      if (value >= 1 && value <= 5) counts[value] += 1;
    });
    const total = rows.length;
    const avg = total ? (rows.reduce((sum, item) => sum + Number(item.rating || 0), 0) / total) : 0;
    return { counts, total, avg };
  }, [rows]);

  const saveReply = async (row) => {
    const text = window.prompt('Write your reply', row.merchantReply || '');
    if (text == null || !text.trim()) return;

    try {
      setError('');
      setMessage('');
      if (row.merchantReply) {
        await updateReplyToReview(row.id, text.trim());
        setMessage('Reply updated.');
      } else {
        await addReplyToReview(row.id, text.trim());
        setMessage('Reply posted.');
      }
      setRows((prev) => prev.map((item) => (item.id === row.id ? { ...item, merchantReply: text.trim() } : item)));
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to save reply.');
    }
  };

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-6">
        <MerchantPageHeader
          title={
            <>
              Customer <span className="text-teal">Reviews</span>
            </>
          }
          subtitle="Monitor and respond to customer feedback"
        />
      </div>

      {message ? <div className="mb-4 rounded border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">{message}</div> : null}
      {error ? <div className="mb-4 rounded border border-red/30 bg-red/10 px-4 py-2 text-sm text-red-300">{error}</div> : null}

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-8 mb-8">
        <div className="bg-card rounded-lg border border-white/[0.07] p-6 lg:p-8 text-center flex flex-col items-center justify-center">
          <div className="font-syne text-[3.5rem] leading-none font-extrabold text-white mb-2">{breakdown.avg.toFixed(1)}</div>
          <div className="flex items-center gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < Math.round(breakdown.avg) ? 'fill-yellow text-yellow' : 'text-gray/20'} />
            ))}
          </div>
          <div className="text-gray text-[0.7rem] font-bold tracking-widest uppercase mb-6">
            {breakdown.total} reviews
          </div>
          <div className="w-full space-y-2.5">
            {[5, 4, 3, 2, 1].map((score) => {
              const count = breakdown.counts[score];
              const pct = breakdown.total ? (count / breakdown.total) * 100 : 0;
              return (
                <div key={score} className="flex items-center gap-3">
                  <span className="text-[0.7rem] font-bold text-gray w-2">{score}</span>
                  <div className="h-1.5 flex-1 bg-navy3 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[0.7rem] font-bold text-gray w-8 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-card rounded-lg border border-white/[0.07] overflow-hidden">
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.07] px-6 py-4 gap-3">
            <h3 className="font-syne text-[1rem] font-bold text-white">Recent Reviews</h3>
            <button onClick={load} className="text-xs text-gray2 hover:text-teal">{loading ? 'Loading...' : 'Refresh'}</button>
          </div>

          <div className="p-6 space-y-6">
            {rows.map((r) => (
              <div key={r.id} className="bg-navy3 border-white/[0.07] rounded-md border p-5">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <div className="text-[0.95rem] font-bold text-white mb-0.5">
                      {[r.user?.firstName, r.user?.lastName].filter(Boolean).join(' ') || 'Customer'}
                      <span className="text-gray text-[0.75rem] font-normal ml-1">· {r.product?.name || 'Product'}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} className={j < Number(r.rating || 0) ? 'fill-yellow text-yellow' : 'text-gray/20'} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray2 text-[0.88rem] leading-relaxed mb-3 mt-3">{r.comment || 'No review text.'}</p>

                {r.merchantReply ? (
                  <div className="mb-2 rounded border border-teal/20 bg-teal/5 p-3 text-sm text-gray2">
                    <div className="mb-1 text-teal text-[0.68rem] font-bold tracking-widest uppercase">Your reply</div>
                    {r.merchantReply}
                  </div>
                ) : null}

                <div className="flex items-center justify-between pt-2">
                  <div className="text-gray text-[0.7rem] font-bold tracking-widest uppercase">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </div>
                  <button onClick={() => saveReply(r)} className="text-gray hover:border-teal hover:text-teal rounded border border-white/10 px-4 py-1.5 text-[0.75rem] font-bold transition-all">
                    {r.merchantReply ? 'Edit Reply' : 'Reply'}
                  </button>
                </div>
              </div>
            ))}
            {!rows.length ? <div className="text-sm text-gray2">No reviews yet for this store.</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantReviews;
