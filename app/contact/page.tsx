import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site-data';

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-wrap grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading title="Register / Contact" description="Best option: Formspree + Vercel (secure, low-maintenance, no backend needed)." />
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Create a Formspree form and copy the form ID.</li>
            <li>• Replace <code>FORMSPREE_ID</code> below.</li>
            <li>• Configure notifications to your preferred email inbox.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Direct email: {siteConfig.email}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {siteConfig.socialLinks.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" className="text-sm font-medium text-accent">
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <form
          action="https://formspree.io/f/FORMSPREE_ID"
          method="POST"
          className="space-y-4 rounded-2xl border border-gray-200 p-6"
        >
          <label className="block text-sm font-medium">
            Name
            <input name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
          </label>
          <label className="block text-sm font-medium">
            Program Interest
            <input name="interest" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tabla, Vocal, Kathak, Workshop" />
          </label>
          <label className="block text-sm font-medium">
            Message
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
          </label>
          <button type="submit" className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
