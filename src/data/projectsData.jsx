import React from 'react';
import { Activity, Cpu, Leaf } from 'lucide-react';

export const projects = [
  {
    title: 'Immersive Traffic Command',
    description: 'A VR training system for smarter, safer traffic decisions.',
    pointers: [
      'Immersive VR training environment',
      'Real-time traffic scenario simulation',
      'Designed for police & traffic officers',
    ],
    link: 'https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/thumbnails/1788331220380-kgfv3yef4bd.png',
    pageLink: '/work/vrtraffic',
    color: '#1a1a2e',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: 'Jio-bp Incident Management System',
    description: 'One incident. Different decisions. One connected lifecycle.',
    pointers: [],
    link: '/jio-bp/Mockup_JioBP_3.jpg',
    pageLink: '/work/jio-bp',
    color: '#3b2f2f',
    icon: <img src="/jio-bp/Dashboard.png" alt="Dashboard Icon" className="w-6 h-6 object-contain" />,
  },
  {
    title: 'Makhana Seed Collector',
    description: 'Affordable, ergonomic tool that helps makhana workers collect seeds safely, comfortably, and efficiently.',
    pointers: [
      'Ergonomic handle reduces hand fatigue',
      'Improves harvest speed by 40%',
      'Low-cost manufacturing design',
    ],
    link: 'https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/thumbnails/1788343323821-di1b8asa1ml.png',
    pageLink: '/work/makhana-tool',
    color: '#2a1a0a',
    icon: <img src="/makhana/Makhana logo.png" alt="Makhana Logo" className="w-6 h-6 object-contain" />,
  },
  {
    title: 'Aura Charge Smart Inverter',
    description: 'Redefining power backup into a unified, smart energy experience for the modern home.',
    pointers: [
      'Multi-device charging hub',
      'Smart home integration',
      'Reduces gadget clutter by design',
    ],
    link: 'https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/thumbnails/1788349026152-csrdy0cptka.jpg',
    pageLink: '/work/auracharge',
    color: '#1a0a2a',
    icon: <Activity className="w-6 h-6" />,
  },
];

