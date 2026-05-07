import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

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
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group p-10 rounded-[40px] transition-all duration-700 flex flex-col hover:translate-y-[-16px] ${
                plan.recommended 
                  ? 'bg-linear-to-b from-primary-red/20 to-primary-red/5 border-2 border-primary-red/50 shadow-[0_40px_100px_-20px_rgba(255,51,51,0.25)] scale-[1.05] z-20' 
                  : 'glass-morphism border border-white/5 hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-red text-white text-[10px] font-black uppercase tracking-[0.4em] py-3 px-8 rounded-full shadow-[0_10px_30px_rgba(255,51,51,0.5)] z-30">
                  Most Popular
                </div>
              )}

              <div className="mb-12 text-center">
                <h3 className={`text-[10px] font-black uppercase tracking-[0.5em] mb-4 block italic ${plan.recommended ? 'text-primary-red text-glow' : 'text-gray-500'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`font-display font-black text-xl italic ${plan.recommended ? 'text-primary-red' : 'text-gray-600'}`}>₹</span>
                  <span className="text-7xl font-display font-black tracking-tighter italic text-white drop-shadow-2xl">
                    {plan.price}
                  </span>
                </div>
                <div className="mt-2">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 bg-white/5 px-4 py-1 rounded-full border border-white/5">{plan.period} COMMITMENT</span>
                </div>
              </div>

              <div className="space-y-6 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110 ${plan.recommended ? 'bg-primary-red/20 text-primary-red' : 'bg-white/5 text-primary-red/50'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-gray-300 group-hover/item:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-6 rounded-[20px] font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500 flex items-center justify-center gap-3 group/btn overflow-hidden relative ${
                  plan.recommended
                    ? 'bg-primary-red text-white shadow-[0_20px_40px_rgba(255,51,51,0.4)] hover:bg-black hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                    : 'bg-white/5 text-white border border-white/10 hover:border-primary-red hover:bg-primary-red'
                }`}
              >
                <span className="relative z-10 transition-transform group-hover/btn:-translate-x-1">Secure Entrance</span>
                <ArrowRight size={14} className="relative z-10 transition-all duration-500 group-hover/btn:translate-x-2" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
