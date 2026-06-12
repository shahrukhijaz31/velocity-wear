export default function manifest() {
  return {
    name: 'Velocity Wear — Custom Apparel & Wholesale Towels',
    short_name: 'Velocity Wear',
    description:
      'Premium custom apparel printing and wholesale towels for gyms, spas and hotels. Worldwide delivery, low MOQ.',
    start_url: '/',
    display: 'standalone',
    background_color: '#04060c',
    theme_color: '#04060c',
    categories: ['shopping', 'business'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
  };
}
