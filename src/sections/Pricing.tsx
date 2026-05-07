import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Basic Elite',
      price: '4,999',
      period: 'Monthly',
      features: [
        'Premium Gym Access (9AM-5PM)',
        'Personal Workout Blueprint',
        'Locker & Shower Access',
        'Basic Fitness Assessment',
        'Group Yoga Sessions',
      ],
      recommended: false,
    },
    {
      name: 'Pro Vanguard',
      price: '12,499',
      period: '3 Months',
      features: [
        '24/7 Unlimited Access',
        'All Basic Features Included',
        'Certified Personal Trainer (2/mo)',
        'Complete Nutrition Blueprint',
        'Recovery Spa Access (4/mo)',
        'Supplementation Guide',
      ],
      recommended: true,
    },
    {
      name: 'Ultimate Elite',
      price: '45,999',
      period: 'Annually',
      features: [
        '24/7 Global VIP Access',
        'Dedicated Master Coach',
        'Unlimited Bio-Recovery Treatments',
        'Custom High-End Meal Delivery',
        'Quarterly Health Screenings',
        'Priority Program Enrolment',
      ],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-video bg-primary-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Membership</span>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-6">
            Elite <span className="text-gradient">Investment.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Choose the membership that aligns with your ambition. We offer premium tiers designed to provide unparalleled support on your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group glass p-10 rounded-[32px] border-2 transition-all duration-500 hover:scale-[1.02] ${
                plan.recommended ? 'border-primary-red scale-[1.05]' : 'border-white/5 hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-red text-white text-[10px] font-black uppercase tracking-[0.3em] py-2 px-6 rounded-full shadow-[0_0_20px_rgba(255,51,51,0.5)]">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-display font-black uppercase tracking-widest text-primary-red mb-4 italic">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-500 font-bold text-lg italic">₹</span>
                  <span className="text-5xl font-display font-black tracking-tighter italic">{plan.price}</span>
                  <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest bg-white/5 px-2 py-1 rounded ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-10 min-h-[240px]">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-red/10 flex items-center justify-center shrink-0">
                      <Check className="text-primary-red" size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all ${
                  plan.recommended
                    ? 'bg-primary-red text-white shadow-[0_10px_30px_rgba(255,51,51,0.4)] hover:bg-red-700'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                Join Now <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
