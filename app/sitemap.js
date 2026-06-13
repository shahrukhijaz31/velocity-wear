import { SITE_URL } from '@/lib/site';
import { categorySlug } from '@/lib/blog';
import { getMergedCategories, getMergedPosts } from '@/lib/posts';
import { wholesaleSlugs } from '@/lib/wholesale';

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/wholesale`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/wholesale-towels`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const postRoutes = (await getMergedPosts()).map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const categoryRoutes = (await getMergedCategories()).map((category) => ({
    url: `${SITE_URL}/blogs/category/${categorySlug(category)}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const wholesaleRoutes = wholesaleSlugs().map((slug) => ({
    url: `${SITE_URL}/wholesale/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...wholesaleRoutes, ...categoryRoutes, ...postRoutes];
}
