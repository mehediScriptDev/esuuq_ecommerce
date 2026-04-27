import React, { memo, useEffect, useRef } from 'react';
import { X, MapPin, Package } from 'lucide-react';

const statusColor = (s = '') => {
  const n = String(s).toLowerCase();
  if (n === 'confirmed') return 'text-teal bg-teal/10 border-teal/30';
  if (n === 'processing') return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
  if (['ready_for_pickup', 'picked_up', 'in_transit', 'out_for_delivery'].includes(n))
    return 'text-purple-300 bg-purple-500/10 border-purple-500/30';
  if (n === 'delivered') return 'text-green-400 bg-green-500/10 border-green-500/30';
  if (['cancelled', 'returned', 'refunded'].includes(n)) return 'text-red bg-red/10 border-red/30';
  return 'text-gray2 bg-white/10 border-white/10';
};

const statusLabel = (s = '') =>
  String(s).replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const OrderDetailsModal = memo(({ isOpen = false, onClose, orderId, order = {} }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    modalRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const customer = order?.customer || {};
  const items = Array.isArray(order?.items) ? order.items : [];

  // Field name normalization — backend may send different names
  const shippingFee = Number(order?.shippingFee || order?.shippingCost || 0);
  const orderTotal = Number(order?.total || order?.totalAmount || 0);

  const getItemPrice = (item) => Number(item?.unitPrice || item?.price || 0);
  const subTotal = items.reduce((s, i) => s + getItemPrice(i) * Number(i?.quantity || 0), 0);
  const displayTotal = orderTotal || subTotal + shippingFee;

  // Shipping address from nested object or string
  const addr = order?.address || order?.shippingAddress || null;
  const addrText = typeof addr === 'string' ? addr
    : addr
      ? [addr.fullName, addr.addressLine1, addr.addressLine2, addr.city, addr.state, addr.zipCode].filter(Boolean).join(', ')
      : null;

  const handleOverlay = (e) => { if (e.target === e.currentTarget) onClose(); };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm p-3 sm:p-6 h-[100vh]"
      onClick={handleOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-card border-border relative w-full max-w-lg my-4 sm:my-10 rounded-xl border shadow-2xl outline-none animate-[fadeUp_0.25s_ease_both]"
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
          <div>
            <h2 id="order-modal-title" className="font-syne text-[0.95rem] font-bold text-white">
              Order <span className="text-teal">Details</span>
            </h2>
            <p className="text-gray text-xs mt-0.5">#{orderId}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border capitalize ${statusColor(order?.status)}`}>
              {statusLabel(order?.status)}
            </span>
            <button
              onClick={onClose}
              className="text-gray2 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg ml-1"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="px-5 py-4 space-y-4">

          {/* Order meta */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-navy3/40 rounded-lg px-3 py-2">
              <p className="text-gray uppercase tracking-wider font-bold mb-0.5">Date</p>
              <p className="text-white font-medium">
                {order?.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
              </p>
            </div>
            <div className="bg-navy3/40 rounded-lg px-3 py-2">
              <p className="text-gray uppercase tracking-wider font-bold mb-0.5">Shipping</p>
              <p className="text-white font-medium capitalize">
                {order?.shippingMethod?.replace(/_/g, ' ') || 'Standard'}
              </p>
            </div>
          </div>

          {/* Customer */}
          <div className="bg-navy3/40 rounded-lg px-3 py-3 space-y-1.5">
            <p className="text-gray text-[0.65rem] uppercase tracking-wider font-bold mb-1">Customer</p>
            <p className="text-white text-sm font-semibold">
              {[customer?.firstName, customer?.lastName].filter(Boolean).join(' ') || customer?.email || 'N/A'}
            </p>
            {customer?.email && (
              <p className="text-gray2 text-xs break-all">{customer.email}</p>
            )}
            {customer?.phone && (
              <p className="text-gray2 text-xs">{customer.phone}</p>
            )}
            {addrText && (
              <div className="flex items-start gap-1.5 pt-1">
                <MapPin size={12} className="text-teal mt-0.5 flex-shrink-0" />
                <p className="text-gray2 text-xs leading-relaxed">{addrText}</p>
              </div>
            )}
          </div>

          {/* Items */}
          <div>
            <p className="text-gray text-[0.65rem] uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
              <Package size={12} /> Order Items ({items.length})
            </p>
            <div className="bg-navy3/40 rounded-lg border border-white/5 divide-y divide-white/5">
              {items.length > 0 ? items.map((item, idx) => {
                const price = getItemPrice(item);
                const qty = Number(item?.quantity || 0);
                const lineTotal = item?.totalPrice ? Number(item.totalPrice) : price * qty;
                const name = item?.productName || item?.product?.name || 'Product';
                const img = item?.image || item?.product?.images?.[0] || null;
                return (
                  <div key={idx} className="flex items-center gap-3 px-3 py-2.5">
                    {img ? (
                      <img src={img} alt={name} className="w-10 h-10 rounded object-cover bg-navy3 flex-shrink-0" />
                    ) : (
                      <div className="w-10 h-10 rounded bg-navy3/60 flex-shrink-0 flex items-center justify-center">
                        <Package size={14} className="text-gray2" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{name}</p>
                      <p className="text-gray2 text-xs">
                        {qty} × ${price.toFixed(2)}
                        {item?.sku && <span className="ml-2 opacity-60">SKU: {item.sku}</span>}
                      </p>
                    </div>
                    <p className="text-teal text-sm font-bold flex-shrink-0">${lineTotal.toFixed(2)}</p>
                  </div>
                );
              }) : (
                <p className="text-gray2 text-xs text-center py-4">No items found</p>
              )}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-navy3/40 rounded-lg px-3 py-3 space-y-2 text-sm">
            <div className="flex justify-between text-gray2">
              <span>Subtotal</span>
              <span className="text-white">${subTotal.toFixed(2)}</span>
            </div>
            {shippingFee > 0 && (
              <div className="flex justify-between text-gray2">
                <span>Shipping</span>
                <span className="text-white">${shippingFee.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold border-t border-white/10 pt-2">
              <span className="text-white">Total</span>
              <span className="text-teal text-base">${displayTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex justify-end gap-2 px-5 py-3 border-t border-white/[0.07]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray2 text-sm hover:bg-white/5 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
});

OrderDetailsModal.displayName = 'OrderDetailsModal';
export default OrderDetailsModal;
