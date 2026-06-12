'use client';

import { useId } from 'react';

/**
 * Premium vector garment renders for cinematic, on-brand product imagery.
 * kind: hoodie | tshirt | polo | cap | trousers | uniform | bulk
 */
export default function GarmentMockup({
  kind = 'hoodie',
  accent = '#22e0ff',
  className = '',
  showStudio = true,
}) {
  const uid = useId().replace(/:/g, '');
  const fab = `fab-${uid}`;
  const rim = `rim-${uid}`;
  const studio = `st-${uid}`;
  const shine = `sh-${uid}`;

  return (
    <svg
      viewBox="0 0 320 380"
      className={className}
      role="img"
      aria-label={`${kind} mockup`}
    >
      <defs>
        <radialGradient id={studio} cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.32" />
          <stop offset="45%" stopColor={accent} stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id={fab} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#222c46" />
          <stop offset="48%" stopColor="#141b30" />
          <stop offset="100%" stopColor="#0a0f1d" />
        </linearGradient>
        <linearGradient id={rim} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {showStudio && <rect x="0" y="0" width="320" height="380" fill={`url(#${studio})`} />}
      {showStudio && (
        <ellipse cx="160" cy="350" rx="96" ry="16" fill="#000" opacity="0.45" />
      )}

      <Garment kind={kind} fab={fab} rim={rim} shine={shine} accent={accent} />
    </svg>
  );
}

function Garment({ kind, fab, rim, shine, accent }) {
  const fill = `url(#${fab})`;
  const stroke = `url(#${rim})`;
  const sw = 2;
  const common = { fill, stroke, strokeWidth: sw, strokeLinejoin: 'round' };

  const Mono = ({ x = 160, y = 188 }) => (
    <g>
      <circle cx={x} cy={y} r="17" fill="none" stroke={accent} strokeWidth="1.6" opacity="0.85" />
      <path
        d={`M${x - 8},${y - 8} h5 l3,9 3,-9 h5 l-7,18 h-5 z`}
        fill={accent}
        opacity="0.95"
      />
    </g>
  );

  switch (kind) {
    case 'cap':
      return (
        <g>
          <path d="M60,212 C60,118 260,118 260,212 Z" {...common} />
          <path d="M60,212 C45,228 50,256 92,260 L250,260 C266,256 268,224 260,212 Z" {...common} />
          <path d="M160,120 L160,212" stroke={accent} strokeWidth="1.4" opacity="0.5" fill="none" />
          <path d="M120,128 C124,170 130,200 138,212" stroke={accent} strokeWidth="1.2" opacity="0.4" fill="none" />
          <path d="M200,128 C196,170 190,200 182,212" stroke={accent} strokeWidth="1.2" opacity="0.4" fill="none" />
          <circle cx="160" cy="126" r="6" {...common} />
          <g transform="translate(0,-22)">
            <Mono x={160} y={196} />
          </g>
          <path d="M70,150 C110,130 170,128 200,140" stroke={`url(#${shine})`} strokeWidth="10" fill="none" opacity="0.8" />
        </g>
      );

    case 'trousers':
      return (
        <g>
          <path d="M108,70 H212 V96 H108 Z" {...common} />
          <path d="M108,92 L100,330 H146 L160,150 L174,330 H220 L212,92 Z" {...common} />
          <path d="M160,96 L160,150" stroke={accent} strokeWidth="1.4" opacity="0.45" fill="none" />
          <path d="M118,108 q14,10 0,22" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.5" />
          <path d="M202,108 q-14,10 0,22" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.5" />
          <rect x="120" y="200" width="22" height="30" rx="3" fill="none" stroke={accent} strokeWidth="1.3" opacity="0.55" />
          <path d="M112,80 H208" stroke={`url(#${shine})`} strokeWidth="6" opacity="0.7" />
        </g>
      );

    case 'tshirt':
      return (
        <g>
          <path
            d="M126,72 L86,96 L58,150 L92,172 L102,160 L102,330 H218 V160 L230,172 L262,150 L234,96 L194,72 C188,104 132,104 126,72 Z"
            {...common}
          />
          <path d="M126,72 C134,100 186,100 194,72" fill="none" stroke={accent} strokeWidth="1.6" opacity="0.7" />
          <Mono y={190} />
          <path d="M96,120 L70,148" stroke={`url(#${shine})`} strokeWidth="8" opacity="0.7" />
        </g>
      );

    case 'polo':
      return (
        <g>
          <path
            d="M124,78 L86,98 L58,150 L92,172 L102,160 L102,330 H218 V160 L230,172 L262,150 L234,98 L196,78 L160,112 Z"
            {...common}
          />
          <path d="M124,78 L160,112 L150,150 L138,108 Z" fill="#0c1322" stroke={accent} strokeWidth="1.6" />
          <path d="M196,78 L160,112 L170,150 L182,108 Z" fill="#0c1322" stroke={accent} strokeWidth="1.6" />
          <path d="M160,112 L160,210" stroke={accent} strokeWidth="1.4" opacity="0.5" fill="none" />
          <circle cx="160" cy="150" r="2.6" fill={accent} />
          <circle cx="160" cy="178" r="2.6" fill={accent} />
          <Mono x={206} y={150} />
          <path d="M96,124 L72,150" stroke={`url(#${shine})`} strokeWidth="8" opacity="0.7" />
        </g>
      );

    case 'uniform':
      return (
        <g>
          <path
            d="M124,78 L86,98 L58,150 L92,172 L102,160 L102,330 H218 V160 L230,172 L262,150 L234,98 L196,78 L160,112 Z"
            {...common}
          />
          <path d="M124,78 L160,112 L150,150 L138,108 Z" fill="#0c1322" stroke={accent} strokeWidth="1.6" />
          <path d="M196,78 L160,112 L170,150 L182,108 Z" fill="#0c1322" stroke={accent} strokeWidth="1.6" />
          <path d="M160,112 L150,150 L160,330 L170,150 Z" fill={accent} opacity="0.18" />
          <rect x="186" y="150" width="26" height="34" rx="4" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.7" />
          <path d="M192,167 l5,6 9,-11" fill="none" stroke={accent} strokeWidth="1.8" />
          <path d="M96,124 L72,150" stroke={`url(#${shine})`} strokeWidth="8" opacity="0.7" />
        </g>
      );

    case 'bulk':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${i * 4},${150 - i * 46})`}>
              <rect x="74" y="0" width="172" height="42" rx="6" fill={fill} stroke={stroke} strokeWidth="2" />
              <path d="M74,12 H246" stroke={accent} strokeWidth="1.2" opacity="0.4" />
              <rect x="146" y="8" width="28" height="26" rx="3" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.8" />
            </g>
          ))}
          <g transform="translate(0,200)">
            <rect x="92" y="0" width="136" height="96" rx="10" fill={fill} stroke={stroke} strokeWidth="2" />
            <path d="M92,30 H228" stroke={accent} strokeWidth="1.3" opacity="0.4" />
            <Mono x={160} y={56} />
          </g>
        </g>
      );

    case 'jacket':
      return (
        <g>
          {/* sleeves + open body */}
          <path
            d="M120,84 L84,100 L58,150 L90,170 L100,160 L100,330 H220 V160 L230,170 L262,150 L236,100 L200,84 L160,120 Z"
            {...common}
          />
          {/* collar flaps */}
          <path d="M120,84 L160,120 L142,150 L130,108 Z" fill="#0c1322" stroke={accent} strokeWidth="1.6" />
          <path d="M200,84 L160,120 L178,150 L190,108 Z" fill="#0c1322" stroke={accent} strokeWidth="1.6" />
          {/* center button placket */}
          <path d="M160,120 L160,330" stroke={accent} strokeWidth="1.6" opacity="0.55" fill="none" />
          {[168, 198, 228, 258, 288].map((y) => (
            <circle key={y} cx="160" cy={y} r="2.6" fill={accent} />
          ))}
          {/* chest pockets */}
          <path d="M116,168 H146 V196 H116 Z" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
          <path d="M116,168 v-9 h30 v9" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
          <path d="M174,168 H204 V196 H174 Z" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
          <path d="M174,168 v-9 h30 v9" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
          {/* waistband + topstitch */}
          <path d="M100,308 H220" stroke={accent} strokeWidth="1.6" opacity="0.5" />
          <path d="M108,150 L108,308 M212,150 L212,308" stroke={accent} strokeWidth="1.1" opacity="0.35" fill="none" />
          <path d="M86,108 L66,150" stroke={`url(#${shine})`} strokeWidth="8" opacity="0.7" />
        </g>
      );

    case 'hoodie':
    default:
      return (
        <g>
          {/* sleeves + body */}
          <path
            d="M118,96 L74,120 L40,240 L82,258 L96,250 L96,332 H224 V250 L238,258 L280,240 L246,120 L202,96 Z"
            {...common}
          />
          {/* hood */}
          <path d="M118,96 C104,52 216,52 202,96 C190,70 130,70 118,96 Z" {...common} />
          <path d="M126,98 C140,150 180,150 194,98 C180,120 140,120 126,98 Z" fill="#0a1020" stroke={accent} strokeWidth="1.6" />
          {/* drawstrings */}
          <path d="M150,108 L150,150 M170,108 L170,150" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="150" cy="152" r="3" fill={accent} />
          <circle cx="170" cy="152" r="3" fill={accent} />
          {/* kangaroo pocket */}
          <path d="M112,250 H208 V300 H112 Z" fill="none" stroke={accent} strokeWidth="1.6" opacity="0.7" />
          <path d="M112,250 L132,272 M208,250 L188,272" stroke={accent} strokeWidth="1.4" opacity="0.6" />
          <Mono x={160} y={210} />
          <path d="M90,140 L62,232" stroke={`url(#${shine})`} strokeWidth="9" opacity="0.65" />
        </g>
      );
  }
}
