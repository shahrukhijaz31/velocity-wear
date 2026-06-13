import { ImageResponse } from 'next/og';
import { getMergedPost } from '@/lib/posts';

export const runtime = 'nodejs';
export const alt = 'Velocity Wear — Custom Apparel Journal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Per-post Open Graph / Twitter card with the article title.
export default async function Image({ params }) {
  let title = 'The Velocity Wear Journal';
  let category = 'Custom Apparel';
  try {
    const post = await getMergedPost(params.slug);
    if (post) {
      title = post.title;
      category = post.category || 'Custom Apparel';
    }
  } catch {
    /* fall back to defaults */
  }

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '72px',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #070b16 0%, #04060c 60%, #0a1230 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 10, background: 'linear-gradient(90deg, #22e0ff, #2e7bff, #1f5fff)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 16, height: 16, borderRadius: 99, background: '#22e0ff' }} />
          <div style={{ fontSize: 30, letterSpacing: 6, textTransform: 'uppercase', color: '#9fd9ff' }}>
            Velocity Wear
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: 'uppercase', color: '#22e0ff' }}>
            {category}
          </div>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#8093ad' }}>
          <span>velocity-wear.com/blogs</span>
          <span>Custom Apparel · UK · USA · Europe</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
