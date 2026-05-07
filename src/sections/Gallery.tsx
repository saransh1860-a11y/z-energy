import { motion } from 'motion/react';

export function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2070',
      title: 'Olympic Area',
      size: 'col-span-2 row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1590239068512-63200672b1e4?auto=format&fit=crop&q=80&w=2074',
      title: 'Elite Coaching',
      size: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1574673130244-c3e25b24460a?auto=format&fit=crop&q=80&w=2069',
      title: 'Recovery Zone',
      size: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070',
      title: 'The Arena',
      size: 'col-span-2 row-span-1',
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Visual Tour</span>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8">
            The <span className="text-gradient">Atmosphere.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group ${img.size}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <h4 className="text-2xl font-display font-black uppercase italic tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
