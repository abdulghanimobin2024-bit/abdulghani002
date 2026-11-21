# Abdul Ghani — Personal Portfolio

A modern, dark-premium personal portfolio website for **Abdul Ghani**, a 5th-semester Diploma in Computer Science Engineering student from Andhra Pradesh, India, showcasing skills, projects, education and contact details for recruiters and interviewers.

## Tech

- Plain **HTML + CSS + JavaScript** — no framework, no build step, deploys as-is
- **Netlify Forms** for the contact form (submissions stored in the Netlify dashboard)
- Fonts via Google Fonts (Inter, Sora, JetBrains Mono)

## Run locally

No install needed — open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

(Note: the contact form only stores submissions when hosted on Netlify.)

## Customizing (all edits are in `index.html`)

| Change | How |
|---|---|
| Profile photo | Replace `img/profile.jpg` (square photo works best) |
| Name / headline | Search for "Abdul Ghani" in `index.html` |
| Skills | Edit the cards in the `#skills` section |
| Projects | Copy a card in the `#projects` section |
| Email / GitHub / LinkedIn / phone | Search for `TODO:` — every placeholder is marked |
| Resume | Replace `resume.pdf` with your file (keep the name) |

Contact placeholders currently use `youremail@example.com`, `github.com/your-username`, `linkedin.com/in/your-username` and `+91 XXXXX XXXXX` — replace them with real details before sharing with recruiters.

## Deploy

Push to the connected Git repo — Netlify deploys automatically (`netlify.toml` sets `publish = "."`, no build command).
