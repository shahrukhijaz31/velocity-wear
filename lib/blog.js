// Blog content source for Velocity Wear.
// Posts are stored as structured blocks so the article body renders on the
// server (fully crawlable for SEO/AEO) and reuses the site design system.
//
// Block types: { t: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'quote', ... }
//   h2/h3/p  -> { t, x }            (x = text; p supports lead: true)
//   ul/ol    -> { t, items: [..] }
//   quote    -> { t, x, by? }

import { SITE_URL } from './site';

export const BLOG_AUTHOR = 'The Velocity Wear Team';

// Category -> presentation (lucide icon name + accent colour).
export const CATEGORIES = {
  Ecommerce: { icon: 'ShoppingBag', accent: '#22e0ff' },
  Wholesale: { icon: 'Boxes', accent: '#2e7bff' },
  'Custom Hoodies': { icon: 'Shirt', accent: '#4f9dff' },
  Printing: { icon: 'Printer', accent: '#1f5fff' },
  Sustainability: { icon: 'Leaf', accent: '#3fe0b0' },
  Design: { icon: 'PenTool', accent: '#8b8cff' },
};

export const POSTS = [
  /* ----------------------------------------------------------------- 1 */
  {
    slug: 'how-to-start-a-custom-hoodie-brand-uk-usa',
    title: 'How to Start a Custom Hoodie Brand in 2026: A Step-by-Step Guide for the UK & USA',
    description:
      'A practical, step-by-step guide to launching a custom hoodie brand in the UK and USA in 2026 — from niche and design to manufacturing, MOQ, pricing and your first online sale.',
    excerpt:
      'From picking a niche to landing your first online order — the complete roadmap for launching a custom hoodie label in the UK or USA without a warehouse or a fortune.',
    category: 'Ecommerce',
    date: '2026-06-02',
    readMins: 9,
    keywords: [
      'how to start a hoodie brand',
      'custom hoodie business',
      'start a clothing brand UK',
      'start a clothing brand USA',
      'ecommerce apparel brand',
      'print on demand hoodies',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'A hoodie is the perfect first product for a new clothing brand: it is high-margin, endlessly customisable, and it sells in every season and every market. In 2026 you no longer need a warehouse, a screen-printing press or a five-figure budget to launch one. You need a clear niche, a strong design, and a manufacturing partner with a low minimum order. Here is the exact path from idea to first sale.',
      },
      { t: 'h2', x: '1. Pick a niche before you pick a fabric' },
      {
        t: 'p',
        x: 'The brands that fail are the ones that try to sell "hoodies for everyone." The brands that win speak to one specific person. A niche gives you a design language, a price point, and an audience that already gathers somewhere online. Start by choosing the community you understand best.',
      },
      {
        t: 'ul',
        items: [
          'Identity & subculture — gym communities, run clubs, gamers, anime, faith groups, music scenes.',
          'Local & regional pride — city, university, or hometown streetwear that travellers and students buy.',
          'Cause-led — eco, mental-health, or charity ranges where a story drives the purchase.',
          'Creator merch — podcasters, streamers and influencers turning an audience into customers.',
        ],
      },
      { t: 'h2', x: '2. Nail the design — keep it simple and ownable' },
      {
        t: 'p',
        x: 'Most best-selling hoodies use one strong idea executed cleanly: a wordmark, a small chest logo with a large back print, or a single tonal embroidery. Vector your artwork (so it scales without pixelating), limit your first drop to two or three colourways, and design for the garment colour rather than a white screen. If you cannot draw, a good manufacturer will refine a rough sketch into print-ready artwork for you.',
      },
      { t: 'h2', x: '3. Choose the right blank and decoration method' },
      {
        t: 'p',
        x: 'The "blank" is the undecorated hoodie. Fabric weight (GSM) sets the entire feel of your brand. A 280–320 GSM hoodie reads as everyday and affordable; a 380–450 GSM heavyweight fleece reads as premium streetwear and commands a higher price. Match your decoration to the look you want:',
      },
      {
        t: 'ul',
        items: [
          'DTF (direct-to-film) — full-colour prints with no per-design minimum; ideal for testing designs.',
          'Screen printing — the most cost-effective, durable finish for larger single-design runs.',
          'Embroidery — a premium, tactile finish for logos, monograms and small chest marks.',
        ],
      },
      { t: 'h2', x: '4. Start with a low MOQ so you can test, not gamble' },
      {
        t: 'p',
        x: 'The biggest mistake new founders make is ordering 500 units of an unproven design. A low minimum order quantity (MOQ) lets you launch a small first batch, see what actually sells, and reinvest profit into the winners. With a 20-piece MOQ you can test three designs for the cost most factories charge for one — a far smarter way to find product-market fit before you scale.',
      },
      { t: 'h2', x: '5. Price for profit from day one' },
      {
        t: 'p',
        x: 'A healthy hoodie brand aims for a 2.5x–4x markup over landed cost (product + decoration + shipping + duties). If a finished, branded hoodie lands at £14 / $18, retailing at £45–£55 / $55–$65 keeps margin alive after platform fees, returns and ad spend. Build the margin in before you launch — discounting later is easy; raising prices is hard.',
      },
      { t: 'h2', x: '6. Launch lean: storefront, photos, first orders' },
      {
        t: 'p',
        x: 'You do not need a custom website to start. A Shopify, Etsy or Instagram Shop storefront is enough to validate demand. Order a small sample run, shoot it on a real person in natural light, and write product copy that sells the feeling, not just the spec. Pre-sell to your own community first — early orders fund your first production run and prove the concept.',
      },
      { t: 'h2', x: '7. Scale what works' },
      {
        t: 'p',
        x: 'Once a design proves itself, reorder in larger volume to unlock bulk discounts, add sizes and colourways, and layer in custom branding — woven labels, custom tags and packaging — that turns a printed hoodie into a real brand. This is the moment a low-MOQ test becomes a wholesale-volume product line.',
      },
      {
        t: 'p',
        x: 'Velocity Wear helps UK and USA founders launch exactly this way: a 20-piece minimum, premium 380–450 GSM fleece, in-house design support and tracked delivery worldwide. Share a sketch and we will send a free, itemised quote — usually within a few hours.',
      },
    ],
    faq: [
      {
        q: 'How much does it cost to start a custom hoodie brand?',
        a: 'With a low-MOQ manufacturer you can launch a tested first range for the cost of a small batch — often a few hundred pounds or dollars — rather than the thousands traditional factories require. Your main costs are the blanks, decoration, sample shots and a basic storefront.',
      },
      {
        q: 'Do I need to hold inventory?',
        a: 'Not to start. A low minimum order lets you produce a small batch, sell through it, and reorder the winners. As you grow you can hold light stock of proven designs or move to made-to-order for limited drops.',
      },
      {
        q: 'Can you ship to both the UK and the USA?',
        a: 'Yes. Velocity Wear ships custom apparel worldwide with tracked delivery, including the UK, USA, Canada, Australia, the UAE and across Europe. Shipping cost and lead time are confirmed in your free quote.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 2 */
  {
    slug: 'custom-hoodies-wholesale-buyers-guide-uk-usa',
    title: 'Custom Hoodies Wholesale: The Complete Buyer’s Guide for UK & USA Brands',
    description:
      'Everything UK and USA buyers need to know about ordering custom hoodies wholesale — MOQs, pricing tiers, fabric, decoration, lead times, quality checks and shipping.',
    excerpt:
      'Buying custom hoodies in bulk? Here is how wholesale pricing tiers, MOQs, fabric grades and lead times really work — and how to avoid the costly mistakes.',
    category: 'Wholesale',
    date: '2026-05-21',
    readMins: 8,
    keywords: [
      'custom hoodies wholesale',
      'wholesale hoodies UK',
      'wholesale hoodies USA',
      'bulk custom hoodies',
      'hoodie supplier',
      'wholesale apparel pricing',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'Whether you run an ecommerce label, kit out a gym, or resell to retailers, buying custom hoodies wholesale is where the real margin lives. But "wholesale" hides a lot of variables — fabric grade, decoration method, pricing tiers and lead times all move the final number. This guide explains how to buy bulk custom hoodies the smart way for the UK and USA markets.',
      },
      { t: 'h2', x: 'How wholesale hoodie pricing actually works' },
      {
        t: 'p',
        x: 'Wholesale apparel is priced in tiers: the more you order per design, the lower the unit cost. The savings come from setup costs (artwork, screens, machine time) being spread across more units. A typical structure looks like this:',
      },
      {
        t: 'ul',
        items: [
          'Entry tier (20–99 pcs) — base wholesale pricing, perfect for testing a design.',
          'Growth tier (100–499 pcs) — meaningful per-unit savings as setup is amortised.',
          'Volume tier (500+ pcs) — the deepest discounts, often up to 40% off entry pricing.',
        ],
      },
      { t: 'h2', x: 'Understand what drives the unit cost' },
      {
        t: 'p',
        x: 'Two hoodies at the same quantity can differ in price by 50% or more. The levers that move your quote are:',
      },
      {
        t: 'ul',
        items: [
          'Fabric & GSM — heavyweight 380–450 GSM fleece costs more than lightweight 280 GSM.',
          'Decoration — embroidery and multi-colour screen prints cost more than a single DTF transfer.',
          'Branding extras — woven labels, custom tags, hang cards and individual packaging.',
          'Quantity — your tier, as above.',
          'Finish & fit — oversized cuts, side zips, double-layer hoods and special trims.',
        ],
      },
      { t: 'h2', x: 'Match the fabric grade to your market' },
      {
        t: 'p',
        x: 'For premium UK and USA streetwear, buyers increasingly expect heavyweight fleece with a dense, structured feel. For corporate, event or promotional hoodies where price matters more than prestige, a mid-weight blend keeps costs lean. Always request the GSM in writing and, ideally, a physical sample before committing to a large run.',
      },
      { t: 'h2', x: 'Always order a pre-production sample' },
      {
        t: 'p',
        x: 'A sample is the cheapest insurance in wholesale. It confirms the fabric hand-feel, colour accuracy, print placement and sizing before you commit thousands of pounds or dollars. A reputable supplier will produce a photorealistic mockup for approval and, for larger orders, a physical pre-production sample.',
      },
      { t: 'h2', x: 'Lead times and shipping to the UK & USA' },
      {
        t: 'p',
        x: 'Most custom bulk hoodie orders ship within roughly 7–14 days of mockup approval, depending on quantity and decoration complexity. For international delivery, confirm whether your quote is landed (duties and taxes included) or ex-works, and get the incoterms in writing so there are no surprises at customs.',
      },
      {
        t: 'quote',
        x: 'The cheapest quote is rarely the cheapest order. Re-prints, customs delays and sizing errors cost far more than a slightly higher unit price from a supplier who gets it right the first time.',
      },
      { t: 'h2', x: 'A buyer’s checklist before you commit' },
      {
        t: 'ol',
        items: [
          'Confirm fabric composition and GSM in writing.',
          'Approve a digital mockup — and a physical sample for large runs.',
          'Get the full price breakdown: garment, decoration, branding, shipping, duties.',
          'Confirm the MOQ per design and the next pricing tier.',
          'Lock the lead time and incoterms before paying the deposit.',
        ],
      },
      {
        t: 'p',
        x: 'Velocity Wear supplies wholesale custom hoodies to UK and USA brands with a 20-piece minimum, tiered pricing up to 40% off at volume, GSM-verified premium fleece and tracked worldwide delivery. Send your design and quantity for a free, itemised quote.',
      },
    ],
    faq: [
      {
        q: 'What is the minimum order for wholesale custom hoodies?',
        a: 'Velocity Wear’s minimum is just 20 pieces per design — one of the lowest premium MOQs available — so you can test designs before scaling into hundreds or thousands of units at deeper discounts.',
      },
      {
        q: 'How much cheaper are hoodies in bulk?',
        a: 'Per-unit cost drops as quantity rises because setup is spread across more pieces. Volume orders can be up to 40% cheaper per unit than entry-tier quantities.',
      },
      {
        q: 'Do wholesale prices include shipping to the UK or USA?',
        a: 'It depends on the quote. Always confirm whether pricing is landed (duties and shipping included) or ex-works. Velocity Wear itemises shipping and lead time in every quote.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 3 */
  {
    slug: 'hoodie-gsm-fabric-weight-guide',
    title: 'Hoodie GSM Explained: How to Choose the Right Fabric Weight',
    description:
      'A clear guide to hoodie GSM (grams per square metre) — what 240, 320 and 450 GSM actually feel like, which weight suits streetwear vs promotional hoodies, and how GSM affects price.',
    excerpt:
      'GSM is the single number that decides whether your hoodie feels cheap or premium. Here is what each weight really means — and which to choose for your brand.',
    category: 'Custom Hoodies',
    date: '2026-05-08',
    readMins: 6,
    keywords: [
      'hoodie GSM',
      'hoodie fabric weight',
      'heavyweight hoodie',
      'best GSM for hoodies',
      'premium hoodie fabric',
      'custom hoodie quality',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'When customers say a hoodie "feels premium," they are usually reacting to one thing: its weight. GSM — grams per square metre — measures how dense and heavy the fleece is, and it shapes everything from drape and warmth to perceived value and price. Get the GSM right and your hoodie sells itself. Here is how to choose.',
      },
      { t: 'h2', x: 'What GSM actually measures' },
      {
        t: 'p',
        x: 'GSM is the weight of one square metre of fabric. A higher number means more cotton, a thicker hand-feel and a more structured garment. It is the most reliable single indicator of hoodie quality — far more honest than vague words like "premium" or "heavyweight" on a product page.',
      },
      { t: 'h2', x: 'The GSM scale for hoodies' },
      {
        t: 'ul',
        items: [
          '240–280 GSM (lightweight) — soft, thin and affordable. Best for summer layers, promotional giveaways and tight budgets.',
          '300–340 GSM (mid-weight) — the everyday all-rounder. Comfortable year-round, the most common retail weight.',
          '350–400 GSM (heavyweight) — dense, warm and structured. The sweet spot for premium streetwear that holds its shape.',
          '420–450+ GSM (ultra-heavyweight) — thick, boxy and luxurious. The signature feel of high-end and boxy-fit streetwear drops.',
        ],
      },
      { t: 'h2', x: 'Which GSM should you choose?' },
      {
        t: 'p',
        x: 'Match the weight to your positioning and your customer’s expectation:',
      },
      {
        t: 'ul',
        items: [
          'Premium streetwear brand — 380–450 GSM. The weight justifies a higher price and signals quality the moment it is lifted.',
          'Everyday retail / lifestyle — 300–340 GSM. Comfortable, versatile and cost-efficient.',
          'Corporate & event hoodies — 280–320 GSM. Smart value when budget and volume lead the decision.',
          'Warm-climate or layering pieces — 240–280 GSM. Breathable and light without overheating.',
        ],
      },
      { t: 'h2', x: 'How GSM affects price and printing' },
      {
        t: 'p',
        x: 'Heavier fabric uses more cotton, so higher GSM costs more per unit — but it also photographs better, returns less, and supports a higher retail price. Heavyweight fleece also takes embroidery and screen prints beautifully because the dense surface gives the decoration a stable base. Lighter fabrics can show print texture more and may need a different decoration approach.',
      },
      { t: 'h2', x: 'A note on fit and shrinkage' },
      {
        t: 'p',
        x: 'GSM is not the whole story — the cut (regular, oversized, boxy), the loopback vs brushed-back fleece, and whether the fabric is pre-shrunk all matter. Always ask whether the fleece is pre-shrunk and ring-spun, and check a size sample, because a heavy hoodie that shrinks two sizes after one wash is no bargain.',
      },
      {
        t: 'p',
        x: 'Velocity Wear hoodies are GSM-verified, pre-shrunk and colour-locked in weights from 280 to 450 GSM, so you can dial in exactly the feel your brand needs. Request a sample and a free quote to compare weights in person.',
      },
    ],
    faq: [
      {
        q: 'What is the best GSM for a premium hoodie?',
        a: 'For premium streetwear, 380–450 GSM heavyweight fleece gives the dense, structured feel customers associate with quality and a higher price point. 300–340 GSM is ideal for everyday retail.',
      },
      {
        q: 'Is a higher GSM always better?',
        a: 'Not necessarily — it depends on use. Heavyweight fleece feels premium but is warmer and pricier; lighter weights suit warm climates, layering and budget-led promotional orders.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 4 */
  {
    slug: 'dtf-vs-screen-printing-vs-embroidery',
    title: 'DTF vs Screen Printing vs Embroidery: Which Decoration Method Wins?',
    description:
      'A side-by-side comparison of DTF, screen printing and embroidery for custom apparel — cost, durability, detail, minimums and the best use case for each decoration method.',
    excerpt:
      'DTF, screen print or embroidery? Each has a job it does best. Here is the honest comparison — by cost, durability, detail and minimum order — so you choose right.',
    category: 'Printing',
    date: '2026-04-24',
    readMins: 7,
    keywords: [
      'DTF vs screen printing',
      'embroidery vs printing',
      'best custom apparel decoration',
      'DTF printing',
      'screen printing hoodies',
      'custom embroidery',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'There is no single "best" way to decorate a hoodie or t-shirt — only the best method for your design, quantity and budget. The three workhorses of custom apparel are DTF (direct-to-film), screen printing and embroidery. Here is exactly when each one wins.',
      },
      { t: 'h2', x: 'DTF (Direct-to-Film) — best for full colour and low minimums' },
      {
        t: 'p',
        x: 'DTF prints your artwork onto a film that is heat-pressed onto the garment. It reproduces full-colour, photographic detail and gradients with no per-design minimum, which makes it the go-to for testing new designs and small batches.',
      },
      {
        t: 'ul',
        items: [
          'Best for — multi-colour and photographic artwork, small runs, design testing.',
          'Strengths — unlimited colours, fine detail, low setup, works on most fabrics.',
          'Consider — a slight surface feel on the print; very large solid prints are less breathable than screen.',
        ],
      },
      { t: 'h2', x: 'Screen printing — best for durability at volume' },
      {
        t: 'p',
        x: 'Screen printing pushes ink through a stencil, one screen per colour. There is a setup cost per colour, so it is less suited to one-offs — but at volume it is the most cost-effective and the most durable finish, with ultra-opaque, long-lasting colour that survives 60+ washes.',
      },
      {
        t: 'ul',
        items: [
          'Best for — larger runs of one design with a limited colour count.',
          'Strengths — lowest cost per unit at volume, exceptional wash durability, vivid solid colours.',
          'Consider — setup cost per colour makes complex, many-colour or photographic art expensive.',
        ],
      },
      { t: 'h2', x: 'Embroidery — best for premium logos and texture' },
      {
        t: 'p',
        x: 'Embroidery stitches your design directly into the fabric with thread. It carries the most premium, tactile, retail-luxury feel and is supremely durable — it will not crack or fade like a print. It is ideal for logos, monograms and small chest marks rather than large or finely detailed artwork.',
      },
      {
        t: 'ul',
        items: [
          'Best for — logos, monograms, caps, polos and premium chest branding.',
          'Strengths — luxury tactile finish, outstanding durability, perceived high value.',
          'Consider — not suited to gradients, fine detail or very large designs; priced by stitch count.',
        ],
      },
      { t: 'h2', x: 'Quick decision guide' },
      {
        t: 'ul',
        items: [
          'Testing a colourful design in small numbers? → DTF.',
          'Printing 100+ of a bold, 1–3 colour graphic? → Screen printing.',
          'Adding a premium logo to hoodies, polos or caps? → Embroidery.',
          'Want a premium look and a colourful back print? → Embroidered logo + DTF or screen back.',
        ],
      },
      {
        t: 'p',
        x: 'You do not have to choose just one. Many of the best-selling pieces combine an embroidered chest logo with a large printed back graphic. Velocity Wear offers DTF, screen printing, embroidery and sublimation in-house, and will recommend the right method for your fabric, design detail and order size. Send your artwork for a free quote.',
      },
    ],
    faq: [
      {
        q: 'Which lasts longer — DTF, screen print or embroidery?',
        a: 'Embroidery and screen printing are the most durable; quality screen prints survive 60+ washes and embroidery effectively lasts the life of the garment. DTF is durable too but, like any print, benefits from washing inside-out on a cool cycle.',
      },
      {
        q: 'Which is cheapest for a small order?',
        a: 'DTF, because it has no per-design minimum and minimal setup. Screen printing becomes the cheapest per unit only once quantities are high enough to amortise the screen setup.',
      },
      {
        q: 'Can you combine methods on one garment?',
        a: 'Yes — a very common premium combination is an embroidered chest logo paired with a large DTF or screen-printed back graphic.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 5 */
  {
    slug: 'low-moq-custom-apparel-20-pieces',
    title: 'Why a 20-Piece MOQ Is a Game-Changer for New Apparel Brands',
    description:
      'Understand minimum order quantity (MOQ) in custom apparel and why a low 20-piece minimum lets new brands test designs, cut risk and reach profit faster than high-MOQ factories.',
    excerpt:
      'High MOQs kill new brands before they start. Here is why a 20-piece minimum is the single biggest advantage a first-time apparel founder can have.',
    category: 'Ecommerce',
    date: '2026-04-10',
    readMins: 6,
    keywords: [
      'low MOQ apparel',
      'minimum order quantity clothing',
      'small batch custom hoodies',
      'test apparel designs',
      'start clothing brand low MOQ',
      'no minimum custom printing',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'MOQ — minimum order quantity — is the number of units a manufacturer requires per order or per design. It sounds like dry logistics, but it is one of the most important numbers in your entire business plan. A high MOQ forces you to bet big on unproven designs. A low MOQ lets you test, learn and reinvest. Here is why 20 pieces changes everything.',
      },
      { t: 'h2', x: 'The hidden tax of a high MOQ' },
      {
        t: 'p',
        x: 'Traditional factories often demand 100, 300 or 500 units per design. For an established brand that is fine. For a new one it is a trap: you tie up your entire budget in a single design you only think will sell, and you have nothing left to test alternatives. If you guess wrong, you are sitting on a garage full of unsold stock — and out of cash.',
      },
      { t: 'h2', x: 'Low MOQ turns guessing into testing' },
      {
        t: 'p',
        x: 'With a 20-piece minimum, the same budget that buys one high-MOQ design lets you run three or four. You launch them, watch what your audience actually buys, and double down on the winners. This is product-market fit applied to apparel — and it is the difference between a hobby and a brand that compounds.',
      },
      {
        t: 'quote',
        x: 'You do not need to predict which design will sell. You need to be able to afford to find out. Low MOQ is how you buy that information cheaply.',
      },
      { t: 'h2', x: 'Lower risk, faster cash cycle' },
      {
        t: 'p',
        x: 'Small batches mean your money is not frozen in inventory for months. You order, sell through, and reinvest the profit into the next, slightly larger batch. Each cycle funds the next. That compounding loop is how brands scale without external funding — and it only works when the MOQ is low enough to keep the loop spinning fast.',
      },
      { t: 'h2', x: 'When to scale up' },
      {
        t: 'p',
        x: 'Low MOQ is a starting tool, not a permanent ceiling. Once a design proves itself, you scale the order up to unlock volume discounts (often up to 40% off entry pricing), add sizes and colourways, and invest in custom branding. The smart sequence is: test small, prove demand, then buy big with confidence.',
      },
      { t: 'h2', x: 'What low MOQ does not mean' },
      {
        t: 'p',
        x: 'A low minimum should never mean lower quality. The goal is a premium product in small numbers — GSM-verified fabric, proper decoration and real branding — not a cheap garment you would not be proud to sell. Always confirm you are getting the same fabric and finish at 20 units that you would at 2,000.',
      },
      {
        t: 'p',
        x: 'Velocity Wear was built around a 20-piece MOQ on premium fabric precisely so new UK and USA brands can test before they scale. Pick three designs, order a small batch of each, and let your customers tell you which one to grow. Request a free quote to get started.',
      },
    ],
    faq: [
      {
        q: 'What does MOQ mean?',
        a: 'MOQ stands for minimum order quantity — the smallest number of units a manufacturer will produce per order or per design. A low MOQ lets you order small batches; a high MOQ forces large commitments.',
      },
      {
        q: 'Is a low MOQ more expensive per unit?',
        a: 'Slightly, because setup costs are spread over fewer pieces. But the ability to test cheaply and avoid dead stock usually saves far more than the small per-unit premium. You move to volume pricing once a design proves itself.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 6 */
  {
    slug: 'eco-friendly-custom-hoodies-sustainable-apparel',
    title: 'Eco-Friendly Custom Hoodies: Organic Cotton, Recycled Fleece & Water-Based Inks',
    description:
      'How to build a sustainable custom hoodie range — organic and recycled fabrics, water-based and eco inks, low-waste production, and how to market eco apparel honestly without greenwashing.',
    excerpt:
      'Customers increasingly buy with the planet in mind. Here is how to make genuinely eco-friendly custom hoodies — organic cotton, recycled fleece, water-based inks — and market them honestly.',
    category: 'Sustainability',
    date: '2026-03-26',
    readMins: 7,
    keywords: [
      'eco friendly hoodies',
      'sustainable custom apparel',
      'organic cotton hoodies',
      'recycled fabric clothing',
      'water based ink printing',
      'sustainable streetwear',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'Sustainability is no longer a niche. A growing share of UK and USA shoppers — especially younger ones — actively prefer brands that tread lightly on the planet, and many will pay more for it. The good news: making a genuinely eco-friendly custom hoodie is more achievable than ever. Here is what actually moves the needle, and how to talk about it honestly.',
      },
      { t: 'h2', x: 'Start with the fabric — it is most of your footprint' },
      {
        t: 'p',
        x: 'The biggest environmental lever in any garment is the fabric itself. Choosing a lower-impact base material does more than any logo or tagline ever will.',
      },
      {
        t: 'ul',
        items: [
          'Organic cotton — grown without synthetic pesticides and with less water than conventional cotton.',
          'Recycled cotton — diverts textile waste and cuts the demand for virgin fibre.',
          'Recycled polyester fleece — made from post-consumer plastic, often blended for warmth and durability.',
          'Cotton blends with recycled content — a practical balance of feel, durability and lower impact.',
        ],
      },
      { t: 'h2', x: 'Choose water-based and eco inks' },
      {
        t: 'p',
        x: 'Conventional plastisol inks are plastic-based. Water-based and eco-certified inks soak into the fabric for a softer hand-feel and a lower chemical footprint. They produce a beautiful vintage, broken-in print that pairs perfectly with organic fabrics — so the sustainable choice is also an aesthetic upgrade.',
      },
      { t: 'h2', x: 'Cut waste in production and packaging' },
      {
        t: 'p',
        x: 'Sustainability is also about how much you make and how you ship it. Low-MOQ, make-to-demand production avoids the dead stock that ends up in landfill. On the packaging side, small swaps add up:',
      },
      {
        t: 'ul',
        items: [
          'Recycled or paper mailers instead of virgin plastic.',
          'Recycled card hang tags and woven labels printed with eco inks.',
          'Right-sized packaging to cut shipping volume and emissions.',
          'Order-to-demand batches to minimise overproduction.',
        ],
      },
      { t: 'h2', x: 'Market it honestly — avoid greenwashing' },
      {
        t: 'p',
        x: 'Shoppers and regulators are quick to spot vague eco claims. The rule is simple: be specific and be truthful. Say exactly what is sustainable about the product — "made from organic cotton, printed with water-based inks, shipped in recycled packaging" — rather than slapping an unbacked "eco" badge on everything. Honest specificity builds the trust that vague claims destroy.',
      },
      {
        t: 'quote',
        x: 'The most sustainable garment is the one that gets worn for years. Quality fabric and timeless design are themselves a form of sustainability.',
      },
      { t: 'h2', x: 'Sustainability is also good business' },
      {
        t: 'p',
        x: 'Done right, an eco range is not a cost centre — it is a differentiator. It supports a higher price point, attracts a loyal values-driven audience, and gives your marketing a genuine story to tell. Pair it with durable, heavyweight fabric so the product lasts, and the environmental and commercial cases line up perfectly.',
      },
      {
        t: 'p',
        x: 'Velocity Wear offers organic and recycled fabric options, water-based and eco inks, and recycled branding and packaging, with a low MOQ so you make only what you can sell. Ask for a sustainable-build quote and we will spec an eco range for your brand.',
      },
    ],
    faq: [
      {
        q: 'What makes a hoodie eco-friendly?',
        a: 'The biggest factors are the fabric (organic or recycled cotton, recycled polyester fleece), the inks (water-based or eco-certified rather than plastisol), low-waste make-to-demand production, and recycled packaging.',
      },
      {
        q: 'Do eco-friendly hoodies cost more?',
        a: 'Organic and recycled fabrics and eco inks can carry a modest premium, but they support a higher retail price and attract values-driven customers — and durable fabric reduces returns and replacement waste.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 7 */
  {
    slug: 'how-to-price-custom-hoodies-for-profit',
    title: 'How to Price Custom Hoodies for Profit: An Ecommerce Margin Guide',
    description:
      'A practical pricing framework for custom hoodie brands — how to calculate landed cost, set markup, protect margin after fees and ads, and price for profit in the UK and USA.',
    excerpt:
      'Most new hoodie brands underprice and quietly lose money. Here is the margin maths — landed cost, markup, fees and ad spend — to price your hoodies for real profit.',
    category: 'Ecommerce',
    date: '2026-03-12',
    readMins: 7,
    keywords: [
      'how to price hoodies',
      'apparel pricing strategy',
      'clothing brand margins',
      'ecommerce profit margin',
      'hoodie pricing',
      'retail markup apparel',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'Pricing is where most new apparel brands quietly fail. They copy a competitor’s price, forget half their costs, and end up working for free after fees, returns and ads. Pricing for profit is not guesswork — it is a simple framework. Here it is, built for UK and USA hoodie brands.',
      },
      { t: 'h2', x: 'Step 1 — calculate your true landed cost' },
      {
        t: 'p',
        x: 'Landed cost is everything it takes to get one finished, branded hoodie into your hands — not just the factory invoice. Add it all up:',
      },
      {
        t: 'ul',
        items: [
          'Blank garment cost (driven by fabric and GSM).',
          'Decoration (DTF, screen print or embroidery).',
          'Branding extras (woven label, tag, packaging).',
          'Inbound shipping and any duties or import taxes.',
          'Per-unit share of sample and setup costs.',
        ],
      },
      { t: 'h2', x: 'Step 2 — apply a healthy markup' },
      {
        t: 'p',
        x: 'A sustainable apparel brand typically prices at 2.5x–4x landed cost. That multiple is not greed — it is what is left after the costs most founders forget. As a worked example: if a branded hoodie lands at £14 / $18, a retail price of £45–£55 / $55–$65 keeps the business healthy. Pricing at £30 might feel competitive, but watch what it leaves once the deductions hit.',
      },
      { t: 'h2', x: 'Step 3 — subtract the costs that eat margin' },
      {
        t: 'p',
        x: 'Your gross margin is not your profit. Before you keep a penny, the following come out of every sale:',
      },
      {
        t: 'ul',
        items: [
          'Payment & platform fees — roughly 2–3% (cards) plus any marketplace commission.',
          'Returns & exchanges — budget a few percent of revenue; apparel returns are real.',
          'Marketing & ads — often the largest variable cost; many brands target ad spend under 25–30% of revenue.',
          'Discounts & promotions — every code is margin you are giving away.',
          'Fulfilment & outbound shipping — especially if you offer free delivery.',
        ],
      },
      { t: 'h2', x: 'Step 4 — price for the customer you want' },
      {
        t: 'p',
        x: 'Price is also positioning. A heavyweight 420 GSM hoodie at £55 signals premium quality; the same design at £25 signals budget — and attracts a more price-sensitive, less loyal buyer. Use fabric weight, branding and presentation to justify the price, rather than racing competitors to the bottom.',
      },
      { t: 'h2', x: 'Step 5 — protect margin with volume' },
      {
        t: 'p',
        x: 'As you grow, your strongest margin lever is buying better. Moving from entry-tier to volume pricing can cut unit cost by up to 40%, which either widens your margin or lets you run promotions without losing money. This is why proving a design at low MOQ and then scaling the reorder is so powerful — your costs fall exactly as your sales rise.',
      },
      {
        t: 'quote',
        x: 'Build the margin in before you launch. Discounting later is easy; raising prices on existing customers is painful.',
      },
      {
        t: 'p',
        x: 'Velocity Wear gives you an itemised, all-in landed cost up front — garment, decoration, branding, shipping and duties — so you can price with confidence from day one, plus volume tiers that improve your margin as you scale. Request a free quote to model your numbers.',
      },
    ],
    faq: [
      {
        q: 'What profit margin should a hoodie brand aim for?',
        a: 'Most healthy apparel brands price at 2.5x–4x landed cost and target a gross margin that survives platform fees, returns and ad spend. After all costs, a sustainable net margin is typically in the 15–30% range depending on channel and ad efficiency.',
      },
      {
        q: 'How do I keep margin healthy as I scale ad spend?',
        a: 'Price with enough headroom that paid acquisition fits inside your margin, lower unit cost by ordering at volume tiers, and lift average order value with bundles and add-ons rather than discounting.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 8 */
  {
    slug: 'bulk-apparel-private-label-dropshipping-explained',
    title: 'Bulk Apparel for Ecommerce: Private Label, Dropshipping & Inventory Explained',
    description:
      'Compare the three main ecommerce apparel fulfilment models — bulk inventory, private label and dropshipping/print-on-demand — with the pros, cons and margins of each for UK and USA sellers.',
    excerpt:
      'Bulk stock, private label or dropship? Each model trades margin for risk differently. Here is how to choose the right fulfilment path for your apparel store.',
    category: 'Wholesale',
    date: '2026-02-26',
    readMins: 8,
    keywords: [
      'private label apparel',
      'apparel dropshipping',
      'print on demand vs bulk',
      'ecommerce fulfilment apparel',
      'bulk clothing inventory',
      'custom merch fulfilment',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'How you source and fulfil your apparel shapes your margins, your cash flow and your brand. There are three main models for ecommerce sellers — buying bulk inventory, private label, and dropshipping / print-on-demand. None is "best"; each trades risk against margin and control differently. Here is how to choose.',
      },
      { t: 'h2', x: 'Model 1 — bulk inventory' },
      {
        t: 'p',
        x: 'You order a quantity of finished, decorated stock up front, hold it, and ship as orders come in. It demands cash and storage, but it delivers the best per-unit cost, the fastest dispatch, and full control over quality and packaging.',
      },
      {
        t: 'ul',
        items: [
          'Pros — highest margin, fast shipping, full quality control, best customer experience.',
          'Cons — upfront cash, storage, and the risk of unsold stock if a design underperforms.',
          'Best for — proven designs and steady sellers you are confident will move.',
        ],
      },
      { t: 'h2', x: 'Model 2 — private label' },
      {
        t: 'p',
        x: 'Private label means putting your own brand — woven labels, custom tags, packaging — on quality blanks produced for you. It is usually combined with bulk ordering and is how a "printed hoodie" becomes a real brand customers recognise and return to. It is the step that separates a reseller from a label.',
      },
      {
        t: 'ul',
        items: [
          'Pros — a genuine, ownable brand; higher perceived value and price; customer loyalty.',
          'Cons — needs minimums for custom labels and packaging; more setup than plain blanks.',
          'Best for — brands ready to move from generic blanks to a distinctive identity.',
        ],
      },
      { t: 'h2', x: 'Model 3 — dropshipping & print-on-demand' },
      {
        t: 'p',
        x: 'A partner prints and ships each item only after a customer orders. You hold no stock and carry almost no upfront risk — but you pay the highest per-unit cost, have the least control over fabric and packaging, and face slower, less consistent dispatch.',
      },
      {
        t: 'ul',
        items: [
          'Pros — minimal upfront cost and risk, no inventory, easy to test many designs.',
          'Cons — lowest margins, limited branding, slower shipping, less quality control.',
          'Best for — validating brand-new designs and audiences before committing cash.',
        ],
      },
      { t: 'h2', x: 'The smart hybrid most brands actually use' },
      {
        t: 'p',
        x: 'You do not have to pick one forever. The most resilient approach blends them: use low-MOQ small batches or print-on-demand to test new designs, then move proven winners into private-label bulk production for the best margins and brand experience. You get the risk profile of dropshipping during testing and the economics of bulk once a design earns it.',
      },
      {
        t: 'quote',
        x: 'Test like a dropshipper, scale like a wholesaler. The brands that last use risk-light testing to decide what deserves bulk investment.',
      },
      { t: 'h2', x: 'Matching the model to your stage' },
      {
        t: 'ul',
        items: [
          'Just launching, unproven designs → low-MOQ batches / print-on-demand.',
          'Have a few proven sellers → private-label bulk on those, test the rest small.',
          'Established with predictable demand → bulk inventory with deep volume discounts.',
        ],
      },
      {
        t: 'p',
        x: 'Velocity Wear supports the whole journey: a 20-piece MOQ for testing, full private-label branding (woven labels, custom tags, packaging) and tiered bulk pricing for your proven winners — all shipped to the UK, USA and worldwide. Request a quote for whichever stage you are at.',
      },
    ],
    faq: [
      {
        q: 'Is dropshipping or bulk better for an apparel brand?',
        a: 'Dropshipping/print-on-demand is better for testing new designs with little risk; bulk inventory gives far better margins, faster shipping and full branding control once a design is proven. Many brands use both — test small, scale the winners into bulk.',
      },
      {
        q: 'What is private label apparel?',
        a: 'Private label means selling quality blanks under your own brand — with custom woven labels, tags and packaging — rather than a generic, unbranded product. It is how a printed garment becomes a recognisable brand.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 9 */
  {
    slug: 'shipping-custom-apparel-uk-usa-duties-lead-times',
    title: 'Shipping Custom Apparel to the UK & USA: Lead Times, Duties & Logistics',
    description:
      'A clear guide to importing and shipping custom apparel to the UK and USA — lead times, incoterms, import duties and VAT, de minimis thresholds, and how to avoid customs delays.',
    excerpt:
      'Customs, duties, VAT and incoterms decide whether your bulk order arrives on time and on budget. Here is the plain-English guide to shipping custom apparel into the UK and USA.',
    category: 'Wholesale',
    date: '2026-02-12',
    readMins: 8,
    keywords: [
      'import custom apparel UK',
      'import clothing USA duties',
      'apparel shipping lead times',
      'incoterms clothing',
      'customs duty clothing',
      'wholesale apparel logistics',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'A great product still has to arrive — on time, undamaged and without a surprise customs bill. For brands importing custom apparel into the UK and USA, logistics is where margins and launch dates are quietly won or lost. This guide demystifies lead times, incoterms, duties and the common mistakes that cause delays.',
      },
      { t: 'h2', x: 'Lead times: plan backwards from your launch' },
      {
        t: 'p',
        x: 'Total lead time is more than production. Build your timeline backwards from your launch date and include every stage:',
      },
      {
        t: 'ul',
        items: [
          'Design & mockup approval — allow a few days of back-and-forth.',
          'Production — typically around 7–14 days for custom bulk orders, depending on quantity and decoration.',
          'Transit — express air freight is days; sea freight is weeks but far cheaper at volume.',
          'Customs clearance — usually quick, but build in a buffer for inspections.',
        ],
      },
      { t: 'h2', x: 'Incoterms: know who pays for what' },
      {
        t: 'p',
        x: 'Incoterms define exactly where the seller’s responsibility ends and yours begins. Getting this in writing prevents nasty surprises. The two you will meet most often:',
      },
      {
        t: 'ul',
        items: [
          'DDP (Delivered Duty Paid) — the supplier handles shipping, duties and taxes; you get one all-in landed price. Simplest for most buyers.',
          'EXW / FOB — you take on freight and import costs from an earlier point. Potentially cheaper, but you manage the customs process.',
        ],
      },
      { t: 'h2', x: 'Importing into the UK' },
      {
        t: 'p',
        x: 'Apparel imported into the UK is generally subject to import duty (rates vary by product and country of origin) plus VAT on the total value including duty and shipping. Low-value consignment relief is limited, so for commercial bulk orders you should assume duty and VAT apply. An EORI number is required for businesses importing into the UK, and a DDP quote rolls these costs into one figure so you can price accurately.',
      },
      { t: 'h2', x: 'Importing into the USA' },
      {
        t: 'p',
        x: 'The USA applies duty based on the product classification (HTS code) and country of origin, with apparel rates that can be meaningful. The de minimis threshold has historically allowed lower-value shipments to enter duty-free, but the rules around it have tightened and continue to change — so never build a business plan on duty-free entry without confirming the current position. For commercial quantities, plan for duty and request a landed quote.',
      },
      {
        t: 'quote',
        x: 'The most expensive shipping mistake is an unbudgeted one. Always confirm whether your quote includes duties and taxes before you sign off.',
      },
      { t: 'h2', x: 'How to avoid customs delays' },
      {
        t: 'ol',
        items: [
          'Provide accurate commercial invoices with correct product descriptions and values.',
          'Confirm the correct HS/HTS classification for your apparel.',
          'Keep your EORI (UK) or importer details (USA) ready in advance.',
          'Prefer a DDP / landed quote if you want the supplier to manage clearance.',
          'Build a customs buffer into your launch timeline — do not cut it fine.',
        ],
      },
      { t: 'h2', x: 'Air vs sea freight' },
      {
        t: 'p',
        x: 'For small or urgent orders, express air freight gets you stock in days. For large bulk orders where timing is flexible, sea freight dramatically reduces per-unit shipping cost. Many brands air-freight a first small batch to launch on time, then move bulk reorders by sea to protect margin.',
      },
      {
        t: 'p',
        x: 'Velocity Wear ships custom apparel to the UK, USA, Canada, Australia and worldwide with tracked delivery, and itemises shipping and lead time in every quote so there are no surprises at the border. Ask for a landed quote to your country.',
      },
    ],
    faq: [
      {
        q: 'Do I pay import duty on custom apparel into the UK or USA?',
        a: 'For commercial bulk orders, generally yes. The UK charges import duty plus VAT on the landed value; the USA charges duty based on the product’s HTS classification and origin. A DDP/landed quote includes these so you can price accurately. Rates and thresholds change, so confirm the current position before ordering.',
      },
      {
        q: 'How long does shipping take?',
        a: 'Production for custom bulk orders is typically around 7–14 days after mockup approval, plus transit: a few days by express air freight or several weeks by sea freight for large, cost-sensitive orders.',
      },
    ],
  },

  /* ----------------------------------------------------------------- 10 */
  {
    slug: 'hoodie-design-trends-2026',
    title: 'Designing Hoodies That Sell: Streetwear Trends & Artwork Tips for 2026',
    description:
      'The custom hoodie design trends shaping 2026 — heavyweight boxy fits, tonal and puff branding, nature-inspired palettes, back prints and minimal logos — plus practical artwork tips that sell.',
    excerpt:
      'What is selling in custom hoodies right now — heavyweight boxy fits, tonal branding, nature-inspired palettes and back prints — plus the artwork tips that turn a design into a sell-out.',
    category: 'Design',
    date: '2026-01-29',
    readMins: 7,
    keywords: [
      'hoodie design trends 2026',
      'streetwear trends',
      'custom hoodie design',
      'apparel artwork tips',
      'best selling hoodie designs',
      'hoodie branding',
    ],
    content: [
      {
        t: 'p',
        lead: true,
        x: 'A hoodie sells on two things: how it feels and how it looks. We have covered fabric elsewhere — this is about design. Here are the streetwear and custom-apparel trends shaping 2026, plus the practical artwork tips that turn a nice idea into a sell-out drop.',
      },
      { t: 'h2', x: 'Trend 1 — heavyweight, boxy and structured' },
      {
        t: 'p',
        x: 'The relaxed, boxy, slightly cropped silhouette in heavyweight 380–450 GSM fleece continues to dominate premium streetwear. The fit itself is a design choice: a structured, dense hoodie reads as quality before a single graphic is added. Design for that drape and the garment does half the selling for you.',
      },
      { t: 'h2', x: 'Trend 2 — tonal and tactile branding' },
      {
        t: 'p',
        x: 'Loud, high-contrast logos are giving way to quieter, more premium branding: tonal embroidery (thread close to the garment colour), 3D puff prints, and subtle chest marks with a bolder statement saved for the back. The effect is confident rather than shouty — the look that lets a brand charge more.',
      },
      { t: 'h2', x: 'Trend 3 — nature-inspired palettes and themes' },
      {
        t: 'p',
        x: 'Earthy, nature-led palettes — sage, stone, clay, washed olive, sky and sand — are everywhere, often paired with organic or recycled fabric and water-based inks for a soft, vintage finish. Nature motifs (mountains, flora, topographic lines, wildlife) resonate with the outdoor and eco-minded audiences driving a lot of current demand.',
      },
      { t: 'h2', x: 'Trend 4 — the back print as the hero' },
      {
        t: 'p',
        x: 'Front-and-centre chest logos are sharing the stage with large, expressive back prints — slogans, artwork, location drops and graphic statements. A small embroidered chest mark plus a bold back graphic is one of the strongest-selling combinations of the year, and it pairs perfectly with an embroidery-plus-print decoration mix.',
      },
      { t: 'h2', x: 'Practical artwork tips that actually matter' },
      {
        t: 'ul',
        items: [
          'Design in vector — artwork should scale to any size without going blurry.',
          'Design for the garment colour, not a white screen — check contrast on the real fleece.',
          'Limit your colours — fewer, well-chosen colours look more premium and print more cleanly.',
          'Mind placement and print size — measure it on the actual garment, not just on screen.',
          'Keep small text legible — fine detail can clog in embroidery and lose crispness in print.',
          'Always approve a mockup — a photorealistic proof catches problems before production.',
        ],
      },
      { t: 'h2', x: 'Match the decoration to the design' },
      {
        t: 'p',
        x: 'Your trend is only as good as its execution. Photographic, colourful art belongs on DTF; bold, limited-colour graphics shine in screen print at volume; logos and monograms look most premium in embroidery. Choosing the right method for each element is what separates a hoodie that looks home-made from one that looks retail.',
      },
      {
        t: 'quote',
        x: 'Trends get you noticed; execution gets you repeat customers. A simple design printed perfectly beats a clever design printed badly every time.',
      },
      {
        t: 'p',
        x: 'Velocity Wear’s in-house designers refine your artwork until it is print-perfect, then produce it in DTF, screen print, embroidery or sublimation on premium fleece — with a 20-piece MOQ so you can test this season’s ideas before you commit. Send a sketch for a free mockup and quote.',
      },
    ],
    faq: [
      {
        q: 'What hoodie designs sell best in 2026?',
        a: 'Heavyweight boxy fits with tonal or puff branding, nature-inspired earthy palettes, and a small embroidered chest logo paired with a bold back print are among the strongest-selling combinations.',
      },
      {
        q: 'What format should I supply my artwork in?',
        a: 'Vector formats (such as AI, EPS or PDF) are best because they scale to any size without losing quality. High-resolution PNGs can work for DTF, but vector is preferred for crisp prints and embroidery digitising.',
      },
    ],
  },
];

// Newest first.
export function getAllPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug);
}

// Up to `count` other posts, newest first, excluding the given slug.
export function getRelatedPosts(slug, count = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, count);
}

export function postUrl(slug) {
  return `${SITE_URL}/blog/${slug}`;
}

// Human-friendly date, e.g. "2 June 2026". Deterministic (no locale surprises).
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
