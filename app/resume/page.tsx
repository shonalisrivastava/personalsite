import { SectionHeading } from '@/components/section-heading';
import { resumeHighlights } from '@/lib/site-data';

export default function ResumePage() {
  return (
    <section className="section">
      <div className="container-wrap grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeading title="Resume" description="A concise overview now, with downloadable files planned for next phase." />
          <ul className="space-y-3 text-gray-700">
            {resumeHighlights.experience.map((item) => (
              <li key={item} className="rounded-xl border border-gray-200 p-4">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold">Education</h3>
          <ul className="space-y-3 text-gray-700">
            {resumeHighlights.education.map((item) => (
              <li key={item} className="rounded-xl border border-gray-200 p-4">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
