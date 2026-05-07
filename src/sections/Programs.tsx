import { motion } from 'motion/react';
import { Dumbbell, Flame, Zap, Heart, UserCheck, Timer, Trophy, ShieldCheck } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      title: 'Power & Strength',
      desc: 'Build raw power and muscle mass using elite-level equipment and programming.',
      icon: Dumbbell,
      color: 'from-orange-500/20 to-red-500/20',
      tag: 'Strength',
    },
    {
      title: 'Fat Incinerator',
      desc: 'High-intensity metabolic conditioning designed to shred body fat while preserving lean mass.',
      icon: Flame,
      color: 'from-red-500/20 to-rose-500/20',
      tag: 'Weight Loss',
    },
    {
      title: 'Athletic Performance',
      desc: 'Explosive movements, agility work, and speed training for the competitive athlete.',
      icon: Zap,
      color: 'from-blue-500/20 to-cyan-500/20',
      tag: 'Elite',
    },
    {
      title: 'Functional Flow',
      desc: 'Improve mobility, posture, and core stability for a body that performs as good as it looks.',
      icon: Heart,
      color: 'from-emerald-500/20 to-teal-500/20',
      tag: 'Holistic',
    },
    {
      title: 'Personal Coaching',
      desc: 'One-on-one attention with tailored nutrition and training blueprints.',
      icon: UserCheck,
      color: 'from-purple-500/20 to-indigo-500/20',
      tag: 'Premium',
    },
    {
      title: 'Combat Training',
      desc: 'Learn high-level striking and grappling for confidence and ultimate conditioning.',
      icon: ShieldCheck,
      color: 'from-yellow-500/20 to-amber-500/20',
      tag: 'Skill',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Elite Programming
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black uppercase italic mb-6"
          >
            Choose Your <span className="text-gradient">Evolution.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Our programs are meticulously crafted by performance specialists to ensure every drop of sweat leads to a stronger version of you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 glass rounded-2xl overflow-hidden border-none transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,51,51,0.1)]`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-red transition-colors duration-500">
                  <program.icon className="text-primary-red group-hover:text-white transition-colors duration-500" size={32} />
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-red mb-2 block">{program.tag}</span>
                <h3 className="text-2xl font-display font-black uppercase italic mb-4">{program.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {program.desc}
                </p>
                
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-primary-red transition-all">
                  Explore Method <Timer size={14} />
                </button>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-red/5 blur-3xl rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
