// Per-product wholesale landing pages. Each targets "wholesale <product>
// UK / USA / Europe" with unique content (avoids thin/duplicate pages) and is
// rendered by app/wholesale/[product]/page.jsx.

export const WHOLESALE_PAGES = [
  {
    slug: 'hoodies',
    name: 'Hoodies',
    kind: 'hoodie',
    accent: '#22e0ff',
    h1: 'Wholesale Custom Hoodies',
    title: 'Wholesale Custom Hoodies | Bulk Hoodies UK, USA & Europe',
    description:
      'Premium wholesale custom hoodies for UK, USA & European brands. Heavyweight 380–450 GSM fleece, screen print, DTF & embroidery, low 20-piece MOQ and up to 40% off at volume.',
    keywords: [
      'wholesale hoodies', 'wholesale custom hoodies', 'bulk hoodies',
      'wholesale hoodies UK', 'wholesale hoodies USA', 'wholesale hoodies Europe',
      'private label hoodies', 'custom hoodie manufacturer',
    ],
    intro:
      'The hoodie is the highest-margin staple in apparel and the backbone of most brands. We manufacture premium wholesale custom hoodies in bulk for streetwear labels, gyms, events and resellers across the UK, USA and Europe.',
    specs: [
      'Fabric weights from 280 to 450 GSM — everyday to heavyweight streetwear',
      'Combed, ring-spun, brushed-back fleece; pre-shrunk and colour-locked',
      'Oversized, boxy and classic fits with double-layer hoods and ribbed cuffs',
      'Custom necklabels, woven labels, tags and packaging for private label',
    ],
    decoration:
      'Screen printing, DTF, embroidery and 3D puff — matched to your design, fabric and quantity.',
    uses: ['Streetwear & fashion brands', 'Gyms & studios', 'Events & merch drops', 'Corporate & teams'],
    faq: [
      {
        q: 'What is the minimum order for wholesale hoodies?',
        a: 'Just 20 pieces per design — one of the lowest premium MOQs available — so you can test before scaling. Volume tiers reach up to 40% off at 1,000+ pieces.',
      },
      {
        q: 'What GSM should I choose for premium hoodies?',
        a: 'For premium streetwear, 380–450 GSM heavyweight fleece gives the dense, structured feel customers associate with quality. 300–340 GSM suits everyday retail.',
      },
      {
        q: 'Do you ship wholesale hoodies to the UK, USA and Europe?',
        a: 'Yes — with tracked freight and clear landed-cost and duty guidance. Lead time and shipping are confirmed in your free quote.',
      },
    ],
  },
  {
    slug: 't-shirts',
    name: 'T-Shirts',
    kind: 'tshirt',
    accent: '#2e7bff',
    h1: 'Wholesale Custom T-Shirts',
    title: 'Wholesale Custom T-Shirts | Bulk Tees UK, USA & Europe',
    description:
      'Premium wholesale custom t-shirts in bulk for UK, USA & European brands. Combed ring-spun cotton, DTF & screen printing, low 20-piece MOQ and tiered pricing up to 40% off.',
    keywords: [
      'wholesale t-shirts', 'wholesale custom t-shirts', 'bulk t-shirts',
      'wholesale tees UK', 'wholesale t-shirts USA', 'wholesale t-shirts Europe',
      'blank t-shirts wholesale', 'custom tee manufacturer',
    ],
    intro:
      'The t-shirt is the product customers judge fastest — and your highest-volume seller. We produce premium wholesale custom t-shirts in bulk, in the cotton, weight and fit your brand needs, for the UK, USA and Europe.',
    specs: [
      'Combed, ring-spun cotton from 150 to 240+ GSM',
      'Classic, fitted, relaxed and oversized boxy fits',
      'Reinforced shoulder seams and a clean, retail-ready finish',
      'Custom neck labels, tear-away tags and branded packaging',
    ],
    decoration:
      'DTF for full-colour and photographic art, screen printing for durable volume runs, and embroidery for chest logos.',
    uses: ['Clothing & merch brands', 'Events & festivals', 'Promotional & corporate', 'Resellers'],
    faq: [
      {
        q: 'What GSM is best for a premium t-shirt?',
        a: 'For everyday retail, 190–220 GSM combed ring-spun cotton is the sweet spot; for a heavyweight, structured streetwear feel, choose 230 GSM or above.',
      },
      {
        q: 'Which print method should I use for tees?',
        a: 'DTF reproduces full-colour and photographic detail with no per-design minimum; screen printing is the most cost-effective and durable choice for larger single-design runs.',
      },
      {
        q: 'What is the minimum order for wholesale t-shirts?',
        a: 'Twenty pieces per design, with tiered pricing that rewards volume — up to 40% off on larger runs. Shipped to the UK, USA and Europe.',
      },
    ],
  },
  {
    slug: 'polo-shirts',
    name: 'Polo Shirts',
    kind: 'polo',
    accent: '#4f9dff',
    h1: 'Wholesale Custom Polo Shirts',
    title: 'Wholesale Custom Polo Shirts | Bulk Polos UK, USA & Europe',
    description:
      'Premium wholesale custom polo shirts for UK, USA & European brands and teams. Piqué cotton and performance blends, embroidered branding, low 20-piece MOQ and bulk pricing.',
    keywords: [
      'wholesale polo shirts', 'custom polo shirts bulk', 'embroidered polos wholesale',
      'wholesale polos UK', 'wholesale polos USA', 'wholesale polos Europe',
      'corporate polo shirts', 'team polo shirts',
    ],
    intro:
      'The polo is the smart-casual workhorse — the default for corporate, hospitality, golf and premium casual ranges. We supply wholesale custom polo shirts in bulk, embroidered to a premium standard, across the UK, USA and Europe.',
    specs: [
      'Breathable piqué cotton or performance polyester blends',
      'Structured collars that hold their shape all day',
      'Classic and slim fits with a clean placket and cuff',
      'Consistent sizing across a full XS–5XL run for teams',
    ],
    decoration:
      'Embroidery is the premium standard for polos — chest logos, names and roles — with woven labels and tonal detailing.',
    uses: ['Corporate uniforms', 'Hospitality & events', 'Golf & sport', 'Retail & lifestyle'],
    faq: [
      {
        q: 'What fabric is best for wholesale polos?',
        a: 'Piqué cotton is the breathable, structured classic for corporate and everyday wear; performance polyester or cotton blends suit sport and warm climates with moisture-wicking and stretch.',
      },
      {
        q: 'Should polos be printed or embroidered?',
        a: 'Embroidery is best for polos — a stitched chest logo is durable, professional and more premium on piqué fabric. Printing suits larger or full-colour designs.',
      },
      {
        q: 'Can you supply matching team kits in bulk?',
        a: 'Yes — with consistent sizing across the run and managed reorders so new starters always match. Shipped to the UK, USA and Europe.',
      },
    ],
  },
  {
    slug: 'caps',
    name: 'Caps & Headwear',
    kind: 'cap',
    accent: '#22e0ff',
    h1: 'Wholesale Custom Caps & Headwear',
    title: 'Wholesale Custom Caps & Headwear | Bulk Caps UK, USA & Europe',
    description:
      'Premium wholesale custom caps and headwear for UK, USA & European brands. Snapbacks, dad caps, truckers and beanies with 3D puff embroidery, low minimums and bulk pricing.',
    keywords: [
      'wholesale caps', 'custom caps bulk', 'wholesale snapbacks', 'embroidered caps wholesale',
      'wholesale caps UK', 'wholesale caps USA', 'wholesale caps Europe', 'custom headwear',
    ],
    intro:
      'Caps turn customers into walking billboards — a high-margin add-on that finishes any range. We supply wholesale custom caps and headwear in bulk, with premium embroidery, to the UK, USA and Europe.',
    specs: [
      'Snapbacks, dad caps, trucker, fitted, 5-panel and beanies',
      'Quality buckram, sweatbands and closures that hold shape',
      'One-size-adjustable — no garment sizing complexity',
      'Custom under-brims, closures and woven labels',
    ],
    decoration:
      '3D puff and flat embroidery, woven and leather-look patches, and printing for full-colour designs.',
    uses: ['Streetwear brands', 'Events & festivals', 'Teams & clubs', 'Corporate gifts'],
    faq: [
      {
        q: 'What is the best decoration for wholesale caps?',
        a: 'Embroidery — especially 3D puff — is the most popular and premium option for caps; it is durable and stands up to daily wear. Patches and printing suit full-colour or photographic designs.',
      },
      {
        q: 'Do caps have a low minimum order?',
        a: 'Yes — headwear minimums are low, so you can test a colourway or two before scaling, with tiered pricing on volume.',
      },
      {
        q: 'Do you ship wholesale caps to the UK, USA and Europe?',
        a: 'Yes, with tracked freight and clear landed costs confirmed in your quote.',
      },
    ],
  },
  {
    slug: 'joggers',
    name: 'Joggers & Trousers',
    kind: 'trousers',
    accent: '#1f5fff',
    h1: 'Wholesale Custom Joggers & Trousers',
    title: 'Wholesale Custom Joggers & Trousers | Bulk UK, USA & Europe',
    description:
      'Premium wholesale custom joggers, sweatpants and trousers for UK, USA & European brands. Match your hoodies for tracksuit co-ords, with low 20-piece MOQ and bulk pricing.',
    keywords: [
      'wholesale joggers', 'custom joggers bulk', 'wholesale sweatpants', 'tracksuit sets wholesale',
      'wholesale joggers UK', 'wholesale joggers USA', 'wholesale joggers Europe', 'custom trousers',
    ],
    intro:
      'Joggers turn a hoodie into a tracksuit — and one sale into a set. We manufacture wholesale custom joggers, sweatpants and trousers in bulk, matched to your hoodies for co-ords, for the UK, USA and Europe.',
    specs: [
      'Fleece matched to your hoodies for true co-ord sets',
      'Tapered, straight, wide and cargo fits, plus shorts',
      'Quality elasticated waist, drawcords and deep pockets',
      'Reinforced stitching and ribbed or elasticated cuffs',
    ],
    decoration:
      'Tonal embroidery, printed logos, woven labels and branded drawcord tips to match your tops.',
    uses: ['Streetwear & athleisure', 'Tracksuit co-ords', 'Gyms & studios', 'Loungewear ranges'],
    faq: [
      {
        q: 'Can you match joggers to my hoodies?',
        a: 'Yes — we produce them in the same fleece weight, colour and brushed-back fabric as your hoodies, with consistent branding, so a co-ord looks intentional and premium.',
      },
      {
        q: 'What is the minimum order for wholesale joggers?',
        a: 'Twenty pieces per design, with tiered pricing up to 40% off at volume. Shipped to the UK, USA and Europe.',
      },
      {
        q: 'Why sell tracksuit co-ords?',
        a: 'Co-ords lift average order value by turning one sale into a set — the customer is already buying the hoodie, so matching joggers are an easy upsell.',
      },
    ],
  },
  {
    slug: 'denim-jackets',
    name: 'Denim Jackets',
    kind: 'jacket',
    accent: '#2e7bff',
    h1: 'Wholesale Custom Denim Jackets',
    title: 'Wholesale Custom Denim Jackets | Bulk UK, USA & Europe',
    description:
      'Premium wholesale custom denim jackets for UK, USA & European brands and boutiques. Custom washes, hardware, embroidery and patches, with flexible minimums and bulk pricing.',
    keywords: [
      'wholesale denim jackets', 'custom denim jackets bulk', 'wholesale denim',
      'wholesale denim jackets UK', 'wholesale denim jackets USA', 'wholesale denim jackets Europe',
      'private label denim', 'custom denim manufacturer',
    ],
    intro:
      'A denim jacket is a timeless, high-perceived-value piece that never goes out of season. We manufacture wholesale custom denim jackets in bulk — your denim, wash, hardware and branding — for brands and boutiques across the UK, USA and Europe.',
    specs: [
      'Denim weights from lightweight to heavyweight (8–14 oz+)',
      'Washes: raw, rinse, stonewash, vintage and acid effects',
      'Custom buttons, rivets and zips; contrast or tonal topstitch',
      'Distressing and repairs dialled from subtle to heavy',
    ],
    decoration:
      'Embroidery, woven and leather-look back patches, custom labels and bold back prints.',
    uses: ['Streetwear & fashion brands', 'Boutiques', 'Limited drops', 'Brand merch'],
    faq: [
      {
        q: 'What is the minimum order for custom denim jackets?',
        a: 'Denim is more construction-intensive than knitwear, so minimums can be slightly higher than tees or hoodies, but a low-MOQ run still lets you test a wash and fit before scaling. Your exact MOQ is confirmed in your quote.',
      },
      {
        q: 'Can you match a specific denim wash or vintage finish?',
        a: 'Yes — raw, rinse, stonewash, vintage, acid and bleached finishes, plus custom distressing, matched to a reference and approved on a sample.',
      },
      {
        q: 'Do you ship wholesale denim jackets to the UK, USA and Europe?',
        a: 'Yes, with tracked delivery and landed cost (including any duties and VAT) confirmed in your quote.',
      },
    ],
  },
  {
    slug: 'uniforms',
    name: 'Corporate Uniforms',
    kind: 'uniform',
    accent: '#4f9dff',
    h1: 'Wholesale Corporate Uniforms & Workwear',
    title: 'Wholesale Corporate Uniforms & Workwear | UK, USA & Europe',
    description:
      'Wholesale corporate uniforms and branded workwear for UK, USA & European businesses. Polos, shirts, hoodies, trousers and caps with consistent sizing, embroidery and managed reorders.',
    keywords: [
      'wholesale uniforms', 'corporate uniforms bulk', 'branded workwear wholesale',
      'wholesale uniforms UK', 'wholesale uniforms USA', 'wholesale uniforms Europe',
      'staff uniforms', 'custom workwear',
    ],
    intro:
      'A uniform is a brand worn by your whole team. We supply wholesale corporate uniforms and branded workwear in bulk — consistent, durable and embroidered — to businesses across the UK, USA and Europe, with managed reorders.',
    specs: [
      'Polos, shirts, hoodies, t-shirts, trousers, aprons and caps',
      'Consistent colours and reliable sizing across XS–5XL',
      'Durable, colourfast, pre-shrunk fabrics for frequent washing',
      'Names, roles, woven labels and tonal detailing',
    ],
    decoration:
      'Embroidery is the durable, professional standard for uniforms; printing suits larger or full-colour designs.',
    uses: ['Hospitality & retail', 'Trades & logistics', 'Offices & front-of-house', 'Events & security'],
    faq: [
      {
        q: 'What is the best branding for corporate uniforms?',
        a: 'Embroidery — a stitched logo is durable, premium and survives frequent industrial washing without cracking or fading. Printing suits larger or full-colour designs.',
      },
      {
        q: 'Can you handle reorders as our team grows?',
        a: 'Yes — we keep your colours, logos and sizing on file so reorders for new starters and replacements match the original exactly.',
      },
      {
        q: 'Do you supply uniforms across the UK, USA and Europe?',
        a: 'Yes, with consistent sizing and branding and tracked delivery, with landed cost and lead time confirmed in your quote.',
      },
    ],
  },
];

export function getWholesalePage(slug) {
  return WHOLESALE_PAGES.find((p) => p.slug === slug) || null;
}

export function wholesaleSlugs() {
  return WHOLESALE_PAGES.map((p) => p.slug);
}

// Related products (others + the towels page), for cross-linking.
export function relatedWholesale(slug, count = 4) {
  return WHOLESALE_PAGES.filter((p) => p.slug !== slug).slice(0, count);
}
