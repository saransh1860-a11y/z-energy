import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

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
            className="glass p-10 md:p-16 rounded-[40px] relative overflow-hidden"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10"
              >
                <div className="w-24 h-24 bg-primary-red/10 rounded-full flex items-center justify-center">
                  <Send size={48} className="text-primary-red" />
                </div>
                <h3 className="text-3xl font-display font-black uppercase italic tracking-tight">Application Received</h3>
                <p className="text-gray-400 font-medium max-w-sm">
                  Your request has been logged in our secure system. An elite consultant will reach out to schedule your session within 2 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  New Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-hidden focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-bold placeholder:opacity-30"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-hidden focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-bold placeholder:opacity-30"
                      placeholder="e.g. +91 98XXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Primary Fitness Goal</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-hidden focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-bold appearance-none">
                    <option className="bg-black">Weight Loss</option>
                    <option className="bg-black">Muscle Gain</option>
                    <option className="bg-black">Athletic Performance</option>
                    <option className="bg-black">Rehabilitation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Additional Notes</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-hidden focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-bold placeholder:opacity-30 resize-none"
                    placeholder="Tell us about your history..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary-red hover:bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(255,51,51,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    'Processing...'
                  ) : (
                    <>
                      Book Free Session <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
