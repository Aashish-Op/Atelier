'use client';
import { Target, Droplets, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export function TechnicalSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-16 bg-[#0A0A0A] grid grid-cols-1 md:grid-cols-12 gap-8 items-center overflow-hidden">
      {/* Structural Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
        <div className="absolute left-1/4 tech-line-v"></div>
        <div className="absolute left-3/4 tech-line-v"></div>
        <div className="absolute top-1/3 tech-line w-full"></div>
        <div className="absolute top-2/3 tech-line w-full"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:col-span-5 relative z-10 space-y-8"
      >
        <span className="font-mono text-[10px] md:text-xs font-medium text-[#c5c6ca] tracking-widest uppercase block border-b border-[#45474a] pb-2 inline-block">
          Engineering
        </span>
        <h2 className="font-display text-6xl md:text-[80px] font-bold leading-none text-[#e5e2e1] uppercase tracking-tighter">
          Raw<br/>Control
        </h2>
        <p className="font-sans text-sm md:text-base text-[#c8c6c5] max-w-md leading-relaxed">
          Every edge is calculated. Every flow is calibrated. We strip away the unnecessary to reveal the brutal honesty of the materials.
        </p>
        <ul className="font-mono text-[10px] md:text-xs font-medium text-[#c6c6ca] space-y-6 border-l border-[#45474a] pl-6 tracking-widest uppercase mt-8">
          <li className="flex items-center gap-4 hover:text-[#c5c6ca] transition-colors cursor-crosshair">
            <Target className="w-4 h-4" /> 0.01mm Tolerance
          </li>
          <li className="flex items-center gap-4 hover:text-[#c5c6ca] transition-colors cursor-crosshair">
            <Droplets className="w-4 h-4" /> Kinetic Flow Control
          </li>
          <li className="flex items-center gap-4 hover:text-[#c5c6ca] transition-colors cursor-crosshair">
            <Layers className="w-4 h-4" /> Multi-layer Refraction
          </li>
        </ul>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:col-span-7 relative z-10 mt-16 md:mt-0"
      >
        <div className="structural-layer p-2 relative md:ml-12 mx-auto max-w-md md:max-w-none">
          <div className="liquid-layer p-8 md:p-12 aspect-square flex items-center justify-center">
            <div className="relative w-full h-full border border-[#45474a]/50 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
              <div className="absolute inset-4 border border-[#45474a]/30 rounded-full"></div>
              <div className="absolute inset-8 md:inset-12 border border-[#45474a]/10 rounded-full"></div>
              <span className="font-mono text-[10px] md:text-xs text-[#8f9194] absolute top-0 -translate-y-1/2 bg-[#0A0A0A] px-2 font-medium">N 0°</span>
              <span className="font-mono text-[10px] md:text-xs text-[#8f9194] absolute bottom-0 translate-y-1/2 bg-[#0A0A0A] px-2 font-medium">S 180°</span>
            </div>
          </div>
          {/* Floating Tech Label */}
          <div className="absolute -right-4 md:-right-8 top-1/4 bg-[#2a2a2a] border border-[#45474a] px-4 py-2 font-mono text-[10px] md:text-xs font-medium text-[#e5e2e1] hidden sm:block tracking-widest">
            DIA. 450MM / THK. 12MM
          </div>
        </div>
      </motion.div>
    </section>
  );
}
