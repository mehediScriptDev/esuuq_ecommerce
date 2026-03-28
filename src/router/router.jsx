import { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, useNavigate } from 'react-router-dom';

import RootLayout from '../layout/public/RootLayout';
import LoadingFallback from './components/LoadingFallback';

const Home = lazy(() => import('../pages/public/public_Home/Home'));
const ContactView = lazy(() => import('../pages/public/public_contact/ContactView'));
const ElectronicsView = lazy(() => import('../pages/public/public_Electronics/ElectronicsView'));
const FashionView = lazy(() => import('../pages/public/public_Fashion/FashionView'));
const HomeGardenView = lazy(() => import('../pages/public/public_HomeGarden/HomeGardenView'));
const BeautyView = lazy(() => import('../pages/public/public_Beauty/BeautyView'));
const FoodGroceryView = lazy(() => import('../pages/public/public_FoodGrocery/FoodGroceryView'));
const SportsView = lazy(() => import('../pages/public/public_Sports/SportsView'));
const BooksView = lazy(() => import('../pages/public/public_Books/BooksView'));
const ToysKidsView = lazy(() => import('../pages/public/public_ToysKids/ToysKidsView'));
const ToolsDIYView = lazy(() => import('../pages/public/public_ToolsDIY/ToolsDIYView'));
const PetSuppliesView = lazy(() => import('../pages/public/public_PetSupplies/PetSuppliesView'));
const HealthView = lazy(() => import('../pages/public/public_Health/HealthView'));
const CartView = lazy(() => import('../pages/public/public_Cart/CartView'));
const ProductDetailsView = lazy(
  () => import('../pages/public/public_ProductDetails/ProductDetailsView')
);

// Account Pages
const LoginView = lazy(() => import('../pages/public/public_Account/LoginView'));
const RegisterView = lazy(() => import('../pages/public/public_Account/RegisterView'));
const OTPView = lazy(() => import('../pages/public/public_Account/OTPView'));
const UserDashboardView = lazy(() => import('../pages/public/public_Account/UserDashboardView'));

// Portals
const AdminView = lazy(() => import('../pages/admin/AdminView'));
const MerchantView = lazy(() => import('../pages/merchant/MerchantView'));
const AdminDashboard = lazy(() => import('../pages/admin/pages/AdminDashboard'));
const AdminOrders = lazy(() => import('../pages/admin/pages/AdminOrders'));
const AdminProducts = lazy(() => import('../pages/admin/pages/AdminProducts'));
const AdminMerchants = lazy(() => import('../pages/admin/pages/AdminMerchants'));
const AdminCustomers = lazy(() => import('../pages/admin/pages/AdminCustomers'));
const AdminDelivery = lazy(() => import('../pages/admin/pages/AdminDelivery'));
const AdminRevenue = lazy(() => import('../pages/admin/pages/AdminRevenue'));
const AdminCoupons = lazy(() => import('../pages/admin/pages/AdminCoupons'));
const AdminSettings = lazy(() => import('../pages/admin/pages/AdminSettings'));

const MerchantDashboard = lazy(() => import('../pages/merchant/pages/MerchantDashboard'));
const MerchantOrders = lazy(() => import('../pages/merchant/pages/MerchantOrders'));
const MerchantProducts = lazy(() => import('../pages/merchant/pages/MerchantProducts'));
const MerchantInventory = lazy(() => import('../pages/merchant/pages/MerchantInventory'));
const MerchantEarnings = lazy(() => import('../pages/merchant/pages/MerchantEarnings'));
const MerchantPayouts = lazy(() => import('../pages/merchant/pages/MerchantPayouts'));
const MerchantAddProduct = lazy(() => import('../pages/merchant/pages/MerchantAddProduct'));
const MerchantReviews = lazy(() => import('../pages/merchant/pages/MerchantReviews'));
const MerchantPromotions = lazy(() => import('../pages/merchant/pages/MerchantPromotions'));
const MerchantProfile = lazy(() => import('../pages/merchant/pages/MerchantProfile'));
const MerchantSupport = lazy(() => import('../pages/merchant/pages/MerchantSupport'));

const NotFound = lazy(() => import('../pages/error/NotFound'));

const wrap = (Component) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

const wrapElement = (element) => <Suspense fallback={<LoadingFallback />}>{element}</Suspense>;

const adminPathMap = {
  merchants: '/admin/merchants',
  orders: '/admin/orders',
  coupons: '/admin/coupons',
  payouts: '/admin/payouts',
};

const merchantPathMap = {
  'add-product': '/merchant/add-product',
  orders: '/merchant/orders',
  payouts: '/merchant/payouts',
  products: '/merchant/products',
};

const AdminDashboardRoute = () => {
  const navigate = useNavigate();
  return <AdminDashboard onNav={(id) => navigate(adminPathMap[id] || '/admin')} />;
};

const MerchantDashboardRoute = () => {
  const navigate = useNavigate();
  return <MerchantDashboard onNav={(id) => navigate(merchantPathMap[id] || '/merchant')} />;
};

const MerchantProductsRoute = () => {
  const navigate = useNavigate();
  return <MerchantProducts onNav={(id) => navigate(merchantPathMap[id] || '/merchant/products')} />;
};

const MerchantEarningsRoute = () => {
  const navigate = useNavigate();
  return <MerchantEarnings onNav={(id) => navigate(merchantPathMap[id] || '/merchant/earnings')} />;
};

const MerchantAddProductRoute = () => {
  const navigate = useNavigate();
  return <MerchantAddProduct onNav={(id) => navigate(merchantPathMap[id] || '/merchant/add-product')} />;
};

const AdminPlaceholder = ({ title, icon }) => (
  <div className="bg-card rounded-md border border-white/[0.07] p-12 text-center">
    <div className="mb-3 text-4xl">{icon}</div>
    <div className="font-['Syne'] text-lg font-bold text-white">{title}</div>
    <div className="text-gray mt-1 text-sm">Coming soon</div>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={wrap(ContactView)} />
        <Route path="electronics" element={wrap(ElectronicsView)} />
        <Route path="fashion" element={wrap(FashionView)} />
        <Route path="home-garden" element={wrap(HomeGardenView)} />
        <Route path="beauty" element={wrap(BeautyView)} />
        <Route path="food-grocery" element={wrap(FoodGroceryView)} />
        <Route path="sports" element={wrap(SportsView)} />
        <Route path="books" element={wrap(BooksView)} />
        <Route path="toys-kids" element={wrap(ToysKidsView)} />
        <Route path="tools-diy" element={wrap(ToolsDIYView)} />
        <Route path="pet-supplies" element={wrap(PetSuppliesView)} />
        <Route path="health" element={wrap(HealthView)} />
        <Route path="cart" element={wrap(CartView)} />
        <Route path="product/:id" element={wrap(ProductDetailsView)} />
        <Route path="dashboard" element={wrap(UserDashboardView)} />
        <Route path="*" element={wrap(NotFound)} />
      </Route>

      {/* Auth & Dashboards - No marketplace layout */}
      <Route path="login" element={wrap(LoginView)} />
      <Route path="register" element={wrap(RegisterView)} />
      <Route path="otp" element={wrap(OTPView)} />
      <Route path="admin" element={wrap(AdminView)}>
        <Route index element={wrapElement(<AdminDashboardRoute />)} />
        <Route path="orders" element={wrap(AdminOrders)} />
        <Route path="products" element={wrap(AdminProducts)} />
        <Route path="merchants" element={wrap(AdminMerchants)} />
        <Route path="customers" element={wrap(AdminCustomers)} />
        <Route path="delivery" element={wrap(AdminDelivery)} />
        <Route path="revenue" element={wrap(AdminRevenue)} />
        <Route path="coupons" element={wrap(AdminCoupons)} />
        <Route path="settings" element={wrap(AdminSettings)} />
        {/* <Route path="payouts" element={<AdminPlaceholder title="Payout Management" icon="💸" />} />
        <Route path="commission" element={<AdminPlaceholder title="Commission Config" icon="📈" />} />
        <Route path="categories" element={<AdminPlaceholder title="Category Management" icon="📂" />} />
        <Route path="banners" element={<AdminPlaceholder title="Banner Management" icon="🖼️" />} />
        <Route path="analytics" element={<AdminPlaceholder title="Analytics Reports" icon="📊" />} /> */}
      </Route>
      <Route path="merchant" element={wrap(MerchantView)}>
        <Route index element={wrapElement(<MerchantDashboardRoute />)} />
        <Route path="orders" element={wrap(MerchantOrders)} />
        <Route path="products" element={wrapElement(<MerchantProductsRoute />)} />
        <Route path="inventory" element={wrap(MerchantInventory)} />
        <Route path="earnings" element={wrapElement(<MerchantEarningsRoute />)} />
        <Route path="payouts" element={wrap(MerchantPayouts)} />
        <Route path="add-product" element={wrapElement(<MerchantAddProductRoute />)} />
        <Route path="reviews" element={wrap(MerchantReviews)} />
        <Route path="promotions" element={wrap(MerchantPromotions)} />
        <Route path="profile" element={wrap(MerchantProfile)} />
        <Route path="support" element={wrap(MerchantSupport)} />
      </Route>
    </>
  )
);

export default router;
