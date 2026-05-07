import { Instagram, Twitter, Youtube, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-24 pb-8 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-primary-red to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-red rounded-sm flex items-center justify-center rotate-45 transform">
                <span className="text-white font-black text-lg -rotate-45">Z</span>
              </div>
              <span className="text-xl font-display font-black tracking-tighter uppercase italic">
                Zenergy<span className="text-primary-red">Fitness</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              We are a premier high-performance fitness destination. Our goal is to push the boundaries of human potential through elite coaching and technology.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <div key={i} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary-red transition-all cursor-pointer group">
                  <Icon size={18} className="group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-primary-red pl-4">Elite Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Programs', 'Trainers', 'Pricing', 'Transformations', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary-red text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-white/20 rounded-full" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-primary-red pl-4">The Location</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-primary-red shrink-0" size={20} />
                <span className="text-sm text-gray-400 font-medium">Inco road, Luxmi Nagar, Ambala, Haryana 134003</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary-red shrink-0" size={20} />
                <span className="text-sm text-gray-400 font-medium">+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-primary-red shrink-0" size={20} />
                <span className="text-sm text-gray-400 font-medium">contact@zenergyfitness.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-primary-red pl-4">Operation Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-bold uppercase tracking-widest">Mon - Sun</span>
                <span className="text-white font-black italic">6:00 - 21:00</span>
              </li>
            </ul>
            
            <div className="mt-8">
               <button className="w-full bg-white/5 border border-white/10 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary-red hover:border-primary-red transition-all">
                Member Login
               </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © 2024 Zenergy Fitness Club. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Elite Service</a>
            <a href="#" className="hover:text-white">Cookie Control</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
