import { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import RootLayout from '../layout/public/RootLayout';
import LoadingFallback from './components/LoadingFallback';

const Home = lazy(() => import('../pages/public/public_Home/Home'));
const AboutView = lazy(() => import('../pages/public/public_about/AboutView'));
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

const NotFound = lazy(() => import('../pages/error/NotFound'));

const wrap = (Component) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={wrap(AboutView)} />
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
      <Route path="admin" element={wrap(AdminView)} />
      <Route path="merchant" element={wrap(MerchantView)} />
    </>
  )
);

export default router;
