import React from 'react';

export default function PdfTableOfContents() {
  const projects = [
    { num: '01', title: 'Immersive Traffic Command', category: 'Virtual Reality' },
    { num: '02', title: 'Jio-bp IMS', category: 'HSE Dashboard Design' },
    { num: '03', title: 'Makhana Seed Collector', category: 'Product Design' },
    { num: '04', title: 'Aura Charge', category: 'Product Design' },
  ];

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-background text-white px-8 py-16 md:p-14 lg:p-20 flex flex-col justify-center">
      
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Massive Title */}
        <div className="md:col-span-5 lg:col-span-6">
          <h1 
            className="font-franchise leading-[0.85] uppercase text-white/90"
            style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', letterSpacing: '-0.02em' }}
          >
            What you will find inside?
          </h1>
          <p className="mt-8 font-clash font-medium text-white/50 max-w-md leading-relaxed">
            A selection of projects that bridge the gap between human needs and technological possibilities, focusing on interactive and industrial design.
          </p>
        </div>

        {/* Right Side: List of Projects */}
        <div className="md:col-span-7 lg:col-span-6 flex flex-col w-full">
          {projects.map((project, index) => (
            <div 
              key={project.num}
              className={`flex items-baseline justify-between py-6 ${
                index !== 0 ? 'border-t border-white/10' : ''
              } ${index === projects.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="flex items-baseline gap-6 md:gap-12">
                <span className="font-franchise text-3xl md:text-5xl text-white/30">
                  {project.num}
                </span>
                <span className="font-clash text-xl md:text-2xl font-medium text-white/90">
                  {project.title}
                </span>
              </div>
              <span className="hidden sm:block font-clash text-xs uppercase tracking-widest text-white/50 font-medium md:font-semibold">
                {project.category}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
