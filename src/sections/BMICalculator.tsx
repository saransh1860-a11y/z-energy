import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Info } from 'lucide-react';

export function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const val = parseFloat((w / (h * h)).toFixed(1));
      setBmi(val);

      if (val < 18.5) setStatus('Underweight');
      else if (val >= 18.5 && val < 25) setStatus('Healthy');
      else if (val >= 25 && val < 30) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Quick Assessment</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8 leading-tight">
              Know Your <br />
              <span className="text-gradient">Starting Point.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              Physical transformation begins with awareness. Use our professional-grade BMI calculator to understand your current body composition and set realistic targets.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 glass p-6 rounded-xl border-l-4 border-accent-blue">
                <Info size={24} className="text-accent-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Health Indicator</h4>
                  <p className="text-xs text-gray-500">Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Calculator size={120} />
            </div>

            <form onSubmit={calculateBMI} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 75"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-hidden focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-hidden focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-bold"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-red hover:bg-red-700 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(255,51,51,0.3)] transition-all hover:-translate-y-1"
              >
                Calculate Now
              </button>
            </form>

            <AnimatePresence>
              {bmi && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-10 p-8 bg-white/5 border border-white/10 rounded-2xl text-center"
                >
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your Result</p>
                  <div className="text-6xl font-display font-black text-primary-red italic mb-2 tracking-tighter">
                    {bmi}
                  </div>
                  <p className="text-xl font-bold uppercase tracking-widest italic flex items-center justify-center gap-2">
                    Condition: <span className="text-white">{status}</span>
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      Based on your BMI, you are in the <strong>{status}</strong> category. Let's build a plan to reach your peak performance.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
