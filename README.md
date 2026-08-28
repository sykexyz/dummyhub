# DUMMY HUB

DUMMY HUB is a small, legal-first, age-gated video publishing MVP for Railway.

## What is included

- A blocking 18+ confirmation screen with an exit path for underage visitors.
- A left slide-out navigation on mobile and fixed glass sidebar on larger screens.
- Separate Dummy Hub, Categories, About, and Admin Studio views (no category sections stacked on one long scroll).
- Black and semi-orange liquid glass visual system with inline SVG icons.
- Admin-only uploads for MP4, WebM, and MOV files up to 500 MB.
- Server-side admin authentication, rate limiting, Helmet headers, private media response headers, and path traversal protection.
- The public video API exposes a generated media route only; it never returns the internal upload filename.

## Local setup

1. Install Node.js 18 or newer.
2. Copy .env.example to .env.
3. Set ADMIN_PASSWORD and a long random SESSION_SECRET in .env.
4. Run npm install.
5. Run npm start and open http://localhost:3000.

Never commit .env, passwords, database URLs, OAuth tokens, or uploaded media. A private repository is not a substitute for secret management.

## Railway setup

Set these as Railway environment variables/secrets:

- ADMIN_USERNAME (default is kyle if omitted)
- ADMIN_PASSWORD (required for admin uploads)
- SESSION_SECRET (required in production)
- NODE_ENV=production
- PORT (Railway normally supplies this automatically)

The current MVP uses local data and uploads folders. Railway filesystems can be ephemeral, so production publishing should move the catalog to PostgreSQL and the media files to a private object-storage bucket with signed delivery. Do not paste a database connection string into source code; add it through Railway's secret manager when the persistence layer is wired.

## Legal and safety checklist

This interface is not legal advice and an age button alone may not satisfy every jurisdiction. Before publishing real adult content, confirm with qualified local counsel and implement the requirements that apply to the operator and audience, including:

- verified adult performers and documented consent/release records;
- copyright and distribution rights for each upload;
- reporting, moderation, complaint, and prompt takedown workflows;
- privacy policy, terms, retention, and access controls;
- required age assurance and records where applicable;
- payment, tax, advertising, and platform policies.

The protected media route reduces casual URL exposure, but no web application can guarantee DRM, prevent screen recording, or stop a determined viewer from capturing content. Use a real DRM-capable video service if your business requirements demand it.
