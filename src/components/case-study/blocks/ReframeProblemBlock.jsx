import React from 'react';

export default function ReframeProblemBlock({ content }) {
  const {
    heading,
    statement1,
    statement2,
    statement3,
    statement4,
    challengeTitle,
    challengeText,
  } = content;

  return (
    <section className="py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 bg-background text-white w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
        
        {/* Intro & Statements Wrapper */}
        <div className="flex flex-col gap-3 md:gap-4 max-w-4xl">
          {/* Intro */}
          {heading && (
            <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary">
              {heading}
            </h2>
          )}

          {/* Large Typographic Statement */}
          <div className="flex flex-col gap-6 md:gap-8 text-left">
            {statement1 && (
              <p className="font-clash text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
                {statement1}
              </p>
            )}
            {statement2 && (
              <p className="font-clash text-xl md:text-2xl font-medium text-white/90 leading-relaxed pl-0 md:pl-12 lg:pl-24">
                {statement2}
              </p>
            )}
            {statement3 && (
              <p className="font-clash text-xl md:text-2xl font-medium text-primary leading-relaxed">
                {statement3}
              </p>
            )}
            {statement4 && (
              <p className="font-clash text-xl md:text-2xl font-medium text-white/90 leading-relaxed pl-0 md:pl-12 lg:pl-24">
                {statement4}
              </p>
            )}
          </div>
        </div>

        {/* Design Challenge Block */}
        {(challengeTitle || challengeText) && (
          <div className="relative max-w-4xl mx-auto w-full mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent rounded-[2rem] blur-xl opacity-60" />
            <div className="relative bg-background border border-primary/20 rounded-[2rem] p-6 md:p-10 lg:p-12 md:text-center shadow-2xl">
              {challengeTitle && (
                <div className="flex md:justify-center items-center gap-4 mb-6">
                  <div className="h-px bg-primary/40 flex-1 hidden md:block" />
                  <span className="block font-clash text-sm uppercase tracking-[0.2em] text-primary shrink-0">
                    {challengeTitle}
                  </span>
                  <div className="h-px bg-primary/40 flex-1 hidden md:block" />
                </div>
              )}
              {challengeText && (
                <h3 className="font-clash text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
                  {challengeText}
                </h3>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
