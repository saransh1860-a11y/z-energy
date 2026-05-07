import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function About() {
  const highlights = [
    '24/7 Premium Access for Members',
    'Certified Olympic-Grade Trainers',
    'Customized Nutrition & Performance Plans',
    'Exclusive Recovery & Spa Lounge',
    'Imported State-of-the-art Equipment',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative z-10 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=2069"
                alt="Gym Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decors */}
            <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-primary-red/30 -z-0 rounded-2xl" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-blue/10 blur-3xl -z-0 rounded-full" />
            
            <div className="absolute bottom-10 -right-10 glass p-8 rounded-xl z-20 max-w-[200px] border-l-4 border-primary-red">
              <p className="text-4xl font-display font-black text-primary-red mb-1">15+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">Years of Elite Transformation</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-6 block drop-shadow-[0_0_10px_rgba(255,51,51,0.3)]">Our Heritage of Power</span>
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase italic mb-8 leading-[0.9] tracking-tighter">
              The Science <br />
              <span className="text-white text-glow">Of Superiority.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              Zenergy Fitness isn't just a destination in Ambala; it's a movement. We've meticulously engineered a sanctuary where high-performance technology meets raw, human ambition. 
              Our philosophy is simple: provide the world's most advanced equipment, the industry's most disciplined coaches, and an environment that demands your absolute best.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-primary-red/50 flex items-center justify-center group-hover:bg-primary-red transition-all duration-300">
                    <CheckCircle2 className="text-primary-red group-hover:text-white transition-colors" size={14} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-[11px] uppercase tracking-wider text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white hover:text-primary-red transition-all">
              <span className="border-b-2 border-primary-red pb-1">Uncover Our DNA</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary-red transition-all">
                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
