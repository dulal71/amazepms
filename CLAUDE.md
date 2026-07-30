# CLAUDE.md

## Project Overview

This project is a premium Property Management web application built with:

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Shadcn/UI (if used)

The goal is to build a modern, premium, enterprise-level website with exceptional UI/UX.

---

# Code Style

- Always use TypeScript.
- Prefer functional components.
- Use reusable components.
- Avoid duplicated code.
- Keep components small and maintainable.
- Use descriptive variable names.
- Prefer arrow functions.

---

# Folder Structure

Follow this structure:

src/
├── app/
├── components/
│   ├── ui/
│   ├── sections/
│   └── layout/
├── lib/
├── hooks/
├── types/
├── data/
├── constants/
└── utils/

---

# UI Guidelines

The design should feel like:

- Apple
- Stripe
- Vercel
- Linear
- Framer

Avoid generic templates.

Every section should look premium.

---

# Colors

Primary:

#2563EB

Background:

#0B1220

Text:

#F8FAFC

Muted:

#94A3B8

Border:

rgba(255,255,255,.1)

---

# Animations

Always use Framer Motion.

Prefer:

- fade up
- stagger children
- smooth spring
- floating animation
- hover lift
- opacity transitions

Avoid excessive animation.

---

# Components

Every component should:

- Be reusable
- Be responsive
- Have proper spacing
- Follow accessibility best practices
- Use semantic HTML

---

# Images

Always use Next.js Image.

Optimize images.

Lazy load where possible.

---

# Icons

Use React Icons only.

Do not use Lucide Icons unless explicitly requested.

---

# Styling

Use Tailwind CSS only.

Avoid inline styles.

Prefer utility classes.

---

# Buttons

Buttons should include:

- hover animation
- focus state
- active state
- loading state (when applicable)

---

# Cards

Use:

- rounded-2xl
- glassmorphism
- backdrop blur
- subtle border
- premium shadow

---

# Sections

Every section should include:

- Heading
- Description
- Smooth animation
- Decorative background
- Proper spacing

---

# Responsive Design

Support:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultra-wide screens

Mobile-first approach.

---

# Accessibility

Always:

- Add alt text
- Use semantic tags
- Maintain proper heading hierarchy
- Ensure keyboard accessibility

---

# Performance

- Keep components lightweight.
- Optimize images.
- Minimize client components.
- Prefer Server Components unless client-side interactivity is required.
- Avoid unnecessary re-renders.

---

# When Generating UI

Do not generate basic layouts.

Generate premium enterprise-level UI with beautiful spacing, typography, animations, and interactions.

Always think like a senior frontend engineer and UI designer.

Every generated component should be production-ready.
