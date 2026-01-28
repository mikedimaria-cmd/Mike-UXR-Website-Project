# Mike DiMaria UX Research Portfolio - Development Guide

## 📖 Project Overview

A modern, synthwave-themed portfolio website showcasing UX Research work and experience. The site features a single-page layout with multiple sections including hero, work showcase, about section, skills matrix, and contact information. Built with React, TypeScript, and Tailwind CSS, the site emphasizes visual appeal with custom animations, parallax effects, and a retro-futuristic aesthetic.

**Primary Purpose:** Professional portfolio to showcase UX Research projects, skills, and experience.

## 🏷️ Versioning Strategy

### Semantic Versioning (SemVer)
We follow Semantic Versioning with the format: **MAJOR.MINOR.PATCH**

- **MAJOR (1.0.0)**: Breaking changes, incompatible API changes
- **MINOR (1.1.0)**: New features, backward compatible
- **PATCH (1.1.1)**: Bug fixes, backward compatible

### Pre-Release Labels
- `0.0.0-alpha.1` - Early development, unstable
- `0.0.0-beta.1` - Feature complete, testing phase
- `0.0.0-rc.1` - Release candidate, final testing

**Current Version:** `0.0.0`  
**Status:** Alpha  
**Next Target:** `0.0.1` (First patch release)

**Changelog:** See CHANGELOG.md for detailed version history (to be created)

### Version Bumping Process (User-Directed)

**Strategy:**

- **Small Changes/Refactors**
  - Version bump: `0.0.1` (patch increment)
  - Maintains: Current Status (Alpha/Beta)

- **Substantial New Features** (e.g., new navigation tab, new integration)
  - Version bump: `0.X.0` (minor increment)
  - Maintains: Current Status (Alpha/Beta)

- **Major Version (1.0.0)**
  - Trigger: Explicit user decision ("I am ready for 1.0.0")
  - Reserved for: Major milestones or completion of core MVP

**Versioning Rules:**
- Always ask if uncertain about version bump type
- Never assume major version or beta status changes
- Follow user's development philosophy

**Process:** Update `package.json` → Deploy → Tag Git → Update CHANGELOG.md

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18+)
- **npm** or **yarn**

### Local Development

**Install Dependencies**
```bash
npm install
```

**Start Development Server**
```bash
npm run dev
```

The app will be available at: **http://localhost:8080**

### Environment Setup

Currently, no environment variables are required. If API keys or configuration are needed in the future, create a `.env` file in the root directory.

## 📁 Project Structure

```
project-root/
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # shadcn-ui reusable components
│   │   ├── AboutSection.tsx
│   │   ├── CompanyLogoStrip.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── FloatingNav.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ParallaxSection.tsx
│   │   ├── Portrait.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── SkillsMatrix.tsx
│   │   ├── SynthwaveSun.tsx
│   │   └── WorkSection.tsx
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Main portfolio page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useTypingAnimation.ts
│   ├── lib/                 # Utilities
│   │   └── utils.ts
│   ├── assets/              # Static assets
│   │   └── portrait.png
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🔄 Official Development Flow

### Phase 1: Development & Testing
1. Make changes locally
2. Test locally (verify against requirements)
3. Run linter: `npm run lint`
4. Run tests: `npm run test` (if applicable)
5. Wait for "let's go live" signal

### Phase 2: GitHub Update
1. Commit to git with descriptive message
2. Update CHANGELOG.md:
   - Use current date
   - Summarize changes accurately
   - Ask for clarification if unsure what to include
3. Push to GitHub

### Phase 3: Live Deployment
1. Deploy to live site (only after GitHub is synced)
2. Verify deployment success
3. Test live site functionality

## ✅ Pre-Deployment Checklist

Before deploying, ensure you have:

- ✅ All tests passing locally
- ✅ Production build succeeds (`npm run build`)
- ✅ No console errors in development
- ✅ Linting passes (`npm run lint`)
- ✅ TypeScript compilation succeeds (no type errors)
- ✅ Version updated in `package.json`
- ✅ Changelog updated
- ✅ All assets load correctly
- ✅ Responsive design works on mobile/tablet/desktop
- ✅ All links and navigation work correctly

## 🚢 Deployment Steps

### Build the Application
```bash
npm run build
```

This creates a `dist/` directory with production-ready files.

### Deployment Options

**Static Hosting Services:**
- **Vercel**: Connect GitHub repo, auto-deploy on push
- **Netlify**: Connect GitHub repo, auto-deploy on push
- **GitHub Pages**: Deploy `dist/` folder
- **Cloudflare Pages**: Connect GitHub repo

**Manual Deployment:**
1. Build the project: `npm run build`
2. Upload `dist/` folder contents to hosting service
3. Configure hosting service to serve `index.html` for all routes (SPA routing)

### Code Synchronization Rules

**Local = Git = Live Site**

- No direct deployment without a Git commit first
- Maintain a clear history of what went live and when
- Always test locally before deploying

## ⚠️ Critical Deployment Lessons

### 🔥 Build Configuration
- Ensure `vite.config.ts` is properly configured for production
- Check that all asset paths are correct in production build
- Verify environment variables (if any) are set in hosting service

### 🔥 TypeScript & Linting
- Fix all TypeScript errors before deploying
- Fix all ESLint errors before deploying
- Keep code readable and maintainable

### 🔥 Performance
- Optimize images before committing
- Check bundle size (`npm run build` shows size)
- Test loading performance

### 🔥 Routing (SPA)
- Ensure hosting service is configured for Single Page Application routing
- All routes should serve `index.html` (client-side routing)
- Test all navigation links after deployment

## 🛠️ Development Workflow

### Feature Branching
```bash
git checkout -b feature/new-thing
# Develop -> Commit -> Push
```

### Testing
- **Local Dev Server**: `npm run dev` (http://localhost:8080)
- **Production Preview**: `npm run preview` (test production build locally)
- **Linting**: `npm run lint`
- **Type Checking**: `npm run build` (will fail on type errors)

## 📱 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack Query 5.83.0
- **Icons**: Lucide React 0.462.0
- **Forms**: React Hook Form 7.61.1 + Zod 3.25.76
- **Testing**: Vitest 3.2.4 + Testing Library
- **Fonts**: Orbitron (display), Rajdhani (body)

## 🐛 Troubleshooting

### Common Development Issues

**Port Already in Use:**
```bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9
```

**Build Fails:**
- Check TypeScript errors: Look for type mismatches
- Check dependency installation: `rm -rf node_modules && npm install`
- Check Vite configuration

**Styles Not Loading:**
- Verify Tailwind config includes all component paths
- Check `index.css` imports
- Clear browser cache

**Component Not Found:**
- Verify path aliases in `tsconfig.json` (`@/*` mapping)
- Check import paths use `@/` prefix

**Deployment Issues:**
- **404 on Routes**: Configure hosting service for SPA routing
- **Assets Not Loading**: Check base path in `vite.config.ts`
- **Build Errors**: Review error messages, check TypeScript types

## 📞 Support

For development questions, reference:

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📝 Notes

- This project was initially created using [Lovable](https://lovable.dev)
- Development is now continuing with **Cursor** for AI-assisted coding
- The synthwave theme is a key differentiator - maintain visual consistency
- All animations and effects should enhance UX, not distract from content
