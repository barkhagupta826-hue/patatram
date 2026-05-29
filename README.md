# NeuroVita Rehabilitation Center — Website

A production-ready React + Tailwind CSS healthcare website built with:
- **React 18** + **Vite 5**
- **Tailwind CSS 3** (pre-configured)
- **React Router DOM 6** (full routing)
- **Framer Motion 11** (animations)
- **Lucide React** (icons)

## Pages
- `/` — Home (Hero, Stats, Services Preview, Testimonials, CTA)
- `/about` — About Us (Mission, Team, Values)
- `/director` — Director Profile (Bio, Timeline, Publications)
- `/services` — Services (Interactive card/detail panel)

- `/gallery` — Filterable gallery with lightbox
- `/contact` — Contact form + Info

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Sticky navbar with mobile menu
│   │   └── Footer.jsx       # Footer with newsletter signup
│   └── ui/
│       ├── Button.jsx       # Reusable animated button
│       ├── Card.jsx         # Reusable animated card
│       └── Section.jsx      # Section, SectionHeader, Container, PageWrapper
├── data/
│   └── index.js            # All dummy data (services, team, etc.)
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Director.jsx
│   ├── Services.jsx
│   ├── PatientGuidelines.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
├── App.jsx                  # Router setup + AnimatePresence
├── main.jsx
└── index.css               # Tailwind + custom base styles
```

## Design System
- **Primary font**: Playfair Display (display/headings)
- **Body font**: DM Sans
- **Mono font**: DM Mono (labels, tags)
- **Color palette**: Custom green-teal (`primary-*` scale) + cream/sand backgrounds
- **Theme**: Refined, clinical-luxury — editorial meets healthcare

## Customization
- Update `src/data/index.js` with real content
- Swap placeholder gallery images with real photos
- Replace contact details, address, and phone numbers
- Add real Google Maps embed in `Contact.jsx`
- Configure email submission in the contact form
