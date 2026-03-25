import React from 'react';
import { Star, MessageCircle, Reply, Trash2, Calendar } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed M.',
    rating: 5,
    date: 'Mar 12, 2026',
    product: 'Wireless Earbuds Pro',
    comment:
      'Absolutely amazing product! Best earbuds I have ever owned. High quality sound and fast shipping.',
    status: 'Answered',
    statusC: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Fatima O.',
    rating: 5,
    date: 'Mar 10, 2026',
    product: 'Wireless Earbuds Pro',
    comment: 'Love the color and sound quality. Highly recommend to everyone.',
    status: 'Pending',
    statusC: 'text-yellow bg-yellow/10',
  },
  {
    name: 'James K.',
    rating: 4,
    date: 'Mar 8, 2026',
    product: 'USB-C Hub 7-in-1',
    comment: 'Great hub, but the build quality could be a bit better. Overall happy with it.',
    status: 'Answered',
    statusC: 'text-green-500 bg-green-500/10',
  },
  {
    name: 'Sara L.',
    rating: 3,
    date: 'Mar 5, 2026',
    product: 'Laptop Stand',
    comment: 'Decent, but it is not as stable as I expected for the price.',
    status: 'Pending',
    statusC: 'text-yellow bg-yellow/10',
  },
];

const MerchantReviews = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-['Syne'] text-[1.25rem] font-bold text-white">
          Customer <span className="text-teal">Reviews</span>
        </h1>
        <p className="text-gray mt-1 text-[0.78rem]">
          Monitor and respond to your customers’ feedback
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-center">
          <div className="text-[1.8rem] font-extrabold text-white">4.9</div>
          <div className="flex items-center gap-0.5">
            <Star size={10} className="fill-yellow text-yellow" />
            <Star size={10} className="fill-yellow text-yellow" />
            <Star size={10} className="fill-yellow text-yellow" />
            <Star size={10} className="fill-yellow text-yellow" />
            <Star size={10} className="fill-yellow text-yellow" />
          </div>
          <div className="text-gray text-[0.62rem] tracking-widest uppercase">
            Average Store Rating
          </div>
        </div>
      </div>
    </div>
    <div className="mb-4 flex gap-2">
      <button className="bg-teal text-navy rounded-full px-4 py-1.5 text-[0.75rem] font-medium">
        All Reviews (1,204)
      </button>
      <button className="text-gray2 hover:border-teal hover:text-teal rounded-full border border-white/[0.07] px-4 py-1.5 text-[0.75rem]">
        Pending (12)
      </button>
      <button className="text-gray2 hover:border-teal hover:text-teal rounded-full border border-white/[0.07] px-4 py-1.5 text-[0.75rem]">
        5 Stars (1,040)
      </button>
    </div>
    <div className="space-y-4">
      {reviews.map((r, i) => (
        <div key={i} className="bg-card rounded-md border border-white/[0.07] p-5">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="from-teal text-navy flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br to-blue-500 text-[0.75rem] font-bold">
                {r.name.charAt(0)}
              </div>
              <div>
                <div className="text-[0.88rem] font-bold text-white">{r.name}</div>
                <div className="text-gray flex items-center gap-3 text-[0.72rem]">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {r.date}
                  </span>
                  <span className="text-teal font-medium">{r.product}</span>
                </div>
              </div>
            </div>
            <div className={`rounded-full px-2 py-0.5 text-[0.68rem] font-bold ${r.statusC}`}>
              {r.status}
            </div>
          </div>
          <div className="border-teal/30 mb-4 border-l-2 pl-4">
            <div className="mb-1.5 flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className={j < r.rating ? 'fill-yellow text-yellow' : 'text-gray/40'}
                />
              ))}
            </div>
            <p className="text-gray2 text-[0.85rem] leading-relaxed">{r.comment}</p>
          </div>
          <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
            <div className="flex gap-4">
              <button className="text-gray hover:text-teal flex items-center gap-1.5 text-[0.78rem]">
                <Reply size={14} /> Reply
              </button>
              <button className="text-gray hover:text-red flex items-center gap-1.5 text-[0.78rem]">
                <Trash2 size={14} /> Report Abuse
              </button>
            </div>
            {r.status === 'Answered' && (
              <div className="text-teal flex items-center gap-1.5 text-[0.75rem]">
                <MessageCircle size={14} /> View Response
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MerchantReviews;
