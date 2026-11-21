# Irfan — World-Class Video Editor Portfolio

A dark luxury portfolio website built for **Irfan** (Irfan Ahmed B), a high-end freelance video editor specializing in short-form viral retention, YouTube narrative editing, commercial motion graphics, color grading, and sound design.

Designed to feel like the online presence of an elite creative professional who edits for major YouTubers, venture-backed startups, visionary brands, and personal creators.

---

## 🎨 Design Direction & Aesthetic
- **Dark Luxury Theme**: Background `#050505`, high-contrast typography, electric blue accents (`#0066FF` / `#00D2FF`).
- **Inspiration**: Apple, Linear, and modern motion designer portfolios.
- **Micro-Interactions**:
  - Interactive mouse spotlight glow that highlights card borders.
  - Floating star & constellation particle canvas with cursor parallax.
  - 60fps smooth scrolling with real-time gradient scroll progress bar.
  - Infinite animated client logo marquee (Nike, Adobe, Shopify, Notion, OpenAI, HubSpot, Canva, Tesla).
  - Hover-triggered silent video previews on all project cards.
  - Fullscreen cinematic lightbox modal with custom scrub bar, timecode, audio toggle, and keyboard shortcuts (`Space` to play/pause, `Esc` to close).
  - Interactive Before / After slider demonstrating RAW footage vs. DaVinci Resolve color grading & audio mastering.
  - Synthesized luxury Web Audio micro-interactions (default muted, toggleable via the speaker icon in the navbar).
  - High-converting contact form with 1-click email copy button and celebratory success animation.

---

## 🎬 Video Assets Mapping
All videos provided in `C:\Users\Irfan\OneDrive\Desktop\Basic editing\final videos\` have been mapped to their dedicated sections:

| Section | Project / Placement | Video File | Description |
| :--- | :--- | :--- | :--- |
| **Section 1 (Hero)** | Floating Showreel Player | `videos/hero-section.mp4` | 4K 60FPS loop, auto-playing, muted, elevation glow, live badges |
| **Section 3 (Featured Showreel)** | Featured Showreel Card | `videos/chatgpt-saas.mp4` | SaaS Motion Direction, pulsing play button, opens fullscreen lightbox |
| **Section 4 (Short Form)** | Productivity Reel | `videos/promoted-reel.mp4` | 9:16 vertical format, 1.2M+ views, kinetic subtitles & hook retention |
| **Section 5 (Long Form #1)** | SaaS Animation Edit | `videos/chatgpt-saas.mp4` | Tech & product walkthrough with animated cursor & UI transitions |
| **Section 5 (Long Form #2)** | Before & After Transformation | `videos/before-after-tharun.mp4` | Side-by-side color grading overhaul & interactive slider comparison |
| **Section 5 (Long Form #3)** | Educational YouTube Video | `videos/tharun-talking-head.mp4` | High-retention pacing, pattern interrupts, and watch-time optimization |
| **Section 5 (Long Form #4)** | Talking Head Video Production | `videos/assignment-3.mp4` | Founder thought-leadership edit, simulated 2-camera cut-ins, b-roll |
| **Section 5 (Long Form #5)** | Motion Graphics & 3D Typography | `videos/hero-section.mp4` | High-octane commercial titles, custom optical flares, 3D typography |

---

## 🚀 How to Run & Preview
You can preview the website immediately using either of the following methods:

### Method 1: Double-Click the Launcher
Simply double-click **`start-server.bat`** in this folder. It will start a local HTTP server and automatically launch your browser to:
```
http://localhost:3000
```

### Method 2: Command Line
Open a terminal in this directory and run:
```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in Chrome, Edge, Safari, or Brave.

---

## 📁 File Structure
```
portfolio/
├── index.html            # Main comprehensive single-page portfolio
├── project.html          # Dedicated interactive project case-study deep-dive page
├── start-server.bat      # One-click Windows launcher
├── README.md             # Complete documentation
├── css/
│   └── styles.css        # Custom dark luxury CSS system (variables, glassmorphism, responsive)
├── js/
│   ├── main.js           # Particle canvas, mouse spotlight, video lightbox, count-up, form
│   └── audio.js          # Web Audio API micro-interaction sound engine
├── posters/              # High-resolution extracted video thumbnails for instant zero-lag rendering
│   ├── hero-poster.jpg
│   ├── chatgpt-saas.jpg
│   ├── promoted-reel.jpg
│   ├── before-after-tharun.jpg
│   ├── tharun-talking-head.jpg
│   └── assignment-3.jpg
└── videos/               # High-definition video files
    ├── hero-section.mp4
    ├── chatgpt-saas.mp4
    ├── promoted-reel.mp4
    ├── before-after-tharun.mp4
    ├── tharun-talking-head.mp4
    └── assignment-3.mp4
```

---

## 📬 Contact Information & Email Lead Notifications
- **Name**: Irfan Ahmed B
- **Role**: Senior Video Editor & Motion Designer
- **Direct Email**: `Irfan.initials1@gmail.com`
- **Budget Tiers**:
  - `$50 – $150` (Starter / Single Short Form or Hook Edit)
  - `$150 – $400` (Growth / YouTube or Multi-Reel Pack)
  - `$400+` (Pro & Retainer / Full Post-Production Bandwidth)
- **Live Email Notifications**:
  - When a visitor enters their Name, Email, Project Type, Budget, and Details and clicks **"Start Your Project"**, FormSubmit dispatches an instant notification email containing all lead information directly to **`Irfan.initials1@gmail.com`**.
  - *(Note: The very first time a lead submits through FormSubmit, FormSubmit will send a one-time confirmation email to `Irfan.initials1@gmail.com` with a button: "Activate Form". Clicking that once activates your inbox for all future instant notifications!)*
  - A fallback mailto button is also provided for seamless redundancy.
- **Instagram**: [https://www.instagram.com/thesimpleedit.0](https://www.instagram.com/thesimpleedit.0?jplx=MTJyZTh5dG5keHpiMg==) (`@thesimpleedit.0`)
- **Primary CTAs**: "Hire Me", "Book a Call", "Start Your Project"
- **Secondary CTAs**: "View My Work", "View Portfolio"
