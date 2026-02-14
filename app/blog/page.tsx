import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container-wrap">
        <SectionHeading title="Blog" description="Simple publishing structure backed by local content data for easy future migration to CMS." />
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-gray-200 p-5">
              <p className="text-xs uppercase tracking-wide text-gray-500">{post.date} · {post.readingTime}</p>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block font-medium text-accent">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
