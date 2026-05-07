import { motion } from 'motion/react';
import { Dumbbell, Flame, Zap, Heart, UserCheck, Timer, Trophy, ShieldCheck, ArrowRight } from 'lucide-react';

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
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative p-8 glass-morphism rounded-[32px] overflow-hidden border border-white/5 transition-all duration-700 hover:border-primary-red/30 hover:translate-y-[-12px]"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-red group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,51,51,0.3)]">
                  <program.icon className="text-primary-red group-hover:text-white transition-colors duration-500" size={36} strokeWidth={1.5} />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-primary-red" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-red">{program.tag}</span>
                </div>
                
                <h3 className="text-3xl font-display font-black uppercase italic mb-6 leading-tight group-hover:text-white transition-colors">
                  {program.title.split(' & ').join(' \n& ')}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-10 group-hover:text-gray-300 transition-colors">
                  {program.desc}
                </p>
                
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-primary-red transition-all group/btn">
                  Explore Method 
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-primary-red transition-all">
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-red/10 blur-[100px] rounded-full group-hover:bg-primary-red/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
