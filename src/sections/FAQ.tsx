import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does Vanguard Elite offer a free trial session?',
      a: 'Yes, we provide a complimentary one-hour assessment and gym tour with a master coach to help you understand our methodology.',
    },
    {
      q: 'Are the trainers certified internationally?',
      a: 'Absolutely. Every trainer at Vanguard Elite holds an international accreditation (IFBB, NASM, ACE, or CrossFit L2/L3).',
    },
    {
      q: 'What makes your recovery zone special?',
      a: 'Our recovery lounge features infrared saunas, percussion massage tools, and cryotherapy chambers designed for professional athlete-grade recovery.',
    },
    {
      q: 'Can I pause my membership if I travel?',
      a: 'Elite and Pro members can pause their memberships for up to 30 days twice a year with no additional cost.',
    },
    {
      q: 'Is there a specific area for female members?',
      a: 'We provide premium dedicated zones and group sessions specifically for women, ensuring a comfortable and intense training environment.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Knowledge Center</span>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8">
            Common <span className="text-gradient">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setActive(active === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <span className="text-lg font-bold uppercase tracking-wide group-hover:text-primary-red transition-colors italic">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`text-primary-red transition-transform duration-300 ${
                    active === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {active === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
