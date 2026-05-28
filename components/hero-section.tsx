'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const MEDIA = [
  {
    id: 1,
    type: 'video',
    src: '/slider-overhead-and-hand_2026.mp4',
    duration: 8000,
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000',
    duration: 5000,
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=2000',
    duration: 5000,
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=2000',
    duration: 5000,
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentMedia = MEDIA[currentIndex];
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % MEDIA.length);
    }, currentMedia.duration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-[#0A0A0A]">
      {/* Background Carousel */}
      <AnimatePresence initial={false}>
        <motion.div
           key={currentIndex}
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute inset-0 z-0"
        >
          {MEDIA[currentIndex].type === 'video' ? (
            <video
              src={MEDIA[currentIndex].src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity duration-[10s] ease-out"
            />
          ) : (
            <Image
              src={MEDIA[currentIndex].src}
              alt="Luxury Sanitaryware"
              fill
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              referrerPolicy="no-referrer"
              priority
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/80 z-0 pointer-events-none"></div>

      {/* Typography layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* LIQUID - Top Left */}
         <motion.div
            initial={{ opacity: 0, y: -20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[20%] left-[5%] md:top-[25%] md:left-[10%]"
         >
            <h1 className="font-display text-[60px] sm:text-[90px] md:text-[130px] lg:text-[160px] font-bold leading-none tracking-tighter text-white mix-blend-difference uppercase">
              Liquid
            </h1>
         </motion.div>
         
         {/* REALITY - Bottom Right */}
         <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[25%] right-[5%] md:bottom-[20%] md:right-[10%]"
         >
            <h1 className="font-display text-[50px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-semibold leading-none tracking-tighter text-transparent uppercase [-webkit-text-stroke:1px_rgba(255,255,255,0.8)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.8)] text-right mix-blend-difference">
              Reality
            </h1>
         </motion.div>

         {/* Subtext - Bottom Left */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
            className="absolute bottom-[8%] left-[5%] md:bottom-[10%] md:left-[10%] max-w-[280px] md:max-w-[320px] pointer-events-auto"
         >
            <p className="font-mono text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-[#e5e2e1] leading-relaxed mix-blend-difference border-l border-white/50 pl-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              The intersection of fluid luxury and brutalist architectural precision. Engineered for absolute durability.
            </p>
         </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-[5%] md:left-[8%] z-20 flex gap-4 pointer-events-auto items-center mix-blend-difference h-6 items-center">
        {MEDIA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`magnetic-target h-[2px] transition-all duration-500 ease-out relative cursor-pointer ${
              currentIndex === idx ? 'w-12 bg-[#e5e2e1]' : 'w-6 bg-[#8f9194] hover:bg-[#c5c6ca]'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
             <span className="absolute -top-4 -bottom-4 -left-2 -right-2"></span>
          </button>
        ))}
      </div>
    </section>
  );
}
