# AmazePMS

A premium property management software landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

| Technology | Description |
|---|---|
| **Next.js 16** 
| **React 19** 
| **TypeScript** 
| **Tailwind CSS v4** 
| **Framer Motion** 
| **Lenis** 
| **GSAP**
| **Lottie**

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
│   ├── layout.tsx          
│   ├── page.tsx            
│   ├── not-found.tsx       
│   └── globals.css         
├── components/
│   ├── layout/
│   │   └── Navbar.tsx      
│   ├── sections/
│   │   ├── Hero.tsx       
│   │   ├── About.tsx       
│   │   ├── Services.tsx    
│   │   ├── WhyChooseUs.tsx 
│   │   ├── HowItWorks.tsx  
│   │   ├── Testimonials.tsx
│   │   ├── FeaturedProperties.tsx 
│   │   ├── Faq.tsx         
│   │   ├── CtaBanner.tsx   
│   │   ├── Contact.tsx     
│   │   └── Footer.tsx      
│   └── ui/
│       ├── Logo.tsx        
│       ├── NavLinkItem.tsx  
│       ├── MobileMenu.tsx   
│       ├── LoadingScreen.tsx
│       └── ...             
├── lib/
│   └── nav-links.ts        
├── data/
│   ├── testimonials.ts     
│   └── properties.ts       
└── components/
    └── SmoothScroll.tsx    
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
