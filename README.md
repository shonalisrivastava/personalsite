# ShAMA Site

A Vercel-ready redesign for Shonali's Academy of Music and Arts.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel Form Submissions

Both the class inquiry form and the Sri GirjAsha senior registration form post
to `/api/submit`.

Add one or more of these environment variables in Vercel to forward submissions:

- `FORM_ENDPOINT`
- `GOOGLE_SHEETS_WEBHOOK_URL`
- `BASIN_ENDPOINT`
- `FORMSPREE_ENDPOINT`

The endpoint includes a hidden honeypot field for basic spam protection and
accepts only the known form types: `class-inquiry` and `senior-registration`.
