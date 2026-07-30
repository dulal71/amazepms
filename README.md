# AmazePMS

A premium property management software landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

| Technology | Description |
|---|---|
| **Next.js 16** | App Router, React Server Components, React Compiler |
| **React 19** | Server Components, Actions |
| **TypeScript** | Strict-mode, full type safety |
| **Tailwind CSS v4** | Utility-first styling, CSS-first configuration |
| **Framer Motion** | Declarative animations, gesture support |
| **Lenis** | Smooth scrolling with native scroll interop |
| **GSAP** | High-performance timeline animations |
| **Lottie** | Vector animation rendering |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage section composition
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Tailwind import, design tokens
├── components/
│   ├── layout/
│   │   └── Navbar.tsx      # Fixed header with mobile menu
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero with image slider
│   │   ├── About.tsx       # Company story, stats, features
│   │   ├── Services.tsx    # Service offerings grid
│   │   ├── WhyChooseUs.tsx # Value proposition timeline
│   │   ├── HowItWorks.tsx  # 4-step process
│   │   ├── Testimonials.tsx# Client reviews carousel
│   │   ├── FeaturedProperties.tsx # Property listings
│   │   ├── Faq.tsx         # Accordion FAQ
│   │   ├── CtaBanner.tsx   # Call-to-action section
│   │   ├── Contact.tsx     # Contact form + info
│   │   └── Footer.tsx      # Site footer, links, newsletter
│   └── ui/
│       ├── Logo.tsx        # Responsive logo mark
│       ├── NavLinkItem.tsx  # Nav link with active indicator
│       ├── MobileMenu.tsx   # Animated slide-in drawer
│       ├── LoadingScreen.tsx# Lottie splash on initial load
│       └── ...             # Decorative components
├── lib/
│   └── nav-links.ts        # Navigation link definitions
├── data/
│   ├── testimonials.ts     # Testimonial content
│   └── properties.ts       # Property listing data
└── components/
    └── SmoothScroll.tsx    # Lenis initialization
```

## Design System

- **Primary:** `#2563EB` (Tailwind `blue-600`)
- **Background:** `#030712` (Tailwind `slate-950`)
- **Surface:** `#111827` (Tailwind `gray-900`)
- **Text:** `#f8fafc` (Tailwind `slate-50`)
- **Fonts:** Inter (body), Space Grotesk (headings)

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Key Features

- **Responsive:** Mobile-first, adaptive layout across breakpoints
- **Animations:** Framer Motion + GSAP for scroll-triggered and interaction animations
- **Smooth Scroll:** Lenis with native scroll interop (no fixed-position breakage)
- **Optimized:** Next.js Image optimization, font subsetting, React Compiler
- **Accessible:** ARIA labels, keyboard navigation, focus management
- **Dark Mode:** Full dark theme with consistent design tokens
