import React, { useEffect, useMemo, useState } from 'react';
import { Tag, Plus, Calendar, Settings, Trash2 } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
import MerchantPill from '../components/MerchantPill';
import Pagination from '../../admin/components/Pagination';
import DashboardStats from '../../../components/DashboardStats';
import {
  getMyMerchantProducts,
  updateMyMerchantProduct,
} from '../../../services/merchantService';

const Pill = ({ children, c }) => (
  <MerchantPill className={c}>{children}</MerchantPill>
);

const MerchantPromotions = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPromotions, setTotalPromotions] = useState(0);
  const itemsPerPage = 10;

  const load = async (page = currentPage) => {
    try {
      setLoading(true);
      setError('');

      const payload = await getMyMerchantProducts({
        page,
        limit: itemsPerPage,
        sort: 'newest',
        featured: true,
      });
      const list = Array.isArray(payload?.data) ? payload.data : [];
      setProducts(list);
      setTotalPromotions(Number(payload?.meta?.total || list.length));
      setCurrentPage(page);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load promotions data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const promos = useMemo(() => {
    return products
      .map((p) => {
        const price = Number(p.price || 0);
        const compare = Number(p.comparePrice || 0);
        const off = compare > price ? Math.round(((compare - price) / compare) * 100) : 0;
        return {
          id: p.id,
          name: p.name,
          code: p.sku || p.id,
          discount: off ? `${off}% off` : p.isFeatured ? 'Featured' : 'Custom',
          prods: p.category?.name || 'General',
          start: new Date(p.createdAt).toLocaleDateString(),
          end: compare > price ? 'Ongoing' : 'Featured',
          status: p.isActive === false ? 'Inactive' : 'Active',
          sc: p.isActive === false ? 'text-red bg-red/10' : 'text-green-500 bg-green-500/10',
          product: p,
        };
      });
  }, [products]);

  const promotionCandidates = useMemo(() => {
    return products
      .filter((p) => !(Number(p.comparePrice || 0) > Number(p.price || 0) || p.isFeatured))
      .slice(0, 50)
      .map((p) => ({
        id: p.id,
        name: p.name,
        sku: p.sku || p.id,
        category: p.category?.name || 'General',
        price: Number(p.price || 0),
      }));
  }, [products]);

  const stats = useMemo(() => {
    const active = promos.filter((x) => x.status === 'Active').length;
    const totalDiscount = promos.reduce((sum, x) => {
      const match = /([0-9]+)%/.exec(x.discount);
      return sum + (match ? Number(match[1]) : 0);
    }, 0);
    const avgDiscount = promos.length ? `${Math.round(totalDiscount / promos.length)}%` : '0%';
    const nextExpiring = promos.find((x) => x.end === 'Ongoing') ? 'Live' : 'No active deal';

    return [
      { icon: Tag, val: String(active), label: 'Active Promotions', bg: 'bg-teal/10' },
      { icon: Calendar, val: String(totalPromotions), label: 'Promotion Products', bg: 'bg-blue-500/10' },
      { icon: Tag, val: avgDiscount, label: 'Avg Discount', bg: 'bg-yellow/10' },
      { icon: Calendar, val: nextExpiring, label: 'Promotion Status', bg: 'bg-red/10' },
    ];
  }, [promos, totalPromotions]);

  const createPromotion = async (selectedProduct) => {
    try {
      setError('');
      setMessage('');
      const isClickEvent = selectedProduct && typeof selectedProduct === 'object' && 'preventDefault' in selectedProduct;
      const product = isClickEvent ? products[0] : (selectedProduct || products[0]);
      if (!product) {
        setError('No products found. Add products first.');
        return;
      }

      const discount = window.prompt(`Discount percent for "${product.name}"`, '15');
      if (discount == null) return;

      const percent = Math.max(1, Math.min(90, Number(discount)));
      const comparePrice = Number(product.price) / (1 - percent / 100);
      await updateMyMerchantProduct(product.id, {
        comparePrice: Number(comparePrice.toFixed(2)),
        isFeatured: true,
      });

      setMessage(`Promotion created for ${product.name} (${percent}% off).`);
      await load(1);
    } catch (err) {
      setError(err?.response?.data?.message || 'Could not create promotion.');
    }
  };

  const removePromotion = async (item) => {
    try {
      setError('');
      setMessage('');
      await updateMyMerchantProduct(item.id, { comparePrice: null, isFeatured: false });
      setMessage('Promotion removed.');
      await load(currentPage);
    } catch (err) {
      setError(err?.response?.data?.message || 'Could not remove promotion.');
    }
  };

  const editPromotion = async (item) => {
    try {
      setError('');
      setMessage('');
      const discount = window.prompt(`New discount percent for "${item.name}"`, '10');
      if (discount == null) return;

      const percent = Math.max(1, Math.min(90, Number(discount)));
      const comparePrice = Number(item.product.price) / (1 - percent / 100);
      await updateMyMerchantProduct(item.id, {
        comparePrice: Number(comparePrice.toFixed(2)),
        isFeatured: true,
      });
      setMessage('Promotion updated.');
      await load(currentPage);
    } catch (err) {
      setError(err?.response?.data?.message || 'Could not update promotion.');
    }
  };

  return (
    <div className="animate-[fadeUp_0.4s_ease_both]">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <MerchantPageHeader
          title={
            <>
              Store <span className="text-teal">Promotions</span>
            </>
          }
          subtitle="Boost your sales with real product discounts"
        />
        <div className="flex gap-2.5">
          <button onClick={() => createPromotion()} className="bg-teal text-navy hover:bg-teal2 flex items-center gap-1.5 rounded px-4 py-1.5 text-[0.8rem] font-bold transition-colors">
            <Plus size={14} strokeWidth={3} /> Create Promotion
          </button>
        </div>
      </div>

      {message ? <div className="mb-4 rounded border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">{message}</div> : null}
      {error ? <div className="mb-4 rounded border border-red/30 bg-red/10 px-4 py-2 text-sm text-red-300">{error}</div> : null}

      <DashboardStats stats={stats} />

      <div className="bg-card overflow-hidden rounded-lg border border-white/[0.07]">
        <div className="border-b border-white/[0.07] px-6 py-4 flex items-center justify-between">
          <h3 className="font-syne text-[1rem] font-bold text-white">All Promotions</h3>
          <span className="text-xs text-gray2">{loading ? 'Loading...' : `${totalPromotions} active promotion rows`}</span>
        </div>

        <div className="hidden min-[800px]:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
              <tr className="border-b border-white/[0.07]">
                {['Name', 'Code', 'Discount', 'Products', 'Period', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[0.88rem] text-white">
              {promos.map((p) => (
                <tr key={p.id} className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2">
                  <td className="px-6 py-4 font-bold max-w-[200px] truncate">{p.name}</td>
                  <td className="text-teal px-6 py-4 font-black">{p.code}</td>
                  <td className="px-6 py-4">{p.discount}</td>
                  <td className="text-gray2 px-6 py-4">{p.prods}</td>
                  <td className="text-gray2 px-6 py-4">{p.start} - {p.end}</td>
                  <td className="px-6 py-4">
                    <Pill c={p.sc}>{p.status}</Pill>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => editPromotion(p)} className="text-gray hover:text-teal transition-colors">
                        <Settings size={16} />
                      </button>
                      <button onClick={() => removePromotion(p)} className="text-gray hover:text-red transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {!promos.length ? (
                <tr>
                  <td colSpan={7} className="px-6 py-6 text-center text-sm text-gray2">No promotions yet. Create one from your product catalog.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={totalPromotions}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => load(page)}
        loading={loading}
      />

      <div className="bg-card mt-8 overflow-hidden rounded-lg border border-white/[0.07]">
        <div className="border-b border-white/[0.07] px-6 py-4 flex items-center justify-between">
          <h3 className="font-syne text-[1rem] font-bold text-white">Available Products for Promotion</h3>
          <span className="text-xs text-gray2">{promotionCandidates.length} product(s)</span>
        </div>

        <div className="hidden min-[800px]:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-navy3/50 text-gray text-[0.7rem] font-bold tracking-widest uppercase">
              <tr className="border-b border-white/[0.07]">
                {['Name', 'SKU', 'Category', 'Price', 'Actions'].map((h) => (
                  <th key={h} className="px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[0.88rem] text-white">
              {promotionCandidates.map((p) => (
                <tr key={p.id} className="border-b border-white/[0.07] transition-colors last:border-b-0 hover:bg-white/2">
                  <td className="px-6 py-4 font-bold max-w-[220px] truncate">{p.name}</td>
                  <td className="text-teal px-6 py-4 font-black">{p.sku}</td>
                  <td className="text-gray2 px-6 py-4">{p.category}</td>
                  <td className="px-6 py-4 font-black">${p.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => createPromotion(p)} className="bg-teal text-navy hover:bg-teal2 rounded px-3 py-1 text-[0.75rem] font-bold transition-colors">
                      Add Promotion
                    </button>
                  </td>
                </tr>
              ))}
              {!promotionCandidates.length ? (
                <tr>
                  <td colSpan={5} className="px-6 py-6 text-center text-sm text-gray2">All products currently have active promotion settings.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MerchantPromotions;
