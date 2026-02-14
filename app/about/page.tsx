import { SectionHeading } from '@/components/section-heading';
import { aboutHighlights, siteConfig } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-wrap grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-gray-700">
          <SectionHeading title="About Shonali" description="Refreshed from your current website content." />
          <p>
            Shonali Srivastava is a distinguished music and dance professional in the Bay Area, trained in tabla,
            Hindustani classical vocal, and Kathak. Her work carries forward a deep cultural lineage while making
            classical arts approachable for contemporary learners.
          </p>
          <p>
            Her artistic path began early, with decades of performance experience across stage, television, and radio.
            She combines rigorous training with a teaching approach centered on discipline, expression, and confidence.
          </p>
        </div>

        <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-lg font-semibold">Highlights</h3>
          <ul className="mt-3 space-y-3 text-sm text-gray-700">
            {aboutHighlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-600">Location: {siteConfig.location}</p>
        </aside>
      </div>
    </section>
  );
}
