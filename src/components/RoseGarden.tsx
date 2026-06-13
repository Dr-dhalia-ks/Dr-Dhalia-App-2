import React, { useMemo } from 'react';
import { Sparkles, Trophy, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Blessing } from '../types';

interface RoseGardenProps {
  blessings: Blessing[];
}

export default function RoseGarden({ blessings }: RoseGardenProps) {
  // Generate pseudo-random coordinates based on rose ID so they stay locked in place
  const rosesList = useMemo(() => {
    return blessings.map((blessing, i) => {
      // Create spiral/bento distribution so they don't overlay closely
      const seedVal = blessing.id.charCodeAt(0) + blessing.id.charCodeAt(blessing.id.length - 1 || 0) + i;
      const angle = (i * 137.5 * Math.PI) / 180; // golden angle distribution
      const radius = Math.min(240, 35 + Math.sqrt(i + 1) * 35); // concentric growth
      
      const cx = 250 + Math.cos(angle) * radius;
      const cy = 250 + Math.sin(angle) * radius;
      
      // Select corresponding luxury color mapping
      let colorClass = 'fill-[#D4AF37]'; // gold
      let glowColor = 'rgba(212,175,55,0.4)';
      let colorText = '#D4AF37';
      if (blessing.roseColor === 'rose-gold') {
        colorClass = 'fill-rose-300';
        glowColor = 'rgba(244,63,94,0.3)';
        colorText = '#FDA4AF';
      } else if (blessing.roseColor === 'champagne') {
        colorClass = 'fill-orange-200';
        glowColor = 'rgba(251,146,60,0.3)';
        colorText = '#FED7AA';
      } else if (blessing.roseColor === 'ivory') {
        colorClass = 'fill-slate-300';
        glowColor = 'rgba(148,163,184,0.3)';
        colorText = '#CBD5E1';
      }

      return {
        id: blessing.id,
        name: blessing.name,
        word: blessing.word || "Grace",
        x: cx,
        y: cy,
        colorClass,
        glowColor,
        colorText,
        color: blessing.roseColor,
        relation: blessing.relation
      };
    });
  }, [blessings]);

  return (
    <section id="digital-rose-garden" className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-slate-200/50">
      {/* Background gradients */}
      <div className="absolute top-[30%] right-[-10%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#92BDD3]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Information & Total Count */}
        <div className="lg:col-span-5 flex flex-col items-start text-left gap-6 lg:pr-6">
          <span className="flex items-center gap-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] tracking-widest font-mono font-semibold px-3.5 py-1 rounded-full uppercase border border-[#D4AF37]/20">
            <Sparkles className="w-3" />
            <span>Sacred Symbolism</span>
          </span>

          <div className="flex flex-col gap-2">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 leading-[1.25]">
              The Digital <br />
              <span className="text-[#92BDD3] italic font-light">Rose Garden</span>
            </h2>
            <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-md mt-2">
              In biblical symbology, flowers represent lives shaped by divine care. Every birthday blessing and prayer planted on this platform adds a permanent gold, rose, or champagne rose to Dr. Dhalia’s living legacy grid.
            </p>
          </div>

          {/* Luxury Rose Counter Metrics */}
          <div className="w-full bg-white border-2 border-[#D4AF37] p-6 rounded-3xl shadow-md shadow-luxury-gold/5 hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl" />
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Star className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="block font-mono text-[10px] tracking-widest text-[#92BDD3] uppercase font-bold">Total Blessings Planted</span>
                <span className="block font-sans text-3xl font-extrabold text-slate-800 tracking-tight mt-0.5">
                  {blessings.length} Roses
                </span>
              </div>
            </div>

            <div className="w-full h-[1.5px] bg-[#F5EFEB] my-4" />

            <div className="grid grid-cols-4 gap-2 text-center text-slate-500">
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mb-1 block" />
                <span className="font-mono text-[9px] tracking-wider uppercase block text-slate-400">Gold</span>
                <span className="font-sans text-[11px] font-bold text-slate-700">
                  {blessings.filter(b => b.roseColor === 'gold').length}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-200 mb-1 block" />
                <span className="font-mono text-[9px] tracking-wider uppercase block text-slate-400">Rose</span>
                <span className="font-sans text-[11px] font-bold text-slate-700">
                  {blessings.filter(b => b.roseColor === 'rose-gold').length}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-100 mb-1 block" />
                <span className="font-mono text-[9px] tracking-wider uppercase block text-slate-400">Champ</span>
                <span className="font-sans text-[11px] font-bold text-slate-700">
                  {blessings.filter(b => b.roseColor === 'champagne').length}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 mb-1 block" />
                <span className="font-mono text-[9px] tracking-wider uppercase block text-slate-400">Ivory</span>
                <span className="font-sans text-[11px] font-bold text-slate-700">
                  {blessings.filter(b => b.roseColor === 'ivory').length}
                </span>
              </div>
            </div>
          </div>

          <p className="font-mono text-[9px] tracking-wider text-slate-400 uppercase italic">
            *Hover or press any rose in the garden plot to read the tribute
          </p>
        </div>

        {/* Right column: Interactive SVG Plot */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full aspect-square max-w-[500px] border-3 border-[#D4AF37] bg-white/45 backdrop-blur-md rounded-full flex items-center justify-center p-6 shadow-xl shadow-luxury-gold/5">
            
            {/* Concentric orbital styling lines */}
            <div className="absolute inset-[15%] rounded-full border border-dashed border-slate-200/50 pointer-events-none" />
            <div className="absolute inset-[30%] rounded-full border border-slate-200/40 pointer-events-none" />
            <div className="absolute inset-[45%] rounded-full border border-slate-200/30 pointer-events-none" />
            <div className="absolute inset-[60%] rounded-full border border-slate-100/30 pointer-events-none" />

            {/* Core Golden Seal Anchor */}
            <div className="absolute w-14 h-14 rounded-full bg-slate-900 border-2 border-[#D4AF37] flex items-center justify-center pointer-events-none z-10 shadow-lg text-sm font-extrabold text-[#D4AF37] font-mono">
              50
            </div>

            {/* Live Interactive SVG Garden plot */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full relative z-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {rosesList.map((rose, i) => (
                <g key={rose.id} className="cursor-pointer group">
                  {/* Glowing Backdrop Circle */}
                  <circle
                    cx={rose.x}
                    cy={rose.y}
                    r="12"
                    fill="transparent"
                    className="transition-colors group-hover:fill-[#92BDD3]/10"
                  />
                  
                  {/* Subtle pulsing glow aura */}
                  <motion.circle
                    cx={rose.x}
                    cy={rose.y}
                    r="8"
                    fill={rose.colorText}
                    opacity="0.15"
                    animate={{ r: [6, 12, 6], opacity: [0.15, 0.35, 0.15] }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Micro Rose vector paths (petals assembly) */}
                  <g transform={`translate(${rose.x - 7}, ${rose.y - 7}) scale(0.6)`}>
                    {/* Leaf */}
                    <path
                      d="M24,19 C28,19 30,22 30,24 C30,26 28,27 24,27 C20,27 18,26 18,24 C18,22 20,19 24,19 Z"
                      fill="#8EAFA3"
                      opacity="0.6"
                      transform="rotate(45 24 24)"
                    />
                    {/* External Petals */}
                    <path
                      d="M12,12 C16,8 20,8 24,12 C28,8 32,8 36,12 C36,16 36,20 32,24 C28,28 20,28 16,24 C12,20 12,16 12,12 Z"
                      className={`${rose.colorClass} opacity-85`}
                    />
                    {/* Inner core petals */}
                    <circle cx="24" cy="18" r="6" fill="#FAF9F6" opacity="0.3" />
                    <circle cx="24" cy="18" r="4" className={rose.colorClass} />
                  </g>

                  {/* Hover tooltip structure */}
                  <foreignObject
                    x={rose.x > 250 ? rose.x - 140 : rose.x + 10}
                    y={rose.y - 45}
                    width="130"
                    height="85"
                    className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 overflow-visible"
                  >
                    <div className="bg-slate-900 border border-slate-800 text-white rounded-lg p-2.5 shadow-xl text-left flex flex-col gap-0.5 min-w-[120px]">
                      <span className="font-sans text-[10px] font-bold tracking-tight text-white line-clamp-1">
                        {rose.name}
                      </span>
                      <span className="font-mono text-[8px] text-[#92BDD3] tracking-widest uppercase mb-1">
                        Relation: {rose.relation}
                      </span>
                      <span className="font-sans text-[9px] text-[#F5EFEB] line-clamp-2 italic leading-relaxed">
                        "Tribute: {rose.word}"
                      </span>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
