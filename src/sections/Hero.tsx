import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070"
          alt="Gym background"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-primary-red text-[10px] font-black uppercase tracking-[0.4em] mb-8 rounded-full bg-white/[0.02] backdrop-blur-sm shadow-2xl"
            >
              <span className="w-1.5 h-1.5 bg-primary-red rounded-full animate-pulse" />
              Zenergy Fitness • Ambala's Peak Performance Group
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter uppercase italic mb-8">
              Forging <br />
              <span className="text-glow text-white">Elite</span> <br />
              <span className="text-primary-red italic drop-shadow-[0_0_30px_rgba(255,51,51,0.6)]">Physiques.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-xl font-medium leading-tight">
              Escape the ordinary. Experience an ultra-premium environment engineered for those who demand absolute transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-primary-red hover:bg-red-700 text-white px-12 py-6 font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 overflow-hidden rounded-sm shadow-[0_0_40px_rgba(255,51,51,0.4)]">
                <span className="relative z-10">Ascend Now</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              
              <button className="px-12 py-6 border border-white/10 hover:bg-white/5 font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 group rounded-sm backdrop-blur-sm">
                Explore The Arena
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary-red transition-colors">
                   <ArrowRight size={14} className="group-hover:text-primary-red" />
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="space-y-4">
              {[
                { label: 'Active Members', value: '1,500+', desc: 'High Performers' },
                { label: 'Elite Coaches', value: '25+', desc: 'National Champions' },
                { label: 'Growth Zone', value: '15k', desc: 'Sq. Ft. Luxury Area' },
              ].map((stat, idx) => (
                <div key={idx} className="glass-morphism p-8 border-l-4 border-primary-red transform hover:translate-x-2 transition-all duration-300">
                  <h3 className="text-4xl font-display font-black mb-1">{stat.value}</h3>
                  <p className="text-[10px] text-primary-red uppercase tracking-widest font-black mb-1">{stat.label}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{stat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating glow effects */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-red/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-accent-blue/5 blur-[150px] rounded-full" />
    </section>
  );
}
