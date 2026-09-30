import React, { useRef, forwardRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'motion/react';
import HoverButton from '../common/HoverButton';

export const Card = ({
  i,
  title,
  description,
  pointers,
  url,
  pageLink,
  color,
  icon,
  tags = [],
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] flex items-start justify-center sticky top-20 md:top-28'
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 25}px)`,
        }}
        className={`flex flex-col relative h-[75vh] md:h-[520px] w-full origin-top shadow-2xl`}
      >
          {/* Main Content Section */}
          <div 
            className="border-[3px] border-foreground/80 flex-1 relative rounded-[30px] w-full overflow-hidden flex flex-col md:flex-row group bg-[#171621]"
          >
            {/* Grid Pattern Background */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Left Content */}
            <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-14 pb-2 md:pb-10 flex flex-col justify-start md:justify-center h-auto md:h-full z-10 relative">
              {icon && (
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/5 rounded-2xl mb-6 shadow-sm border border-white/10 shrink-0">
                  {typeof icon === 'string' 
                    ? <img src={icon} alt="Icon" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                    : React.cloneElement(icon, { className: 'w-6 h-6 md:w-8 md:h-8 text-white' })
                  }
                </div>
              )}
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-clash font-semibold tracking-tight leading-[1.1] mb-4 md:mb-6 drop-shadow-md">
                {title}
              </h3>
              
              <div className="w-16 md:w-24 h-[3px] bg-primary rounded-full shadow-[0_0_15px_rgba(255,179,102,0.5)] mb-4 md:mb-6" />
              
              <p className="text-white/80 text-base md:text-xl font-clash font-medium leading-relaxed max-w-md mb-8 md:mb-10 drop-shadow-sm">
                {description}
              </p>
              
              <div>
                <HoverButton 
                  text="Explore Case Study" 
                  href={pageLink}
                  className="bg-primary !text-white px-6 py-2.5 md:px-8 md:py-3 text-base md:text-lg font-semibold hover:bg-white transition-colors duration-500 !rounded-full hover:!text-black shadow-xl inline-flex items-center gap-2" 
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex-1 md:flex-none md:h-full relative p-6 md:p-8 lg:p-10 pt-2 md:pt-8 flex items-center justify-center min-h-[250px]">
              <motion.div
                className="w-full h-full relative rounded-xl md:rounded-2xl overflow-hidden border-[1px] border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-10"
              >
                <img src={url} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                
                {/* Cloud Tags */}
                {tags && tags.length > 0 && (
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 flex flex-wrap gap-2 z-20">
                    {tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-black/50 backdrop-blur-md text-white text-xs md:text-sm font-medium rounded-full border border-white/20 shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
      </motion.div>
    </div>
  );
};

const StackingCards = forwardRef(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div className='w-full' ref={container}>
      <section className='w-full'>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              pageLink={project.pageLink}
              title={project.title}
              color={project.color}
              icon={project.icon}
              description={project.description}
              pointers={project.pointers}
              tags={project.tags}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </div>
  );
});

StackingCards.displayName = 'StackingCards';

export default StackingCards;
