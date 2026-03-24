import React from 'react';
import Container from '../../../../components/ui/Container';

const ReadySection = () => {
  return (
    <section className="bg-[#F7F7F7] px-4 py-24">
      <Container>
        <div className="rounded-3xl bg-gradient-to-b from-blue-400 via-blue-400 to-blue-500 px-6 py-16 text-white ring-1 ring-white/20 md:px-12 md:py-20">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/90">
            No demos. No complicated onboarding. Just choose a plan, state decision-making with Deal
            Hunter.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-white px-8 py-3 text-base font-semibold shadow hover:bg-blue-600 hover:text-white"
            >
              Get Start
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReadySection;
