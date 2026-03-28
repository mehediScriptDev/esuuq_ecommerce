import React from 'react';
import { HelpCircle, Mail, MessageCircle, Book, ExternalLink, Send, Plus } from 'lucide-react';
import MerchantPageHeader from '../components/MerchantPageHeader';

const MerchantSupport = () => (
  <div className="animate-[fadeUp_0.4s_ease_both]">
    <div className="mb-6">
      <MerchantPageHeader
        title={
          <>
            Help & <span className="text-teal">Support</span>
          </>
        }
        subtitle="Need assistance? We are here to help your business grow"
      />
    </div>
    
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
          <div className="bg-teal/10 text-teal mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-[0_0_25px_rgba(0,201,167,0.15)]">
            <MessageCircle size={36} />
          </div>
          <h3 className="mb-3 font-syne text-[1.4rem] font-bold text-white">
            Contact Live Support
          </h3>
          <p className="text-gray mb-8 text-[0.88rem] max-w-sm mx-auto leading-relaxed">
            Speak with a dedicated merchant support specialist right now. Average wait:{' '}
            <span className="text-teal font-bold">2 mins</span>
          </p>
          <button className="bg-teal text-navy hover:bg-teal2 rounded-full px-8 py-3.5 text-[0.88rem] font-bold transition-all shadow-[0_0_15px_rgba(0,201,167,0.3)]">
            🚀 Start Chat Session
          </button>
        </div>
        
        <div>
          <h3 className="mb-4 font-syne text-[1.1rem] font-bold text-white">
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
                className="bg-card hover:border-teal/20 flex cursor-pointer items-center justify-between rounded-md border border-white/[0.07] px-6 py-4 transition-colors"
              >
                <span className="text-[0.88rem] font-bold text-white">{q}</span>
                <Plus size={18} className="text-gray" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
          <h3 className="mb-4 flex items-center gap-2 font-syne text-[1.1rem] font-bold text-white">
            <Mail size={18} className="text-teal" /> Email Support
          </h3>
          <p className="text-gray mb-6 text-[0.88rem] leading-relaxed">
            Send us an email and we will get back to you within 24 hours.
          </p>
          <textarea
            className="bg-navy3 focus:border-teal mb-4 h-32 w-full rounded border border-white/[0.07] px-4 py-3 text-[0.88rem] text-white outline-none transition-colors resize-none"
            placeholder="Explain your issue..."
          />
          <button className="bg-navy3 hover:border-teal hover:text-teal flex w-full items-center justify-center gap-2 rounded border border-white/10 py-3 text-[0.8rem] font-bold tracking-wider uppercase text-white transition-all">
            <Send size={16} /> Send Message
          </button>
        </div>
        
        <div className="bg-card hover:border-teal/20 transition-colors rounded-lg border border-white/[0.07] p-6 lg:p-8">
          <h3 className="mb-5 flex items-center gap-2 font-syne text-[1.1rem] font-bold text-white">
            <Book size={18} className="text-teal" /> Seller Resources
          </h3>
          <div className="space-y-1">
            {['Merchant Handbook', 'Selling Policies', 'Growth Guide', 'API Documentation'].map(
              (r) => (
                <a
                  key={r}
                  href="#"
                  className="text-gray hover:text-teal hover:pl-2 flex items-center justify-between py-2.5 text-[0.88rem] font-medium no-underline transition-all"
                >
                  <span>{r}</span>
                  <ExternalLink size={14} />
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
