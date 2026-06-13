import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Gift, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function CountdownSection() {
  const targetDate = new Date('2026-06-15T00:00:00-07:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isAfter: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isAfter: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isAfter: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const cards = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section id="countdown-banner" className="py-16 bg-[#F5EFEB]/40 border-y border-slate-200/40 relative overflow-hidden">
      {/* Absolute glow backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Header Message */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <span className="flex items-center gap-1 bg-[#92BDD3]/10 text-slate-800 text-[10px] tracking-widest font-mono font-semibold px-3.5 py-1 rounded-full uppercase border border-[#92BDD3]/20">
            {timeLeft.isAfter ? <ShieldCheck className="w-3" /> : <Clock className="w-3" />}
            <span>{timeLeft.isAfter ? 'Golden Jubilee Complete' : 'Timeline Countdown'}</span>
          </span>
          
          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 mt-2">
            {timeLeft.isAfter ? "Celebrating 50 Years of Grace" : "Celebrating Dr. Dhalia’s Golden Jubilee"}
          </h2>
          
          <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-lg mt-1">
            {timeLeft.isAfter 
              ? "Fifty years of unwavering faith, intellectual brilliance, healthcare leadership, and multiplying shepherding grace globally." 
              : "Marking fifty years of divine speed, healthcare development, family devotion, and loving guidance on June 15, 2026."}
          </p>
        </div>

        {/* Counter cards */}
        {!timeLeft.isAfter ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {cards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="luxury-glass rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:shadow-luxury-gold/5 transition-all duration-300 group border-2 border-luxury-gold/50 hover:border-luxury-gold hover:scale-103"
              >
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#92BDD3] tracking-tight mb-1 font-mono">
                  {String(card.value).padStart(2, '0')}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-slate-400 font-semibold uppercase group-hover:text-slate-600 transition-colors">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-6 rounded-3xl bg-white/60 backdrop-blur-md border-2 border-luxury-gold shadow-xl max-w-2xl mx-auto text-left"
          >
            <div className="p-4 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
              <Gift className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-bold text-slate-900 tracking-tight">The Celebration Continues</h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed mt-1">
                Dr. Dhalia Kujore Sanni crossed her golden milestone of 50 years with absolute grace. The digital garden, registry walls, and wisdom grids on this legacy platform remain active for friends, colleagues, and mentees globally.
              </p>
            </div>
          </motion.div>
        )}

        <div className="mt-8 flex justify-center gap-8 text-[11px] font-mono tracking-widest text-slate-400">
          <span className="flex items-center gap-1.5 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>GLOBAL COMMUNION STATUS: ONLINE</span>
          </span>
        </div>

      </div>
    </section>
  );
}
