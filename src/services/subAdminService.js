import axiosInstance from './axiosInstance';

const SUB_ADMIN_BASE = '/v1/sub-admin';
const SUPPORT_BASE = '/v1/support';

const subAdminService = {
  // --- Dashboard Stats ---
  getDashboardStats: async () => {
    // We combine multiple count endpoints for the dashboard cards.
    // Each request is caught individually to prevent a 403 (Forbidden) on one permission from breaking the whole dashboard.
    const [merchants, reviews, content, disputes] = await Promise.all([
      axiosInstance.get(`${SUB_ADMIN_BASE}/merchants/pending/count`).catch(() => ({ data: { count: 0 } })),
      axiosInstance.get(`${SUB_ADMIN_BASE}/moderation/flagged-reviews/count`).catch(() => ({ data: { count: 0 } })),
      axiosInstance.get(`${SUB_ADMIN_BASE}/moderation/flagged-content/count`).catch(() => ({ data: { count: 0 } })),
      axiosInstance.get(`${SUB_ADMIN_BASE}/disputes`).catch(() => ({ data: { meta: { total: 0 } } })),
    ]);

    return {
      pendingMerchants: merchants.data.count || 0,
      flaggedReviews: reviews.data.count || 0,
      flaggedContent: content.data.count || 0,
      activeDisputes: disputes.data.meta?.total || 0,
    };
  },

  // --- Merchant Approvals ---
  listPendingMerchants: (page = 1, limit = 20, search = '') => 
    axiosInstance.get(`${SUB_ADMIN_BASE}/merchants/pending`, { params: { page, limit, search } }),

  getMerchantDetail: (id) => axiosInstance.get(`${SUB_ADMIN_BASE}/merchants/${id}`),

  approveMerchant: (id, commissionRate) => 
    axiosInstance.patch(`${SUB_ADMIN_BASE}/merchants/${id}/approve`, { commissionRate }),

  rejectMerchant: (id, reason) => 
    axiosInstance.patch(`${SUB_ADMIN_BASE}/merchants/${id}/reject`, { reason }),

  // --- Review Moderation ---
  listFlaggedReviews: (page = 1, limit = 20, minFlags = 1) => 
    axiosInstance.get(`${SUB_ADMIN_BASE}/moderation/flagged-reviews`, { params: { page, limit, minFlags } }),

  moderateReview: (id, action, reason) => 
    axiosInstance.patch(`${SUB_ADMIN_BASE}/moderation/reviews/${id}/action`, { action, reason }),

  // --- Content (Product) Moderation ---
  listFlaggedContent: (page = 1, limit = 20) => 
    axiosInstance.get(`${SUB_ADMIN_BASE}/moderation/flagged-content`, { params: { page, limit } }),

  moderateContent: (id, action, reason) => 
    axiosInstance.patch(`${SUB_ADMIN_BASE}/moderation/content/${id}/action`, { action, reason }),

  // --- User Moderation ---
  listUsers: (params) => axiosInstance.get(`${SUB_ADMIN_BASE}/users`, { params }),

  moderateUser: (id, action, reason, notes) => 
    axiosInstance.patch(`${SUB_ADMIN_BASE}/users/${id}/moderate`, { action, reason, notes }),

  // --- Dispute Management ---
  listDisputes: (page = 1, limit = 20, status) => 
    axiosInstance.get(`${SUB_ADMIN_BASE}/disputes`, { params: { page, limit, status } }),

  getDispute: (id) => axiosInstance.get(`${SUB_ADMIN_BASE}/disputes/${id}`),

  resolveDispute: (id, resolution, notes) => 
    axiosInstance.patch(`${SUB_ADMIN_BASE}/disputes/${id}/resolve`, { resolution, notes }),

  addDisputeNote: (id, note) => 
    axiosInstance.post(`${SUB_ADMIN_BASE}/disputes/${id}/notes`, { note }),

  // --- Support Tickets ---
  listSupportTickets: (params) => axiosInstance.get(`${SUPPORT_BASE}/tickets`, { params }),

  getTicketDetails: (id) => axiosInstance.get(`${SUPPORT_BASE}/tickets/${id}`),

  updateTicketStatus: (id, status) => axiosInstance.patch(`${SUPPORT_BASE}/tickets/${id}/status`, { status }),

  addTicketReply: (id, content) => axiosInstance.post(`${SUPPORT_BASE}/tickets/${id}/replies`, { content }),

  assignTicket: (id, assignedToId) => axiosInstance.patch(`${SUPPORT_BASE}/tickets/${id}/assign`, { assignedToId }),

  // --- Activity Logs ---
  getActivityLogs: (page = 1, limit = 50, adminId) => 
    axiosInstance.get(`${SUB_ADMIN_BASE}/activity-logs`, { params: { page, limit, adminId } }),

  // --- Permissions ---
  getPermissions: (userId) => axiosInstance.get(`${SUB_ADMIN_BASE}/permissions/${userId}`),

  updatePermissions: (userId, permissions) => 
    axiosInstance.patch(`${SUB_ADMIN_BASE}/permissions/${userId}`, permissions),
};

export default subAdminService;
