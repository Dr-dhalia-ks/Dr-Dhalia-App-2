import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Award, Film, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function VideoTribute() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(15); // mock initial starting point
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  const keyNarrations = [
    { time: '0:00', title: 'The Divine Call', desc: 'Accepting the mantle to heal, teach, and counsel.' },
    { time: '1:15', title: 'Clinical Precision', desc: 'Pioneering compassionate healthcare policies and leading hospital boards.' },
    { time: '2:30', title: 'Generational Seedlings', desc: 'Sowing wisdom and professional mentoring across global healthcare frontiers.' },
    { time: '3:45', title: 'The Golden Jubilee', desc: 'Crossing 50 years with undisturbed gratitude and spiritual focus.' }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0; // reset
          }
          const next = prev + 1;
          const frame = Math.min(3, Math.floor((next / 100) * 4));
          setActiveFrameIndex(frame);
          return next;
        });
      }, 800); // speed scalar
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="video-tribute" className="py-24 bg-[#FAF9F6] border-t border-slate-200/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[300px] bg-[#92BDD3]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-2">
          <span className="flex items-center gap-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] tracking-widest font-mono font-semibold px-3.5 py-1 rounded-full uppercase border border-[#D4AF37]/20">
            <Film className="w-3" />
            <span>DOCUMENTARY OVERVIEW</span>
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            A Life of Grace
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed mt-1">
            Explore the cinematic documentary chronicling Dr. Dhalia’s milestone journey. Toggle the interactive player below to trace historical snapshots and wisdom segments.
          </p>
        </div>

        {/* Cinematic Player Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Main Visual Screen in pure golden movie frame */}
          <div className="lg:col-span-8 bg-slate-950 rounded-[32px] overflow-hidden border-3 border-luxury-gold shadow-[0_0_35px_rgba(212,175,55,0.18)] relative aspect-video flex flex-col justify-between p-6">
            
            {/* Visual Ambient documentary filmstrip simulation */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden bg-slate-950">
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950 hover:opacity-90 transition-opacity z-10" />
              
              {/* Abstract gorgeous documentary reel scenery */}
              <motion.div
                animate={{
                  scale: isPlaying ? [1.02, 1.08, 1.02] : 1.02,
                  rotate: isPlaying ? [0, 0.5, 0] : 0,
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full relative"
              >
                {/* Slow moving soft golden circles simulating floating film bokeh lights */}
                <div className="absolute top-[20%] left-[30%] w-36 h-36 rounded-full bg-[#D4AF37]/20 blur-2xl animate-pulse" />
                <div className="absolute bottom-[25%] right-[25%] w-48 h-48 rounded-full bg-[#92BDD3]/15 blur-3xl" />
                
                {/* Film grain layer overlay */}
                <div className="absolute inset-0 bg-repeat bg-center opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80')" }} />

                {/* Subtitles Overlay */}
                <div className="absolute inset-x-8 bottom-16 z-20 text-center flex flex-col gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeFrameIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="font-sans text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide block uppercase"
                    >
                      {keyNarrations[activeFrameIndex].title}
                    </motion.span>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`desc-${activeFrameIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      exit={{ opacity: 0 }}
                      className="font-sans text-[10px] sm:text-xs text-[#FAF9F6] italic block leading-relaxed max-w-lg mx-auto"
                    >
                      {keyNarrations[activeFrameIndex].desc}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Top Bar Readout */}
            <div className="relative z-20 flex items-center justify-between text-white font-mono text-[10px] tracking-widest uppercase">
              <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-slate-400'}`} />
                <span>{isPlaying ? 'PLAYING DOCUMENTARY' : 'PAUSED'}</span>
              </span>

              <span className="bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                TC: 0{Math.floor((progress/100)*4)}:{(Math.floor((progress/100)*60*4)%60).toString().padStart(2, '0')}
              </span>
            </div>

            {/* Play trigger Overlay when paused */}
            {!isPlaying && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/15 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center z-30 shadow-2xl"
              >
                <PlayCircle className="w-10 h-10 text-[#FAF9F6]" fill="currentColor" fillOpacity={0.1} />
              </motion.button>
            )}

            {/* Custom Skinned Transport Bar Controls (Bottom) */}
            <div className="relative z-20 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex flex-col gap-3 mt-auto">
              
              {/* Scrubbing timeline */}
              <div className="relative w-full h-[3px] bg-slate-800 rounded-full cursor-pointer overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#92BDD3]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Master Controls Button rails */}
              <div className="flex items-center justify-between text-slate-350">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 text-[#FAF9F6] hover:text-[#92BDD3] transition-colors focus:outline-none"
                  >
                    {isPlaying ? <Pause className="w-4.5 h-4.5" /> : <Play className="w-4.5 h-4.5" />}
                  </button>

                  <button
                    onClick={() => setProgress(0)}
                    className="p-1 hover:text-[#92BDD3] transition-colors focus:outline-none"
                    title="Rewind"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <div className="h-4 w-[1px] bg-white/10" />

                  <span className="font-mono text-[9px] tracking-wider text-slate-400 select-none">
                    LEICA CINEMATOGRAPHY MOCKS
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 hover:text-[#92BDD3] transition-colors focus:outline-none flex items-center gap-1.5"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    <span className="font-mono text-[9px] text-slate-400">{isMuted ? 'MUTE' : 'STEREO'}</span>
                  </button>

                  <button
                    onClick={() => alert('Cinematic Fullscreen is accessible in the ultimate platform release.')}
                    className="p-1 hover:text-[#92BDD3] transition-colors focus:outline-none"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Chapters and descriptive markers with pure gold border */}
          <div className="lg:col-span-4 bg-white border-2 border-luxury-gold/50 hover:border-luxury-gold p-6 rounded-[32px] shadow-md transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <span className="font-mono text-[9px] tracking-widest text-[#92BDD3] uppercase font-bold block mb-1">PROGRAM SNIPPETS</span>
              <h3 className="font-sans text-lg font-bold text-slate-800 tracking-tight">Timeline Chapters</h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed mt-1 mb-6">
                Trace the individual key narratives within the documentary using the chronological quick links below:
              </p>

              <div className="flex flex-col gap-3">
                {keyNarrations.map((chapter, i) => {
                  const isActive = activeFrameIndex === i;
                  return (
                    <button
                      key={chapter.time}
                      onClick={() => {
                        setProgress(i * 25 + 5);
                        setActiveFrameIndex(i);
                        setIsPlaying(true);
                      }}
                      className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                        isActive
                          ? 'bg-slate-900 border-slate-950 text-white'
                          : 'bg-[#FAF9F6] border-slate-200/50 hover:bg-[#FAF9F6]/80 text-slate-700'
                      }`}
                    >
                      <span className={`font-mono text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded ${
                        isActive ? 'bg-[#92BDD3]/20 text-[#92BDD3]' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {chapter.time}
                      </span>
                      <div className="flex-1">
                        <span className="block font-sans text-xs font-semibold">{chapter.title}</span>
                        <p className={`font-sans text-[10px] leading-relaxed mt-0.5 ${isActive ? 'text-slate-350' : 'text-slate-400'}`}>
                          {chapter.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400">
              <span>CINEMATIC AUDIO ACTIVE</span>
              <span className="flex items-center gap-1 text-[#92BDD3] font-semibold">
                <Award className="w-3" />
                <span>GOLD SEAL</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
