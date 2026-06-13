import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Mail, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  onExploreClick: () => void;
  onBlessingClick: () => void;
  activeSection: string;
}

export default function Navigation({ onExploreClick, onBlessingClick, activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [previewTab, setPreviewTab] = useState<string | null>(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: '50 Years of Grace', id: 'grace-milestone', isMain: true },
    { label: 'About Dr. Dhalia', id: 'about', isFuture: true, description: 'Explore her detailed background in healthcare, global health governance, and faith-centered leadership.' },
    { label: 'Speaking', id: 'speaking', isFuture: true, description: 'Book Dr. Dhalia for international keynotes, board advisories, clinical mentorship, and women empowerment seminars.' },
    { label: 'Programs', id: 'programs', isFuture: true, description: 'Enrolling details for her executive mentorship programs, clinical administrative workshops, and prayer leadership guilds.' },
    { label: 'Resources', id: 'resources', isFuture: true, description: 'Compilations of ebooks, academic healthcare standards, family devotion blueprints, and practical leadership checklists.' },
    { label: 'Articles', id: 'articles', isFuture: true, description: 'Weekly thought-leadership columns examining the harmony between healthcare integrity, scientific rigor, and faith.' },
    { label: 'Contact', id: 'contact', isFuture: true, description: 'Get in touch for professional consults, foundation partnerships, or personalized prayer requests.' }
  ];

  const handleNavClick = (item: typeof menuItems[0]) => {
    setIsOpen(false);
    if (item.isFuture) {
      setPreviewTab(item.label);
      setEmailSubscribed(false);
      setEmailInput('');
    } else {
      onExploreClick();
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-slate-200/50 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex flex-col items-start group relative"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-sans text-xl font-extrabold tracking-wider text-slate-900 transition-colors group-hover:text-luxury-gold leading-none">
              Dr.Dhalia<span className="text-[#92BDD3] font-light">-KS</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] font-bold mt-1 uppercase">
              June 15, 1976
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                  item.isMain
                    ? 'text-[#92BDD3] font-semibold hover:text-[#92BDD3]/80'
                    : 'text-slate-600 hover:text-slate-950 font-medium'
                }`}
              >
                {item.label}
                {item.isMain && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#92BDD3] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBlessingClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border-2 border-[#D4AF37] text-white font-sans text-xs tracking-widest uppercase hover:bg-slate-850 active:scale-98 transition-all hover:shadow-lg hover:shadow-luxury-gold/25"
            >
              <span className="text-[#FAF9F6]">Leave Blessing</span>
              <Sparkles className="w-3 text-[#D4AF37] animate-pulse" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-950 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[#FAF9F6] border-t border-slate-200/60 p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] tracking-widest text-[#92BDD3]">NAVIGATION & LEGACY SERVICES</span>
              <nav className="flex flex-col gap-5">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="flex items-center justify-between py-2.5 border-b border-dashed border-slate-200/50 text-left font-sans text-sm tracking-wide text-slate-800 hover:text-[#92BDD3]"
                  >
                    <span className={item.isMain ? 'text-[#92BDD3] font-semibold' : ''}>
                      {item.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#92BDD3]/50" />
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onBlessingClick();
                }}
                className="w-full text-center py-4 bg-slate-900 text-white font-sans text-xs tracking-widest uppercase rounded-xl hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Write a Birthday Blessing</span>
                <Sparkles className="w-3" />
              </button>
              <div className="text-center">
                <span className="font-mono text-[9px] text-slate-400">DR. DHALIA-KS PLATFORM © 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elegant Portfolio Preview Modal for Future Sections */}
      <AnimatePresence>
        {previewTab && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewTab(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-xl p-8 rounded-3xl bg-[#FAF9F6] border border-slate-200/80 shadow-2xl z-10 overflow-hidden"
            >
              {/* Subtle visual ambient pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#92BDD3]/10 rounded-full blur-2xl" />

              <div className="relative">
                {/* Header Icon */}
                <span className="inline-flex p-3 rounded-2xl bg-[#92BDD3]/10 text-[#92BDD3] mb-6">
                  <Sparkles className="w-6 h-6" />
                </span>

                <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 mb-2">
                  {previewTab} SECTION
                </h3>
                <p className="font-mono text-[10px] tracking-wider text-[#92BDD3] uppercase mb-4">
                  Future Professional Platform Integration
                </p>

                <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                  {menuItems.find((i) => i.label === previewTab)?.description ||
                    'This section is being designed to serve as a high-impact cornerstone of Dr. Dhalia-KS’s global personal brand. Following the June 2026 Jubilee celebrations, the platform launches books, consult pathways, and executive advice profiles.'}
                </p>

                <div className="bg-[#FAF9F6] border border-slate-200 p-5 rounded-2xl mb-6">
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#92BDD3]" />
                    <span>Receive Platform Launch Alert</span>
                  </h4>
                  <p className="font-sans text-xs text-slate-500 mb-3.5">
                    Be the first to read Dr. Dhalia’s weekly publications and receive enrollment guidelines.
                  </p>

                  {emailSubscribed ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-center font-medium"
                    >
                      Thank you! Your invitation list entry has been secured.
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 active:scale-98 transition-all"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setPreviewTab(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-sans text-xs font-semibold transition-all"
                  >
                    Close Preview
                  </button>
                  <button
                    onClick={() => {
                      setPreviewTab(null);
                      const target = document.getElementById('lesson-wisdom');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-sans text-xs font-semibold transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Read Wisdom Grid</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
