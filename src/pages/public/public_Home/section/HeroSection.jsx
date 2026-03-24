import { useState } from 'react';
import Col from '../../../../components/ui/Col';
import Container from '../../../../components/ui/Container';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const slides = ['/img/home/rent.jpg', '/img/home/rent1.jpg', '/img/home/rent2.jpg'];

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section className="bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100 px-4 py-20 text-white">
      <Container>
        <Col grow>
          <h1 className="text-center text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
            Build, Manage, and Scale <br /> Real Estate Investments in the U.S.
          </h1>

          <p className="mt-6 text-center text-lg text-white/90">
            A single platform for land investors, property businesses, and rental groups to grow
            returns with confidence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base text-blue-600 shadow transition hover:shadow-lg"
            >
              Get Start
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/80 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Free Trial
            </a>
          </div>
        </Col>
      </Container>

      <Container className="mt-12 flex justify-center">
        <div className="relative w-full max-w-5xl">
          {/* Image Card */}
          <div className="relative overflow-hidden rounded-2xl bg-black/10 ring-2 ring-white/70">
            {/* Prev */}
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="absolute top-1/2 left-4 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-blue-600 shadow hover:bg-white"
            >
              <span className="sr-only">Prev</span>
              {/* chevron left */}
              <ChevronLeft />
            </button>

            {/* Image */}
            <img
              src={slides[current]}
              alt="Hero Slide"
              className="block h-[420px] w-full object-cover"
            />

            {/* Bottom overlay to mimic screenshot */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-blue-600/40 to-transparent" />

            {/* Next */}
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="absolute top-1/2 right-4 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-blue-600 shadow hover:bg-white"
            >
              <span className="sr-only">Next</span>
              {/* chevron right */}
              <ChevronRight />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute left-1/2 mt-4 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`${i === current ? 'bg-white' : 'bg-white/60'} h-2.5 w-2.5 rounded-full`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
