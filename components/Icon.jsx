'use client';

import {
  Package,
  Gem,
  Zap,
  Tag,
  Truck,
  Sparkles,
  PenTool,
  UploadCloud,
  ReceiptText,
  BadgeCheck,
  Factory,
  ShoppingBag,
  Layers,
  Printer,
  Flame,
  Shirt,
  Briefcase,
  Dumbbell,
  Leaf,
  BedDouble,
  Scale,
  Palette,
  Award,
  Ruler,
  Droplets,
} from 'lucide-react';

// Custom garment line-icons (24x24, stroke 2, round) — matched to Lucide family.
function svg(children) {
  return function GarmentIcon({ className = '', strokeWidth = 1.9, ...props }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
      >
        {children}
      </svg>
    );
  };
}

const Hoodie = svg(
  <>
    <path d="M8 3 4.5 5.2 3 10.3l3 1.4V21h12v-9.3l3-1.4-1.5-5.1L16 3" />
    <path d="M8 3c.6 2.6 7.4 2.6 8 0" />
    <path d="M9.5 13h5v4.5h-5z" />
    <path d="M12 5.4v3.2" />
  </>
);

const Tee = svg(
  <>
    <path d="M8.5 3 4 6l2.2 3 1.8-1v11h8V8l1.8 1L20 6l-4.5-3" />
    <path d="M8.5 3c.8 2.4 6.2 2.4 7 0" />
  </>
);

const Cap = svg(
  <>
    <path d="M4 14a8 8 0 0 1 16 0" />
    <path d="M4 14h17.5l-2 3H4z" />
    <path d="M12 6.2V14" />
  </>
);

const Trousers = svg(
  <>
    <path d="M6 3h12l-.6 18h-4.2L12 9.5 10.8 21H6.6z" />
    <path d="M6 7.5h12" />
  </>
);

const Embroidery = svg(
  <>
    <path d="M3 21l8-8" />
    <path d="M13 5.5 18.5 11l-2.3 2.3-5.5-5.5z" />
    <path d="M16 4.2a2.4 2.4 0 0 1 3.4 3.4" />
    <circle cx="6.2" cy="17.8" r="1.1" />
  </>
);

// Name → component map.
const MAP = {
  // garments (custom)
  hoodie: Hoodie,
  tshirt: Tee,
  cap: Cap,
  trousers: Trousers,
  embroidery: Embroidery,
  // garments / services (lucide)
  polo: Shirt,
  uniform: Briefcase,
  factory: Factory,
  cart: ShoppingBag,
  screen: Layers,
  dtf: Printer,
  sublimation: Flame,
  // why-choose-us + process
  box: Package,
  gem: Gem,
  bolt: Zap,
  tag: Tag,
  truck: Truck,
  sparkles: Sparkles,
  pen: PenTool,
  upload: UploadCloud,
  quote: ReceiptText,
  check: BadgeCheck,
  // towels
  dumbbell: Dumbbell,
  spa: Leaf,
  hotel: BedDouble,
  scale: Scale,
  palette: Palette,
  award: Award,
  ruler: Ruler,
  droplets: Droplets,
};

export default function Icon({ name, className = 'h-6 w-6', ...props }) {
  const Cmp = MAP[name] || Sparkles;
  return <Cmp className={className} {...props} />;
}
