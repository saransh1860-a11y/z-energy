import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Transformations() {
  const results = [
    {
      name: 'Rohan Sharma',
      duration: '4 Months',
      loss: '15kg Fat Loss',
      gain: '3kg Muscle Gain',
      img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2070',
      quote: "The personalized attention and elite gadgets used for tracking made all the difference.",
    },
    {
      name: 'Anjali Verma',
      duration: '6 Months',
      loss: 'Body Recomp',
      gain: 'Strength 2x',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2069',
      quote: "I never thought I could lift this heavy. The community here pushes you in the best way possible.",
    },
    {
      name: 'David Miller',
      duration: '3 Months',
      loss: 'Shredded Phase',
      gain: 'Lean Mass',
      img: 'https://images.unsplash.com/photo-1491751350879-478682434c49?auto=format&fit=crop&q=80&w=2070',
      quote: "Elite training with elite results. Best investment in my health ever.",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-transparent to-black/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Proven Success</span>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8">
            Real Proof of <span className="text-gradient">Power.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {results.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass-morphism rounded-[40px] overflow-hidden border border-white/5 transition-all duration-700 hover:border-primary-red/30 hover:translate-y-[-12px]"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={res.img}
                  alt={res.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                
                <div className="absolute top-8 left-8">
                   <div className="px-4 py-1.5 glass rounded-full flex items-center gap-2 border border-white/10 shadow-2xl">
                      <div className="w-1.5 h-1.5 bg-primary-red rounded-full animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">Verified Result</span>
                   </div>
                </div>

                <div className="absolute bottom-10 left-10">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-red mb-2 italic">{res.duration} Journey</p>
                   <h3 className="text-4xl font-display font-black uppercase tracking-tighter text-white italic drop-shadow-2xl">{res.name}</h3>
                </div>
              </div>

              <div className="p-10 relative">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex flex-col items-center">
                    <span className="text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1">Status</span>
                    <span className="text-xs font-black text-white italic text-center uppercase tracking-tighter">{res.loss}</span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex flex-col items-center">
                    <span className="text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1">Outcome</span>
                    <span className="text-xs font-black text-white italic text-center uppercase tracking-tighter">{res.gain}</span>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 text-primary-red opacity-10" size={40} />
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium italic pl-6">
                    "{res.quote}"
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/5 mb-6" />

                <div className="flex items-center gap-4">
                   <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-primary-red rounded-full" />
                      ))}
                   </div>
                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">Authenticated Success</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
