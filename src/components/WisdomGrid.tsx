import React, { useState, useMemo } from 'react';
import { Sparkles, Compass, Shield, Award, Search, Key, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WISDOM_LESSONS } from '../data';

export default function WisdomGrid() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(12); // Speed up initial paint

  const tabs = ['All', 'Faith', 'Leadership', 'Healing', 'Mentorship', 'Purpose', 'Legacy'];

  const filteredLessons = useMemo(() => {
    return WISDOM_LESSONS.filter((lesson) => {
      const matchTab = activeTab === 'All' || lesson.category === activeTab;
      const matchSearch =
        lesson.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [activeTab, searchQuery]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(filteredLessons.length, prev + 12));
  };

  return (
    <section id="lesson-wisdom" className="py-24 bg-[#FAF9F6] border-y border-slate-200/50 relative overflow-hidden">
      {/* Absolute gold overlay */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-[#92BDD3]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-2">
          <span className="flex items-center gap-1 bg-[#92BDD3]/10 text-slate-800 text-[10px] tracking-widest font-mono font-semibold px-3.5 py-1 rounded-full uppercase border border-[#92BDD3]/20">
            <Compass className="w-3" />
            <span>EXECUTIVE WISDOM ARCHIVE</span>
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            50 Lessons from 50 Years
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed mt-1">
            Carefully curated insights examining personal development, spiritual surrender, clinical administration, and the sacred privilege of raising world-class successors.
          </p>
        </div>

        {/* Search & Category Filter toolbar (Stripe-level Cleanliness) */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 max-w-5xl mx-auto bg-white border-2 border-[#D4AF37] p-4 rounded-3xl shadow-md shadow-luxury-gold/5">
          
          {/* Tabs Selector */}
          <div className="flex flex-wrap gap-1.5 items-center justify-center md:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCount(12); // reset view count
                }}
                className={`px-4 py-2 rounded-xl text-xs font-sans tracking-wide font-medium transition-all ${
                  tab === activeTab
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search wisdom archive..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              className="w-full bg-[#FAF9F6] border border-slate-200/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3] focus:bg-white transition-all font-sans"
            />
          </div>

        </div>

        {/* Lessons masonry-style list layout */}
        {filteredLessons.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredLessons.slice(0, visibleCount).map((lesson, i) => (
                  <motion.div
                    key={`${lesson.number}-${lesson.category}`}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    whileHover={{ 
                      scale: 1.03, 
                      y: -5,
                      borderColor: '#D4AF37'
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 20,
                      layout: { duration: 0.3 },
                      opacity: { duration: 0.25 },
                      scale: { duration: 0.25 }
                    }}
                    className="group bg-white border-1.5 border-slate-200/80 hover:border-[#D4AF37] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_30px_rgba(212,175,55,0.18)] cursor-pointer relative overflow-hidden"
                  >
                    {/* Tiny glowing tag color background mapping */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#92BDD3]/5 to-transparent pointer-events-none" />

                    <div>
                      {/* Top Bar descriptor */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] font-extrabold tracking-widest text-[#92BDD3] bg-[#92BDD3]/10 px-2.5 py-0.5 rounded-full select-none uppercase">
                          {lesson.category}
                        </span>
                        
                        <span className="font-mono text-xs font-semibold text-slate-350 select-none opacity-45 group-hover:opacity-100 transition-opacity">
                          #{String(lesson.number).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Lesson main text */}
                      <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed text-left font-normal group-hover:text-slate-900 transition-colors">
                        "{lesson.text}"
                      </p>
                    </div>

                    <div className="w-full h-[1.5px] bg-[#FAF9F6] my-4" />

                    {/* Footer decoration */}
                    <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                      <Key className="w-3" />
                      <span>LEGACY PATHWAY {lesson.number}</span>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Button */}
            {visibleCount < filteredLessons.length && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-slate-200 hover:border-slate-800 bg-[#FAF9F6] hover:bg-slate-900 text-slate-800 hover:text-white rounded-xl text-xs font-sans tracking-widest uppercase transition-all shadow-sm active:scale-98"
                >
                  <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>Reveal More Wisdom ({filteredLessons.length - visibleCount} remaining)</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white border border-slate-100 p-12 rounded-3xl max-w-xl mx-auto text-center">
            <span className="inline-flex p-4 rounded-full bg-slate-50 text-slate-400 mb-4">
              <RefreshCw className="w-6 h-6" />
            </span>
            <h3 className="font-sans text-base font-bold text-slate-700">No wisdom nuggets matched</h3>
            <p className="font-sans text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              We couldn't locate any lessons matching "{searchQuery}" or within {activeTab}. Please adjust your filters or keywords.
            </p>
            <button
              onClick={() => {
                setActiveTab('All');
                setSearchQuery('');
              }}
              className="mt-4 text-[#92BDD3] text-xs font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
