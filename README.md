# Vihasith — Portfolio

A clean, mobile‑first portfolio for **Data Engineer · Data Analyst · Database Developer · BI Developer** roles.  
Built as a static website (HTML/CSS/JS) and published via **GitHub Pages**.

**Live:** https://vihasith137.github.io/portfolio/

---

## 🔎 Overview

This site highlights:
- **About**: civil‑engineering → data‑engineering journey
- **Education**: B.Tech (Civil), continuing cloud/data learning
- **Work Experience**: State of Ohio → Ohio National Guard → PG&E → Kaizen → Cognizant (newest first)
- **Projects**: Cincinnati Weather & Flood‑Risk (GIS), LOC_DATA/PDS_DATA migrations, PG&E enhancements, Kaizen automations, Snowflake toolkit
- **Contact**: email/phone + a working contact form (Formspree)

---

## 🗂 Pages

- `/index.html` — Home (profile, highlights)
- `/about.html` — About
- `/education.html` — Education
- `/experience.html` — Work Experience (descending by time)
- `/projects.html` — Projects
- `/contact.html` — Contact (Formspree)
- `/thank-you.html` — Thank‑you page after form submit (optional)

---

## 🧩 Tech Stack

- **Static**: HTML, CSS, (optional) vanilla JS
- **Styling**: responsive layout + mobile enhancements (fluid type, cards, grids)
- **A11y/SEO**: focus rings, skip link, reduced motion, Open Graph/Twitter meta
- **Hosting**: GitHub Pages

---

## 📦 Folder Structure

```
.
├── index.html
├── about.html
├── education.html
├── experience.html
├── projects.html
├── contact.html
├── thank-you.html              # optional
└── assets/
    ├── css/
    │   ├── style.css           # main styles
    │   ├── style.mobile.css    # mobile improvements (included after style.css)
    │   └── style.a11y.css      # accessibility helpers
    ├── js/
    │   └── mobile.js           # (optional) hamburger toggle if used
    └── img/
        ├── profile@1x.webp     # desktop hero/about
        ├── profile@2x.webp
        ├── og-card.png         # social preview image
        └── logos/...           # org logos (optional)
```

> If you don’t use `style.mobile.css` or `style.a11y.css`, remove their `<link>` tags from pages.

---

## 🚀 Local Preview

Open any page directly in your browser, or use a simple server:

```bash
# Python 3
python -m http.server 5500
# then visit http://localhost:5500
```

---

## 🌐 Deploy (GitHub Pages)

1. Make repo **Public**: *Settings → General → Visibility → Public*  
2. Enable **Pages**: *Settings → Pages → Build and deployment → Deploy from a branch*  
   - **Branch:** `main` • **Folder:** `/ (root)` → **Save`**  
3. Your site lives at: `https://<username>.github.io/<repo>/`

This repo’s live URL: **https://vihasith137.github.io/portfolio/**

---

## ✉️ Contact Form (Formspree)

The site uses **Formspree** to store submissions *and* email them to you.

- Endpoint (already wired): `https://formspree.io/f/meororvn`
- In `contact.html`, the form looks like:

```html
<form action="https://formspree.io/f/meororvn" method="POST" accept-charset="UTF-8">
  <input type="hidden" name="_subject" value="Portfolio contact — vihasith137.github.io/portfolio">
  <input type="hidden" name="_next" value="https://vihasith137.github.io/portfolio/thank-you.html">
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <!-- name/email/message fields -->
</form>
```

To change the endpoint, create a new form in Formspree and replace the URL above.

---

## 📱 Mobile & A11y

- `assets/css/style.mobile.css` — fluid type, compact spacing, better grids, timeline/logo sizing.  
- `assets/css/style.a11y.css` — visible focus, skip link, reduced motion, improved contrast.
- Optional hamburger: add `assets/js/mobile.js` and a `<button class="nav-toggle">` in the header if you want a collapsible menu.

> **Profile photo on mobile:** use CSS cropping with `.avatar img { object-fit: cover; object-position: 50% 25%; }` or a mobile‑specific WebP via `<picture>` if you prefer exact framing.

---

## 🔧 Customize

- **Branding**: update initials/logo in the header, favicon, and color variables in `style.css`.
- **Logos**: replace placeholder PNGs in `assets/img/logos/` using the same filenames.
- **OG preview**: update `assets/img/og-card.png` and the `<meta property="og:image">` in page heads.
- **Analytics**: optionally add Plausible/GA4 script tags to pages.

---

## 📬 Contact

- **Email:** `vihasith137@gmail.com`  
- **Phone:** `+1 (513) 410-9021`  
- **LinkedIn:** https://www.linkedin.com/in/vihasithr1234/  
- **GitHub:**  https://github.com/Vihasith137/  
- **Location:** Ohio, USA

---

## ⚖️ License

- **Code**: MIT (feel free to reuse/extend)  
- **Content (text, images, logos)**: © 2025 Vihasith R. All rights reserved.
