import React from 'react';
import Container from '../../../../components/ui/Container';
import { FileText, Handshake, HouseHeart, TreePalm } from 'lucide-react';

const TargetIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 5V3M5 12H3M21 12h-2M12 21v-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const features = [
  {
    title: 'Smart Deal Discovery',
    desc: 'Identify undervalued real estate and land opportunities',
    Icon: Handshake,
  },
  {
    title: 'Rental Analysis',
    desc: 'Analyze rental potential for long-term and short-term strategies',
    Icon: HouseHeart,
  },
  {
    title: 'Fix & Flip Insights',
    desc: 'Evaluate fix & flip profitability with confidence',
    Icon: TargetIcon,
  },
  {
    title: 'Land Feasibility',
    desc: 'Explore land purchase, subdivision, and utility feasibility',
    Icon: TreePalm,
  },
  {
    title: 'Investment Reports',
    desc: 'Generate structured, downloadable investment reports',
    Icon: FileText,
  },
];

const Card = ({ title, desc, Icon }) => (
  <div className="rounded-2xl bg-blue-50 p-8 shadow-sm transition hover:shadow-md">
    <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full text-blue-600">
      {Icon && <Icon className="h-8 w-8" />}
    </div>
    <h3 className="text-center text-2xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-3 text-center text-gray-600">{desc}</p>
  </div>
);

const SmartSection = () => {
  return (
    <section className="bg-white px-4 py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {/* CTA / Intro Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-300 p-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">With Deal Hunter, you can</h2>
              <p className="mt-3 text-gray-600">
                Every insight is designed to help you move faster and invest smarter.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-blue-700"
              >
                Get Start
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          {features.map((f) => (
            <Card key={f.title} title={f.title} desc={f.desc} Icon={f.Icon} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SmartSection;
