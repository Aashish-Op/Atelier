'use client';

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-[#c8c6c5] font-sans text-base relative border-t border-[#45474a] z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-12 md:py-16 gap-8">
        <div className="font-display text-2xl md:text-3xl font-semibold text-[#c5c6ca] cursor-default tracking-tighter uppercase">
          Atelier
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-mono uppercase text-[10px] md:text-xs font-medium tracking-widest">
          <a className="text-[#c6c6ca] hover:text-[#c5c6ca] transition-colors" href="#">Privacy</a>
          <a className="text-[#c6c6ca] hover:text-[#c5c6ca] transition-colors" href="#">Terms</a>
          <a className="text-[#c6c6ca] hover:text-[#c5c6ca] transition-colors" href="#">Sustainability</a>
          <a className="text-[#c6c6ca] hover:text-[#c5c6ca] transition-colors" href="#">Contact</a>
        </div>
        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#8f9194] text-center md:text-right">
          © 2024 ATELIER INDUSTRIAL EDITORIAL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
