import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Programs', href: '#programs' },
    { name: 'About', href: '#about' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6',
        scrolled ? 'py-4 glass-morphism border-b border-white/5' : 'py-8 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-primary-red rounded-xl flex items-center justify-center rotate-45 transform group-hover:rotate-[225deg] transition-all duration-700 shadow-[0_0_20px_rgba(255,51,51,0.3)] group-hover:shadow-[0_0_40px_rgba(255,51,51,0.6)]">
            <span className="text-white font-black text-xl -rotate-45 group-hover:rotate-[135deg] transition-all duration-700">Z</span>
          </div>
          <span className="text-2xl font-display font-black tracking-tighter uppercase italic text-white group-hover:tracking-widest transition-all duration-500">
            Zenergy<span className="text-primary-red">Fitness</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-primary-red transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-primary-red group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#ff3333]" />
            </a>
          ))}
          <button className="bg-white hover:bg-primary-red text-black hover:text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:scale-110 active:scale-95 shadow-2xl hover:shadow-[0_0_30px_rgba(255,51,51,0.5)]">
            Join Elite
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold uppercase tracking-widest hover:text-primary-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <Instagram className="hover:text-primary-red cursor-pointer" />
              <Facebook className="hover:text-primary-red cursor-pointer" />
              <Twitter className="hover:text-primary-red cursor-pointer" />
            </div>
            <button className="w-full bg-primary-red text-white py-4 font-bold uppercase tracking-widest mt-4">
              Join Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
