/**
 * Subtle background illustration patterns for sections.
 * Each variant renders faded, brand-colored SVG shapes relevant to section content.
 */
const patterns = {
  training: (
    <>
      <svg className="absolute top-8 right-8 w-48 h-48 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10 L90 25 L90 80 L50 95 L10 80 L10 25 Z M50 10 L50 95 M10 25 L90 25" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M25 35 L45 35 M25 45 L45 45 M25 55 L45 55 M55 35 L75 35 M55 45 L75 45 M55 55 L75 55" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-12 left-6 w-40 h-40 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="35" />
        <circle cx="50" cy="50" r="20" />
        <path d="M50 15 L50 85 M15 50 L85 50" />
      </svg>
    </>
  ),
  services: (
    <>
      <svg className="absolute top-10 left-8 w-52 h-52 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="15" y="15" width="70" height="20" rx="2" />
        <rect x="15" y="42" width="70" height="20" rx="2" />
        <rect x="15" y="69" width="70" height="20" rx="2" />
        <circle cx="75" cy="25" r="3" fill="currentColor" />
        <circle cx="75" cy="52" r="3" fill="currentColor" />
        <circle cx="75" cy="79" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-8 right-10 w-44 h-44 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="50" cy="20" r="8" /><circle cx="20" cy="60" r="8" /><circle cx="80" cy="60" r="8" /><circle cx="50" cy="85" r="8" />
        <line x1="50" y1="28" x2="20" y2="52" /><line x1="50" y1="28" x2="80" y2="52" /><line x1="20" y1="68" x2="50" y2="77" /><line x1="80" y1="68" x2="50" y2="77" />
      </svg>
    </>
  ),
  courses: (
    <>
      <svg className="absolute top-6 right-10 w-56 h-56 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="50,10 90,30 50,50 10,30" />
        <line x1="50" y1="50" x2="50" y2="75" />
        <path d="M25 38 L25 60 Q50 75 75 60 L75 38" />
        <rect x="45" y="75" width="10" height="5" fill="currentColor" opacity="0.5" />
      </svg>
      <svg className="absolute bottom-10 left-8 w-36 h-36 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 20 L80 20 L80 80 L20 80 Z M30 35 L70 35 M30 45 L70 45 M30 55 L60 55 M30 65 L50 65" />
        <path d="M65 60 L80 75 L90 55" strokeWidth="3" />
      </svg>
    </>
  ),
  testimonials: (
    <>
      <svg className="absolute top-6 left-6 w-44 h-44 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="currentColor">
        <path d="M10 40 Q10 20 30 20 L30 35 Q20 35 20 45 L30 45 L30 60 L10 60 Z M55 40 Q55 20 75 20 L75 35 Q65 35 65 45 L75 45 L75 60 L55 60 Z" />
      </svg>
      <svg className="absolute bottom-8 right-8 w-36 h-36 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,5 61,35 95,35 68,55 79,85 50,65 21,85 32,55 5,35 39,35" />
      </svg>
    </>
  ),
  expertise: (
    <>
      <svg className="absolute top-8 right-6 w-48 h-48 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M50 10 L85 25 L85 55 Q85 80 50 95 Q15 80 15 55 L15 25 Z" />
        <path d="M35 50 L45 60 L65 40" strokeWidth="3" />
      </svg>
      <svg className="absolute bottom-6 left-10 w-40 h-40 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="10" y="10" width="25" height="25" rx="3" /><rect x="40" y="10" width="25" height="25" rx="3" /><rect x="70" y="10" width="20" height="25" rx="3" />
        <rect x="10" y="40" width="25" height="25" rx="3" /><rect x="40" y="40" width="25" height="25" rx="3" /><rect x="70" y="40" width="20" height="25" rx="3" />
        <rect x="10" y="70" width="25" height="20" rx="3" /><rect x="40" y="70" width="25" height="20" rx="3" /><rect x="70" y="70" width="20" height="20" rx="3" />
      </svg>
    </>
  ),
  methodology: (
    <>
      <svg className="absolute top-10 left-6 w-52 h-52 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="10" /><circle cx="80" cy="20" r="10" /><circle cx="20" cy="80" r="10" /><circle cx="80" cy="80" r="10" />
        <path d="M30 20 L70 20 M80 30 L80 70 M70 80 L30 80 M20 70 L20 30" strokeDasharray="4 3" />
        <path d="M55 20 L65 20 L60 15 M65 20 L60 25" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-8 right-8 w-36 h-36 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 50 L30 50 L40 30 L60 70 L70 50 L90 50" />
      </svg>
    </>
  ),
  faq: (
    <>
      <svg className="absolute top-6 right-8 w-48 h-48 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="currentColor">
        <text x="10" y="55" fontSize="60" fontFamily="serif" fontWeight="bold">?</text>
      </svg>
      <svg className="absolute bottom-10 left-6 w-36 h-36 opacity-[0.06] text-primary" viewBox="0 0 100 100" fill="currentColor">
        <text x="15" y="70" fontSize="70" fontFamily="serif" fontWeight="bold">?</text>
      </svg>
    </>
  ),
  contact: (
    <>
      <svg className="absolute top-8 right-8 w-48 h-48 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="25" width="80" height="55" rx="3" />
        <path d="M10 25 L50 55 L90 25" />
        <path d="M10 80 L35 55 M90 80 L65 55" />
      </svg>
      <svg className="absolute bottom-8 left-6 w-40 h-40 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="40" r="25" />
        <path d="M50 65 L50 85 M40 75 L60 75" />
      </svg>
    </>
  ),
  mission: (
    <>
      <svg className="absolute top-8 left-8 w-48 h-48 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="40" /><circle cx="50" cy="50" r="28" /><circle cx="50" cy="50" r="16" /><circle cx="50" cy="50" r="5" fill="currentColor" />
        <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="4 4" /><line x1="5" y1="50" x2="95" y2="50" strokeDasharray="4 4" />
      </svg>
      <svg className="absolute bottom-6 right-10 w-36 h-36 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M50 10 L90 90 L10 90 Z" />
        <path d="M50 30 L75 80 L25 80 Z" />
      </svg>
    </>
  ),
  timeline: (
    <>
      <svg className="absolute top-6 right-8 w-44 h-44 opacity-[0.07] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="20" width="80" height="70" rx="3" />
        <line x1="10" y1="35" x2="90" y2="35" />
        <line x1="30" y1="20" x2="30" y2="10" /><line x1="70" y1="20" x2="70" y2="10" />
        <rect x="20" y="45" width="15" height="12" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="42" y="45" width="15" height="12" rx="1" /><rect x="65" y="45" width="15" height="12" rx="1" />
        <rect x="20" y="65" width="15" height="12" rx="1" /><rect x="42" y="65" width="15" height="12" rx="1" />
      </svg>
      <svg className="absolute bottom-10 left-8 w-36 h-36 opacity-[0.05] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="50" y1="10" x2="50" y2="90" />
        <circle cx="50" cy="25" r="6" fill="currentColor" opacity="0.3" />
        <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.3" />
        <circle cx="50" cy="75" r="6" fill="currentColor" opacity="0.3" />
        <line x1="56" y1="25" x2="80" y2="25" /><line x1="56" y1="50" x2="80" y2="50" /><line x1="56" y1="75" x2="80" y2="75" />
      </svg>
    </>
  ),
  stats: (
    <>
      <svg className="absolute top-6 left-8 w-44 h-44 opacity-[0.08] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="15" y1="85" x2="85" y2="85" /><line x1="15" y1="15" x2="15" y2="85" />
        <rect x="25" y="55" width="12" height="30" fill="currentColor" opacity="0.3" />
        <rect x="45" y="35" width="12" height="50" fill="currentColor" opacity="0.3" />
        <rect x="65" y="20" width="12" height="65" fill="currentColor" opacity="0.3" />
      </svg>
      <svg className="absolute bottom-6 right-8 w-36 h-36 opacity-[0.06] text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="40" />
        <path d="M50 50 L50 15" /><path d="M50 50 L80 65" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>
    </>
  ),
} as const;

export type PatternVariant = keyof typeof patterns;

interface SectionPatternProps {
  variant: PatternVariant;
}

const SectionPattern = ({ variant }: SectionPatternProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {patterns[variant]}
    </div>
  );
};

export default SectionPattern;
