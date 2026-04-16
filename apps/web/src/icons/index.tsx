import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaults = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function LogoIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" {...props}>
      <circle cx="32" cy="32" r="28" stroke="url(#logo-grad)" strokeWidth="2.5" />
      <text
        x="32"
        y="44"
        textAnchor="middle"
        fontFamily="Noto Sans SC, sans-serif"
        fontSize="30"
        fontWeight="900"
        fill="url(#logo-grad)"
      >
        气
      </text>
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3424" />
          <stop offset="100%" stopColor="#ffd24a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ToneWaveIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M3 12c2-4 4-8 6-8s4 4 6 8 4 8 6 8" />
      <circle cx="21" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CharacterIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M4 6h16" />
      <path d="M12 6v14" />
      <path d="M7 10c2 3 5 6 10 8" />
      <path d="M17 10c-2 3-5 6-10 8" />
    </svg>
  );
}

export function SpeakIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M12 18.5a6.5 6.5 0 006.5-6.5V8a6.5 6.5 0 00-13 0v4a6.5 6.5 0 006.5 6.5z" />
      <path d="M12 18.5V22" />
      <path d="M8 22h8" />
      <path d="M9 9.5c0-.5.5-1 1.5-1s1.5.5 1.5 1" />
      <path d="M11.5 9.5c0-.5.5-1 1.5-1s1.5.5 1.5 1" />
      <path d="M9.5 13c.8 1 1.5 1.5 2.5 1.5s1.7-.5 2.5-1.5" />
    </svg>
  );
}

export function BookOpenIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M2 4c2-1 4-1.5 6-1.5S12 3.5 12 4v16c-2-.5-4-1-6-1s-3 .5-4 1V4z" />
      <path d="M22 4c-2-1-4-1.5-6-1.5S12 3.5 12 4v16c2-.5 4-1 6-1s3 .5 4 1V4z" />
    </svg>
  );
}

export function BrainIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M12 2a5 5 0 00-4.7 3.2A4 4 0 004 9a4 4 0 00.8 2.4A4.5 4.5 0 003 15a4.5 4.5 0 003.6 4.4A4 4 0 0012 22" />
      <path d="M12 2a5 5 0 014.7 3.2A4 4 0 0120 9a4 4 0 01-.8 2.4A4.5 4.5 0 0121 15a4.5 4.5 0 01-3.6 4.4A4 4 0 0112 22" />
      <path d="M12 2v20" />
      <path d="M8 8h.01" />
      <path d="M16 8h.01" />
    </svg>
  );
}

export function UsersIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 11.5a3 3 0 013 3V21" />
    </svg>
  );
}

export function SparkleIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path
        d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function PlayIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <polygon points="6,3 20,12 6,21" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckCircleIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l3 3 5-5" />
    </svg>
  );
}

export function FlameIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path
        d="M12 22c4.4 0 7-3.1 7-7 0-3-2.5-6.5-4-8-.7-.7-1.5-1.5-2-2.5-.3-.6-.7-1.3-1-2.5-.3 1.2-.7 1.9-1 2.5-.5 1-1.3 1.8-2 2.5-1.5 1.5-4 5-4 8 0 3.9 2.6 7 7 7z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function GlobeIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function ChevronDownIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
