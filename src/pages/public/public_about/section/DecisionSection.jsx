import React from 'react';
import Container from '../../../../components/ui/Container';

const DecisionSection = () => {
  return (
    <div className="bg-white px-4 py-24 md:px-8 lg:px-16">
      <Container>
        <div className="flex flex-col items-start gap-20 lg:flex-row">
          {/* Left Column - Headline & Description */}
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl leading-tight font-bold md:text-4xl">
              Better decisions come from <br />
              better tools.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Real estate investing is full of complexity—data overload, uncertain assumptions, and
              time-consuming analysis. We created Deal Hunter to remove these barriers using
              intelligent automation and AI-driven insights.
            </p>
            <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
              Get Start
            </button>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-1/2">
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="text-3xl font-bold md:text-4xl">50K+</div>
              <div className="text-sm text-gray-600 md:text-base">
                Real estate listings processed
              </div>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <div className="text-3xl font-bold md:text-4xl">AI-Powered</div>
              <div className="text-sm text-gray-600 md:text-base">
                Smart price & market prediction
              </div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <div className="text-3xl font-bold md:text-4xl">1000+</div>
              <div className="text-sm text-gray-600 md:text-base">Qualified leads generated</div>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2">
              <div className="text-3xl font-bold md:text-4xl">Real-Time</div>
              <div className="text-sm text-gray-600 md:text-base">Buyer & seller matching</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DecisionSection;
