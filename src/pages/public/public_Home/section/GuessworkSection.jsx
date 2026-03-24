import Container from '../../../../components/ui/Container';

const GuessworkSection = () => {
  return (
    <section className="bg-blue-50 px-4 py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Image card */}

          <div className="">
            <img
              src="/img/home/rent3.png"
              alt="Invest with clarity visual"
              className="block h-auto w-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl leading-tight font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Invest with Clarity,
              <br className="hidden md:block" /> Not Guesswork
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Deal Hunter helps investors move beyond surface-level listings. Our AI evaluates
              opportunities across key investment factors, allowing you to understand both potential
              returns and associated risks before making a decision.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-blue-700"
              >
                Get Start
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GuessworkSection;
