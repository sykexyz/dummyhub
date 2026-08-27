# DUMMY HUB

A small, age-gated creator video hub with a red/black glassmorphism interface and a server-backed admin upload flow.

## Run locally

```bash
npm install
cp .env.example .env
# Set ADMIN_PASSWORD and SESSION_SECRET in .env
npm start
```

Open `http://localhost:3000`.

## Configuration

Set these as environment variables or hosting secrets. They are intentionally **not** hard-coded into the frontend or committed to the repository:

- `ADMIN_USERNAME` — defaults to `kyle` if omitted.
- `ADMIN_PASSWORD` — required to enable admin login.
- `SESSION_SECRET` — use a long random value in production.
- `NODE_ENV=production` — enables secure cookies behind HTTPS.

The supplied admin password should be entered into the deployment's secret manager, never into `src`, HTML, JavaScript, Git, or a chat message.

## Media access notes

Uploaded media is stored outside the public static directory and is served through opaque IDs after the age-confirmation cookie is present. Responses use private/no-store cache headers, `nosniff`, and no directory listing. Uploads are limited to MP4, WebM, and MOV files up to 500 MB.

This is not DRM. A browser must receive playable media, so a determined visitor can still capture a screen or inspect a network request. `controlsList="nodownload"` is only a UI deterrent. For stronger protection, add a real streaming/DRM provider, short-lived signed URLs, per-viewer watermarking, abuse monitoring, and an authenticated creator/viewer model.

## Legal and trust checklist before publishing

An age gate is only one layer and is not a universal legal compliance solution. Before accepting real uploads or making the site public, verify the laws and platform rules that apply to the operator, creators, and viewers:

- Document verified age and identity for every performer, and retain consent and release records.
- Build moderation, reporting, takedown, and repeat-infringer processes before launch.
- Publish Terms of Use, Privacy Policy, content rules, and a copyright/DMCA contact process.
- Never publish content without explicit consent and the rights to distribute it.
- Restrict access according to the jurisdictions where the site is available; consult a qualified local lawyer for the exact requirements.
- Protect upload records and personal data with encrypted storage, access logs, retention limits, and backups.

The UI's social links are placeholders (`href="#"`) until the owner's public profiles are supplied.