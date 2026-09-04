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
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[15%] aspect-[2/3] h-auto md:aspect-auto md:h-[600px] w-full origin-top shadow-2xl`}
      >
        {/* Top Header Section */}
        <div 
          className="border-[3px] border-foreground/80 bg-[#171621] flex items-center p-4 md:p-5 rounded-tl-[30px] rounded-tr-[30px] w-full shrink-0 relative z-10"
          style={{ borderBottomWidth: '1.5px' }}
        >
          <div className="flex gap-3 md:gap-4 items-center w-full">
            <div className="relative shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-foreground">
              {icon && (typeof icon === 'string' 
                ? <img src={icon} alt="Icon" className="w-full h-full object-contain" />
                : React.cloneElement(icon, { className: 'w-full h-full' })
              )}
            </div>
            <h2 className="font-clash font-medium text-xl md:text-2xl text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
              {title}
            </h2>
          </div>
        </div>

          {/* Bottom Image Section */}
          <div 
            className="border-[3px] border-foreground/80 flex-1 relative rounded-bl-[30px] rounded-br-[30px] w-full overflow-hidden group cursor-pointer"
            style={{ borderTopWidth: '1.5px', backgroundColor: color }}
          >
            <motion.div
              className="w-full h-full relative"
              style={{ scale: imageScale }}
            >
              <img src={url} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 transition-colors duration-500 group-hover:bg-black/70 pointer-events-none" />
            </motion.div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-16 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-[#171621]/95 via-[#171621]/80 md:via-[#171621]/50 to-transparent">
              <div className="flex flex-col gap-6 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <h3 className="text-white text-4xl md:text-6xl lg:text-7xl font-clash font-semibold tracking-tight leading-none drop-shadow-md">
                  {title}
                </h3>
                
                <div className="w-24 h-[3px] bg-primary rounded-full shadow-[0_0_15px_rgba(255,179,102,0.5)]" />
                
                <p className="text-white/90 text-xl md:text-3xl font-hanken font-light leading-relaxed max-w-3xl drop-shadow-sm">
                  {description}
                </p>
                
                <div className="mt-6">
                  <HoverButton 
                    text="Explore Case Study" 
                    href={pageLink}
                    className="bg-primary !text-white px-10 py-4 text-lg md:text-xl font-semibold hover:bg-white transition-colors duration-500 !rounded-full hover:!text-black shadow-xl" 
                  />
                </div>
              </div>
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
