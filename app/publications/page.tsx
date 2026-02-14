import { SectionHeading } from '@/components/section-heading';
import { publications } from '@/lib/site-data';

export default function PublicationsPage() {
  return (
    <section className="section">
      <div className="container-wrap">
        <SectionHeading title="Publications" description="Research, essays, and featured writing." />
        <div className="space-y-4">
          {publications.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 p-5">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">
                {item.outlet} · {item.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
