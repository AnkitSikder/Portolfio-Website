export const visistAiData = {
  hero: {
    category: "Digital Product Design",
    title: "Visist.ai",
    summary: "Creating a seamless digital ecosystem for Visist.ai by designing an intuitive service that guides users from video upload to personalized performance feedback.",
    role: "UI/UX Design",
    duration: "4 Weeks",
    heroImage: "/projects/visist-thumbnail.jpg" // Using the beautiful generated thumbnail
  },
  overview: {
    title: "The Context",
    description: "The project brief involves creating a seamless digital ecosystem for Visist.ai by designing an intuitive service that guides users from video upload to personalized performance feedback. This involves developing a clean, responsive UI for web and mobile with multilingual support and engaging data visualizations, and architecting a scalable, secure backend that integrates advanced AI algorithms with real-time SmartCourt tracking to deliver immediate, actionable insights.",
    audience: [
      "Badminton Players",
      "Badminton Enthusiasts",
      "Sports Academies and Clubs",
      "Parents of Young Athletes"
    ]
  },
  research: {
    interviews: {
      participants: "We conducted in-depth interviews with 15 badminton players—ranging from amateur enthusiasts to semi-professional athletes—as well as 5 experienced coaches.",
      findings: [
        {
          title: "Feedback Deficiency",
          description: "Lack of immediate, actionable feedback post-training sessions."
        },
        {
          title: "Coach Availability",
          description: "Limited coach availability due to high student ratios."
        },
        {
          title: "User Interface Concerns",
          description: "Need for a simple, intuitive practice integration interface."
        }
      ]
    },
    surveys: {
      method: "An online survey was distributed to over 100 badminton players from various skill levels.",
      insights: [
        {
          title: "Cost Sensitivity",
          description: "Importance of affordability for grassroots adoption."
        },
        {
          title: "Preference for Simplicity",
          description: "Desire for user-friendly platform navigation."
        },
        {
          title: "High Demand for Data-Driven Insights",
          description: "Interest in personalized video analysis reports."
        }
      ]
    },
    personas: [
      {
        name: "Ankit Mehta",
        bio: "Ankit, an extroverted college student, plays badminton regularly and competes in local tournaments. He is passionate about improving his skills despite financial constraints.",
        demographics: "22 • Single • College Student • ₹2,50,000 • Lucknow, India",
        motivations: "Dream of local recognition. Inspired by professional players. Enjoys peer admiration.",
        frustrations: "Limited access to professional coaching. Difficulty in self-assessment. Balancing studies and practice.",
        goals: "Win local tournaments. Improve gameplay with insights. Optimize limited practice time.",
        personality: ["Extrovert", "Techie", "Enthusiastic"],
        quote: "With the right guidance, I believe I can compete with the best in my city.",
        image: ""
      },
      {
        name: "Neha Rajan",
        bio: "Neha is an introverted school teacher who plays badminton to stay fit and unwind. She enjoys friendly matches with colleagues and aims to improve her skills gradually.",
        demographics: "30 • Married • School Teacher • Kochi, India",
        motivations: "Finds joy and stress relief in badminton. Motivated by skill improvement. Enjoys social aspect with friends.",
        frustrations: "Lack of detailed feedback. Difficulty in self-assessment. Limited practice time.",
        goals: "Enhance badminton skills. Maintain an active lifestyle. Enjoy the game more.",
        personality: ["Introvert", "Non-Techie", "Enthusiastic"],
        quote: "I play badminton to stay fit and happy, and I'd love to get better at it with some expert advice.",
        image: ""
      }
    ]
  },
  competition: {
    insight: "While general sports platforms offer broad metrics, Visist.ai differentiates by delivering hyper-specialized, AI-driven tactical insights specifically tailored for Badminton.",
    competitors: [
      {
        name: "Generic Tracking Apps",
        focus: "Multiple sports",
        strengths: "Wide range of supported sports, integration with popular platforms, detailed analytics and statistics.",
        weaknesses: "Lack of specialization in niche sports, generic approach may not cater specifically to badminton."
      },
      {
        name: "Pro Analytics Tools",
        focus: "Elite Athletes",
        strengths: "Advanced AI for tactical analysis, comprehensive reports and visualizations, integration with coaching tools.",
        weaknesses: "Limited visibility in specific sports communities, potential lack of personalized feedback."
      },
      {
        name: "Coaching Software",
        focus: "Technique",
        strengths: "Detailed technique breakdowns, technique improvement, user-friendly interface, corrective feedback.",
        weaknesses: "Potential lack of specialized features, limited integration with broader sports community platforms."
      },
      {
        name: "Visist.ai",
        focus: "AI-driven insights",
        strengths: "AI-driven insights, advanced performance metrics, real-time analysis, predictive analytics.",
        weaknesses: "Limited user base, newer in the market."
      }
    ]
  },
  architecture: {
    mobileFlow: "/projects/mobile-flow.png", // Will be removed/replaced if not using images
    websiteIA: "/projects/website-ia.png"
  },
  designSystem: {
    colors: [
      { hex: "203D1F", name: "Dark Green" },
      { hex: "026B33", name: "Brand Green" },
      { hex: "329633", name: "Accent Green" },
      { hex: "C7EAC5", name: "Light Green" },
      { hex: "FBFEFA", name: "Off White" },
      { hex: "282828", name: "Dark Gray" },
      { hex: "80828D", name: "Medium Gray" },
      { hex: "D8D9E0", name: "Light Gray" },
      { hex: "FCFCFD", name: "White Gray" },
      { hex: "FFFFFF", name: "Pure White" }
    ],
    typography: [
      { family: "Montserrat", weights: ["Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Black"] },
      { family: "Literata", weights: ["Regular", "Medium", "Bold"] }
    ],
    grid: {
      columns: "8",
      gutter: "30px",
      margin: "70px",
      mobile: {
        columns: "4",
        gutter: "16px",
        margin: "16px"
      }
    }
  },
  testing: {
    insights: [
      {
        category: "Ease of Use & Onboarding",
        positive: "Simple sign-up and onboarding process.",
        improvement: "Add tooltips or explanations during sign-up for clarity."
      },
      {
        category: "Video Upload & Playback",
        positive: "Easy video upload and quick feedback.",
        improvement: "Add preview before submission and more video playback controls."
      },
      {
        category: "Report & Insights",
        positive: "Detailed and useful performance insights.",
        improvement: "Simplify data for beginners and casual players with tooltips."
      },
      {
        category: "Customization & Personalization",
        positive: "Personalized feedback is appreciated.",
        improvement: "Add filters, goal-setting options, and more customized notifications."
      },
      {
        category: "Navigation & Usability",
        positive: "Clean design and easy navigation.",
        improvement: "Simplify complex features like performance comparisons for beginners."
      }
    ],
    quotes: [
      "Uploading is quick and easy. However, I would like to see a preview of the video and even more customization options for video length and resolution to ensure the upload quality is optimal.",
      "I was confused about the first screen. It looks good, but I didn't know what I should do next. A clear next step button would help guide me.",
      "It's nice to have the video and feedback together. However, a swipe gesture to move between sections would make it feel more mobile-friendly.",
      "The settings are comprehensive, but it would be useful if I could connect my calendar to the app for automatic scheduling of training sessions and reminders.",
      "This is nice! The insights provided along with the video are very helpful. But I wish there was a way to directly skip to specific moments in the video for quicker feedback."
    ]
  },
  screens: [
    {
      type: "hero",
      image: "/projects/visist-thumbnail.jpg",
      caption: "High-fidelity dashboard experience"
    }
  ]
};
