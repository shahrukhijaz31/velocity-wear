import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import PostEditor from '@/components/admin/PostEditor';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }) {
  let post = null;
  try {
    post = await prisma.post.findUnique({ where: { id: params.id } });
  } catch {
    post = null;
  }
  if (!post) notFound();

  // Pass only the serialisable fields the editor needs.
  const data = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    category: post.category,
    excerpt: post.excerpt,
    keywords: post.keywords,
    readMins: post.readMins,
    body: post.body,
    published: post.published,
  };

  return <PostEditor post={data} />;
}
