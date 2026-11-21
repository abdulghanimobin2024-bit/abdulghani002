# AGENTS.md — AI agent notes for this repo

## What this is

Static personal portfolio site (Abdul Ghani, Diploma CSE student). No framework, no bundler, no build command. `netlify.toml` publishes the repo root directly.

## File map

- `index.html` — entire site: nav, hero, about, skills, projects, education, contact, footer. All editable content lives here; placeholders marked with `TODO:` comments.
- `styles.css` — dark premium theme (CSS variables in `:root`), glassmorphism cards, responsive breakpoints at 900px and 640px.
- `script.js` — mobile nav toggle, scrollspy, reveal-on-scroll (IntersectionObserver, also drives skill bars), hero typing effect, AJAX contact-form submit with native-POST fallback. Vanilla JS, IIFE, no dependencies.
- `thank-you.html` — served at `/thank-you` (extensionless) after contact-form submit.
- `img/profile.jpg` — hero/about photo (optimized 900px JPG trimmed from the uploaded PNG).
- `resume.pdf` — placeholder one-page PDF; owner replaces with the real resume keeping the same filename.
- `.netlify/features/netlify-forms` — marker enabling Netlify form detection at deploy (do not delete).

## Conventions

- Content edits go in `index.html` only; keep SEO tags (`title`, `description`, OG) in sync when the name/role changes.
- Contact form must keep `name="contact"`, `data-netlify="true"`, hidden `form-name` input, honeypot `bot-field`, and `action="/thank-you"`. AJAX posts URL-encoded to `/`.
- Skill bars: level is the inline `--w` custom property on `.bar > span`; animation triggers via `.reveal.visible`.
- Reduced-motion users: `prefers-reduced-motion` disables reveal transforms, typing effect and ring spin — keep those guards.
- Do not invent credentials: no fake certificates, experience, or achievements. Unknown contact details stay as `TODO:` placeholders.
- No build/validation commands needed; `node --check script.js` is enough for a JS syntax sanity check.
