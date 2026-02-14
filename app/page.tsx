import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { featuredProjects, offerings, scrapedGalleryImages, siteConfig } from '@/lib/site-data';

export default function HomePage() {
  return (
    <>
      <section className="section bg-soft">
        <div className="container-wrap grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div className="space-y-5">
            <p className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              {siteConfig.brand}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{siteConfig.name}</h1>
            <p className="max-w-2xl text-lg text-gray-700">{siteConfig.tagline}</p>
            <p className="rounded-xl border border-violet-200 bg-white p-4 text-sm text-gray-700">{siteConfig.announcement}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white">View Projects</Link>
              <Link href="/contact" className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium">Register / Contact</Link>
            </div>
          </div>
          <div className="grid gap-3 rounded-2xl bg-white p-6 shadow-sm">
            {siteConfig.heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-100 p-4">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap">
          <SectionHeading title="From Current Site Gallery" description="Scraped images from your existing site, now embedded directly into the new design." />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {scrapedGalleryImages.map((src, idx) => (
              <div key={src} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <Image src={src} alt={`Shonali gallery image ${idx + 1}`} width={500} height={500} className="h-40 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap">
          <SectionHeading title="What We Offer" description="Programs inspired by the original site content, redesigned for clarity and future updates." />
          <div className="grid gap-4 md:grid-cols-2">
            {offerings.map((offering) => (
              <article key={offering.title} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold">{offering.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{offering.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-wrap">
          <SectionHeading title="Featured Projects" description="Programs and initiatives across performance, education, and social impact." />
          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{project.summary}</p>
                <p className="mt-2 text-sm text-gray-800"><span className="font-medium">Impact:</span> {project.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
