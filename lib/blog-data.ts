export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-meaningful-projects',
    title: 'Building Meaningful Projects That Last',
    excerpt: 'A practical framework for choosing and shipping high-impact projects.',
    date: '2026-01-10',
    readingTime: '4 min',
    content: [
      'Meaningful projects start by solving a real problem for real people. Before execution, clarify the specific audience and the measurable change you want to create.',
      'Use short feedback cycles. Ship a small version, gather insights, and improve quickly. This keeps momentum while reducing risk.',
      'Sustainability comes from documentation and systems. Build in reusable templates so your future self (or team) can iterate efficiently.'
    ]
  },
  {
    slug: 'modern-personal-brand-website',
    title: 'What Makes a Modern Personal Brand Website',
    excerpt: 'The essentials of a clean, useful, and high-converting personal website.',
    date: '2025-12-08',
    readingTime: '3 min',
    content: [
      'A modern personal site should be clear in under ten seconds. Visitors need to quickly understand who you are, what you do, and how to contact you.',
      'Structure matters: keep intuitive navigation, consistent page layouts, and obvious calls to action.',
      'Performance and accessibility are non-negotiable. Fast loading and strong contrast improve both user experience and discoverability.'
    ]
  }
];

export const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
