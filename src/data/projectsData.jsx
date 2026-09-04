import { Activity, ShieldCheck, Layers, Sparkles, Globe } from 'lucide-react';
import React from 'react';

export const projects = [
  {
    title: 'Visist.ai',
    description: 'Creating a seamless digital ecosystem for Visist.ai by designing an intuitive service that guides users from video upload to personalized performance feedback.',
    pointers: [
      'Improved brand recall by ~35%',
      'Led the soft launch of AI feedback reports',
      'Designed intuitive end-to-end user flows'
    ],
    link: '/projects/visist-thumbnail.jpg',
    pageLink: '/work/visist-ai',
    color: '#ffb366', // Lightest Orange
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: 'Reliable',
    description: 'A revolutionary UX/UI framework designed to maximize user engagement through intuitive micro-interactions and seamless navigation.',
    pointers: [
      '99.9% uptime architecture',
      'Reduced bounce rate by 25%',
      'Seamless cross-platform support'
    ],
    link: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2940&auto=format&fit=crop',
    pageLink: '/#work',
    color: '#ff9933', // Lighter Orange
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Scalable',
    description: 'A high-performance web application built for data analysis, leveraging scalable infrastructure and real-time processing.',
    pointers: [
      'Handles 1M+ daily active users',
      'Real-time data processing <50ms',
      'Auto-scaling cloud infrastructure'
    ],
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    pageLink: '/#work',
    color: '#ff8000', // Solid Orange
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: 'Innovative',
    description: 'An experimental creative development project combining WebGL and advanced animation techniques for an immersive experience.',
    pointers: [
      'Award-winning WebGL animations',
      'Interactive 3D storytelling',
      'Optimized 60 FPS performance'
    ],
    link: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2940&auto=format&fit=crop',
    pageLink: '/#work',
    color: '#e66000', // Darker Orange
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: 'Accessible',
    description: 'A cutting-edge mobile application providing seamless connectivity and an elegant, modern interface for everyday users.',
    pointers: [
      'WCAG 2.1 AA Compliant',
      '100% Screen reader support',
      'High-contrast mode capabilities'
    ],
    link: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2940&auto=format&fit=crop',
    pageLink: '/#work',
    color: '#cc5200', // Darkest Orange
    icon: <Globe className="w-6 h-6" />
  },
];
