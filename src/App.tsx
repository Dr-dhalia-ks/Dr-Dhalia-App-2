import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, Award, Heart, RefreshCw, Compass, Instagram, Facebook } from 'lucide-react';

import Navigation from './components/Navigation';
import CinematicHero from './components/CinematicHero';
import CountdownSection from './components/CountdownSection';
import RoseGarden from './components/RoseGarden';
import GlobalMap from './components/GlobalMap';
import WordCloud from './components/WordCloud';
import Timeline from './components/Timeline';
import WisdomGrid from './components/WisdomGrid';
import VideoTribute from './components/VideoTribute';
import BlessingWall from './components/BlessingWall';

import { Blessing } from './types';
import { INITIAL_BLESSINGS } from './data';

export default function App() {
  const [blessings, setBlessings] = useState<Blessing[]>(INITIAL_BLESSINGS);
  const [loading, setLoading] = useState(true);
  const [resetting, setResetting] = useState(false);

  // Sync data from Express database
  useEffect(() => {
    async function loadBlessings() {
      try {
        const res = await fetch('/api/blessings');
        const json = await res.json();
        if (json.success && json.blessings) {
          setBlessings(json.blessings);
        }
      } catch (err) {
        console.warn('Failed to load live blessings from full-stack server. Operating on local memory backup.', err);
      } finally {
        setLoading(false);
      }
    }
    loadBlessings();
  }, []);

  const handleBlessingSubmitted = (newBlessing: Blessing) => {
    // Insert new blessings on top
    setBlessings((prev) => [newBlessing, ...prev]);
  };

  const handleResetData = async () => {
    if (!window.confirm('Do you want to re-seed the registry back to original pre-filled tributes, stories, and pins?')) {
      return;
    }
    setResetting(true);
    try {
      const res = await fetch('/api/reset', { method: 'POST' });
      const json = await res.json();
      if (json.success && json.blessings) {
        setBlessings(json.blessings);
      }
    } catch (err) {
      console.error('Reset failed:', err);
    } finally {
      setResetting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="w-8 h-8 text-[#92BDD3] animate-spin" />
          <div className="text-center">
            <h2 className="text-sm font-semibold tracking-wider text-slate-800 uppercase font-mono mb-1">Dr.Dhalia-KS Legacy</h2>
            <p className="text-xs text-slate-400">Loading digital archives & interactive rose garden...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col justify-between selection:bg-[#92BDD3] selection:text-white relative">
      
      {/* Golden accent bar at the absolute top of the viewport */}
      <div id="grace-milestone" className="h-1.5 w-full bg-gradient-to-r from-[#92BDD3] via-[#D4AF37] to-[#FAF9F6] relative z-50" />

      {/* Persistent unified header navigation */}
      <Navigation
        activeSection="grace-milestone"
        onExploreClick={() => scrollToSection('story-timeline-section')}
        onBlessingClick={() => scrollToSection('blessings-wall-section')}
      />

      {/* Main Content Layout sections */}
      <main className="flex-grow">
        
        {/* Cinematic Hero */}
        <CinematicHero
          onExploreClick={() => scrollToSection('story-timeline-section')}
          onBlessingClick={() => scrollToSection('blessings-wall-section')}
        />

        {/* Live Countdown section */}
        <CountdownSection />

        {/* Story God Has Been Writing Timeline */}
        <Timeline />

        {/* 50 Practical Lessons Grid */}
        <WisdomGrid />

        {/* Interactive Rose Garden */}
        <RoseGarden blessings={blessings} />

        {/* Global Celebration Map Indicator */}
        <GlobalMap blessings={blessings} />

        {/* Legacy Word cloud */}
        <WordCloud blessings={blessings} />

        {/* Tribute Cinematic Video stage */}
        <VideoTribute />

        {/* Guestbook Blessing wall + Impact stories submitting registry */}
        <BlessingWall
          blessings={blessings}
          onBlessingSubmitted={handleBlessingSubmitted}
        />

        {/* Absolute climax emotional final section */}
        <section className="py-28 bg-white border-t border-slate-200/50 relative overflow-hidden">
          {/* Faint symbolic "50" blended into the backdrop */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
            <span className="font-sans text-[30vw] md:text-[22vw] font-extrabold text-[#D4AF37]/[0.025] tracking-tighter leading-none">
              50
            </span>
          </div>
          
          {/* Glowing auroral accent overlays */}
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8">
            <span className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full">
              <Star className="w-5 h-5 fill-current" />
            </span>

            <div className="flex flex-col gap-3">
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight max-w-3xl">
                My Greatest Achievement <br />Is Not What I Have Done
              </h2>
              
              <p className="font-sans text-lg sm:text-xl text-[#92BDD3] font-light tracking-wide max-w-xl mx-auto mt-2 italic">
                It Is Who God Has Helped Me Become
              </p>
            </div>

            {/* Custom crafted cursive calligraphy SVG path representing her flowing signature */}
            <div className="w-full max-w-[280px] h-24 select-none opacity-85 hover:opacity-100 transition-opacity duration-500 py-2">
              <svg
                viewBox="0 0 300 100"
                className="w-full h-full text-[#D4AF37]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Custom scripted "Dr. Dhalia Kujore Sanni" path calligraphs */}
                {/* Letter 'D' */}
                <path d="M 40 25 C 20 25, 20 85, 45 85 C 65 85, 75 40, 50 40 C 40 40, 35 60, 48 70 C 58 70, 75 55, 80 50" strokeWidth="2.5" />
                {/* Letter 'r' */}
                <path d="M 80 50 C 85 45, 90 45, 95 50 C 92 50, 95 65, 100 65" />
                {/* Dot */}
                <circle cx="106" cy="65" r="1.5" fill="currentColor" stroke="none" />
                
                {/* Surname 'Dhalia' cursive string */}
                <path d="M 120 25 C 105 25, 110 75, 125 75 C 135 75, 140 45, 132 45 C 128 45, 130 65, 142 65 C 148 65, 155 50, 160 50 C 163 50, 165 65, 172 65 C 178 65, 185 52, 190 52 C 193 52, 195 65, 202 65 C 205 60, 210 50, 215 50 C 218 50, 220 65, 225 65" />
                
                {/* Initials and Swash flourishing curve line underneath */}
                <path d="M 30 80 Q 150 95, 270 70 M 240 68 Q 260 70, 280 65" strokeWidth="1.5" opacity="0.8" />
              </svg>
            </div>

            <div className="flex flex-col gap-0.5 select-none text-center">
              <span className="font-sans text-sm font-bold tracking-wider text-slate-800">Dr. Dhalia Kujore Sanni</span>
              <span className="font-mono text-[9px] text-[#92BDD3] tracking-widest uppercase">HONOREE AND FOUNDER</span>
            </div>

          </div>
        </section>

      </main>

      {/* Footer copyright */}
      <footer className="bg-slate-900 text-white font-sans text-xs tracking-wider border-t border-slate-950 py-12 relative overflow-hidden">
        {/* Abstract lights background */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#92BDD3]/5 rounded-full blur-xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left relative z-10">
          
          <div className="flex flex-col gap-1 justify-center md:justify-start">
            <span className="font-sans text-base font-bold tracking-wide">
              Dr.Dhalia<span className="text-[#92BDD3] font-light">-KS</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] font-semibold uppercase leading-none mb-1">
              June 15, 1976
            </span>
            <span className="font-sans text-[10px] text-slate-400">
              50 Years of Grace Legacy Platform © 2026. All rights secured.
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center gap-6 text-[10px] font-mono tracking-widest text-[#92BDD3]">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline uppercase">HOME</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('story-timeline-section'); }} className="hover:underline uppercase">THE JOURNEY</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('lesson-wisdom'); }} className="hover:underline uppercase">WISDOM ARCHIVE</a>
            </div>
            
            <div className="flex justify-center gap-4 items-center">
              <a
                href="https://www.instagram.com/drdhaliaks/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700/80 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] flex items-center justify-center text-slate-400 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://web.facebook.com/DrDhaliaKS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700/80 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] flex items-center justify-center text-slate-400 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@drhaliaks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700/80 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] flex items-center justify-center text-slate-400 transition-all duration-300 group"
                aria-label="TikTok"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.18 2.22 2.01 3.65 2.45v3.91c-1.21-.1-2.43-.51-3.48-1.15-.81-.49-1.52-1.16-2.06-1.94V14a5.2 5.2 0 0 1-.36 1.91c-.48 1.16-1.33 2.15-2.39 2.76A5.4 5.4 0 0 1 8.87 19c-1.38 0-2.71-.52-3.71-1.46-1.05-.98-1.66-2.35-1.74-3.78a5.52 5.52 0 0 1 1.05-3.86 5.42 5.42 0 0 1 3.49-2.22c.3-.06.6-.08.91-.08l.01 3.84c-1.07.03-2.11.75-2.48 1.76-.32.88-.1 1.86.52 2.5a3.11 3.11 0 0 0 2.21.91c1.19 0 2.22-.84 2.46-2.01.07-.35.09-.7.09-1.06V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Seed reset for reviews */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={handleResetData}
              disabled={resetting}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-700 hover:border-slate-400 bg-transparent text-[9px] font-mono tracking-widest uppercase text-slate-400 hover:text-white transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3 ${resetting ? 'animate-spin' : ''}`} />
              <span>{resetting ? 'RESETTING...' : 'RE-SEED REGISTRY DATA'}</span>
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}
