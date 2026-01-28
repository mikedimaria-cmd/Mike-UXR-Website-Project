# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-28

### Added
- Real portfolio content with structured data (`src/data/portfolio.ts`)
  - Project data: GastroGaz, BFL Draft Forge, Portfolio v2
  - Experience data: YouTube, Google Cloud Platform, Fidelity Investments
- Vibe-aware ProjectCard component (`src/components/portfolio/ProjectCard.tsx`)
  - Dynamic styling based on project vibe (neon-pink, neon-cyan, neon-purple)
  - Glass background with hover glow effects
  - Status badges, tech stack display, and project links
- ExperienceLog component (`src/components/portfolio/ExperienceLog.tsx`)
  - System log aesthetic with monospaced dates
  - Vertical gradient timeline with vibe-colored icons
  - Domain-focused company names and functional role titles

### Changed
- Updated WorkSection to use real project data and new ProjectCard component
- Updated AboutSection to use ExperienceLog instead of placeholder timeline
- Removed background text from AboutSection for cleaner presentation
- Experience items now use functional roles (Research Lead, DevOps Research Lead, etc.)
- Company names updated to be domain-focused (YouTube Creator UX, Google Cloud Platform)

### Technical
- Created typed interfaces for Project and ExperienceItem
- Implemented vibe-based styling system using Tailwind custom colors
- Added id and vibe properties to experience items for better data structure

## [0.0.2] - 2026-01-28

### Changed
- Version checkpoint created for rollback point before major changes
- This version serves as a stable rollback point if needed

## [0.0.1] - 2026-01-28

### Added
- Custom synthwave-themed favicon with "MD" initials
  - Square design with neon gradient (cyan → pink → purple)
  - Retro grid pattern overlay
  - Corner accent lines matching site aesthetic
  - Glow effects on letters

### Changed
- Updated `index.html` to reference new SVG favicon
- Improved favicon loading with multiple format support

## [0.0.0] - 2026-01-28

### Added
- Initial project setup from Lovable
- Complete portfolio website structure
- Synthwave-themed design system
- GitHub Actions workflow for automated deployment
- GitHub Pages deployment configuration
- Development documentation (README.md, DEVELOPMENT.md, DEPLOYMENT.md)
- Font loading optimization (moved Google Fonts to HTML head)

### Features
- Hero section with parallax effects
- Work showcase section
- About section with experience timeline
- Skills matrix
- Contact section
- Floating navigation
- Scroll progress bar
- Responsive design
- Custom animations and effects
