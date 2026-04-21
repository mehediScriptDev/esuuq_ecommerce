import React, { memo, useEffect, useRef, useState } from 'react';
import {
  X,
  Calendar,
  User,
  Phone,
  MapPin,
  Package,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import MerchantPill from '../../pages/merchant/components/MerchantPill';

/**
 * OrderDetailsModal - Comprehensive order details view for merchant dashboard
 * Matches the dark theme and design system of the merchant dashboard
 *
 * @example
 * <OrderDetailsModal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   orderId="ORD-12345"
 *   order={orderData}
 * />
 */

const OrderDetailsModal = memo(
  ({
    isOpen = false,
    onClose,
    orderId,
    order = {},
  }) => {
    const modalRef = useRef(null);
    const previousActiveElement = useRef(null);
    const printRef = useRef(null);

    // Focus management
    useEffect(() => {
      if (isOpen) {
        previousActiveElement.current = document.activeElement;
        modalRef.current?.focus();
      } else {
        previousActiveElement.current?.focus();
      }
    }, [isOpen]);

    // Prevent body scroll when open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
      if (!isOpen) return;

      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Handle print functionality
    const handlePrint = () => {
      if (printRef.current) {
        const printWindow = window.open('', '', 'width=900,height=600');
        printWindow.document.write(printRef.current.innerHTML);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 250);
      }
    };

    if (!isOpen) return null;

    const customer = order?.customer || {};
    const items = order?.items || [];
    const status = String(order?.status || '').toLowerCase().replace(/_/g, ' ');
    const createdAt = order?.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A';
    const totalAmount = Number(order?.totalAmount || 0);
    const subTotal = items.reduce((sum, item) => sum + (Number(item?.price || 0) * Number(item?.quantity || 0)), 0);
    const shippingCost = Number(order?.shippingCost || 0);
    const tax = Number(order?.tax || 0);

    const statusColor = (orderStatus = '') => {
      const normalized = String(orderStatus || '').toLowerCase();
      if (normalized === 'pending_payment') return 'text-yellow bg-yellow/10 border border-yellow/30';
      if (normalized === 'confirmed') return 'text-teal bg-teal/10 border border-teal/30';
      if (normalized === 'processing') return 'text-blue-500 bg-blue-500/10 border border-blue-500/30';
      if (normalized === 'ready_for_pickup') return 'text-yellow bg-yellow/10 border border-yellow/30';
      if (normalized === 'picked_up' || normalized === 'in_transit') return 'text-purple-300 bg-purple-500/10 border border-purple-500/30';
      if (normalized === 'delivered') return 'text-green-500 bg-green-500/10 border border-green-500/30';
      if (normalized === 'cancelled' || normalized === 'returned' || normalized === 'refunded') return 'text-red bg-red/10 border border-red/30';
      if (normalized === 'return_requested') return 'text-orange-300 bg-orange-500/10 border border-orange-500/30';
      return 'text-gray2 bg-white/10 border border-white/10';
    };

    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        <div
          ref={modalRef}
          className="bg-card border-border relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border p-6 shadow-2xl animate-[fadeUp_0.3s_ease_both]"
          tabIndex={-1}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray2 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <h2 id="order-modal-title" className="font-syne text-[1rem] font-bold text-white">
                Order <span className="text-teal">Details</span>
              </h2>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor(order?.status)}`}>
                {status}
              </div>
            </div>
            <p className="text-gray text-sm">Order #{orderId}</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* Order Info */}
            <div className="bg-navy3/30 rounded-lg p-4 border border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-teal flex-shrink-0" />
                  <div>
                    <p className="text-gray text-xs font-bold uppercase tracking-widest">Order Date</p>
                    <p className="text-white font-medium">{createdAt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-teal flex-shrink-0" />
                  <div>
                    <p className="text-gray text-xs font-bold uppercase tracking-widest">Expected Delivery</p>
                    <p className="text-white font-medium">
                      {order?.expectedDelivery ? new Date(order.expectedDelivery).toLocaleDateString() : 'Pending'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div>
              <h3 className="font-syne text-sm font-bold text-white mb-3 uppercase tracking-widest">Customer Information</h3>
              <div className="bg-navy3/30 rounded-lg p-4 border border-white/5 space-y-3">
                <div className="flex items-start gap-3">
                  <User size={16} className="text-teal mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray text-xs font-bold uppercase tracking-widest mb-1">Name</p>
                    <p className="text-white font-medium">
                      {[customer?.firstName, customer?.lastName].filter(Boolean).join(' ') || 'N/A'}
                    </p>
                  </div>
                </div>

                {customer?.email && (
                  <div className="flex items-start gap-3">
                    <span className="text-teal mt-1 flex-shrink-0">@</span>
                    <div className="flex-1">
                      <p className="text-gray text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${customer.email}`} className="text-white font-medium hover:text-teal transition-colors break-all">
                        {customer.email}
                      </a>
                    </div>
                  </div>
                )}

                {customer?.phone && (
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-teal mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                      <a href={`tel:${customer.phone}`} className="text-white font-medium hover:text-teal transition-colors">
                        {customer.phone}
                      </a>
                    </div>
                  </div>
                )}

                {order?.shippingAddress && (
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-teal mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray text-xs font-bold uppercase tracking-widest mb-1">Shipping Address</p>
                      <p className="text-white font-medium text-sm leading-relaxed">
                        {order.shippingAddress}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Items */}
            <div>
              <h3 className="font-syne text-sm font-bold text-white mb-3 uppercase tracking-widest">Order Items</h3>
              <div className="bg-navy3/30 rounded-lg border border-white/5 overflow-hidden">
                <div className="divide-y divide-white/5">
                  {items.length > 0 ? (
                    items.map((item, index) => (
                      <div key={index} className="p-4 hover:bg-white/5 transition-colors">
                        <div className="flex gap-4">
                          {item?.image && (
                            <img
                              src={item.image}
                              alt={item.productName}
                              className="w-16 h-16 rounded object-cover bg-navy3 flex-shrink-0"
                            />
                          )}
                          <div className="flex-1">
                            <h4 className="text-white font-bold text-sm mb-1">{item?.productName || 'Product'}</h4>
                            {item?.sku && (
                              <p className="text-gray text-xs mb-2">SKU: {item.sku}</p>
                            )}
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray">Qty: <span className="text-white font-bold">{item?.quantity || 0}</span></span>
                              <span className="text-teal font-bold">${(Number(item?.price || 0) * Number(item?.quantity || 0)).toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-gray text-sm text-center">No items found</div>
                  )}
                </div>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div>
              <h3 className="font-syne text-sm font-bold text-white mb-3 uppercase tracking-widest">Pricing Breakdown</h3>
              <div className="bg-navy3/30 rounded-lg p-4 border border-white/5 space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-gray text-sm">Subtotal</span>
                  <span className="text-white font-bold text-sm">${subTotal.toFixed(2)}</span>
                </div>

                {shippingCost > 0 && (
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-gray text-sm">Shipping</span>
                    <span className="text-white font-bold text-sm">${shippingCost.toFixed(2)}</span>
                  </div>
                )}

                {tax > 0 && (
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-gray text-sm">Tax</span>
                    <span className="text-white font-bold text-sm">${tax.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2">
                  <span className="text-white font-bold text-sm">Total</span>
                  <span className="text-teal font-black text-[1rem]">${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Status Timeline (Optional) */}
            {order?.timeline && order.timeline.length > 0 && (
              <div>
                <h3 className="font-syne text-sm font-bold text-white mb-3 uppercase tracking-widest">Status Timeline</h3>
                <div className="space-y-2">
                  {order.timeline.map((event, index) => (
                    <div key={index} className="flex gap-3 p-3 bg-navy3/30 rounded border border-white/5">
                      <div className="flex-shrink-0 mt-1">
                        {event?.completed ? (
                          <CheckCircle size={16} className="text-teal" />
                        ) : (
                          <Clock size={16} className="text-gray" />
                        )}
                      </div>
                      <div className="flex-1 text-sm">
                        <p className="text-white font-medium text-sm">{event?.status || 'Update'}</p>
                        {event?.date && (
                          <p className="text-gray text-xs">{new Date(event.date).toLocaleString()}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notes Section */}
            {order?.notes && (
              <div>
                <h3 className="font-syne text-sm font-bold text-white mb-3 uppercase tracking-widest">Order Notes</h3>
                <div className="bg-navy3/30 rounded-lg p-4 border border-white/5">
                  <p className="text-gray text-sm">{order.notes}</p>
                </div>
              </div>
            )}

            {/* Action Section */}
            {order?.actionRequired && (
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 flex gap-3">
                <AlertCircle size={18} className="text-orange-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-orange-300 font-bold text-sm mb-1">Action Required</p>
                  <p className="text-gray text-sm">{order.actionRequired}</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-white/5 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray text-sm font-medium hover:bg-white/5 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal text-sm font-bold rounded-lg transition-colors border border-teal/30"
            >
              Print Order
            </button>
          </div>

          {/* Hidden Print View */}
          <div ref={printRef} style={{ display: 'none' }}>
            <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', color: '#000', backgroundColor: '#fff' }}>
              {/* Print Header */}
              <div style={{ marginBottom: '30px', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
                <h1 style={{ margin: '0 0 10px 0', fontSize: '28px', fontWeight: 'bold' }}>Order Details</h1>
                <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Order #{orderId}</p>
              </div>

              {/* Date Info */}
              <div style={{ marginBottom: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                  <p style={{ margin: '0 0 5px 0', fontSize: '12px', fontWeight: 'bold', color: '#666', textTransform: 'uppercase' }}>Order Date</p>
                  <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
                    {order?.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
                <div>
                  <p style={{ margin: '0 0 5px 0', fontSize: '12px', fontWeight: 'bold', color: '#666', textTransform: 'uppercase' }}>Status</p>
                  <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', textTransform: 'capitalize' }}>
                    {String(order?.status || '').replace(/_/g, ' ')}
                  </p>
                </div>
              </div>

              {/* Customer Info */}
              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Customer Information</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#666', fontWeight: 'bold' }}>Name</p>
                    <p style={{ margin: '0', fontSize: '14px' }}>
                      {[order?.customer?.firstName, order?.customer?.lastName].filter(Boolean).join(' ') || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#666', fontWeight: 'bold' }}>Email</p>
                    <p style={{ margin: '0', fontSize: '14px' }}>{order?.customer?.email || 'N/A'}</p>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#666', fontWeight: 'bold' }}>Phone</p>
                    <p style={{ margin: '0', fontSize: '14px' }}>{order?.customer?.phone || 'N/A'}</p>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#666', fontWeight: 'bold' }}>Shipping Address</p>
                    <p style={{ margin: '0', fontSize: '14px' }}>{order?.shippingAddress || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Order Items</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #333' }}>
                      <th style={{ padding: '10px', textAlign: 'left', fontWeight: 'bold', fontSize: '12px' }}>Product</th>
                      <th style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '12px' }}>SKU</th>
                      <th style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '12px' }}>Qty</th>
                      <th style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '12px' }}>Price</th>
                      <th style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold', fontSize: '12px' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.length > 0 ? items.map((item, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '10px', fontSize: '14px' }}>{item?.productName || 'Product'}</td>
                        <td style={{ padding: '10px', fontSize: '14px', textAlign: 'center' }}>{item?.sku || '-'}</td>
                        <td style={{ padding: '10px', fontSize: '14px', textAlign: 'center' }}>{item?.quantity || 0}</td>
                        <td style={{ padding: '10px', fontSize: '14px', textAlign: 'center' }}>${Number(item?.price || 0).toFixed(2)}</td>
                        <td style={{ padding: '10px', fontSize: '14px', textAlign: 'right', fontWeight: 'bold' }}>
                          ${(Number(item?.price || 0) * Number(item?.quantity || 0)).toFixed(2)}
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={5} style={{ padding: '10px', textAlign: 'center', color: '#666' }}>No items</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pricing Summary */}
              <div style={{ marginBottom: '30px', maxWidth: '400px', marginLeft: 'auto' }}>
                <h2 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Pricing Summary</h2>
                <div style={{ display: 'grid', gap: '10px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px' }}>
                    <span style={{ fontSize: '14px', color: '#666' }}>Subtotal:</span>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>${items.reduce((sum, item) => sum + (Number(item?.price || 0) * Number(item?.quantity || 0)), 0).toFixed(2)}</span>
                  </div>
                  {Number(order?.shippingCost || 0) > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px' }}>
                      <span style={{ fontSize: '14px', color: '#666' }}>Shipping:</span>
                      <span style={{ fontSize: '14px', fontWeight: 'bold' }}>${Number(order?.shippingCost || 0).toFixed(2)}</span>
                    </div>
                  )}
                  {Number(order?.tax || 0) > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px' }}>
                      <span style={{ fontSize: '14px', color: '#666' }}>Tax:</span>
                      <span style={{ fontSize: '14px', fontWeight: 'bold' }}>${Number(order?.tax || 0).toFixed(2)}</span>
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', borderTop: '2px solid #333', paddingTop: '10px', marginTop: '10px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Total:</span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#0c9a68' }}>${Number(order?.totalAmount || 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center', color: '#666', fontSize: '12px' }}>
                <p style={{ margin: '0' }}>This is a computer-generated receipt. No signature required.</p>
                <p style={{ margin: '5px 0 0 0' }}>Printed on {new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

OrderDetailsModal.displayName = 'OrderDetailsModal';

export default OrderDetailsModal;
