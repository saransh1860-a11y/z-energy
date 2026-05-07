import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Aditya Singh',
      role: 'Business Owner',
      text: "Vanguard Elite is more than just a gym. It's a sanctuary for high performers. The equipment quality is unmatched in the city.",
      rating: 5,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974',
    },
    {
      name: 'Priya Malhotra',
      role: 'Fashion Designer',
      text: "The female fitness zone is incredible. Trainers are strictly professional and the hygiene levels are five-star.",
      rating: 5,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974',
    },
    {
      name: 'Michael Chen',
      role: 'Software Architect',
      text: "The data-driven approach changed my life. I've tracked my progress digitally and the results speak for themselves.",
      rating: 5,
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974',
    },
  ];

  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative bg-black/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">4.6 Stars (84 Reviews)</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8 tracking-tight">
              Our Member <br />
              <span className="text-gradient">Experience.</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-lg leading-relaxed">
              Our members are leaders in their respective fields. Hear why they chose Vanguard Elite as their performance partner.
            </p>
            
            <div className="flex gap-4">
              <button onClick={prev} className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-primary-red transition-all group">
                <ChevronLeft className="group-hover:scale-110" />
              </button>
              <button onClick={next} className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-primary-red transition-all group">
                <ChevronRight className="group-hover:scale-110" />
              </button>
            </div>
          </div>

          <div className="relative h-[450px]">
             <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 glass p-10 md:p-16 rounded-[40px] flex flex-col justify-between overflow-hidden"
              >
                <Quote className="absolute top-10 right-10 text-primary-red opacity-10" size={100} />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#ff3333" className="text-primary-red" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl font-display font-black italic text-white leading-tight mb-10">
                    "{testimonials[active].text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-red p-1">
                    <img
                      src={testimonials[active].img}
                      alt={testimonials[active].name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-black uppercase italic text-white tracking-widest">{testimonials[active].name}</h4>
                    <p className="text-xs font-bold text-primary-red uppercase tracking-[0.2em]">{testimonials[active].role}</p>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-red/5 blur-3xl rounded-full" />
              </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
