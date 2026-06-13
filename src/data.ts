import { LifeSeason, WisdomLesson, Blessing } from './types';

export const LIFE_SEASONS: LifeSeason[] = [
  {
    id: 'daughter',
    title: 'The Daughter',
    subtitle: 'Nurtured in Devotion',
    period: 'The Foundational Years',
    quote: '"Before I formed you in the womb I knew you; before you were born I set you apart."',
    description: 'Born into a heritage of prayer, faith, and quiet diligence. These early years shaped an unshakeable confidence in God’s sovereignty. Within the sanctuary of a loving family, the values of compassion, integrity, and intellectual curiosity were standard-bearers of daily life.',
    achievements: [
      'Grew in a home anchored in daily prayer and scripture teaching',
      'Developed a deep reverence for the calling of healing and service',
      'Cultivated an early love for academic excellence and leadership'
    ],
    lessons: [
      'Integrity is built in private, long before it is tested in public.',
      'Your foundation determines your height; never be in a hurry to outgrow your roots.'
    ],
    theme: 'beige'
  },
  {
    id: 'dreamer',
    title: 'The Dreamer',
    subtitle: 'Answering the Call to Heal',
    period: 'Early Academic Pursuits',
    quote: '"Write the vision and make it plain on tablets, that he may run who reads it."',
    description: 'The unfolding realization of a divine calling in healthcare. Driven by a deep empathy for suffering and an desire to understand the human body and spirit, she pursued training with rigorous devotion. Every exam and scientific inquiry was treated as a step of obedience toward a life of impact.',
    achievements: [
      'Accepted into prestigious healthcare studies with honors',
      'Discovered a specific passion for holistic patient care and administrative leadership',
      'Sought out opportunities to serve in underserved clinical environments'
    ],
    lessons: [
      'A calling is always larger than a career; a career is what you get paid for, a calling is what you are made for.',
      'A study desk can be an altar of worship if your books are opened with prayer.'
    ],
    theme: 'champagne'
  },
  {
    id: 'professional',
    title: 'The Professional',
    subtitle: 'Excellence in Action',
    period: 'Clinical Mastery & Practice',
    quote: '"Do you see a man skilled in his work? He will stand before kings; he will not stand before obscure men."',
    description: 'Decades of clinical practice marked by clinical precision, uncompromised work ethic, and spiritual empathy at the bedside. Melding scientific rigor with a gentle bedside manner, she became highly sought after, establishing a reputation for taking on the most complex cases with prayer and peerless skill.',
    achievements: [
      'Successfully led clinical departments through crucial institutional restructuring',
      'Pioneered human-centric care methodologies that reduced recovery times and improved patient morale',
      'Honored repeatedly for clinical excellence, dedication to healthcare ethics, and operational efficiency'
    ],
    lessons: [
      'True healing addresses the soul before it mends the flesh.',
      'Competence is a Christian duty; being skilled is how we honor the Creator who hand-selected us for the task.'
    ],
    theme: 'blue'
  },
  {
    id: 'leader',
    title: 'The Leader',
    subtitle: 'Governance & Institutional Grace',
    period: 'Stepping into Global Health Influence',
    quote: '"For such a time as this."',
    description: 'Rising to executive and governmental tables where decisions are made. Guiding boards through uncertainty, managing large-scale healthcare initiatives, and speaking truth in rooms of influence. Leadership became an exercise in spiritual stewardship, demonstrating that grace is a potent asset in boardrooms.',
    achievements: [
      'Appointed to key national healthcare committees advising on healthcare equity',
      'Chaired executive boards with a balanced emphasis on standard compliance and human kindness',
      'Navigated crisis management periods with tranquil resolve and crystal-clear communication'
    ],
    lessons: [
      'The best leaders don’t build followers; they build leaders who build legacies.',
      'A soft voice backed by strong values carries more weight than table-pounding force.'
    ],
    theme: 'gold'
  },
  {
    id: 'mentor',
    title: 'The Mentor',
    subtitle: 'Multiplying the Grace',
    period: 'Raising the Next Generation',
    quote: '"And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others."',
    description: 'Dr. Dhalia’s ultimate joy is investment in others. Creating structured pathways for younger professionals, guiding marriages through prayer, and comforting souls with emotional intelligence. Her workspace, dining table, and prayer room became incubators of spiritual and professional giants.',
    achievements: [
      'Formally mentored over 100 healthcare professionals, corporate leaders, and ministry workers',
      'Established regular accountability circles and wisdom-sharing programs',
      'Sponsered educational pursuits and specialized trainings for promising underrepresented youth'
    ],
    lessons: [
      'Success without a successor is an absolute failure.',
      'The highest compliment is not hearing "How great you are," but watching someone you poured into surpass you.'
    ],
    theme: 'ivory'
  },
  {
    id: 'legacy',
    title: 'The Legacy Builder',
    subtitle: '50 Years and Forever Forward',
    period: 'Dr. Dhalia-KS Legacy Platform',
    quote: '"Commit your work to the Lord, and your plans will be established."',
    description: 'Reaching her golden jubilee is not a destination, but a launchpad. The Dr. Dhalia-KS platform is established to serve as a library of her teachings, resources, books, and articles, as well as a booking system for speaking, mentorship, and high-impact specialized consults, for the next 50 years.',
    achievements: [
      'Coordinating the formal launch of the Dr.Dhalia-KS Global Foundation',
      'Authoring a collection of memoirs and practical guides on Faith-Informed Leadership',
      'Inaugurating international speaking schedules and corporate leadership consulting routes'
    ],
    lessons: [
      'A legacy is not written on headstones; it is carved into the hearts of people who will speak your values when you are gone.',
      'Fifty is not an ending; it is the crest of a mountain from which the horizon has never been clearer.'
    ],
    theme: 'rose-gold'
  }
];

export const WISDOM_LESSONS: WisdomLesson[] = [
  { number: 1, text: "Trust God before you understand Him; His path transcends our temporary queries.", category: "Faith" },
  { number: 2, text: "Excellence in your work is a form of worship that requires zero explanation.", category: "Leadership" },
  { number: 3, text: "True healing addresses the soul long before it mends the flesh.", category: "Healing" },
  { number: 4, text: "Success without a successor is a well-paved road that leads to a dead end.", category: "Mentorship" },
  { number: 5, text: "Your purpose is never something you invent; it is something you discover through surrender.", category: "Purpose" },
  { number: 6, text: "A legacy is built in the daily decisions of integrity, not in singular public events.", category: "Legacy" },
  { number: 7, text: "Never let success go to your head, or criticism go to your heart.", category: "Leadership" },
  { number: 8, text: "The healthcare of kind words is often more potent than any clinical prescription.", category: "Healing" },
  { number: 9, text: "Pour into others when your own glass is full, but keep pouring by trusting the Source.", category: "Mentorship" },
  { number: 10, text: "Discipline is the quiet bridge between your potential and your contribution.", category: "Purpose" },
  { number: 11, text: "The cross you carry in obedience will eventually become the crown of your testimony.", category: "Faith" },
  { number: 12, text: "Leadership is the art of absorbing chaos and radiating beautiful tranquility.", category: "Leadership" },
  { number: 13, text: "A broken heart can become a beautiful window through which God’s compassion shines into others.", category: "Healing" },
  { number: 14, text: "A true mentor does not solve your problems; they help you find God’s answers inside your trial.", category: "Mentorship" },
  { number: 15, text: "Do not seek platforms; seek preparedness. The right platform will seek you.", category: "Purpose" },
  { number: 16, text: "The currency of heaven is love; invest fully in people, for they are the only things that endure.", category: "Legacy" },
  { number: 17, text: "Prayer is not changing God's mind; it is aligning our perspective to His divine will.", category: "Faith" },
  { number: 18, text: "Great boards are guided not by the loudest voices, but by the quietest wisdom.", category: "Leadership" },
  { number: 19, text: "Physical exhaustion is cured by sleep; spiritual fatigue is resolved by solitude with God.", category: "Healing" },
  { number: 20, text: "The greatest gift you can offer a mentee is the truth they are afraid to tell themselves.", category: "Mentorship" },
  { number: 21, text: "Your age is not a timer of decline, but a measure of accumulated grace.", category: "Legacy" },
  { number: 22, text: "An open bible, an open mind, and an open heart will always result in an open door.", category: "Faith" },
  { number: 23, text: "True authority is not about commanding respect, but enabling others to excel.", category: "Leadership" },
  { number: 24, text: "Rest is not a luxury; it is a sacred act of trust that God can handle things without you.", category: "Healing" },
  { number: 25, text: "If you want to go fast, go alone; if you want to leave an everlasting impact, empower others.", category: "Mentorship" },
  { number: 26, text: "Do not measure your days by the wealth you accumulate, but by the wisdom you dispense.", category: "Legacy" },
  { number: 27, text: "Faith does not ignore facts; it simply focuses on a reality that is higher than facts.", category: "Faith" },
  { number: 28, text: "A leader who does not listen will eventually be surrounded by people with nothing to say.", category: "Leadership" },
  { number: 29, text: "Compassion is not a soft sentiment; it is a muscular resolve to stand with people in pain.", category: "Healing" },
  { number: 30, text: "The best advice I can give is to be quick to listen, slow to inspect, and eager to love.", category: "Mentorship" },
  { number: 31, text: "Your story is safe in the hands of the Author who started writing it before time began.", category: "Faith" },
  { number: 32, text: "Never make a long-term decision based on a temporary emotional storm.", category: "Leadership" },
  { number: 33, text: "Healing of some wounds takes time, but healing of the heart takes surrender.", category: "Healing" },
  { number: 34, text: "You cannot mentor someone you are trying to impress; vulnerability is the starting point.", category: "Mentorship" },
  { number: 35, text: "Your purpose is not tied to your location; you are called to bear fruit exactly where you are.", category: "Purpose" },
  { number: 36, text: "Legacy is not about what we leave behind, but what we send forward in those we loved.", category: "Legacy" },
  { number: 37, text: "When God answers with silence, He is inviting you to listen to His heartbeat.", category: "Faith" },
  { number: 38, text: "The mark of outstanding leadership is consistent grace under intense pressure.", category: "Leadership" },
  { number: 39, text: "Always treat the janitor and the chief executive with identical, unhurried respect.", category: "Legacy" },
  { number: 40, text: "We do not lift people up by lowering our standards; we lift them up by showcasing excellence.", category: "Mentorship" },
  { number: 41, text: "A seed does not make noise when it grows; yield in silence and let your fruit speak.", category: "Purpose" },
  { number: 42, text: "To grow in wisdom, we must first learn the art of unlearning our assumptions.", category: "Legacy" },
  { number: 43, text: "Peace is not the absence of trouble; it is the presence of God in the middle of it.", category: "Faith" },
  { number: 44, text: "Never let your achievements distance you from the humility that made them possible.", category: "Leadership" },
  { number: 45, text: "To care for the sick is to hold the hand of the broken Christ in the world.", category: "Healing" },
  { number: 46, text: "Mentoring is a mirror that reveals both your flaws and the power of God’s grace.", category: "Mentorship" },
  { number: 47, text: "Living on purpose means choosing what is critical over what is merely loud.", category: "Purpose" },
  { number: 48, text: "The ultimate standard of legacy is how well you loved your family and close community.", category: "Legacy" },
  { number: 49, text: "God’s grace does not remove our limits; it glorifies Himself within our weaknesses.", category: "Faith" },
  { number: 50, text: "The next fifty years will be marked by deeper roots, broader reach, and permanent peace.", category: "Legacy" }
];

export const INITIAL_BLESSINGS: Blessing[] = [
  {
    id: 'seed-1',
    name: 'Pastor Tunde Sanni',
    country: 'United Kingdom',
    message: 'To my beloved sister and co-laborer in the kingdom, your 50 years are a testament to the quiet strength of faith. The way you care for our family, combined with your clinical precision, makes us all stand in awe. God’s hand is visible on every step of your journey.',
    prayer: 'May the Lord multiply your strength, give you clarity for this next season, and satisfy you with long life, continuous healing, and peace.',
    relation: 'family',
    word: 'Grace',
    impact: 'Dr. Dhalia taught me that patience and silent trust in seasons of transition are the greatest spiritual achievements.',
    roseColor: 'gold',
    createdAt: 1781251200000 // June 11, 2026
  },
  {
    id: 'seed-2',
    name: 'Dr. Elizabeth Finch',
    country: 'United States',
    message: 'Happy Golden Jubilee, Dhalia! Since our residency days, you have exemplified academic mastery and deep heart for the vulnerable. Leading the clinical boards alongside you was a masterpiece of professional excellence. You represent the modern physician at her best.',
    prayer: 'I pray that your clinical legacy continues to flourish and that the next generation of doctors learns what true compassionate care looks like through you.',
    relation: 'colleague',
    word: 'Excellence',
    impact: 'Dr. Dhalia taught me to look beyond clinical metrics and deeply understand the soul of the patient.',
    roseColor: 'champagne',
    createdAt: 1781261200000
  },
  {
    id: 'seed-3',
    name: 'Chidimma Adeleke',
    country: 'Nigeria',
    message: 'Dr. Dhalia has been my mentor, second mother, and spiritual anchor. When I was navigating the hardest crossroads of my career and marriage, her soft words and absolute lack of judgment rebuilt my confidence completely. I am forever grateful.',
    prayer: 'May God cause men to favor you in your future platform, and may your mentorship circles cover the face of the earth.',
    relation: 'mentee',
    word: 'Wisdom',
    impact: 'Dr. Dhalia taught me to trust God’s timing even when my timeline fell apart.',
    roseColor: 'rose-gold',
    createdAt: 1781271200000
  },
  {
    id: 'seed-4',
    name: 'David Kujore',
    country: 'Canada',
    message: 'To an extraordinary aunt, your warmth makes everyone feel seen. Even with your busy global schedule advising and healing, you never miss our family milestones. Thank you for showing us what an integrated, faith-led life looks like.',
    prayer: 'May this milestone birthday bring you overflow of joy, laughter, and a profound sense of accomplishment.',
    relation: 'family',
    word: 'Legacy',
    impact: 'Dr. Dhalia taught me to treasure people far above positions and titles.',
    roseColor: 'ivory',
    createdAt: 1781281200000
  },
  {
    id: 'seed-5',
    name: 'Sarah Jenkins',
    country: 'South Africa',
    message: 'What a privilege to celebrate you! Your teachings on healthcare governance and your silent spiritual devotion are rare lights. Our leadership panels are richer because of your serene and elegant presence.',
    prayer: 'May this platform launch you into speaking global volumes that restore faith-centered leadership to healthcare governance globally.',
    relation: 'friend',
    word: 'Faith',
    impact: 'Dr. Dhalia taught me how to lead difficult boardrooms with absolute calm and elegance.',
    roseColor: 'gold',
    createdAt: 1781291200000
  }
];
