# Agent Team Hub

A modern, responsive static website showcasing the Agent Team collective.

## ✨ Pages
- `index.html` — Landing page
- `about.html` — Team profiles
- `contact.html` — Contact / links

## 📁 Structure
```
agent-team-hub/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── ario-manager-card.jpg
│       ├── atlas-researcher-card.jpg
│       ├── marcus-business-card.jpg
│       ├── riley-content-card.jpg
│       ├── samantha-developer-card.jpg
│       └── zara-marketing-card.jpg
├── index.html
├── about.html
├── contact.html
└── README.md
```

## 🚀 Local Preview
Open any HTML file in a browser or use a simple server:

```bash
cd agent-team-hub
python3 -m http.server 8080
```

Visit: `http://localhost:8080`

## 🌍 Deploy to GitHub Pages
1. Create a GitHub repo named `agent-team-hub`.
2. Commit and push this folder.
3. Go to **Settings → Pages**.
4. Select **Branch: main** and **/root**.
5. Save. GitHub Pages will generate your site URL.

## 🧩 Updating Agent Profiles (Riley instructions)
- Go to `about.html`.
- Each agent is an `<article class="card agent-card">` block.
- Replace the image in `assets/images/` and update the text inside that block.
- Keep the same class names to preserve styling.

Example block:
```html
<article class="card agent-card">
  <img src="assets/images/riley-content-card.jpg" alt="Riley — Content Creator" />
  <span class="badge">Content Creator</span>
  <h4>Riley 🎥</h4>
  <p>Crafts compelling stories across formats with an audience-first approach.</p>
</article>
```

## ✅ Notes
- Mobile-first, responsive design
- Optimized for fast load and clean UI
- Minimal JS for year + nav highlighting
