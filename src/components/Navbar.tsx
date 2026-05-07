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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-red rounded-sm flex items-center justify-center rotate-45 transform">
            <span className="text-white font-black text-xl -rotate-45">Z</span>
          </div>
          <span className="text-2xl font-display font-black tracking-tighter uppercase italic">
            Zenergy<span className="text-primary-red italic">Fitness</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-primary-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-none font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,51,51,0.4)]">
            Join Now
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
