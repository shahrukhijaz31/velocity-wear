'use client';

import { useId } from 'react';

/**
 * Premium vector towel renders for the wholesale-towels page.
 * kind: folded | stack | rolled
 */
export default function TowelMockup({
  kind = 'stack',
  accent = '#22e0ff',
  className = '',
  showStudio = true,
}) {
  const uid = useId().replace(/:/g, '');
  const fab = `tf-${uid}`;
  const rim = `tr-${uid}`;
  const studio = `ts-${uid}`;
  const shine = `tsh-${uid}`;

  return (
    <svg viewBox="0 0 320 380" className={className} role="img" aria-label={`${kind} towel mockup`}>
      <defs>
        <radialGradient id={studio} cx="50%" cy="40%" r="62%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="45%" stopColor={accent} stopOpacity="0.07" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id={fab} x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#243049" />
          <stop offset="50%" stopColor="#161d33" />
          <stop offset="100%" stopColor="#0b111f" />
        </linearGradient>
        <linearGradient id={rim} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.2" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {showStudio && <rect x="0" y="0" width="320" height="380" fill={`url(#${studio})`} />}
      {showStudio && <ellipse cx="160" cy="352" rx="100" ry="15" fill="#000" opacity="0.45" />}

      <Towel kind={kind} fab={fab} rim={rim} shine={shine} accent={accent} />
    </svg>
  );
}

function Towel({ kind, fab, rim, shine, accent }) {
  const fill = `url(#${fab})`;
  const stroke = `url(#${rim})`;
  const common = { fill, stroke, strokeWidth: 2, strokeLinejoin: 'round' };

  // Embroidered VW monogram badge
  const Mono = ({ x, y, r = 13 }) => (
    <g>
      <circle cx={x} cy={y} r={r} fill="none" stroke={accent} strokeWidth="1.5" opacity="0.9" />
      <path d={`M${x - 6},${y - 6} h4 l2,7 2,-7 h4 l-5.5,14 h-4 z`} fill={accent} />
    </g>
  );

  // Decorative woven border band on a folded towel
  const Band = ({ x, y, w, mono = true }) => (
    <g>
      <rect x={x} y={y} width={w} height="34" fill={accent} opacity="0.12" />
      <line x1={x} y1={y} x2={x + w} y2={y} stroke={accent} strokeWidth="1.4" opacity="0.7" />
      <line x1={x} y1={y + 34} x2={x + w} y2={y + 34} stroke={accent} strokeWidth="1.4" opacity="0.7" />
      {Array.from({ length: Math.floor(w / 14) }).map((_, i) => (
        <line key={i} x1={x + 8 + i * 14} y1={y + 6} x2={x + 8 + i * 14} y2={y + 28} stroke={accent} strokeWidth="1.1" opacity="0.35" />
      ))}
      {mono && <Mono x={x + w / 2} y={y + 17} r={11} />}
    </g>
  );

  switch (kind) {
    case 'folded':
      return (
        <g>
          <rect x="62" y="96" width="196" height="200" rx="16" {...common} />
          {/* folded spine (right rounded edges) */}
          <path d="M250,108 q12,4 0,18 M250,150 q12,4 0,18 M250,196 q12,4 0,18 M250,240 q12,4 0,18" stroke={accent} strokeWidth="1.4" fill="none" opacity="0.45" />
          {/* fold creases */}
          <line x1="78" y1="140" x2="244" y2="140" stroke={accent} strokeWidth="1" opacity="0.25" />
          <line x1="78" y1="180" x2="244" y2="180" stroke={accent} strokeWidth="1" opacity="0.25" />
          <Band x={62} y={244} w={196} />
          <path d="M84,120 L150,120" stroke={`url(#${shine})`} strokeWidth="8" opacity="0.7" />
        </g>
      );

    case 'rolled':
      return (
        <g>
          {/* three rolled towels standing */}
          {[
            { x: 86, h: 150, a: 1 },
            { x: 138, h: 178, a: 1 },
            { x: 190, h: 150, a: 1 },
          ].map((t, i) => (
            <g key={i}>
              <rect x={t.x} y={296 - t.h} width="46" height={t.h} rx="14" {...common} />
              {/* spiral end */}
              <ellipse cx={t.x + 23} cy={296 - t.h} rx="23" ry="11" fill="#0c1322" stroke={accent} strokeWidth="1.8" />
              <ellipse cx={t.x + 23} cy={296 - t.h} rx="14" ry="6.5" fill="none" stroke={accent} strokeWidth="1.2" opacity="0.6" />
              <circle cx={t.x + 23} cy={296 - t.h} r="2" fill={accent} />
              {/* ribbon band */}
              <rect x={t.x} y={296 - t.h / 2 - 14} width="46" height="28" fill={accent} opacity="0.12" />
              <line x1={t.x} y1={296 - t.h / 2 - 14} x2={t.x + 46} y2={296 - t.h / 2 - 14} stroke={accent} strokeWidth="1.3" opacity="0.7" />
              <line x1={t.x} y1={296 - t.h / 2 + 14} x2={t.x + 46} y2={296 - t.h / 2 + 14} stroke={accent} strokeWidth="1.3" opacity="0.7" />
            </g>
          ))}
          <Mono x={161} y={296 - 178 / 2} r={10} />
        </g>
      );

    case 'stack':
    default:
      return (
        <g>
          {/* three folded towels stacked */}
          <rect x="70" y="246" width="180" height="52" rx="12" {...common} />
          <line x1="86" y1="272" x2="234" y2="272" stroke={accent} strokeWidth="1" opacity="0.25" />
          <rect x="78" y="190" width="164" height="52" rx="12" {...common} />
          <line x1="92" y1="216" x2="228" y2="216" stroke={accent} strokeWidth="1" opacity="0.25" />
          <rect x="86" y="118" width="148" height="68" rx="12" {...common} />
          {/* top towel folded spine */}
          <path d="M222,130 q10,4 0,16 M222,158 q10,4 0,16" stroke={accent} strokeWidth="1.3" fill="none" opacity="0.45" />
          <Band x={86} y={140} w={148} />
          <path d="M104,128 L168,128" stroke={`url(#${shine})`} strokeWidth="7" opacity="0.7" />
        </g>
      );
  }
}
