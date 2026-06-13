import React, { useMemo } from 'react';
import { Globe, MapPin as MapPinIcon, Users, MessageSquare } from 'lucide-react';
import { Blessing } from '../types';

interface GlobalMapProps {
  blessings: Blessing[];
}

interface CoordinateMapping {
  [key: string]: { x: number; y: number; lat: number; lng: number };
}

export default function GlobalMap({ blessings }: GlobalMapProps) {
  // Preset pixel coordinates on a custom 800x400 map container scale
  const countryCoordinates: CoordinateMapping = {
    'nigeria': { x: 420, y: 240, lat: 9.082, lng: 8.675 },
    'united kingdom': { x: 390, y: 140, lat: 55.378, lng: -3.436 },
    'united states': { x: 210, y: 165, lat: 37.09, lng: -95.712 },
    'canada': { x: 220, y: 120, lat: 56.13, lng: -106.346 },
    'south africa': { x: 440, y: 310, lat: -30.559, lng: 22.937 },
    'australia': { x: 690, y: 315, lat: -25.274, lng: 133.775 },
    'france': { x: 395, y: 155, lat: 46.227, lng: 2.213 },
    'germany': { x: 410, y: 145, lat: 51.165, lng: 10.4515 },
    'india': { x: 535, y: 200, lat: 20.593, lng: 78.9629 },
    'japan': { x: 670, y: 170, lat: 36.2048, lng: 138.2529 }
  };

  // Compile stats based on actual live listings
  const mapStats = useMemo(() => {
    const stats: { [key: string]: { count: number; senders: string[] } } = {};
    let unknownCount = 0;

    blessings.forEach((blessing) => {
      const countryNormalized = blessing.country.toLowerCase().trim();
      const match = Object.keys(countryCoordinates).find(
        (key) => countryNormalized.includes(key) || key.includes(countryNormalized)
      );

      if (match) {
        if (!stats[match]) {
          stats[match] = { count: 0, senders: [] };
        }
        stats[match].count += 1;
        if (stats[match].senders.length < 3) {
          stats[match].senders.push(blessing.name);
        }
      } else {
        unknownCount++;
      }
    });

    const activePins = Object.keys(stats).map((key) => {
      const coord = countryCoordinates[key];
      return {
        key,
        countryName: key.charAt(0).toUpperCase() + key.slice(1),
        x: coord.x,
        y: coord.y,
        lat: coord.lat,
        lng: coord.lng,
        count: stats[key].count,
        senders: stats[key].senders
      };
    });

    // Calculate unique countries
    const uniqueCountries = new Set(
      blessings.map((b) => b.country.trim().toLowerCase())
    ).size;

    return {
      activePins,
      countriesCount: uniqueCountries || 1,
      totalParticipants: blessings.length,
      blessingsReceived: blessings.length
    };
  }, [blessings]);

  return (
    <section id="global-map-section" className="py-24 bg-[#FAF9F6] border-t border-slate-200/50 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4/5 h-[300px] bg-[#92BDD3]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-2">
          <span className="flex items-center gap-1.5 bg-[#92BDD3]/10 text-slate-800 text-[10px] tracking-widest font-mono font-semibold px-3.5 py-1 rounded-full uppercase border border-[#92BDD3]/20">
            <Globe className="w-3" />
            <span>Global Communion</span>
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Celebrating Across The World
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed mt-1">
            Pins illuminate the map in real-time as healthcare colleagues, mentees, and friends submit prayers and blessings from nations around the world.
          </p>
        </div>

        {/* Outer Dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Quick Metrics Panels (Left Column) */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            
            <div className="bg-white border-2 border-luxury-gold/30 hover:border-luxury-gold/80 transition-all duration-300 p-5 rounded-3xl flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#92BDD3]/10 flex items-center justify-center text-[#92BDD3]">
                <Globe className="w-5.5 h-5.5" />
              </div>
              <div className="text-left">
                <span className="block font-mono text-[9px] tracking-widest text-[#92BDD3] uppercase font-bold">Countries Represented</span>
                <span className="block font-sans text-2xl font-extrabold text-slate-800 tracking-tight">
                  {mapStats.countriesCount} Nations
                </span>
              </div>
            </div>

            <div className="bg-white border-2 border-luxury-gold/30 hover:border-luxury-gold/80 transition-all duration-300 p-5 rounded-3xl flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-slate-900/5 flex items-center justify-center text-slate-600">
                <Users className="w-5.5 h-5.5" />
              </div>
              <div className="text-left">
                <span className="block font-mono text-[9px] tracking-widest text-[#92BDD3] uppercase font-bold">Active Visitors</span>
                <span className="block font-sans text-2xl font-extrabold text-slate-800 tracking-tight">
                  {mapStats.totalParticipants} Participants
                </span>
              </div>
            </div>

            <div className="bg-white border-2 border-luxury-gold/30 hover:border-luxury-gold/80 transition-all duration-300 p-5 rounded-3xl flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <MessageSquare className="w-5.5 h-5.5" />
              </div>
              <div className="text-left">
                <span className="block font-mono text-[9px] tracking-widest text-[#92BDD3] uppercase font-bold">Blessings Logged</span>
                <span className="block font-sans text-2xl font-extrabold text-slate-800 tracking-tight">
                  {mapStats.blessingsReceived} Messages
                </span>
              </div>
            </div>

            {/* Live Feed Snip in pure gold border */}
            <div className="bg-[#FAF9F6] border-2 border-luxury-gold/20 p-5 rounded-3xl text-left">
              <h4 className="font-mono text-[9px] tracking-widest text-slate-400 uppercase font-semibold mb-2">RECENT NATIONS REACHED</h4>
              <div className="flex flex-wrap gap-1.5">
                {Array.from(new Set(blessings.map(b => b.country))).slice(0, 5).map((cty) => (
                  <span key={cty} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-[10px] font-sans font-medium rounded-full">
                    {cty}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Majestic Interactive Map Frame (Right Columns) with pure golden borders */}
          <div className="lg:col-span-3 bg-white border-2 border-luxury-gold/50 hover:border-luxury-gold rounded-[32px] p-6 shadow-md shadow-luxury-gold/[0.01] transition-all duration-500 relative overflow-hidden group">
            
            {/* Soft decorative guidelines watermark */}
            <div className="absolute top-4 left-4 text-left pointer-events-none select-none opacity-40">
              <span className="font-mono text-[9px] tracking-widest text-slate-400 block">MAP GRID REF: WS-7650</span>
              <span className="font-sans text-[11px] text-slate-500 italic">“Go into all the world and preach the good news...”</span>
            </div>

            <div className="relative w-full aspect-[2/1] bg-[#FAF9F6]/50 rounded-2xl border border-slate-100 overflow-hidden">
              
              {/* Custom SVG World Map Landmass Geometry (Elegant Minimal Abstract Dotted Grid) */}
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Minimalist Grid Watermark */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(203, 213, 225, 0.15)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#grid)" />

                {/* Highly elegant customized abstract landmass blocks */}
                {/* North America */}
                <path d="M 100 100 L 290 100 L 320 130 L 250 190 L 190 200 L 160 180 Z" fill="#E2E8F0" opacity="0.65" />
                {/* South America */}
                <path d="M 230 195 L 290 230 L 310 270 L 280 340 L 250 370 L 230 250 Z" fill="#E2E8F0" opacity="0.55" />
                {/* Eurasia (Europe + Asia) */}
                <path d="M 360 80 L 620 80 L 730 120 L 750 200 L 680 250 L 580 260 L 510 210 L 460 130 Z" fill="#E2E8F0" opacity="0.7" />
                {/* Africa */}
                <path d="M 370 200 L 450 190 L 490 250 L 470 340 L 430 350 L 400 240 Z" fill="#E2E8F0" opacity="0.8" />
                {/* Australia */}
                <path d="M 660 300 L 720 300 L 740 330 L 690 350 Z" fill="#E2E8F0" opacity="0.6" />

                {/* Connective light flow lines to Lagos home base (420, 240) */}
                {mapStats.activePins.map((pin) => {
                  if (pin.key === 'nigeria') return null;
                  return (
                    <path
                      key={`line-${pin.key}`}
                      d={`M ${pin.x} ${pin.y} Q ${(pin.x + 420) / 2} ${(pin.y + 240) / 2 - 40} 420 240`}
                      fill="none"
                      stroke="#92BDD3"
                      strokeWidth="1.2"
                      strokeDasharray="4 4"
                      className="opacity-45"
                    />
                  );
                })}

                {/* Lagos Home Base Anchor Pulse */}
                <circle cx="420" cy="240" r="14" fill="none" stroke="#D4AF37" strokeWidth="1" className="opacity-30" />
                <circle cx="420" cy="240" r="8" fill="#D4AF37" opacity="0.25" />
                <circle cx="420" cy="240" r="4.5" fill="#D4AF37" />

                {/* Interactive Pulsing Glowing Coordinate Pins */}
                {mapStats.activePins.map((pin) => (
                  <g key={pin.key} className="cursor-pointer group/pin">
                    {/* Ring aura */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="10"
                      className="fill-none stroke-[#92BDD3]/60 stroke-2 group-hover/pin:scale-125 transition-transform"
                    />
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="4.5"
                      className="fill-[#92BDD3]"
                    />

                    {/* Miniature live popover stats inside SVG */}
                    <foreignObject
                      x={pin.x > 400 ? pin.x - 170 : pin.x + 15}
                      y={pin.y - 25}
                      width="155"
                      height="65"
                      className="pointer-events-none opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 z-50 overflow-visible"
                    >
                      <div className="bg-slate-900 border border-slate-800 text-white rounded-xl p-2.5 shadow-2xl text-left flex flex-col gap-0.5">
                        <span className="font-sans text-[10px] font-bold text-white flex items-center gap-1">
                          <MapPinIcon className="w-3 text-[#92BDD3]" />
                          <span>{pin.countryName}</span>
                        </span>
                        <p className="font-mono text-[8px] text-[#92BDD3] uppercase mt-0.5">
                          {pin.count} Active {pin.count === 1 ? 'Blessing' : 'Blessings'}
                        </p>
                        {pin.senders.length > 0 && (
                          <p className="font-sans text-[8px] text-[#CBD5E1] font-light mt-0.5 truncate">
                            From: {pin.senders.join(', ')}
                          </p>
                        )}
                      </div>
                    </foreignObject>
                  </g>
                ))}
              </svg>

            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-400">
              <span>*Hover beacons to read global participation details</span>
              <span className="flex items-center gap-1 text-[#92BDD3] font-semibold uppercase">
                <span>Lagocentric Connection Active</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
