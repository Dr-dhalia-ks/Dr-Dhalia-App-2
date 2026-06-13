import React, { useState } from 'react';
import { Heart, Sparkles, MapPin, Feather, PlusCircle, CheckCircle, HeartHandshake, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Blessing } from '../types';

interface BlessingWallProps {
  blessings: Blessing[];
  onBlessingSubmitted: (newBlessing: Blessing) => void;
}

export default function BlessingWall({ blessings, onBlessingSubmitted }: BlessingWallProps) {
  // Navigation tabs within guestbook
  const [activeTab, setActiveTab] = useState<'blessings' | 'impact'>('blessings');
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    relation: 'friend',
    message: '',
    prayer: '',
    word: '',
    impact: '',
    roseColor: 'gold' as 'gold' | 'champagne' | 'ivory' | 'rose-gold'
  });

  const relationOptions = [
    { label: 'Family Member', value: 'family' },
    { label: 'Healthcare Colleague', value: 'colleague' },
    { label: 'Mentee', value: 'mentee' },
    { label: 'Lifelong Friend', value: 'friend' },
    { label: 'Well-wisher', value: 'other' }
  ];

  const roseColorOptions = [
    { value: 'gold', label: 'Muted Gold', bg: 'bg-[#D4AF37]' },
    { value: 'rose-gold', label: 'Soft Rose Gold', bg: 'bg-rose-300' },
    { value: 'champagne', label: 'Champagne Warm', bg: 'bg-amber-100' },
    { value: 'ivory', label: 'Pure Ivory', bg: 'bg-slate-200' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectRoseColor = (color: 'gold' | 'champagne' | 'ivory' | 'rose-gold') => {
    setFormData((prev) => ({ ...prev, roseColor: color }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.country.trim() || !formData.message.trim() || !formData.word.trim()) {
      alert('Please fill in all required fields (Name, Country, Blessing Message, and Legacy Word)');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/blessings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();
      if (resData.success && resData.blessing) {
        onBlessingSubmitted(resData.blessing);
        setFormSuccess(true);
        // Reset form
        setFormData({
          name: '',
          country: '',
          relation: 'friend',
          message: '',
          prayer: '',
          word: '',
          impact: '',
          roseColor: 'gold'
        });
      } else {
        alert(resData.error || 'Failed to submit blessing.');
      }
    } catch (error) {
      console.error('Error submitting blessing:', error);
      alert('Network error while saving blessing. Operating in transient mock mode.');
      
      // Fallback for visual safety
      const fallbackBlessing: Blessing = {
        id: 'fallback-' + Date.now(),
        name: formData.name,
        country: formData.country,
        message: formData.message,
        prayer: formData.prayer || undefined,
        relation: formData.relation,
        word: formData.word,
        impact: formData.impact || undefined,
        roseColor: formData.roseColor,
        createdAt: Date.now()
      };
      onBlessingSubmitted(fallbackBlessing);
      setFormSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="blessings-wall-section" className="py-24 bg-[#F5EFEB]/30 border-t border-slate-200/50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#92BDD3]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-2">
          <span className="flex items-center gap-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] tracking-widest font-mono font-semibold px-3.5 py-1 rounded-full uppercase border border-[#D4AF37]/20">
            <Feather className="w-3" />
            <span>COMMUNION REGISTRY</span>
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Leave a Blessing for Dr. Dhalia
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed mt-1">
            Plant a rose in her living garden, submit your life narrative of impact, and join friends and executives from and outside Nigeria celebrating her golden journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form Submitter (Lg: col-span-5) */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-[#D4AF37] rounded-[32px] p-6 md:p-8 shadow-lg relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#92BDD3]/5 rounded-full blur-xl" />
              
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <span className="p-2.5 rounded-xl bg-[#92BDD3]/10 text-[#92BDD3]">
                  <Heart className="w-5 h-5 fill-current" />
                </span>
                <div>
                  <h3 className="font-sans text-base font-bold text-slate-800">Sacred Registry Form</h3>
                  <span className="font-mono text-[9px] text-[#92BDD3] tracking-wider uppercase font-semibold">WRITE AND PLANT INSTANTLY</span>
                </div>
              </div>

              {formSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center"
                >
                  <span className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-500 mb-4 border border-emerald-100">
                    <CheckCircle className="w-8 h-8" />
                  </span>
                  <h4 className="font-sans text-lg font-bold text-slate-800">Blessing Sown Successfully</h4>
                  <p className="font-sans text-xs text-slate-550 leading-relaxed max-w-sm mt-1.5 mb-6">
                    Your prayer has been inscribed in the legacy books, your word cloud tag updated, your location plotted on the global map, and your rose successfully planted!
                  </p>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="px-6 py-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 font-sans text-xs font-semibold tracking-wide transition-all"
                  >
                    Plant Another Blessing
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name and Country Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase font-semibold mb-1">Your Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Dr. Jude Sanni"
                        className="w-full bg-[#FAF9F6] border border-slate-250/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase font-semibold mb-1">Country of Location *</label>
                      <input
                        required
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="e.g. Nigeria, United Kingdom"
                        className="w-full bg-[#FAF9F6] border border-slate-250/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3]"
                      />
                    </div>
                  </div>

                  {/* Relationship Select */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase font-semibold mb-1">Relationship to Dr. Dhalia</label>
                    <select
                      name="relation"
                      value={formData.relation}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF9F6] border border-slate-250/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3]"
                    >
                      {relationOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Rose Color selector */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase font-semibold mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 text-[#D4AF37]" />
                      <span>Choose Your Rose Petal Shade (Planted in Garden)</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {roseColorOptions.map((opt) => {
                        const isChosen = opt.value === formData.roseColor;
                        return (
                          <button
                            type="button"
                            key={opt.value}
                            onClick={() => selectRoseColor(opt.value as any)}
                            className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                              isChosen
                                ? 'bg-[#FAF9F6] border-slate-900 shadow-xs'
                                : 'bg-white border-slate-205/60 hover:bg-[#FAF9F6]'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full ${opt.bg} block border border-black/10`} />
                            <span className="font-mono text-[8px] tracking-tight uppercase leading-none">{opt.label.split(' ')[0]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Legacy word submission */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase font-semibold mb-1 flex items-center justify-between">
                      <span>One Word for Dr. Dhalia *</span>
                      <span className="text-[8px] text-slate-400">FEEDS WORD CLOUD</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="word"
                      value={formData.word}
                      onChange={handleInputChange}
                      placeholder="e.g. Grace, Shepherd, Mentor"
                      className="w-full bg-[#FAF9F6] border border-slate-250/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3]"
                    />
                  </div>

                  {/* Impact Completions */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase font-semibold mb-1 flex items-center justify-between">
                      <span>Impact Completion Phrase</span>
                      <span className="text-[8px] text-[#92BDD3]">Completion Indicator</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-xs font-sans text-slate-400 select-none font-medium italic">
                        "Dr. Dhalia taught me... "
                      </span>
                      <input
                        type="text"
                        name="impact"
                        value={formData.impact}
                        onChange={handleInputChange}
                        placeholder="to trust God's timing and work with excellence."
                        className="w-full bg-[#FAF9F6] border border-slate-250/60 rounded-xl pl-[145px] pr-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase font-semibold mb-1">Birthday Message / Tribute *</label>
                    <textarea
                      required
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your heart, your memoirs, or a story of celebrating her..."
                      className="w-full bg-[#FAF9F6] border border-slate-250/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3]"
                    />
                  </div>

                  {/* Prayer Input */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase font-semibold mb-1">Inscribe a Special Prayer (Optional)</label>
                    <textarea
                      rows={2}
                      name="prayer"
                      value={formData.prayer}
                      onChange={handleInputChange}
                      placeholder="Inscribe a scripture or an elegant blessing prayer for her next fifty years..."
                      className="w-full bg-[#FAF9F6] border border-slate-250/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#92BDD3]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-slate-900 border border-slate-950 text-white font-sans text-xs tracking-widest uppercase hover:bg-slate-800 disabled:opacity-50 transition-all shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Inscibing in Registry...' : 'Plant and Submit Blessing'}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>

                </form>
              )}
            </div>
          </div>

          {/* Right Column: Display list / Masonry Board (Lg: col-span-7) */}
          <div className="lg:col-span-7">
            
            {/* Display list Toggle Buttons (Stripe level) */}
            <div className="flex gap-1.5 justify-center md:justify-start mb-8 bg-white/60 p-2 border border-slate-200/60 rounded-2xl w-fit">
              <button
                onClick={() => setActiveTab('blessings')}
                className={`px-5 py-2.5 rounded-xl text-xs font-sans tracking-wide font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'blessings'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <HeartHandshake className="w-3.5" />
                <span>Blessings Guestbook ({blessings.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('impact')}
                className={`px-5 py-2.5 rounded-xl text-xs font-sans tracking-wide font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'impact'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Award className="w-3.5" />
                <span>How She Impacted My Life ({blessings.filter(b => b.impact).length})</span>
              </button>
            </div>

            {/* Display Panels */}
            <div className="max-h-[620px] overflow-y-auto pr-2 space-y-4 text-left">
              <AnimatePresence mode="wait">
                {activeTab === 'blessings' ? (
                  <motion.div
                    key="blessings-board"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {blessings.map((blessing) => (
                      <div
                        key={blessing.id}
                        className="bg-white border-2 border-luxury-gold/25 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-luxury-gold/75 transition-all duration-300 relative overflow-hidden text-left"
                      >
                        {/* Custom visual rose petal flag */}
                        <div className="absolute top-5 right-5 flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${
                            blessing.roseColor === 'gold' ? 'bg-[#D4AF37]' :
                            blessing.roseColor === 'rose-gold' ? 'bg-rose-300' :
                            blessing.roseColor === 'champagne' ? 'bg-amber-100' : 'bg-slate-200'
                          } border border-slate-350 shadow-inner`} />
                          <span className="font-mono text-[8px] tracking-wider text-slate-400 uppercase font-semibold">
                            Rose Seed Sown
                          </span>
                        </div>

                        {/* Card Header details */}
                        <div className="flex flex-col mb-4">
                          <span className="font-sans text-sm font-bold text-slate-850">
                            {blessing.name}
                          </span>
                          
                          <div className="flex items-center gap-3 mt-1 text-[10px] font-mono tracking-wide text-slate-400 capitalize">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 text-[#92BDD3]" />
                              <span>{blessing.country}</span>
                            </span>
                            
                            <span>•</span>
                            
                            <span>Relation: {blessing.relation}</span>
                          </div>
                        </div>

                        {/* Tribute body */}
                        <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                          "{blessing.message}"
                        </p>

                        {/* Optional scripture prayer in ivory/gold quote block */}
                        {blessing.prayer && (
                          <div className="border-l-2 border-[#D4AF37]/35 bg-amber-50/15 p-3 rounded-r-lg">
                            <span className="block font-mono text-[8px] tracking-widest text-[#D4AF37] uppercase font-bold mb-1">Inscribed Prayer</span>
                            <p className="font-sans text-[11px] sm:text-xs text-slate-500 italic leading-relaxed">
                              "{blessing.prayer}"
                            </p>
                          </div>
                        )}

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400 tracking-wide">
                          <span>REGISTRY ID: {blessing.id.toUpperCase()}</span>
                          <span>{new Date(blessing.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="impact-board"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {blessings.filter(b => b.impact).map((blessing) => (
                      <div
                        key={`impact-${blessing.id}`}
                        className="bg-white border-2 border-luxury-gold/30 hover:border-luxury-gold/80 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-radial-gradient from-[#92BDD3]/5 to-transparent pointer-events-none" />

                        <div className="flex items-start gap-3 text-left">
                          <span className="p-2 rounded-xl bg-[#92BDD3]/10 text-[#92BDD3] shrink-0 mt-0.5">
                            <Award className="w-4 h-4" />
                          </span>
                          <div>
                            <span className="font-mono text-[9px] tracking-widest text-[#92BDD3] uppercase font-bold block mb-1">
                              DR. DHALIA TAUGHT ME:
                            </span>
                            <blockquote className="font-sans text-xs sm:text-sm text-slate-800 font-medium italic leading-relaxed">
                              "... {blessing.impact?.trim()}"
                            </blockquote>
                            
                            <div className="mt-4 flex items-center gap-2">
                              <div className="text-left leading-none">
                                <span className="block font-sans text-[11px] font-bold text-slate-600">{blessing.name}</span>
                                <span className="block font-mono text-[8px] text-slate-400 uppercase mt-0.5">{blessing.country}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
