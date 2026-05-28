'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function GallerySection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0e0e0e] overflow-hidden border-t border-[#45474a]">
      <div className="px-6 md:px-16 mb-12 md:mb-16 flex justify-between items-end">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#e5e2e1] uppercase tracking-tighter max-w-[70vw] md:max-w-none">
          Architectural Elements
        </h2>
        <div className="font-mono text-xs font-medium text-[#c8c6c5] uppercase items-center gap-4 tracking-widest hidden md:flex">
          <span>Drag to explore</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
      
      <div className="flex overflow-x-auto gap-4 md:gap-8 px-6 md:px-16 hide-scroll pb-16 snap-x snap-mandatory">
        {/* Gallery Item 1 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative min-w-[85vw] md:min-w-[50vw] h-[50vh] md:h-[60vh] snap-center group structural-layer p-1 flex-shrink-0"
        >
          <div className="w-full h-full overflow-hidden relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASoLmcbMoZLecGNYq_mUVB55MjxgRuDATOXE6VrLsUg_VFUiIug6_CbdP1w8KjLQeTpImDROebMcLADXPXsapyTfI8M8IyWAsAiYllEW0m00Y3VrNmsx7ocBpSDLLhyu7ljX9lQyA6cpxGo77GemDhMiCrEJrSBBK7ge8VA6rC2FF8hqAgAoneV5xC0NkK7qUllS_2aVQR198T_tq5yyWd7UjNxTGv_sdbHlOrjwXgKwfUsCah9EKTG4Wl2vvSIUf9KeF7X0MEI_8"
              alt="Precision milled brushed nickel shower head"
              fill
              sizes="(max-width: 768px) 85vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 liquid-layer opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
              <span className="font-mono text-[10px] md:text-xs font-medium text-[#e5e2e1] uppercase mb-2 block tracking-widest">Spec 01 / Flow Dynamics</span>
              <h3 className="font-sans text-sm md:text-lg text-[#e5e2e1]">Precision milled brushed nickel shower head with advanced water dispersion.</h3>
            </div>
          </div>
          <div className="absolute top-4 left-4 font-mono text-xs text-[#e5e2e1] mix-blend-difference">+</div>
          <div className="absolute bottom-4 right-4 font-mono text-xs text-[#e5e2e1] mix-blend-difference">+</div>
        </motion.div>

        {/* Gallery Item 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative min-w-[85vw] md:min-w-[50vw] h-[50vh] md:h-[60vh] snap-center group structural-layer p-1 flex-shrink-0 md:-mt-10"
        >
          <div className="w-full h-full overflow-hidden relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB661v7Dr_wLW4Yd8Da3iYgtaZZT94q5bgMQ5NDmFyMlzCCSObqJ-xR-GqIhednvBZHyYIZtpvNfS1y55sIzMTgOUgNoHgVQJ87jLJATZXuwXqK0phUm-jC3ZiB3Nukz5OdG4TN8KHi3v5fFf7TUf1ue8iL3WcllZ2axKCW3LHaUiAzvTql9yC9FelMxBMdU2s5rV-Kssvzv49WKVZSNcJjyr-UqiMqRRn1XJdePotAMaEuhBNWPN65usuqn5EL_DtaK1O-1pgwwGI"
              alt="Constructed from industrial slate and tempered structural glass"
              fill
              sizes="(max-width: 768px) 85vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 liquid-layer opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
              <span className="font-mono text-[10px] md:text-xs font-medium text-[#e5e2e1] uppercase mb-2 block tracking-widest">Spec 02 / Material Tension</span>
              <h3 className="font-sans text-sm md:text-lg text-[#e5e2e1]">Constructed from industrial slate and tempered structural glass.</h3>
            </div>
          </div>
          <div className="absolute top-4 right-4 font-mono text-xs text-[#e5e2e1] mix-blend-difference">+</div>
          <div className="absolute bottom-4 left-4 font-mono text-xs text-[#e5e2e1] mix-blend-difference">+</div>
        </motion.div>

        {/* Gallery Item 3 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative min-w-[85vw] md:min-w-[50vw] h-[50vh] md:h-[60vh] snap-center flex items-center justify-center flex-shrink-0 border border-[#45474a]/30"
        >
          <div className="text-center px-8">
            <h3 className="font-display text-4xl md:text-5xl font-semibold text-[#8f9194] mb-8 uppercase tracking-tighter">View Full Collection</h3>
            <button className="border border-[#45474a] px-8 py-4 font-mono text-xs font-medium text-[#e5e2e1] tracking-widest uppercase hover:bg-[#e5e2e1] hover:text-[#0A0A0A] transition-colors duration-300">
              Explore Catalog
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
