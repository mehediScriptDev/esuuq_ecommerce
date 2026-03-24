import React from 'react';
import TrustStrip from '../../../components/marketplace/TrustStrip';
import HeroSection from './section/HeroSection';
import FlashDealsSection from './section/FlashDealsSection';
import ShopByCategorySection from './section/ShopByCategorySection';
import PromoSection from './section/PromoSection';
import FeaturedProductsSection from './section/FeaturedProductsSection';
import MerchantCTASection from './section/MerchantCTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FlashDealsSection />
      <ShopByCategorySection />
      <PromoSection />
      <FeaturedProductsSection />
      <MerchantCTASection />
    </>
  );
};

export default Home;
