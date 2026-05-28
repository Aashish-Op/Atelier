'use client';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react';

export function NavBar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/30 backdrop-blur-xl border-b border-[#45474a]/30 transition-all duration-500"
    >
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-6">
        <div className="font-display text-2xl md:text-3xl font-semibold tracking-tighter text-[#e5e2e1] hover:brightness-125 transition-all duration-300 cursor-pointer uppercase">
          Atelier
        </div>
        <div className="hidden md:flex gap-8 items-center font-mono text-xs uppercase tracking-widest font-medium">
          <a className="text-[#c5c6ca] border-b-2 border-[#c5c6ca] pb-1" href="#">Collections</a>
          <a className="text-[#8f9194] hover:text-[#e5e2e1] transition-colors" href="#">Precision</a>
          <a className="text-[#8f9194] hover:text-[#e5e2e1] transition-colors" href="#">Heritage</a>
          <a className="text-[#8f9194] hover:text-[#e5e2e1] transition-colors" href="#">Studio</a>
        </div>
        <button className="text-[#8f9194] hover:text-[#e5e2e1] transition-colors flex items-center justify-center p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
