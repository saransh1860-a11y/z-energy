import { Instagram, Twitter, Youtube, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-black relative overflow-hidden border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl aspect-square bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-primary-red rounded-xl flex items-center justify-center rotate-45 transform group-hover:rotate-[225deg] transition-all duration-700 shadow-[0_0_20px_rgba(255,51,51,0.3)]">
                <span className="text-white font-black text-xl -rotate-45 group-hover:rotate-[135deg] transition-all duration-700">Z</span>
              </div>
              <span className="text-2xl font-display font-black tracking-tighter uppercase italic text-white">
                Zenergy<span className="text-primary-red">Fitness</span>
              </span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-sm">
              The pinnacle of performance in Ambala. We are a specialized sanctuary for those who refuse to settle for ordinary results. Engineering physiques, architecting mindsets.
            </p>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-12 h-12 glass-morphism rounded-2xl flex items-center justify-center hover:bg-primary-red hover:text-white transition-all duration-500 group shadow-xl"
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 border-l-2 border-primary-red pl-4">Arena</h4>
            <ul className="space-y-6">
              {['Home', 'Programs', 'Trainers', 'Pricing', 'Transformations', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-primary-red transition-colors flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-white/10 rounded-full group-hover:bg-primary-red transition-colors" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 border-l-2 border-primary-red pl-4">Deployment</h4>
            <ul className="space-y-8">
              <li className="flex gap-4 group cursor-pointer">
                <MapPin className="text-primary-red shrink-0 transition-transform group-hover:scale-110" size={20} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed group-hover:text-white transition-colors">Inco road, Luxmi Nagar,<br />Ambala, Haryana 134003</span>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <Phone className="text-primary-red shrink-0 transition-transform group-hover:scale-110" size={20} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <Mail className="text-primary-red shrink-0 transition-transform group-hover:scale-110" size={20} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors underline decoration-primary-red/30 underline-offset-4">contact@zenergyfitness.in</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 border-l-2 border-primary-red pl-4">Operations</h4>
            <div className="glass-morphism p-8 rounded-[32px] border border-white/5 space-y-6 shadow-2xl">
              <div className="flex justify-between items-center group">
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Mon - Sun</span>
                <span className="text-white font-display font-black italic group-hover:text-primary-red transition-colors text-sm">06:00 — 21:00</span>
              </div>
              <div className="w-full h-[1px] bg-white/5" />
              <div className="flex flex-col gap-4">
                 <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-600">Peak Performance Protocol Active</p>
                 <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-[0.3em] hover:bg-primary-red hover:border-primary-red hover:text-white transition-all">
                    Member Portal
                 </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.4em]">
            © 2024 Zenergy Fitness Group. Engineered for Results.
          </p>
          <div className="flex gap-10 text-[9px] font-black text-gray-600 uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-primary-red transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-red transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-red transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
