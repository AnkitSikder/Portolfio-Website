// Block type registry — defines what blocks exist, their labels, icons, and default content
export const BLOCK_TYPES = {
  Hero: {
    label: 'Hero',
    description: 'Full-width hero with title, summary, role, and duration',
    icon: '🎯',
    defaultContent: {
      category: '',
      title: '',
      summary: '',
      role: '',
      duration: '',
      heroImage: '',
    },
  },
  Overview: {
    label: 'Overview',
    description: 'Project context and target audience',
    icon: '📋',
    defaultContent: {
      title: 'The Context',
      description: '',
      audience: [],
    },
  },
  Text: {
    label: 'Text',
    description: 'Eyebrow, heading, and rich body text',
    icon: '📝',
    defaultContent: {
      eyebrow: '',
      heading: '',
      body: '',
      alignment: 'left',
    },
  },
  Image: {
    label: 'Image',
    description: 'Single image with optional heading and caption',
    icon: '🖼️',
    defaultContent: {
      heading: '',
      image: '',
      alt: '',
      caption: '',
      width: 'full',
    },
  },
  ImageGallery: {
    label: 'Image Gallery',
    description: 'Multiple images in grid or carousel',
    icon: '🖼️🖼️',
    defaultContent: {
      images: [],
      layout: 'grid',
      caption: '',
    },
  },
  Research: {
    label: 'Research',
    description: 'Interviews, surveys, or combined side-by-side',
    icon: '🔬',
    defaultContent: {
      variant: 'interviews',
      heading: '',
      subheading: '',
      image: '',
      participants: '',
      heading2: '',
      subheading2: '',
      image2: '',
      participants2: '',
      findings: [],
    },
  },
  Persona: {
    label: 'Persona',
    description: 'User persona cards',
    icon: '👤',
    defaultContent: {
      personas: [],
    },
  },
  Quote: {
    label: 'Quote',
    description: 'Pull quote with attribution',
    icon: '💬',
    defaultContent: {
      quote: '',
      person: '',
      role: '',
      avatar: '',
    },
  },
  Statistic: {
    label: 'Statistic',
    description: 'Key metrics and numbers',
    icon: '📊',
    defaultContent: {
      stats: [],
    },
  },
  Comparison: {
    label: 'Comparison',
    description: 'Competitive analysis or before/after',
    icon: '⚖️',
    defaultContent: {
      insight: '',
      items: [],
    },
  },
  DesignSystem: {
    label: 'Design System',
    description: 'Colors, typography, and grid',
    icon: '🎨',
    defaultContent: {
      heading: 'Style Guide',
      subheading: '',
      colors: [],
      typography: [],
    },
  },
  Testing: {
    label: 'User Testing',
    description: 'Usability testing insights and quotes',
    icon: '🧪',
    defaultContent: {
      insights: [],
      quotes: [],
    },
  },
  ScreenShowcase: {
    label: 'Screen Showcase',
    description: 'Final UI screens',
    icon: '📱',
    defaultContent: {
      screens: [],
    },
  },
  Outcome: {
    label: 'Outcome',
    description: 'Results and impact section',
    icon: '🏆',
    defaultContent: {
      heading: 'The Outcome',
      body: '',
      theme: 'orange',
    },
  },
  ProductClassification: {
    label: 'Product Classification',
    description: 'List of product categories with their features',
    icon: '🔋',
    defaultContent: {
      items: [],
    },
  },
  SWOT: {
    label: 'SWOT Analysis',
    description: 'Strengths, Weaknesses, Opportunities, Threats',
    icon: '🔲',
    defaultContent: {
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: [],
    },
  },
  MindMap: {
    label: 'Mind Map',
    description: 'Structured visual hierarchy',
    icon: '🧠',
    defaultContent: {
      topic: '',
      branches: [],
    },
  },
  Benchmark: {
    label: 'Benchmark Product',
    description: 'Competitor or benchmark products with attributes',
    icon: '📈',
    defaultContent: {
      items: [],
    },
  },
  ProductRender: {
    label: 'Product Render',
    description: 'Final 3D renders of the product',
    icon: '🧊',
    defaultContent: {
      renders: [],
    },
  },

  GapAnalysis: {
    label: 'Gap Analysis (Split)',
    description: 'Training vs Reality gap with consequence cards',
    icon: '⚡',
    defaultContent: {
      heading: 'SECTION 02 - THE PROBLEM',
      subheading: 'Traffic training breaks down where reality begins.',
      problemStatement: 'Novice traffic police recruits are expected to manage complex, high-volume intersections and make rapid, accurate decisions in unpredictable traffic conditions, yet their training is largely classroom-based and lacks realistic, high-fidelity practice. Without exposure to the sensory overload, distractions, noise, and fast-moving risks of real-world traffic, recruits may struggle to coordinate hand signals, prioritise situations, and respond confidently under pressure—creating a critical gap between knowing what to do and being prepared to do it safely.',
      leftTitle: 'TRAINING',
      leftItems: ['Classroom', 'Static / theoretical'],
      rightTitle: 'REALITY',
      rightItems: ['High-speed traffic', 'Mixed vehicles', 'Noise', 'Emergency situations', 'Aggressive drivers'],
      gapTitle: 'The gap',
      gapDescription: 'Officers are expected to make high-stakes decisions in environments they rarely get to practise safely.',
      consequences: [
        { title: 'Decision-making', description: 'Managing multiple moving priorities under pressure.' },
        { title: 'Safety', description: 'Mistakes can affect both officers and road users.' },
        { title: 'Consistency', description: 'Training does not fully prepare officers for unpredictable intersections.' }
      ],
    },
  },
  UserContext: {
    label: 'User Context & Research',
    description: 'User context panel followed by research questions',
    icon: '🧑‍✈️',
    defaultContent: {
      heading: 'SECTION 03 — UNDERSTANDING THE USER',
      intro: 'I needed to understand what happens when the intersection stops behaving predictably.',
      userType: 'Traffic constables working in high-stress, mixed-traffic environments.',
      managesTitle: 'They manage',
      managesList: ['Traffic flow', 'Aggressive drivers', 'Emergency vehicles', 'Pedestrians', 'VIP convoys', 'Heat', 'Noise', 'Blind spots'],
      managesImage: '',
      researchHeading: 'Primary research',
      researchSubheading: '3 police officers interviewed',
      investigations: [
        'training vs real-world traffic',
        'hand-signal effectiveness',
        'emergency situations',
        'attention and prioritisation',
        'fatigue and environmental stress',
        'conflict management'
      ]
    },
  },
  ResearchInsights: {
    label: 'Research Insights',
    description: 'Numbered insight cards and an opportunity transition',
    icon: '💡',
    defaultContent: {
      heading: 'SECTION 04 — RESEARCH INSIGHTS',
      intro: 'The biggest problem wasn\'t knowing the rules.\nIt was applying them under pressure.',
      insights: [
        { number: '01', title: 'Theory ≠ readiness', description: 'Classroom learning does not adequately prepare recruits for chaotic, real-time road decisions.' },
        { number: '02', title: 'Confidence collapses under pressure', description: 'New recruits face a confidence gap when multiple events happen simultaneously.' },
        { number: '03', title: 'Experience is doing the work training should do', description: 'With limited structured practice, critical skills are often learned through inconsistent on-the-job exposure.' }
      ],
      opportunityPrefix: 'This created an opportunity:',
      opportunityText: 'Let officers safely experience the difficult situations before they encounter them on the road.'
    }
  },
  ReframeProblem: {
    label: 'Reframe Problem',
    description: 'Large typographic statement and design challenge',
    icon: '🎯',
    defaultContent: {
      heading: 'SECTION 05 — REFRAME THE PROBLEM',
      statement1: 'I am a novice traffic recruit assigned to a high-volume, multi-lane intersection.',
      statement2: 'I want to master complex coordination of hand signals and junction management.',
      statement3: 'But I only have classroom-based theoretical knowledge and limited high-fidelity practice.',
      statement4: 'Which makes me feel cognitively overwhelmed and physically vulnerable when traffic becomes unpredictable.',
      challengeTitle: 'Design challenge',
      challengeText: 'How might we create a safe environment where traffic recruits can practise correct signalling and decision-making while experiencing the pressure of a real intersection?'
    }
  },
  SolutionCapabilities: {
    label: 'Solution Capabilities',
    description: 'Product introduction and 3 core capabilities',
    icon: '🛠️',
    defaultContent: {
      heading: 'SECTION 06 — THE SOLUTION',
      productName: 'Immersive Traffic Command',
      subtitle: 'A VR training system built around three capabilities.',
      capabilities: [
        { 
          number: '01', 
          title: 'Experience realistic chaos', 
          description: 'Simulate Indian traffic conditions:',
          listItems: ['mixed vehicles', 'rickshaws', 'wrong-side driving', 'pedestrians', 'stray animals', 'emergency situations']
        },
        { 
          number: '02', 
          title: 'Learn through physical action', 
          description: 'Instead of selecting answers on a screen, trainees perform the required hand signals and receive real-time feedback.' 
        },
        { 
          number: '03', 
          title: 'Build confidence under pressure', 
          description: 'Start with guided learning and progressively remove assistance until the trainee can respond independently.' 
        }
      ]
    }
  },
  VRErgonomics: {
    label: 'VR Ergonomics',
    description: 'Bento grid showing VR UI rationale',
    icon: '🥽',
    defaultContent: {
      heading: 'DESIGNING INFORMATION',
      subheading: 'AROUND THE TASK, NOT OVER IT',
      intro: 'In VR, UI has to coexist with the real task...',
      vrImage: '',
      ergonomicsTitle: 'Ergonomics',
      ergonomicsDesc: 'Keeping interactions within the natural field of view.',
      iaTitle: 'Information Architecture',
      iaDesc: 'Prioritizing what needs attention now.',
      learningLoopTitle: 'The Learning Loop',
      learningLoopDesc: 'Watch, copy, receive feedback.',
      featuresTitle: 'Four Steps to Mastery',
      features: [
        { title: 'Observe', description: 'See the correct signal.' },
        { title: 'Attempt', description: 'Try it yourself.' }
      ]
    }
  },
  Video: {
    label: 'Video',
    description: 'A single video player block with optional poster and caption',
    icon: '▶️',
    defaultContent: {
      videoUrl: '',
      posterUrl: '',
      caption: '',
      autoPlay: true,
      loop: true,
      muted: true
    }
  },
  FormativeTesting: {
    label: 'Formative Testing',
    description: 'Testing section with participant count and graphs image',
    icon: '🧪',
    defaultContent: {
      heading: 'SECTION 13 — TESTING',
      title: 'Did it actually work?',
      participantCount: '5 participants tested the simulation.',
      description: "Don't imply statistical significance. This is formative usability testing. Your testing instrument includes NASA-TLX workload measures plus questions around ghost hands, audio, detection accuracy and adaptive difficulty.",
      image: '',
    }
  },
  Table: {
    label: 'Data Table',
    description: 'A generic table block with columns and rows',
    icon: '📊',
    defaultContent: {
      heading: 'Data Table',
      columns: ['Column 1', 'Column 2'],
      rows: [['Row 1, Cell 1', 'Row 1, Cell 2']],
    }
  }
};

export const BLOCK_TYPE_LIST = Object.entries(BLOCK_TYPES).map(([type, meta]) => ({
  type,
  ...meta,
}));
