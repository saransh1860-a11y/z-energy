import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

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
            <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8 leading-[1.1] tracking-tight">
              Where Engineering <br />
              <span className="text-gradient">Meets Human Effort.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Zenergy Fitness, we don't just provide a gym; we provide a high-performance environment engineered for results. 
              Our philosophy blend cutting-edge sports science with raw, old-school discipline to forge physiques that are as powerful as they look.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary-red shrink-0" size={20} />
                  <span className="font-bold text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <button className="border-b-2 border-primary-red pb-1 text-sm font-black uppercase tracking-widest hover:text-primary-red transition-all cursor-pointer">
              Discover Our History
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
