export interface Blessing {
  id: string;
  name: string;
  country: string;
  message: string;
  prayer?: string;
  relation: string; // "colleague" | "mentee" | "family" | "friend" | "other"
  word: string; // One word of legacy
  impact?: string; // Dr. Dhalia taught me...
  roseColor: 'gold' | 'champagne' | 'ivory' | 'rose-gold';
  createdAt: number;
}

export interface RoseNode {
  id: string;
  name: string;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

export interface MapPin {
  countryCode: string;
  countryName: string;
  lat: number;
  lng: number;
  count: number;
  blessings: { name: string; message: string }[];
}

export interface WordCloudItem {
  text: string;
  value: number;
}

export interface LifeSeason {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  quote: string;
  description: string;
  achievements: string[];
  lessons: string[];
  theme: string; // Color profile
}

export interface WisdomLesson {
  number: number;
  text: string;
  category: 'Faith' | 'Leadership' | 'Healing' | 'Mentorship' | 'Purpose' | 'Legacy';
}
