import React from 'react';
import { HelpCircle, Mail, MessageCircle, Book, ExternalLink, Send, Plus } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';
const MerchantSupport = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <MerchantPageHeader title="Help &" highlight="Support" subtitle="Need assistance? We are here to help your business grow" />
    <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        <div className="bg-card rounded-md border border-white/[0.07] p-6 text-center">
          <div className="bg-teal/10 text-teal mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
            <MessageCircle size={32} />
          </div>
          <h3 className="mb-2 font-['Syne'] text-[1rem] font-bold text-white">
            Contact Live Support
          </h3>
          <p className="text-gray mb-6 text-[0.875rem]">
            Speak with a dedicated merchant support specialist right now. Average wait:{' '}
            <span className="text-teal">2 mins</span>
          </p>
          <button className="bg-teal text-navy hover:bg-teal2 rounded-full px-8 py-3 text-[0.9rem] font-bold transition-all hover:-translate-y-0.5">
            🚀 Start Chat Session
          </button>
        </div>
        <div>
          <h3 className="mb-4 font-['Syne'] text-[1rem] font-bold text-white">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {[
              'How long do payouts take?',
              'How are commissions calculated?',
              'Can I sell outside the US?',
              'What documents do I need for approval?',
            ].map((q) => (
              <div
                key={q}
                className="bg-card flex cursor-pointer items-center justify-between rounded-md border border-white/[0.07] px-5 py-4 hover:bg-white/2"
              >
                <span className="text-[0.875rem] text-white">{q}</span>
                <Plus size={16} className="text-gray" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
            <Mail size={16} className="text-teal" /> Email Support
          </h3>
          <p className="text-gray mb-4 text-[0.875rem]">
            Send us an email and we will get back to you within 24 hours.
          </p>
          <textarea
            className="bg-navy3 focus:border-teal mb-3 h-24 w-full rounded border border-white/[0.07] px-3 py-2.5 text-[0.8rem] text-white outline-none"
            placeholder="Explain your issue..."
          />
          <button className="bg-navy3 hover:bg-navy2 flex w-full items-center justify-center gap-2 rounded border border-white/[0.07] py-2.5 text-[0.8rem] text-white transition-colors">
            <Send size={14} /> Send Message
          </button>
        </div>
        <div className="bg-card rounded-md border border-white/[0.07] p-5">
          <h3 className="mb-4 flex items-center gap-2 font-['Syne'] text-[1rem] font-bold text-white">
            <Book size={16} className="text-teal" /> Seller Resources
          </h3>
          <div className="space-y-2">
            {['Merchant Handbook', 'Selling Policies', 'Growth Guide', 'API Documentation'].map(
              (r) => (
                <a
                  key={r}
                  href="#"
                  className="text-gray hover:text-teal flex items-center justify-between py-1.5 text-[0.875rem] no-underline"
                >
                  <span>{r}</span>
                  <ExternalLink size={12} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MerchantSupport;
