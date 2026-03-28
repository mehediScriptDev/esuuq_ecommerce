import React from 'react';
import { Star, MessageCircle, Reply, Trash2, Calendar } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';

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
    <div className="mb-6">
      <MerchantPageHeader
        title={
          <>
            Customer <span className="text-teal">Reviews</span>
          </>
        }
        subtitle="Monitor and respond to customer feedback"
      />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-8 mb-8">
      {/* Overview Card */}
      <div className="bg-card rounded-lg border border-white/[0.07] p-6 lg:p-8 text-center flex flex-col items-center justify-center">
        <div className="font-syne text-[3.5rem] leading-none font-extrabold text-white mb-2">4.9</div>
        <div className="flex items-center gap-0.5 mb-3">
          <Star size={16} className="fill-yellow text-yellow" />
          <Star size={16} className="fill-yellow text-yellow" />
          <Star size={16} className="fill-yellow text-yellow" />
          <Star size={16} className="fill-yellow text-yellow" />
          <Star size={16} className="fill-yellow text-yellow" />
        </div>
        <div className="text-gray text-[0.7rem] font-bold tracking-widest uppercase mb-6">
          1,204 reviews
        </div>
        <div className="w-full space-y-2.5">
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] font-bold text-gray w-2">5</span>
            <div className="h-1.5 flex-1 bg-navy3 rounded-full overflow-hidden">
               <div className="h-full bg-yellow rounded-full" style={{ width: '88%' }} />
            </div>
            <span className="text-[0.7rem] font-bold text-gray w-8 text-right">1,059</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] font-bold text-gray w-2">4</span>
            <div className="h-1.5 flex-1 bg-navy3 rounded-full overflow-hidden">
               <div className="h-full bg-yellow rounded-full" style={{ width: '10%' }} />
            </div>
            <span className="text-[0.7rem] font-bold text-gray w-8 text-right">120</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] font-bold text-gray w-2">3</span>
            <div className="h-1.5 flex-1 bg-navy3 rounded-full overflow-hidden">
               <div className="h-full bg-yellow rounded-full" style={{ width: '2%' }} />
            </div>
            <span className="text-[0.7rem] font-bold text-gray w-8 text-right">18</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] font-bold text-gray w-2">2</span>
            <div className="h-1.5 flex-1 bg-navy3 rounded-full overflow-hidden">
               <div className="h-full bg-yellow rounded-full" style={{ width: '0%' }} />
            </div>
            <span className="text-[0.7rem] font-bold text-gray w-8 text-right">4</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] font-bold text-gray w-2">1</span>
            <div className="h-1.5 flex-1 bg-navy3 rounded-full overflow-hidden">
               <div className="h-full bg-yellow rounded-full" style={{ width: '0%' }} />
            </div>
            <span className="text-[0.7rem] font-bold text-gray w-8 text-right">3</span>
          </div>
        </div>
      </div>
      
      {/* Reviews List */}
      <div className="bg-card rounded-lg border border-white/[0.07] overflow-hidden">
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.07] px-6 py-4 gap-3">
          <h3 className="font-syne text-[1rem] font-bold text-white">Recent Reviews</h3>
          <select className="bg-navy3 text-gray2 hover:border-white/20 cursor-pointer transition-colors rounded border border-white/[0.07] px-3 py-1.5 text-[0.8rem] outline-none">
            <option>All Products</option>
            <option>Earbuds Pro</option>
            <option>Headphones</option>
          </select>
        </div>
        
        <div className="p-6 space-y-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-navy3 border-white/[0.07] rounded-md border p-5">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <div className="text-[0.95rem] font-bold text-white mb-0.5">
                    {r.name} <span className="text-gray text-[0.75rem] font-normal ml-1">· {r.product}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className={j < r.rating ? 'fill-yellow text-yellow' : 'text-gray/20'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray2 text-[0.88rem] leading-relaxed mb-3 mt-3">{r.comment}</p>
              
              <div className="flex items-center justify-between pt-2">
                 <div className="text-gray text-[0.7rem] font-bold tracking-widest uppercase">
                    {r.date}
                 </div>
                 {r.status === 'Pending' ? (
                   <button className="text-gray hover:border-teal hover:text-teal rounded border border-white/10 px-4 py-1.5 text-[0.75rem] font-bold transition-all">
                     Reply
                   </button>
                 ) : (
                   <span className={`rounded-full px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-widest ${r.statusC}`}>
                     {r.status}
                   </span>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MerchantReviews;
