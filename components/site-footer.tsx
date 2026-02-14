import Link from 'next/link';
import { siteConfig } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="container-wrap flex flex-col gap-4 text-sm text-gray-600 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {siteConfig.socialLinks.map((social) => (
            <Link key={social.label} href={social.href} target="_blank" className="hover:text-accent">
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
