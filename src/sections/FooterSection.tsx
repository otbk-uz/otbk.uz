const FooterSection = () => {
  return (
    <footer className="py-12 section bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-blue/5 pointer-events-none" />
      <div className="container-narrow relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-black text-white mb-2 tracking-tighter">
              O<span className="text-neon-blue">TBK</span>
            </p>
            <p className="text-xs text-white/50 font-mono tracking-widest uppercase">System Architect</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_10px_#00ff66] animate-pulse" />
            <span className="text-xs font-mono text-neon-green tracking-widest uppercase">Tizim Ishlamoqda</span>
          </div>
          
          <p className="text-sm text-white/40 font-light">
            © 2026 <span className="text-white/80">Otabek Ravshanov</span>
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-mono">
            SYS.VER: 2.0.26
          </p>
          <p className="text-white/30 text-xs font-mono">
            CONNECTION: SECURE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
