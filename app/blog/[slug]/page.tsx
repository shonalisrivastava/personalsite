import { notFound } from 'next/navigation';
import { getPostBySlug, blogPosts } from '@/lib/blog-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container-wrap max-w-3xl">
        <p className="text-xs uppercase tracking-wide text-gray-500">{post.date} · {post.readingTime}</p>
        <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>
        <p className="mt-4 text-lg text-gray-700">{post.excerpt}</p>
        <div className="mt-8 space-y-4 text-gray-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
