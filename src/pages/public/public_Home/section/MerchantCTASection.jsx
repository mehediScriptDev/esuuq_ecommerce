import React from 'react';
import { Check } from 'lucide-react';

const MerchantCTASection = () => {
  return (
    <section id="merchants" className="mx-3 mb-8 rounded-sm border border-[rgba(0,201,167,0.15)] bg-[linear-gradient(120deg,#091830,#0D2137)] p-4 min-[640px]:mx-4 min-[900px]:mx-8 min-[900px]:p-10">
      <div className="flex flex-col gap-5 min-[900px]:flex-row min-[900px]:flex-wrap min-[900px]:items-center min-[900px]:justify-between min-[900px]:gap-8">
        <div>
          <h3 className="font-['Syne'] text-[1.1rem] font-bold text-white min-[640px]:text-[1.3rem]">Start Selling on ESUUQ</h3>
          <p className="mt-1.5 text-[0.8rem] leading-relaxed text-gray min-[640px]:text-[0.9rem]">Join hundreds of merchants reaching thousands of customers every day.</p>
        </div>
        <div className="order-last min-[900px]:order-none flex flex-wrap gap-3 min-[640px]:gap-6">
          {['Easy onboarding', 'Low commission rates', 'Real-time analytics', 'Fast payouts'].map((perk) => (
            <span key={perk} className="flex items-center gap-2 text-[0.7rem] text-gray2 min-[640px]:text-[0.8rem]">
              <Check size={14} className="text-teal flex-shrink-0" />
              {perk}
            </span>
          ))}
        </div>
        <a href="#" className="self-start min-[900px]:self-auto w-full min-[900px]:w-auto text-center inline-block bg-teal px-6 py-2 min-[640px]:px-8 min-[640px]:py-3 text-[0.8rem] min-[640px]:text-[0.85rem] font-medium tracking-[0.06em] text-navy transition hover:bg-teal2">Become a Merchant</a>
      </div>
    </section>
  );
};

export default MerchantCTASection;
