# Shonali Personal Site (Next.js + Vercel)

Modern, mobile-first rebuild of `www.shonalisrivastava.com` with refreshed content from current pages:
- ShAMA
- About Shonali
- What We Offer
- Register/Contact
- Girjasha Global Foundation

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Vercel hosting

## Quick start
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Content editing (easy future updates)
Primary editable files:
- `lib/site-data.ts` → brand, about highlights, offerings, projects, resume, social links
- `lib/blog-data.ts` → blog entries

This keeps layout and content decoupled so migration to a headless CMS later is straightforward.

## Recommended contact setup
Use Formspree (best low-maintenance option for your use case):
1. Create a form in Formspree.
2. Replace `FORMSPREE_ID` in `app/contact/page.tsx`.
3. Route notifications to your email.

## Vercel migration checklist
1. Push this repo to GitHub.
2. Import repo in Vercel.
3. Set production domain to `www.shonalisrivastava.com`.
4. In your DNS provider, point `www` CNAME to `cname.vercel-dns.com`.
5. Optionally redirect apex `shonalisrivastava.com` to `www` in Vercel domain settings.

## Future roadmap
- Add downloadable CV and certificate files in `public/`
- Add events/talks/testimonials as data collections
- Add Hindi localization (e.g. `/hi`) in next phase
