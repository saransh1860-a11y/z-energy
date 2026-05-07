import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Trophy } from 'lucide-react';

export function Trainers() {
  const trainers = [
    {
      name: 'Vikram "The Beast" Rathore',
      role: 'Head Bodybuilding Coach',
      exp: '12+ Years Exp',
      img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=1974',
      achievements: ['Mr. India 3x Winner', 'Certified IFBB Pro'],
    },
    {
      name: 'Sarah D\'Souza',
      role: 'CrossFit Specialist',
      exp: '8+ Years Exp',
      img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a47?auto=format&fit=crop&q=80&w=1974',
      achievements: ['CrossFit Level 3 Coach', 'State Powerlifting Champ'],
    },
    {
      name: 'Alex Johnson',
      role: 'Functional & Combat Coach',
      exp: '10+ Years Exp',
      img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=2070',
      achievements: ['Black Belt BJJ', 'Olympic Development Team'],
    },
    {
      name: 'Maya Kapoor',
      role: 'Yoga & Nutrition Expert',
      exp: '7+ Years Exp',
      img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=2070',
      achievements: ['Precision Nutrition L2', '500 RYT Yoga'],
    },
  ];

  return (
    <section id="trainers" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">The Elite Team</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tight">
              Guided by <span className="text-gradient">Champions.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-medium">
            Our coaches aren't just trainers. They are elite athletes and performance engineers dedicated to your transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-[32px] bg-dark-card border border-white/[0.05] shadow-2xl"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
                />
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                
                {/* Social Actions */}
                <div className="absolute top-8 right-8 flex flex-col gap-3 translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary-red transition-all cursor-pointer group/icon shadow-2xl"
                    >
                      <Icon size={20} className="text-white group-hover/icon:scale-110 transition-transform" />
                    </motion.div>
                  ))}
                </div>

                {/* Vertical Text Decoration */}
                <div className="absolute top-10 left-6 -rotate-90 origin-left opacity-20 pointer-events-none">
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-white">ELITE PERFORMANCE</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-all duration-500 group-hover:pb-10">
                <div className="flex items-center gap-2 mb-4">
                   <div className="h-[1px] w-8 bg-primary-red" />
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-red italic">{trainer.role}</p>
                </div>
                
                <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-4 text-white group-hover:text-primary-red transition-colors duration-300">
                  {trainer.name.split(' "').join('\n"')}
                </h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-primary-red" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{trainer.exp}</span>
                  </div>
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[8px] font-black text-white uppercase tracking-widest">Certified</span>
                  </div>
                </div>

                <div className="space-y-2 overflow-hidden h-0 group-hover:h-auto transition-all duration-700 opacity-0 group-hover:opacity-100">
                  {trainer.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary-red rounded-full" />
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
