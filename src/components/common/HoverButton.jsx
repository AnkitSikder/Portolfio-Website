import React from 'react';
import { Link } from 'react-router-dom';

export default function HoverButton({ text, href, className, icon, onClick, ...props }) {

  const content = (
    <div className="flex items-center justify-center">
      <div className="inline-grid overflow-hidden items-center">
        <span className="col-start-1 row-start-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:-translate-y-full">
          {text}
        </span>
        <span className="col-start-1 row-start-1 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-y-0">
          {text}
        </span>
      </div>

      {icon && <span className="relative z-10 flex items-center ml-0.5">{icon}</span>}
    </div>
  );

  const baseClasses = "group/btn relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-none font-medium transition-colors duration-300";
  const mergedClasses = `${baseClasses} ${className || ''}`;

  if (href) {
    const isAnchor = href.startsWith('#');
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.endsWith('.pdf');

    if (isExternal) {
      return (
        <a 
          href={href} 
          className={mergedClasses} 
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      );
    }

    // All internal links (anchors, absolute paths like /work/..., relative paths like work/...)
    const to = isAnchor ? `/${href}` : href.startsWith('/') ? href : `/${href}`;
    return (
      <Link to={to} className={mergedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={mergedClasses} {...props}>
      {content}
    </button>
  );
}
