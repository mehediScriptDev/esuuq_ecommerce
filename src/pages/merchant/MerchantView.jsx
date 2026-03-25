import React from 'react';
import MerchantLayout from '../../layout/merchant/MerchantLayout';
import MerchantDashboard from './section/MerchantDashboard';
import MerchantOrders from './section/MerchantOrders';
import MerchantProducts from './section/MerchantProducts';
import MerchantInventory from './section/MerchantInventory';
import MerchantEarnings from './section/MerchantEarnings';
import MerchantPayouts from './section/MerchantPayouts';
import MerchantAddProduct from './section/MerchantAddProduct';
import MerchantReviews from './section/MerchantReviews';
import MerchantPromotions from './section/MerchantPromotions';
import MerchantProfile from './section/MerchantProfile';
import MerchantSupport from './section/MerchantSupport';

const MerchantView = () => (
  <MerchantLayout>
    {(activePage, handleNav) => {
      switch (activePage) {
        case 'dashboard':
          return <MerchantDashboard onNav={handleNav} />;
        case 'orders':
          return <MerchantOrders />;
        case 'products':
          return <MerchantProducts onNav={handleNav} />;
        case 'inventory':
          return <MerchantInventory />;
        case 'earnings':
          return <MerchantEarnings onNav={handleNav} />;
        case 'payouts':
          return <MerchantPayouts />;
        case 'add-product':
          return <MerchantAddProduct onNav={handleNav} />;
        case 'reviews':
          return <MerchantReviews />;
        case 'promotions':
          return <MerchantPromotions />;
        case 'profile':
          return <MerchantProfile />;
        case 'support':
          return <MerchantSupport />;
        default:
          return <MerchantDashboard onNav={handleNav} />;
      }
    }}
  </MerchantLayout>
);

export default MerchantView;
