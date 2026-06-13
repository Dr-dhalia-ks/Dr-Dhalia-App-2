import React, { useState } from 'react';
import { Sparkles, Calendar, BookOpen, Quote, Shield, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LIFE_SEASONS } from '../data';

export default function Timeline() {
  const [selectedSeason, setSelectedSeason] = useState(LIFE_SEASONS[0]);

  return (
    <section id="story-timeline-section" className="py-24 bg-[#FAF9F6] border-t border-slate-200/50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#92BDD3]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-2">
          <span className="flex items-center gap-1.5 bg-[#92BDD3]/10 text-slate-800 text-[10px] tracking-widest font-mono font-semibold px-3.5 py-1 rounded-full uppercase border border-[#92BDD3]/20">
            <BookOpen className="w-3.5" />
            <span>BIOGRAPHIC NARRATIVE</span>
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            The Story God Has Been Writing
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed mt-1">
            Explore the sacred orchestration of fifty years: distinct callings, institutional governance hurdles overcome, and lessons crafted under divine choreography.
          </p>
        </div>

        {/* Master Selector & Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Navigation Rails (Lg: col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center relative">
            {/* Visual vertical running connecting line */}
            <div className="absolute left-[31px] top-6 bottom-6 w-[1.5px] bg-slate-200/50 hidden md:block" />

            {LIFE_SEASONS.map((season, i) => {
              const isActive = season.id === selectedSeason.id;
              return (
                <button
                  key={season.id}
                  onClick={() => setSelectedSeason(season)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all relative z-10 ${
                    isActive
                      ? 'bg-slate-900 border-slate-950 text-white shadow-lg shadow-slate-950/10'
                      : 'bg-white border-slate-200/80 text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {/* Step counter */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-semibold select-none border ${
                      isActive
                        ? 'bg-white/10 border-white/20 text-white'
                        : 'bg-slate-50 border-slate-200 text-[#92BDD3]'
                    }`}
                  >
                    0{i + 1}
                  </div>

                  <div className="flex-1">
                    <span
                      className={`block font-mono text-[9px] tracking-widest uppercase ${
                        isActive ? 'text-[#92BDD3]' : 'text-slate-400'
                      }`}
                    >
                      {season.period}
                    </span>
                    <span className="block font-sans text-xs sm:text-sm font-semibold tracking-wide">
                      {season.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Selected Display Frame (Lg: col-span-8) */}
          <div className="lg:col-span-8 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSeason.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white border-2 border-[#D4AF37] rounded-[32px] p-8 md:p-10 shadow-[0_15px_35px_rgba(212,175,55,0.08)] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Embedded dynamic backing glowing layer */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Category Banner */}
                  <div className="flex items-center justify-between border-b border-slate-250/60 pb-6 mb-6">
                    <div className="text-left">
                      <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">
                        {selectedSeason.period}
                      </span>
                      <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 mt-1">
                        {selectedSeason.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-400 mt-0.5 tracking-wide uppercase font-medium">
                        {selectedSeason.subtitle}
                      </p>
                    </div>

                    <span className="p-3.5 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                      <Quote className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Sacred Quote Callout block */}
                  <div className="relative p-5 border-l-3 border-[#D4AF37] bg-amber-50/20 mb-6 text-left">
                    <span className="font-sans text-xs sm:text-sm text-slate-600 font-medium italic block">
                      {selectedSeason.quote}
                    </span>
                  </div>

                  {/* Core Description Prose */}
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed text-left mb-6 font-normal">
                    {selectedSeason.description}
                  </p>

                  {/* Narrative grid columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {/* Achievements */}
                    <div className="p-5 border border-[#D4AF37]/25 rounded-2xl bg-[#FAF9F6]/40 hover:border-[#D4AF37]/50 transition-all">
                      <h4 className="font-mono text-[10px] tracking-widest text-slate-400 uppercase font-bold mb-3 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                        <Shield className="w-3.5 text-[#92BDD3]" />
                        <span>DIVINE SIGNPOSTS & IMPACT</span>
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {selectedSeason.achievements.map((ach, idx) => (
                           <li key={idx} className="font-sans text-[11px] sm:text-xs text-slate-600 leading-relaxed relative pl-4">
                            <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#92BDD3]" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lessons */}
                    <div className="p-5 border border-[#D4AF37]/45 rounded-2xl bg-[#FAF9F6]/40 hover:border-[#D4AF37]/90 transition-all">
                      <h4 className="font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold mb-3 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                        <Heart className="w-3.5 text-[#D4AF37]" />
                        <span>ACCUMULATED INSIGHT</span>
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {selectedSeason.lessons.map((les, idx) => (
                          <li key={idx} className="font-sans text-[11px] sm:text-xs text-slate-500 italic leading-relaxed relative pl-4">
                            <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                            {les}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer status indicator */}
                <div className="mt-8 pt-4 border-t border-slate-250/20 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400">
                  <span>CHAPTER COMPLETED IN HONOR</span>
                  <span className="flex items-center gap-1 text-[#D4AF37] font-bold">
                    <span>SEALED</span>
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
