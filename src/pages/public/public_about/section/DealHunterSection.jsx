import React from 'react';
import Container from '../../../../components/ui/Container';

const DealHunterSection = () => {
  return (
    <div className="bg-white px-4 pb-20 md:px-8 lg:px-16">
      <Container>
        <div className="">
          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-3">
            {/* Top Left Image */}
            <div className="w-full">
              <img
                src="/img/about/about1.jpg"
                alt="Modern house"
                className="h-96 w-full object-cover"
              />
            </div>

            {/* Top Right Image */}
            <div className="w-full">
              <img
                src="/img/about/about2.jpg"
                alt="Handshake with keys"
                className="h-96 w-full object-cover"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="w-full">
              <img
                src="/img/about/about3.png"
                alt="Business handshake outdoors"
                className="h-96 w-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between">
            {/* Bottom Call-to-Action Box */}
            <div className="w-7/12 bg-blue-800 p-8 text-white">
              <h2 className="mb-6 text-2xl leading-relaxed font-medium text-white md:text-3xl">
                Deal Hunter is a long-term product designed to grow alongside investors, adapting to
                new markets, strategies, and technologies.
              </h2>
              <button className="rounded-lg bg-white px-6 py-2 font-medium text-blue-800 transition-colors hover:bg-gray-100">
                Get Start Analyzing Deals
              </button>
            </div>

            <div className="w-7/12">
              <img
                src="/img/about/about4.jpg"
                alt="Modern house"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DealHunterSection;
