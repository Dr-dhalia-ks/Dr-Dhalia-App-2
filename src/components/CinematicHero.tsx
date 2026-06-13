import React from 'react';
import { ArrowDown, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CinematicHeroProps {
  onExploreClick: () => void;
  onBlessingClick: () => void;
}

export default function CinematicHero({ onExploreClick, onBlessingClick }: CinematicHeroProps) {
  // Use the generated beautiful portrait
  const portraitUrl = '/src/assets/images/dr_dhalia_portrait_1781334690010.jpg';

  return (
    <section className="relative min-h-screen bg-[#FAF9F6] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle gold lighting / delicate gradient glow overlays */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#92BDD3]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Symbolic "50" blended into background */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <span className="font-sans text-[26vw] md:text-[22vw] font-extrabold text-[#1C1C1C]/[0.025] tracking-tighter leading-none">
          50
        </span>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Sophisticated Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/[0.04] border border-slate-950/[0.05]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#92BDD3] animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-[#92BDD3] uppercase font-semibold">
              Celebrating Dr. Dhalia's Golden Jubilee
            </span>
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              50 Years of <span className="text-[#92BDD3] font-light italic">Grace</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-500 font-normal tracking-wide max-w-xl leading-relaxed"
            >
              A Life of Faith, Purpose, Healing and Legacy. Exploring fifty years of divine orchestration, clinical perfection, global healthcare advisory, and spiritual mentorship.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onExploreClick}
              className="px-8 py-4 rounded-xl bg-slate-900 text-white font-sans text-xs tracking-widest uppercase hover:bg-slate-800 transition-all hover:shadow-xl active:scale-98 flex items-center justify-center gap-2 group border border-slate-950"
            >
              <span>Explore the Journey</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onBlessingClick}
              className="px-8 py-4 rounded-xl border border-slate-200 bg-[#FAF9F6] text-slate-800 font-sans text-xs tracking-widest uppercase hover:bg-slate-50 transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <span>Leave a Blessing</span>
              <Heart className="w-3.5 h-3.5 text-[#92BDD3]" />
            </button>
          </motion.div>

          {/* Mini Stats Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-slate-200/60 w-full grid grid-cols-3 gap-6 text-left max-w-lg"
          >
            <div>
              <span className="block font-mono text-xs tracking-widest text-slate-400 uppercase">Jubilee Month</span>
              <span className="block font-sans text-sm font-semibold text-slate-800">June 2026</span>
            </div>
            <div>
              <span className="block font-mono text-xs tracking-widest text-slate-400 uppercase">Calling</span>
              <span className="block font-sans text-sm font-semibold text-slate-800">Healthcare & Faith</span>
            </div>
            <div>
              <span className="block font-mono text-xs tracking-widest text-slate-400 uppercase">Influence</span>
              <span className="block font-sans text-sm font-semibold text-slate-800">Global Reach</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Luxury Editorial Portrait frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative w-full max-w-sm"
          >
            {/* Elegant double borders decorated in pure golden color for her 50th golden jubilee */}
            <div className="absolute -inset-2.5 border-2 border-luxury-gold/80 rounded-3xl pointer-events-none z-0 shadow-[0_0_25px_rgba(212,175,55,0.25)] animate-pulse" />
            <div className="absolute -inset-5 border border-luxury-gold/40 rounded-[32px] pointer-events-none z-0" />
            
            {/* Soft decorative accent dot */}
            <div className="absolute top-6 left-6 font-mono text-[9px] tracking-widest uppercase text-white/55 z-20 select-none bg-slate-900/40 backdrop-blur-sm px-2 py-0.5 rounded border border-white/5">
              DR. DHALIA-KS
            </div>

            {/* Glowing gold dot */}
            <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse z-20 border-2 border-white" />

            {/* Main Picture Frame in pure gold border */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-2xl z-10 border-3 border-luxury-gold group">
              <img
                src={portraitUrl}
                alt="Dr. Dhalia Kujore Sanni"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-102"
              />
            </div>

            {/* Scripture snippet watermark at the footer */}
            <div className="absolute -bottom-8 left-0 right-0 text-center select-none opacity-40">
              <span className="font-sans text-[10px] tracking-wide text-slate-500 italic block">
                “With long life will I satisfy her and show her my salvation.”
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
