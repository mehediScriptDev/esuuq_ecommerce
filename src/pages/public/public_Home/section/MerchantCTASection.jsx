import React from 'react';

const MerchantCTASection = () => {
  return (
    <section id="merchants" className="mx-4 mb-8 rounded-sm border border-[rgba(0,201,167,0.15)] bg-[linear-gradient(120deg,#091830,#0D2137)] p-8 min-[900px]:mx-8 min-[900px]:p-10">
      <div className="flex flex-wrap items-center justify-between gap-8">
        <div>
          <h3 className="font-['Syne'] text-[1.3rem] font-bold text-white">Start Selling on ESUUQ</h3>
          <p className="mt-1.5 text-[0.9rem] text-gray">Join hundreds of merchants reaching thousands of customers every day.</p>
        </div>
        <div className="flex flex-wrap gap-6">
          {['Easy onboarding', 'Low commission rates', 'Real-time analytics', 'Fast payouts'].map((perk) => (
            <span key={perk} className="text-[0.8rem] text-gray2 before:mr-2 before:font-bold before:text-teal before:content-['\u2713']">{perk}</span>
          ))}
        </div>
        <a href="#" className="inline-block bg-teal px-8 py-3 text-[0.85rem] font-medium tracking-[0.06em] text-navy transition hover:bg-teal2">Become a Merchant</a>
      </div>
    </section>
  );
};

export default MerchantCTASection;
