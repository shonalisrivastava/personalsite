import { SectionHeading } from '@/components/section-heading';
import { featuredProjects } from '@/lib/site-data';

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container-wrap">
        <SectionHeading
          title="Projects"
          description="Modern case-study style cards sourced from current initiatives and ready for future dynamic expansion (events, talks, testimonials)."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-gray-600">{project.summary}</p>
              <p className="mt-3 text-sm text-gray-800"><span className="font-medium">Impact:</span> {project.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-accent">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
