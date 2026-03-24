import { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import RootLayout from '../layout/public/RootLayout';
import LoadingFallback from './components/LoadingFallback';

// Lazy load page components for code splitting
const HomeView = lazy(() => import('../pages/public/public_Home/HomeView'));
const AboutView = lazy(() => import('../pages/public/public_about/AboutView'));
const ContactView = lazy(() => import('../pages/public/public_contact/ContactView'));
const NotFound = lazy(() => import('../pages/error/NotFound'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<LoadingFallback />}>
            <HomeView />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AboutView />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ContactView />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  )
);

export default router;
