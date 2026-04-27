import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import DashboardPageHeader from '../components/DashboardPageHeader';
import Pagination from '../components/Pagination';
import { createAdminCoupon, deactivateAdminCoupon, getAdminCoupons, updateAdminCoupon } from '../../../services/adminService';

const Pill = ({ children, c }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${c}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);

const couponStatusMeta = (coupon) => {
  const now = new Date();
  const expiresAt = coupon?.expiresAt ? new Date(coupon.expiresAt) : null;
  if (!coupon?.isActive) return { label: 'Inactive', className: 'text-gray2 bg-white/10' };
  if (expiresAt && expiresAt < now) return { label: 'Expired', className: 'text-red bg-red/10' };
  if (expiresAt && expiresAt.getTime() - now.getTime() < 7 * 24 * 60 * 60 * 1000) return { label: 'Expiring', className: 'text-yellow bg-yellow/10' };
  return { label: 'Active', className: 'text-green-500 bg-green-500/10' };
};

const couponValueLabel = (coupon) => {
  const type = String(coupon?.type || '').toLowerCase();
  const value = Number(coupon?.value || 0);
  if (type === 'percentage') return `${value}%`;
  if (type === 'flat') return `$${value.toFixed(2)}`;
  if (type === 'free_shipping') return 'Free Shipping';
  return String(value);
};

const AdminCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCoupons, setTotalCoupons] = useState(23);
  const itemsPerPage = 10;

  const load = async (page = currentPage) => {
    try {
      setLoading(true);
      setError('');
      const payload = await getAdminCoupons({ page, limit: itemsPerPage });
      setCoupons(Array.isArray(payload?.data) ? payload.data : []);
      setTotalCoupons(Number(payload?.meta?.total || 0));
      setCurrentPage(page);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load coupons.');
      setCoupons([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const createCoupon = async () => {
    const code = window.prompt('Coupon code (e.g. SAVE20):', 'SAVE20');
    if (!code) return;
    const type = window.prompt('Type: percentage | flat | free_shipping', 'percentage');
    if (!type) return;
    const valueInput = window.prompt('Value (number):', '10');
    if (valueInput == null) return;
    const value = Number(valueInput);
    const minOrderInput = window.prompt('Min order value (optional):', '0');
    const minOrderValue = Number(minOrderInput || 0);
    const expiresInput = window.prompt('Expires at (optional, YYYY-MM-DD or ISO datetime):', '');
    const expiresAt = String(expiresInput || '').trim();

    try {
      setError('');
      await createAdminCoupon({
        code: code.trim().toUpperCase(),
        type: type.trim(),
        value,
        minOrderValue,
        scope: 'all',
        ...(expiresAt ? { expiresAt: new Date(expiresAt).toISOString() } : {}),
      });
      load();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to create coupon.');
    }
  };

  const editCoupon = async (coupon) => {
    const type = window.prompt('Type: percentage | flat | free_shipping', coupon.type || 'percentage');
    if (type == null) return;
    const valueInput = window.prompt('Value (number):', String(coupon.value ?? 0));
    if (valueInput == null) return;
    const description = window.prompt('Update description:', coupon.description || '');
    if (description == null) return;
    const minOrderInput = window.prompt('Min order value:', String(coupon.minOrderValue ?? 0));
    if (minOrderInput == null) return;
    const expiresInput = window.prompt(
      'Expires at (optional, YYYY-MM-DD or ISO datetime):',
      coupon.expiresAt ? new Date(coupon.expiresAt).toISOString() : '',
    );
    if (expiresInput == null) return;
    const maxUsesInput = window.prompt('Max uses (blank = unlimited):', coupon.maxUses ?? '');
    if (maxUsesInput == null) return;

    try {
      setError('');
      await updateAdminCoupon(coupon.id, {
        type: String(type).trim(),
        value: Number(valueInput),
        description,
        minOrderValue: Number(minOrderInput || 0),
        ...(String(expiresInput).trim() ? { expiresAt: new Date(String(expiresInput).trim()).toISOString() } : { expiresAt: null }),
        ...(String(maxUsesInput).trim() ? { maxUses: Number(maxUsesInput) } : {}),
      });
      load();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to update coupon.');
    }
  };

  const deactivateCoupon = async (coupon) => {
    if (!window.confirm(`Deactivate coupon ${coupon.code}?`)) return;
    try {
      setError('');
      await deactivateAdminCoupon(coupon.id);
      load();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to deactivate coupon.');
    }
  };

  const reactivateCoupon = async (coupon) => {
    if (!window.confirm(`Reactivate coupon ${coupon.code}?`)) return;
    try {
      setError('');
      await updateAdminCoupon(coupon.id, { isActive: true });
      load();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to reactivate coupon.');
    }
  };

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageHeader
          title={<span>Coupon <span className="text-teal">Management</span></span>}
          subtitle="Create and manage promotional coupon codes"
        />
        <button onClick={createCoupon} className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-medium">
          <Plus size={14} /> Create Coupon
        </button>
      </div>

      {error ? <div className="mb-4 rounded border border-red/30 bg-red/10 px-4 py-2 text-sm text-red-300">{error}</div> : null}

      <div className="bg-card overflow-hidden rounded-md border border-white/[0.07]">
        <div className="border-b border-white/[0.07] px-5 py-3.5">
          <h3 className="font-['Syne'] text-[1rem] font-bold text-white">All Coupons</h3>
        </div>
        <div className="space-y-3 p-4 md:hidden">
          {loading && <div className="text-sm text-gray2">Loading coupons...</div>}
          {!loading && !coupons.length && <div className="text-sm text-gray2">No coupons found.</div>}
          {!loading && coupons.map((c) => {
            const s = couponStatusMeta(c);
            return (
              <div key={c.id} className="bg-navy3 rounded-md border border-white/[0.07] p-3">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="text-teal text-[0.82rem] font-bold">{c.code}</div>
                  <Pill c={s.className}>{s.label}</Pill>
                </div>
                <div className="space-y-1 text-[0.875rem]">
                  <div className="text-gray">Type: <span className="text-white">{String(c.type || '').replace('_', ' ')}</span></div>
                  <div className="text-gray">Value: <span className="text-white">{couponValueLabel(c)}</span></div>
                  <div className="text-gray">Min Order: <span className="text-white">${Number(c.minOrderValue || 0).toFixed(2)}</span></div>
                  <div className="text-gray">Used: <span className="text-white">{Number(c.usedCount || 0)}</span></div>
                  <div className="text-gray">Expires: <span className="text-white">{c.expiresAt ? new Date(c.expiresAt).toLocaleDateString() : '-'}</span></div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button onClick={() => editCoupon(c)} className="text-gray2 hover:border-teal hover:text-teal rounded-md border border-white/[0.07] px-3 py-2 text-[0.82rem]">Edit</button>
                  {c.isActive ? (
                    <button onClick={() => deactivateCoupon(c)} className="text-red hover:bg-red/20 rounded-md border border-red/20 bg-red/10 px-3 py-2 text-[0.82rem]">Deactivate</button>
                  ) : (
                    <button onClick={() => reactivateCoupon(c)} className="text-teal hover:bg-teal/20 rounded-md border border-teal/20 bg-teal/10 px-3 py-2 text-[0.82rem]">Reactivate</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-navy3">
                {['Code', 'Type', 'Value', 'Min Order', 'Used', 'Expires', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="text-gray px-4 py-2.5 text-left text-[0.7rem] font-semibold tracking-widest whitespace-nowrap uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={8} className="text-gray2 px-4 py-3 text-sm">Loading coupons...</td></tr>}
              {!loading && !coupons.length && <tr><td colSpan={8} className="text-gray2 px-4 py-3 text-sm">No coupons found.</td></tr>}
              {!loading && coupons.map((c) => {
                const s = couponStatusMeta(c);
                return (
                  <tr key={c.id} className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/2">
                    <td className="text-teal px-4 py-3 text-[0.82rem] font-bold">{c.code}</td>
                    <td className="text-gray px-4 py-3 text-[0.82rem]">{String(c.type || '').replace('_', ' ')}</td>
                    <td className="px-4 py-3 text-[0.82rem] text-white">{couponValueLabel(c)}</td>
                    <td className="px-4 py-3 text-[0.82rem] text-white">${Number(c.minOrderValue || 0).toFixed(2)}</td>
                    <td className="px-4 py-3 text-[0.82rem] text-white">{Number(c.usedCount || 0)}</td>
                    <td className="text-gray px-4 py-3 text-[0.82rem]">{c.expiresAt ? new Date(c.expiresAt).toLocaleDateString() : '-'}</td>
                    <td className="px-4 py-3"><Pill c={s.className}>{s.label}</Pill></td>
                    <td className="px-4 py-3">
                      <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => editCoupon(c)} className="text-gray2 hover:border-teal hover:text-teal rounded-md border border-white/[0.07] px-3 py-1.5 text-[0.78rem]">Edit</button>
                        {c.isActive ? (
                          <button onClick={() => deactivateCoupon(c)} className="text-red hover:bg-red/20 rounded-md border border-red/20 bg-red/10 px-3 py-1.5 text-[0.78rem]">Deactivate</button>
                        ) : (
                          <button onClick={() => reactivateCoupon(c)} className="text-teal hover:bg-teal/20 rounded-md border border-teal/20 bg-teal/10 px-3 py-1.5 text-[0.78rem]">Reactivate</button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination 
        currentPage={currentPage}
        totalItems={totalCoupons}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => load(page)}
        loading={loading}
      />
    </div>
  );
};

export default AdminCoupons;
