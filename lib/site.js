// Central content source for Velocity Wear one-page site.

export const BRAND = {
  name: 'Velocity Wear',
  tagline: 'Create It. Wear It. Own It.',
  moq: 20,
  whatsapp: '+1 (555) 010-2025',
  whatsappLink: 'https://wa.me/15550102025',
  email: 'hello@velocity-wear.com',
  instagram: 'https://www.instagram.com/velocitywear.brand/',
  phone: '+1 (555) 010-2025',
};

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'Towels', href: '/wholesale-towels' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Process', href: '/#process' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICES = [
  {
    title: 'Custom Hoodies Printing',
    desc: 'Heavyweight 380–450 GSM fleece, oversized and classic fits, printed or embroidered to gallery standard.',
    icon: 'hoodie',
    tag: 'Best Seller',
  },
  {
    title: 'Custom Polo Shirts',
    desc: 'Breathable piqué cotton with crisp embroidered logos — the corporate uniform upgrade.',
    icon: 'polo',
  },
  {
    title: 'Custom T-Shirts',
    desc: 'Combed ring-spun cotton tees with vivid DTF and screen prints that survive 60+ washes.',
    icon: 'tshirt',
  },
  {
    title: 'Custom Caps Printing',
    desc: '3D puff embroidery, structured & dad caps, snapbacks and trucker styles for any drop.',
    icon: 'cap',
  },
  {
    title: 'Custom Trousers',
    desc: 'Cargo, joggers and tailored fits with tonal branding and reinforced stitching.',
    icon: 'trousers',
  },
  {
    title: 'Custom Denim Jackets',
    desc: 'Premium washed denim with custom hardware, embroidery, patches and branded detailing.',
    icon: 'jacket',
    tag: 'New',
  },
  {
    title: 'Corporate Uniforms',
    desc: 'Head-to-toe staff kits with consistent sizing, color matching and managed reorders.',
    icon: 'uniform',
  },
  {
    title: 'Bulk Apparel Manufacturing',
    desc: 'Cut-and-sew production at scale with tiered pricing and dedicated account managers.',
    icon: 'factory',
  },
  {
    title: 'Ecommerce Brand Merch',
    desc: 'Launch-ready private label runs, custom tags, packaging and dropship fulfilment.',
    icon: 'cart',
  },
  {
    title: 'Screen Printing',
    desc: 'Ultra-opaque plastisol & water-based inks for punchy, long-lasting graphics.',
    icon: 'screen',
  },
  {
    title: 'Embroidery Services',
    desc: 'High-stitch-count digitizing for premium logos with a tactile, luxury finish.',
    icon: 'embroidery',
  },
  {
    title: 'DTF Printing',
    desc: 'Full-color direct-to-film transfers — no minimums per design, infinite detail.',
    icon: 'dtf',
  },
  {
    title: 'Sublimation Printing',
    desc: 'All-over edge-to-edge prints baked into the fabric for jerseys & performance wear.',
    icon: 'sublimation',
  },
];

export const WHY = [
  { title: 'Minimum Order — 20 Pieces', desc: 'The lowest premium MOQ in the industry. Start small, scale fast.', icon: 'box', value: 20, suffix: '', label: 'Piece MOQ' },
  { title: 'Premium Fabric Quality', desc: 'Hand-selected mills, GSM-verified, pre-shrunk and color-locked.', icon: 'gem', value: 100, suffix: '%', label: 'Quality Checked' },
  { title: 'Fast Turnaround', desc: 'Approved mockup to your door in days, not weeks.', icon: 'bolt', value: 7, suffix: 'd', label: 'Avg Turnaround' },
  { title: 'Bulk Order Discounts', desc: 'Tiered pricing that rewards volume — up to 40% off at scale.', icon: 'tag', value: 40, suffix: '%', label: 'Max Savings' },
  { title: 'Nationwide Delivery', desc: 'Tracked shipping to every doorstep, with worldwide options.', icon: 'truck', value: 50, suffix: '+', label: 'Cities Served' },
  { title: 'Custom Branding Options', desc: 'Woven labels, custom tags, hang cards and branded packaging.', icon: 'sparkles', value: 12, suffix: '', label: 'Branding Add-ons' },
  { title: 'Professional Design Support', desc: 'In-house designers refine your artwork until it is print-perfect.', icon: 'pen', value: 24, suffix: '/7', label: 'Design Support' },
];

export const PRODUCTS = [
  { name: 'Hoodies', code: 'VW-H1', spec: '380–450 GSM Fleece', accent: '#22e0ff', kind: 'hoodie' },
  { name: 'Caps', code: 'VW-C2', spec: '3D Puff Embroidery', accent: '#2e7bff', kind: 'cap' },
  { name: 'Polo Shirts', code: 'VW-P3', spec: 'Pima Piqué Cotton', accent: '#4f9dff', kind: 'polo' },
  { name: 'T-Shirts', code: 'VW-T4', spec: 'Ring-Spun 240 GSM', accent: '#22e0ff', kind: 'tshirt' },
  { name: 'Trousers', code: 'VW-TR5', spec: 'Cargo & Joggers', accent: '#1f5fff', kind: 'trousers' },
  { name: 'Denim Jackets', code: 'VW-DJ6', spec: 'Premium Washed Denim', accent: '#2e7bff', kind: 'jacket' },
];

export const PROCESS = [
  { step: '01', title: 'Share Your Design', desc: 'Upload artwork or a rough sketch — our team handles the rest.', icon: 'upload' },
  { step: '02', title: 'Get Your Quote', desc: 'Transparent, itemized pricing within hours. No hidden fees.', icon: 'quote' },
  { step: '03', title: 'Approve The Mockup', desc: 'We render a photorealistic mockup. You approve every detail.', icon: 'check' },
  { step: '04', title: 'Production', desc: 'Precision printing & stitching under strict quality control.', icon: 'factory' },
  { step: '05', title: 'Delivery', desc: 'Tracked, fast and protected — straight to your door.', icon: 'truck' },
];

export const STATS = [
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 50000, suffix: '+', label: 'Products Printed' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 7, suffix: 'd', label: 'Avg Production Time' },
];

export const GALLERY = [
  { title: 'Oversized Hoodies', cat: 'Streetwear', kind: 'hoodie', span: 'tall' },
  { title: 'Snapback Caps', cat: 'Headwear', kind: 'cap', span: 'short' },
  { title: 'Corporate Uniforms', cat: 'Business', kind: 'uniform', span: 'short' },
  { title: 'Performance Polos', cat: 'Polo', kind: 'polo', span: 'tall' },
  { title: 'Graphic Tees', cat: 'Streetwear', kind: 'tshirt', span: 'short' },
  { title: 'Custom Denim Jackets', cat: 'Denim', kind: 'jacket', span: 'short' },
  { title: 'Bulk Production Run', cat: 'Bulk Orders', kind: 'bulk', span: 'wide' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Velocity Wear turned our brand vision into apparel that sells itself. The hoodie quality is genuinely premium — our customers think we spent five times more.',
    name: 'Marcus Reed',
    role: 'Founder, NOIR Streetwear',
    rating: 5,
  },
  {
    quote:
      'We kitted out 240 staff across 6 locations. Sizing was flawless, color matching exact, and the reorder process is effortless. A true partner.',
    name: 'Priya Anand',
    role: 'Operations Lead, Helix Group',
    rating: 5,
  },
  {
    quote:
      'The 20-piece minimum let us test three designs before committing to a full drop. The DTF detail is unreal. We sold out the first batch in 48 hours.',
    name: 'Diego Fuentes',
    role: 'Creative Director, Apex Club',
    rating: 5,
  },
  {
    quote:
      'From sketch to delivery in eight days. The mockups were so accurate there were zero surprises. This is how custom apparel should feel.',
    name: 'Hannah Cole',
    role: 'Brand Manager, Lumen Co.',
    rating: 5,
  },
];

export const TRUST_BADGES = [
  'Premium Fabric',
  'Eco Inks',
  'Color-Locked',
  'Tracked Delivery',
  'Reorder Ready',
];

export const PRODUCT_TYPES = [
  'Hoodies',
  'T-Shirts',
  'Polo Shirts',
  'Caps',
  'Trousers',
  'Denim Jackets',
  'Corporate Uniforms',
  'Ecommerce Merch',
  'Other',
];

/* ------------------------------------------------------------------ */
/*  WHOLESALE TOWELS                                                    */
/* ------------------------------------------------------------------ */

export const TOWEL = {
  moq: 50,
  tagline: 'Hospitality-grade towels. Your brand, woven in.',
};

export const TOWEL_USES = [
  {
    key: 'gym',
    title: 'Gym & Fitness',
    desc: 'Compact, quick-dry and sweat-hungry. Built to survive daily commercial laundry cycles without going thin.',
    icon: 'dumbbell',
    accent: '#22e0ff',
    points: ['Fast-drying weave', 'Snag-resistant edges', 'Branded gym towels'],
  },
  {
    key: 'spa',
    title: 'Spa & Wellness',
    desc: 'Plush, ultra-soft and indulgent. High-GSM combed cotton that feels like a treatment in itself.',
    icon: 'spa',
    accent: '#2e7bff',
    points: ['Cloud-soft handfeel', 'Maximum absorbency', 'Dobby & satin borders'],
  },
  {
    key: 'hotel',
    title: 'Hotels & Resorts',
    desc: 'Crisp hospitality whites with the weight that signals luxury. Colorfast and wash-cycle tested.',
    icon: 'hotel',
    accent: '#4f9dff',
    points: ['Bright, lasting whites', 'Heavyweight feel', 'Woven hotel labels'],
  },
];

export const TOWEL_SIZES = [
  {
    name: 'Small',
    tag: 'Gym / Hand',
    dims: '40 × 60 cm',
    dimsIn: '16 × 24 in',
    gsm: '450 GSM',
    weight: '≈ 160 g',
    use: 'Workouts, hands & face, salons',
    accent: '#22e0ff',
    kind: 'folded',
  },
  {
    name: 'Medium',
    tag: 'Spa / Bath',
    dims: '70 × 140 cm',
    dimsIn: '28 × 55 in',
    gsm: '550 GSM',
    weight: '≈ 600 g',
    use: 'Spas, sports, everyday bath',
    accent: '#2e7bff',
    kind: 'stack',
  },
  {
    name: 'Large',
    tag: 'Hotel Bath Sheet',
    dims: '90 × 180 cm',
    dimsIn: '35 × 71 in',
    gsm: '650 GSM',
    weight: '≈ 950 g',
    use: 'Hotels, resorts, pool & beach',
    accent: '#4f9dff',
    kind: 'rolled',
  },
];

export const TOWEL_SPECS = [
  { value: 700, suffix: ' GSM', label: 'Up To Premium Weight' },
  { value: 3, suffix: '', label: 'Stock Sizes' },
  { value: 20, suffix: '+', label: 'Colourways' },
  { value: 50, suffix: ' pcs', label: 'Low Wholesale MOQ' },
];

export const TOWEL_WHY = [
  { title: '100% Combed Cotton', desc: 'Long-staple, ring-spun yarns for lasting softness and bite-free absorbency.', icon: 'sparkles' },
  { title: 'GSM From 400–700', desc: 'Dial in exactly the weight and feel your gym, spa or hotel needs.', icon: 'scale' },
  { title: 'Colourfast Dyeing', desc: 'Reactive-dyed and wash-tested so colours and whites stay true.', icon: 'palette' },
  { title: 'Custom Embroidery', desc: 'Logos, monograms and woven labels stitched in premium detail.', icon: 'embroidery' },
  { title: 'Low Wholesale MOQ', desc: 'Start from just 50 pieces per design — scale into the thousands.', icon: 'box' },
  { title: 'Fast Bulk Turnaround', desc: 'Stocked greige & in-house finishing keep big orders moving fast.', icon: 'bolt' },
  { title: 'Nationwide Delivery', desc: 'Tracked shipping to every doorstep, with worldwide freight options.', icon: 'truck' },
  { title: 'Commercial-Grade', desc: 'Reinforced hems engineered for industrial wash cycles.', icon: 'award' },
];

export const TOWEL_BRANDING = [
  { title: 'Embroidered Logos', desc: 'High-stitch-count branding on the pile or border.', icon: 'embroidery' },
  { title: 'Woven Labels & Tabs', desc: 'Premium loop labels for a finished, retail-ready look.', icon: 'tag' },
  { title: 'Custom Colours', desc: 'Match your brand palette or classic hospitality white.', icon: 'palette' },
  { title: 'Dobby & Satin Borders', desc: 'Decorative borders that elevate the perceived value.', icon: 'sparkles' },
  { title: 'Individual Packaging', desc: 'Belly bands, sleeves and boxed sets for gifting & retail.', icon: 'cart' },
  { title: 'Design Support', desc: 'Our team digitises artwork and proofs every mockup.', icon: 'pen' },
];

export const TOWEL_TIERS = [
  { range: '50 – 199', label: 'Starter', discount: 'Base wholesale' },
  { range: '200 – 999', label: 'Growth', discount: 'Up to 20% off' },
  { range: '1,000+', label: 'Enterprise', discount: 'Up to 35% off' },
];

export const TOWEL_TYPES = ['Gym Towels', 'Spa Towels', 'Hotel Towels', 'Mixed / Multiple', 'Other'];
export const TOWEL_SIZE_OPTIONS = ['Small (40×60)', 'Medium (70×140)', 'Large (90×180)', 'Custom size'];

/* ------------------------------------------------------------------ */
/*  SEO / AEO / INTERNATIONAL                                          */
/* ------------------------------------------------------------------ */

// Canonical production URL — override per environment on Vercel via
// NEXT_PUBLIC_SITE_URL (e.g. https://velocity-wear.com). No trailing slash.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://velocity-wear.com').replace(/\/+$/, '');

// Markets we actively sell & ship to — used for content + schema areaServed.
export const COUNTRIES_SERVED = [
  'United Kingdom',
  'United States',
  'Canada',
  'Ireland',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Belgium',
  'Sweden',
  'Australia',
  'United Arab Emirates',
  'New Zealand',
  'Saudi Arabia',
];

// Hreflang region targets (same English content served to each region — UK, USA & Europe focus).
export const HREFLANG = [
  'en-US', 'en-GB', 'en-CA', 'en-IE', 'en-AU',
  'en-DE', 'en-FR', 'en-IT', 'en-ES', 'en-NL', 'en-BE', 'en-SE',
  'en',
];

export const FAQ_HOME = [
  {
    q: 'Do you ship custom apparel to the UK, USA and Europe?',
    a: 'Yes. Velocity Wear ships premium custom apparel worldwide with tracked delivery, including the United Kingdom, United States, Canada, Ireland, Germany, France and across Europe, plus Australia and the UAE. Exact shipping cost and lead time are confirmed in your free quote.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Our minimum order is just 20 pieces per design — one of the lowest premium MOQs in the industry — so you can launch a brand drop or test multiple designs without committing to thousands of units.',
  },
  {
    q: 'Which custom printing methods do you offer?',
    a: 'We offer screen printing, embroidery, DTF (direct-to-film) and sublimation printing, plus woven labels and custom branding — matched to your fabric, design detail and order size for the best possible finish.',
  },
  {
    q: 'How much do custom hoodies and t-shirts cost?',
    a: 'Pricing depends on the garment, fabric GSM, print method, branding and quantity, with bulk discounts of up to 40% at higher volumes. Send your design for a free, itemised quote — usually returned within a few hours.',
  },
  {
    q: 'How long does production take?',
    a: 'Most orders ship within about 7 days of mockup approval. Larger bulk runs and complex branding can take longer; your exact lead time is confirmed in writing before production begins.',
  },
  {
    q: 'What products can you customise?',
    a: 'Hoodies, t-shirts, polo shirts, caps, trousers, denim jackets, corporate uniforms and ecommerce merch — plus wholesale towels for gyms, spas and hotels. Every product is made to a premium standard, with private-label manufacturing and bulk apparel production for the UK, USA and Europe.',
  },
  {
    q: 'Can I order custom apparel in bulk for my brand or business?',
    a: 'Absolutely. We specialise in bulk and wholesale apparel for ecommerce brands, gyms, events, corporates and resellers, with tiered pricing, consistent sizing, custom branding and managed reorders.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the quote form on this page or message us on WhatsApp with your product, quantity and artwork. Our team replies within hours with transparent pricing and a mockup plan.',
  },
];

export const FAQ_TOWELS = [
  {
    q: 'Do you supply wholesale towels to gyms, spas and hotels in the UK, USA and Canada?',
    a: 'Yes. We supply custom wholesale towels worldwide — including the UK, USA, Canada, Australia and the UAE — to gyms, spas, hotels, resorts and distributors, with tracked freight and export options.',
  },
  {
    q: 'What towel sizes are available?',
    a: 'Three stock sizes: Small (40×60 cm), Medium (70×140 cm) and Large bath sheet (90×180 cm), plus fully custom dimensions on request to match your gym, spa or hotel specification.',
  },
  {
    q: 'What is the minimum order for wholesale towels?',
    a: 'The minimum order is 50 pieces per design. Tiered wholesale pricing rewards volume, with discounts of up to 35% on larger runs of 1,000+ pieces.',
  },
  {
    q: 'What GSM and fabric are the towels?',
    a: 'Towels are 100% combed cotton available from 400 to 700 GSM, so you can choose anything from a quick-dry gym towel to a plush, heavyweight hotel bath sheet.',
  },
  {
    q: 'Can towels be embroidered or branded with our logo?',
    a: 'Yes. We offer custom embroidery, woven labels, dobby borders, custom colours and individual packaging so your gym, spa or hotel towels are fully branded.',
  },
  {
    q: 'How long does a wholesale towel order take?',
    a: 'Lead times depend on size, GSM, branding and quantity and are confirmed in your quote. Stocked greige cloth and in-house finishing keep large orders moving quickly.',
  },
];
