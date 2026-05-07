import { motion, useScroll, useSpring } from 'motion/react';
import { MessageCircle, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Programs } from './sections/Programs';
import { BMICalculator } from './sections/BMICalculator';
import { Trainers } from './sections/Trainers';
import { Transformations } from './sections/Transformations';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { Gallery } from './sections/Gallery';
import { FAQ } from './sections/FAQ';
import { LeadForm } from './sections/LeadForm';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Programs />
        <About />
        <BMICalculator />
        <Trainers />
        <Transformations />
        <Gallery />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>

      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-white/20 transition-all mb-2"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}

        <ChatBot />
      </div>

      {/* Floating Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-linear-to-t from-black to-transparent">
        <button className="w-full bg-primary-red text-white py-4 font-black uppercase tracking-widest rounded-xl shadow-2xl text-sm">
          Book Free Session Now
        </button>
      </div>
    </div>
  );
}
