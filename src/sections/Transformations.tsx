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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass p-2 rounded-3xl overflow-hidden"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src={res.img}
                  alt={res.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-black uppercase tracking-widest text-primary-red mb-1">{res.duration} Transformation</p>
                  <h4 className="text-2xl font-display font-black uppercase italic text-white tracking-tight">{res.name}</h4>
                </div>
              </div>

              <div className="px-6 pb-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-white/5 rounded-xl border-l-2 border-primary-red">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1 italic">Status</p>
                    <p className="text-xs font-black text-white uppercase">{res.loss}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border-l-2 border-accent-blue">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1 italic">Result</p>
                    <p className="text-xs font-black text-white uppercase">{res.gain}</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 text-primary-red opacity-20" size={32} />
                  <p className="text-sm text-gray-400 font-medium italic relative z-10 pl-6">
                    "{res.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
