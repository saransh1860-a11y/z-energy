import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 border border-primary-red/50 text-primary-red text-xs font-bold uppercase tracking-[0.3em] mb-6 rounded-full glass"
          >
            Zenergy Fitness Ambala
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter uppercase italic mb-6">
            Push Beyond <br />
            <span className="text-primary-red italic drop-shadow-[0_0_20px_rgba(255,51,51,0.5)]">Limits.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-medium leading-relaxed">
            Experience the pinnacle of performance in our state-of-the-art facility. 
            Join the elite community and transform your physique with world-class coaching.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-primary-red hover:bg-red-700 text-white px-10 py-5 font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 overflow-hidden">
              <span className="relative z-10">Start Training</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
            
            <button className="px-10 py-5 border border-white/20 hover:border-white/50 glass font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3">
              <Play fill="white" size={20} />
              Watch Film
            </button>
          </div>
        </motion.div>

      </div>

      {/* Floating glow effects */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-red/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-accent-blue/5 blur-[150px] rounded-full" />
    </section>
  );
}
