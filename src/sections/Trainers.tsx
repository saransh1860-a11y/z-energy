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
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-dark-card border border-white/5"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Social Icons Overlay */}
                <div className="absolute top-6 -right-12 group-hover:right-6 transition-all duration-300 flex flex-col gap-3">
                  {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary-red transition-colors cursor-pointer">
                      <Icon size={18} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="px-3 py-1 bg-primary-red w-fit rounded-sm mb-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white italic">{trainer.role}</p>
                </div>
                <h3 className="text-xl font-display font-black uppercase tracking-tight mb-2 group-hover:text-primary-red transition-colors">{trainer.name}</h3>
                
                <div className="flex items-center gap-2 mb-4 opacity-70">
                  <Trophy size={14} className="text-primary-red" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{trainer.exp}</span>
                </div>

                <div className="space-y-1 overflow-hidden h-0 group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                  {trainer.achievements.map((ach, i) => (
                    <p key={i} className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">• {ach}</p>
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
