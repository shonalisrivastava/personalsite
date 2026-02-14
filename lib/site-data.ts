export type NavLink = { href: string; label: string };

export type Project = {
  title: string;
  summary: string;
  impact: string;
  tags: string[];
};

export const siteConfig = {
  name: 'Shonali Srivastava',
  brand: 'ShAMA — Shonali Academy of Music and Arts',
  title: 'Artist, Educator, and Community Builder',
  description:
    'Official website of Shonali Srivastava featuring bio, projects, publications, classes, and contact.',
  domain: 'https://www.shonalisrivastava.com',
  email: 'hello@shonalisrivastava.com',
  location: 'Bay Area, California',
  tagline:
    'Carrying forward Indian classical arts through performance, education, and community-centered initiatives.',
  announcement:
    'Now enrolling for music and dance learning pathways. Donation-based workshops available through Girjasha Global Foundation.',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com', handle: '@shonali' },
    { label: 'Instagram', href: 'https://instagram.com', handle: '@shonali' },
    { label: 'YouTube', href: 'https://youtube.com', handle: '@shonali' },
    { label: 'Facebook', href: 'https://facebook.com', handle: '@shonali' }
  ],
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/publications', label: 'Publications' },
    { href: '/resume', label: 'Resume' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ] as NavLink[],
  heroStats: [
    { label: 'Years on Stage', value: '20+' },
    { label: 'Shows & Performances', value: '1000+' },
    { label: 'Disciplines', value: 'Tabla · Vocal · Kathak' }
  ]
};

export const aboutHighlights = [
  'Daughter of renowned flautist Sri Girja Shankar Srivastava and rooted in a rich artistic lineage.',
  'Formally trained at Bhatkhande Music University (Tabla, Vocal) and Prayag Sangeet Samiti (Kathak).',
  'Advanced tabla guidance under Ustad Zakir Hussain and Pandit Swapan Chaudhary.',
  'Performer and educator across India and the USA in stage, television, radio, and cultural institutions.'
];

export const offerings = [
  {
    title: 'Tabla Training',
    description: 'Structured classes from foundational rhythm to advanced solo accompaniment and repertoire building.'
  },
  {
    title: 'Hindustani Vocal',
    description: 'Voice culture, raga-based learning, and performance confidence through practical and theory-guided sessions.'
  },
  {
    title: 'Kathak Learning',
    description: 'Technique, abhinaya, rhythm work, and choreography anchored in classical discipline and stage expression.'
  },
  {
    title: 'Workshops & Community Programs',
    description: 'Seasonal workshops and cultural learning experiences including donation-based public initiatives.'
  }
];

export const featuredProjects: Project[] = [
  {
    title: 'ShAMA Learning Programs',
    summary: 'Ongoing education tracks in tabla, Hindustani vocal, and Kathak for children, youth, and adults.',
    impact: 'Created a consistent learning pathway with stage-facing outcomes and cultural continuity.',
    tags: ['Education', 'Classical Arts']
  },
  {
    title: 'Girjasha Global Foundation Workshops',
    summary:
      'Co-created a global, donation-based learning platform honoring Sri Girja Shankar Ji and Srimati Asha Srivastava.',
    impact: 'Expanded access to learning in arts, language, and wellbeing while supporting underprivileged communities.',
    tags: ['Community', 'Nonprofit', 'Access']
  },
  {
    title: 'Cross-Disciplinary Stage Collaborations',
    summary: 'Performed and contributed across theater, fusion concerts, and cultural festivals in the Bay Area and beyond.',
    impact: 'Bridged traditional forms with contemporary audiences through inclusive programming.',
    tags: ['Performance', 'Collaboration']
  }
];

export const publications = [
  {
    title: 'Indian Classical Arts in Contemporary Spaces',
    outlet: 'Cultural Practice Notes',
    year: '2025'
  },
  {
    title: 'Teaching Rhythm Across Generations',
    outlet: 'Community Arts Educators Collective',
    year: '2024'
  }
];

export const resumeHighlights = {
  experience: [
    'Founder & Lead Educator, ShAMA — Built a performance-first training model for tabla, vocal, and Kathak learners.',
    'Performing Artist — Presented in stage, TV, radio, and interdisciplinary productions in India and the USA.',
    'Program Collaborator, Girjasha Global Foundation — Supported donation-based, accessible learning initiatives.'
  ],
  education: [
    'MA in Hindi Literature — Lucknow University',
    'BA in Sociology and Education — Lucknow University',
    'Post Nipun (Tabla) — Bhatkhande Music University (UP Government scholarship)',
    'Visharad (Vocal Music) — Bhatkhande Music University',
    'Prabhakar (Kathak) — Prayag Sangeet Samiti'
  ]
};


export const scrapedGalleryImages = [
  '/images/scraped/shonali-01.jpg',
  '/images/scraped/shonali-02.jpg',
  '/images/scraped/shonali-03.jpg',
  '/images/scraped/shonali-04.jpg',
  '/images/scraped/shonali-05.jpg',
  '/images/scraped/shonali-06.jpg',
  '/images/scraped/shonali-07.jpg',
  '/images/scraped/shonali-08.jpg'
];
