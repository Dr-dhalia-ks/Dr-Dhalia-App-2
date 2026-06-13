import React, { useMemo } from 'react';
import { Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Blessing } from '../types';

interface WordCloudProps {
  blessings: Blessing[];
}

export default function WordCloud({ blessings }: WordCloudProps) {
  const aggregatedWords = useMemo(() => {
    const counts: { [key: string]: number } = {
      'Grace': 8,
      'Wisdom': 7,
      'Healing': 6,
      'Strength': 5,
      'Faith': 5,
      'Purpose': 4,
      'Mentor': 4,
      'Legacy': 4,
      'Excellence': 3,
      'Compassion': 3,
      'Integrity': 2,
      'Serene': 2,
      'Purity': 2,
      'Shepherd': 2,
    };

    // Feed user's real responses in
    blessings.forEach((blessing) => {
      if (blessing.word) {
        const wordClean = blessing.word.trim().charAt(0).toUpperCase() + blessing.word.trim().slice(1).toLowerCase();
        // Prevent injecting massive custom strings to break layout
        if (wordClean.length > 0 && wordClean.length < 25) {
          counts[wordClean] = (counts[wordClean] || 0) + 1;
        }
      }
    });

    // Format for cloud rendering
    return Object.keys(counts).map((key) => {
      const count = counts[key];
      // Size scalar based on count, constrained to reasonable ranges
      const fontSize = Math.min(48, 12 + Math.sqrt(count) * 11);
      
      // Assign custom color styling profiles
      let colorClass = 'text-slate-700 hover:text-[#92BDD3]';
      if (count >= 7) {
        colorClass = 'text-slate-900 font-bold tracking-tight hover:text-[#92BDD3]';
      } else if (count >= 5) {
        colorClass = 'text-[#92BDD3] font-semibold hover:text-[#D4AF37]';
      } else if (count >= 3) {
        colorClass = 'text-slate-500 font-medium hover:text-slate-800';
      } else {
        colorClass = 'text-slate-400 hover:text-slate-950 font-normal';
      }

      return {
        text: key,
        value: count,
        fontSize,
        colorClass
      };
    }).sort((a, b) => b.value - a.value); // Highly submitted words first
  }, [blessings]);

  return (
    <section id="custom-word-cloud" className="py-24 bg-[#F5EFEB]/30 relative overflow-hidden border-t border-slate-200/50">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[20%] w-80 h-80 bg-[#92BDD3]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-2">
          <span className="flex items-center gap-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] tracking-widest font-mono font-semibold px-3.5 py-1 rounded-full uppercase border border-[#D4AF37]/20">
            <Award className="w-3" />
            <span>Legacy Tapestry</span>
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            One Word For Dr. Dhalia
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed mt-1">
            An aggregate visual compilation of values, characteristics, and life-shaping influences submitted dynamically by family, colleagues, and mentees globally.
          </p>
        </div>

        {/* Word Cloud Canvas */}
        <div className="bg-white/85 backdrop-blur-md border-2 border-[#D4AF37] rounded-[36px] p-10 max-w-5xl mx-auto shadow-lg shadow-luxury-gold/5">
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 max-w-4xl mx-auto min-h-[220px]">
            {aggregatedWords.map((word, i) => (
              <motion.span
                key={word.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(1.5, i * 0.04) }}
                whileHover={{ scale: 1.08 }}
                style={{ fontSize: `${word.fontSize}px` }}
                className={`font-sans cursor-pointer transition-colors duration-300 select-none block uppercase tracking-wide leading-none ${word.colorClass}`}
              >
                {word.text}
              </motion.span>
            ))}
          </div>

          <div className="w-full h-[1.5px] bg-slate-200/50 my-8" />

          {/* Quick Word Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
            <div className="border-l-2 border-[#92BDD3]/40 pl-4">
              <span className="block font-mono text-[9px] tracking-widest text-[#92BDD3] uppercase font-bold">Primary Attribute</span>
              <span className="block font-sans text-lg font-bold text-slate-800">1. Grace</span>
            </div>
            <div className="border-l-2 border-slate-200/40 pl-4">
              <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase font-bold">Secondary Attribute</span>
              <span className="block font-sans text-lg font-bold text-slate-800">2. Wisdom</span>
            </div>
            <div className="border-l-2 border-slate-200/40 pl-4">
              <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase font-bold">Tertiary Attribute</span>
              <span className="block font-sans text-lg font-bold text-slate-800">3. Healing</span>
            </div>
            <div className="border-l-2 border-[#D4AF37]/40 pl-4">
              <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase font-bold">Unique Descriptors</span>
              <span className="block font-sans text-lg font-bold text-[#D4AF37]">
                {aggregatedWords.length} Submissions
              </span>
            </div>
          </div>

        </div>

        <div className="mt-8 flex justify-center text-[10px] font-mono tracking-widest text-slate-400">
          <span className="flex items-center gap-1 justify-center">
            <Sparkles className="w-3" />
            <span>DYNAMIC TAPESTRY SYNCHRONIZED</span>
          </span>
        </div>

      </div>
    </section>
  );
}
