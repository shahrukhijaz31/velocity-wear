// Public blog data: merges the hardcoded posts (lib/blog.js) with published
// posts from the database (admin CMS). DB reads are guarded so the site builds
// and renders even when no database is connected.

import { CATEGORIES, getAllPosts as staticAll, getPostBySlug as staticBySlug } from './blog';

// Normalize a DB post (Prisma) into the public post shape.
function fromDb(p) {
  const created = p.createdAt instanceof Date ? p.createdAt : new Date(p.createdAt);
  return {
    slug: p.slug,
    title: p.title,
    description: p.excerpt || p.title,
    excerpt: p.excerpt || '',
    category: p.category || 'Ecommerce',
    date: created.toISOString().slice(0, 10),
    readMins: p.readMins || 5,
    keywords: p.keywords ? p.keywords.split(',').map((k) => k.trim()).filter(Boolean) : [],
    body: p.body || '', // HTML from the CMS
    faq: [],
    source: 'db',
  };
}

function fromStatic(p) {
  return { ...p, source: 'static' };
}

// Published DB posts (empty array if the DB is unavailable).
async function dbPosts() {
  // Skip entirely when no database is configured (e.g. local/CI builds),
  // so the build stays clean and never attempts a doomed query.
  if (!process.env.POSTGRES_PRISMA_URL) return [];
  try {
    const { prisma } = await import('./db');
    const rows = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
    return rows.map(fromDb);
  } catch {
    return [];
  }
}

// All posts (DB + static), newest first. DB posts win on slug clashes.
export async function getMergedPosts() {
  const db = await dbPosts();
  const bySlug = new Map();
  for (const p of staticAll()) bySlug.set(p.slug, fromStatic(p));
  for (const p of db) bySlug.set(p.slug, p);
  return [...bySlug.values()].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getMergedPost(slug) {
  const db = await dbPosts();
  const found = db.find((p) => p.slug === slug);
  if (found) return found;
  const s = staticBySlug(slug);
  return s ? fromStatic(s) : null;
}

export async function getMergedCategories() {
  const posts = await getMergedPosts();
  const used = new Set(posts.map((p) => p.category));
  return Object.keys(CATEGORIES).filter((c) => used.has(c));
}

export async function getMergedByCategory(category) {
  return (await getMergedPosts()).filter((p) => p.category === category);
}

export async function getMergedRelated(slug, count = 3) {
  const post = await getMergedPost(slug);
  const others = (await getMergedPosts()).filter((p) => p.slug !== slug);
  if (!post) return others.slice(0, count);
  const sameCat = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCat, ...rest].slice(0, count);
}

export async function getMergedSlugs() {
  return (await getMergedPosts()).map((p) => p.slug);
}
