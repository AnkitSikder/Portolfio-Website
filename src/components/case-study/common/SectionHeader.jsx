import React from 'react';

export default function SectionHeader({ title, heading, description, className = "", headingClassName = "" }) {
  return (
    <div className={`flex flex-col gap-3 md:gap-4 !mb-0 ${className}`}>
      {title && (
        <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary">
          {title}
        </h2>
      )}
      {heading && (
        <h3 className={`font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight max-w-4xl ${headingClassName}`}>
          {heading}
        </h3>
      )}
      {description && (
        <p className="font-clash text-base md:text-lg font-medium tracking-wide text-white/70 max-w-4xl leading-relaxed whitespace-pre-line mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
