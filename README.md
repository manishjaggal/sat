# TEAS Prep - ATI TEAS Test Preparation Platform

A modern, mobile-optimized Next.js application for ATI TEAS test preparation. Built with a distinctive, scholarly aesthetic that avoids generic AI design patterns.

## Features

### Landing Page
- **Hero Section** - Compelling value proposition with animated mockup
- **Features Grid** - Highlights adaptive learning, exam-identical questions, and more
- **Subject Overview** - All four TEAS sections with progress indicators
- **Testimonials** - Real student success stories
- **Pricing Plans** - Clear tier comparison with popular plan highlight
- **Trust Indicators** - Top nursing program mentions

### Dashboard
- **Home** - Personalized welcome, stats, progress tracking, quick actions
- **Study** - Subject-organized learning modules with recommendations
- **Practice Tests** - Full exams and subject-specific quizzes with score tracking
- **Progress** - Detailed analytics, weekly charts, strengths/weaknesses analysis
- **Settings** - Profile, notifications, preferences, subscription management

## Design Philosophy

### Color Palette
- **Primary**: Deep teal (#1a5f5a) - Scholarly, trustworthy
- **Accent**: Warm amber (#c4841d) - Energy, achievement
- **Secondary**: Coral (#c75c4c) and Navy (#2c3e50) for subject differentiation
- **Neutrals**: Warm paper tones for a comfortable reading experience

### Typography
- **Display**: Crimson Pro - Academic, elegant serif for headings
- **Body**: DM Sans - Clean, modern sans-serif for readability

### Mobile-First
- Responsive breakpoints at 900px, 768px, 600px, and 480px
- Touch-friendly targets and navigation
- Collapsible sidebar with overlay on mobile

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
app/
├── globals.css          # Global styles and CSS variables
├── layout.tsx           # Root layout with metadata
├── page.tsx             # Landing page
├── page.module.css      # Landing page styles
├── login/               # Authentication pages
│   ├── page.tsx
│   └── login.module.css
└── dashboard/           # Protected dashboard area
    ├── layout.tsx       # Dashboard shell with sidebar
    ├── layout.module.css
    ├── page.tsx         # Dashboard home
    ├── page.module.css
    ├── study/           # Study materials
    ├── practice/        # Practice tests
    ├── progress/        # Progress analytics
    └── settings/        # User settings
```

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with all marketing content |
| `/login` | Sign in / Sign up page |
| `/dashboard` | Main dashboard with overview |
| `/dashboard/study` | Subject learning modules |
| `/dashboard/practice` | Practice tests and quizzes |
| `/dashboard/progress` | Analytics and performance tracking |
| `/dashboard/settings` | Account and preference settings |

## Customization

### Adding New Subjects
Subjects are defined in arrays within each page. To add a new subject:

1. Add to the subjects array in relevant pages
2. Create corresponding color class in CSS modules
3. Add route for detailed subject view

### Theming
All colors are defined as CSS variables in `globals.css`. To customize:

```css
:root {
  --teal-deep: #1a5f5a;    /* Primary */
  --amber: #c4841d;         /* Accent */
  /* ... */
}
```

## Performance

- Server-side rendering for initial load
- CSS Modules for zero-runtime styling
- Optimized images with Next.js Image (when implemented)
- Minimal JavaScript with progressive enhancement

## License

Private - All rights reserved.

