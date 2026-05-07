import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate Firebase logic
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/80">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Reservation</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8 leading-tight">
              Start Your <br />
              <span className="text-gradient">Transformation.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              Book your complimentary assessment at Zenergy Fitness today. Our specialists in Ambala will help you blueprint your path to peak performance.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:bg-primary-red transition-all group-hover:scale-110">
                  <Phone size={24} className="text-primary-red group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Call Our Desk</p>
                  <p className="text-xl font-display font-black uppercase italic">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:bg-primary-red transition-all group-hover:scale-110">
                  <Mail size={24} className="text-primary-red group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Email Inquiry</p>
                  <p className="text-xl font-display font-black uppercase italic">contact@zenergyfitness.in</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:bg-primary-red transition-all group-hover:scale-110">
                  <MapPin size={24} className="text-primary-red group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">The Location</p>
                  <p className="text-xl font-display font-black uppercase italic italic text-wrap">Inco road, Luxmi Nagar, Ambala, Haryana 134003</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-morphism p-10 md:p-16 rounded-[48px] relative overflow-hidden border border-white/5"
          >
            <div className="absolute top-0 right-0 py-8 px-12 bg-primary-red text-white text-[10px] font-black uppercase tracking-[0.5em] origin-top-right rotate-45 translate-x-12 translate-y-2 shadow-2xl z-20">
               Limited Slots
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-8 py-10"
              >
                <div className="w-24 h-24 bg-primary-red rounded-[32px] flex items-center justify-center rotate-12 shadow-[0_20px_50px_rgba(255,51,51,0.4)]">
                  <Send size={40} className="text-white -rotate-12" />
                </div>
                <div>
                   <h3 className="text-3xl font-display font-black uppercase italic tracking-tight mb-4">Inquiry Received.</h3>
                   <p className="text-gray-400 font-medium max-w-sm leading-relaxed">
                     Your profile has been prioritized. An elite consultant will reach out to blueprint your transformation within the hour.
                   </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary-red hover:border-primary-red transition-all"
                >
                  New Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4">Full Identity</label>
                    <input
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 focus:outline-hidden focus:border-primary-red transition-all font-bold placeholder:opacity-20 text-sm"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4">Direct Contact</label>
                    <input
                      type="tel"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 focus:outline-hidden focus:border-primary-red transition-all font-bold placeholder:opacity-20 text-sm"
                      placeholder="e.g. +91 98XXX"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4">Primary Performance Goal</label>
                  <div className="relative group/select">
                    <select className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 focus:outline-hidden focus:border-primary-red transition-all font-bold appearance-none text-sm cursor-pointer">
                      <option className="bg-black">Elite Transformation</option>
                      <option className="bg-black">Strength Architecture</option>
                      <option className="bg-black">Athletic Performance</option>
                      <option className="bg-black">Post-Injury Recovery</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-hover/select:translate-y-[-40%] transition-transform">
                       <ArrowRight size={16} className="text-gray-600 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4">Case History / Notes</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 focus:outline-hidden focus:border-primary-red transition-all font-bold placeholder:opacity-20 resize-none text-sm"
                    placeholder="Briefly describe your objectives..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full group relative h-20 bg-primary-red text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-[0_20px_40px_rgba(255,51,51,0.3)] transition-all hover:shadow-[0_20px_60px_rgba(255,51,51,0.5)] flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  {status === 'loading' ? (
                    'Processing Application...'
                  ) : (
                    <>
                      Secure Your Assessment
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary-red transition-all">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5" />
                      </div>
                    </>
                  )}
                </button>
                <p className="text-center text-[8px] font-black uppercase tracking-[0.5em] text-gray-700">Protected by Zenergy AI Protocol</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
