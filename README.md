The page design is inspired by - [Mistral AI](https://mistral.ai/)

Credit -  [Mistral AI](https://mistral.ai/)

# Tensorly AI Landing Page

A modern, responsive landing page for Tensorly AI - built with Next.js 16 and Tailwind CSS 4. This project showcases Tensorly's AI capabilities, products, and services with a clean, professional design, <b>build from scratch as a design engineering study</b>

## Preview

This landing page includes:

- **Hero Section**: Front and center display of Tensorly AI's value proposition
- **Products Showcase**: Interactive display of Tensorly's AI products (Agents, Workbench, Model Lab, AI Solutions, Tensorly Models, Tensorly Compute)
- **Autonomous Work**: Detailed sections on AI capabilities and use cases
- **Support Section**: Information about Tensorly's expert services
- **Deployment Options**: Private infrastructure, Tensorly Cloud, and cloud partners
- **Footer**: Comprehensive navigation and contact information

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views
- **Modern UI**: Clean, professional design with subtle animations and interactions
- **Dark Mode Ready**: Built with CSS variables for easy theme switching
- **Next.js 16**: Latest Next.js features with App Router
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **TypeScript**: Full type safety
- **Google Fonts**: Uses Geist, Geist Mono, and Familjen Grotesk fonts

## Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Fonts**: [Geist](https://vercel.com/font), [Familjen Grotesk](https://fonts.google.com/specimen/Familjen+Grotesk)
- **Package Manager**: npm

## Project Structure

```
design02/
├── app/
│   ├── (root)/
│   │   └── page.tsx          # Main landing page
│   ├── globals.css           # Global styles and CSS variables
│   └── layout.tsx            # Root layout with fonts
├── (components)/
│   └── components/
│       ├── Footer/           # Footer components
│       │   ├── Footer.tsx
│       │   ├── FooterCta.tsx
│       │   └── FooterItems.tsx
│       ├── Header/           # Header/Navigation components
│       │   ├── Header.tsx
│       │   └── Navbar.tsx
│       └── Main/             # Main content components
│           ├── Hero.tsx
│           ├── Support.tsx
│           ├── Deploy.tsx
│           ├── AIPrivacy.tsx
│           ├── AllProducts.tsx
│           └── AutonomousWork/
│               └── AutonomousWork.tsx
│   └── utility/              # Utility components
│       ├── AutonomousWorkCard.tsx
│       └── IconList.tsx
├── Types/
│   └── AutonomousWorkItemsType.ts
├── public/                  # Static assets
│   ├── hero-image.png
│   ├── image-1.webp through image-6.webp
│   ├── noise-rectangle.png
│   └── SVG icons
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Color System

The project uses a comprehensive CSS variable system defined in `app/globals.css`:

### Brand Colors

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--brand-orange` | `#ff5229` | Primary brand color, CTAs, highlights |
| `--brand-orange-dark` | `#202023` | Dark buttons, backgrounds |
| `--brand-gray-dark` | `#1a1a1e` | Surface colors, cards |
| `--brand-gray-darker` | `#27272b` | Borders, dark surfaces |
| `--brand-gray-light` | `#6d6d78` | Muted text |
| `--brand-background-dark` | `#101013` | Dark mode background |
| `--brand-tag-bg` | `#1c1c1f` | Tag backgrounds |

### Tailwind Color Mappings

- `--color-orange-600`: Maps to brand orange
- `--color-blue-600`: `#2563eb`
- `--color-cyan-500`: `#06b6d4`
- `--color-cyan-400`: `#22d3ee`

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/design02.git
   cd design02
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css` to change the color scheme. All colors are defined as variables for easy theming.

### Adding New Sections

Add new components to the appropriate folder in `(components)/components/` and include them in `app/(root)/page.tsx`.

### Fonts

The project uses three Google Fonts. You can change them by modifying the font imports in `app/layout.tsx`.

## Inspiration & Credits

**Special Mention & Inspiration**
This project was inspired by and takes design cues from [Mistral AI](https://mistral.ai/). The layout, color scheme, and overall design philosophy are influenced by Mistral AI's official website.

**Image Sources**
All images used in this project are sourced from [Mistral AI](https://mistral.ai/). We acknowledge and appreciate their contribution to the AI community and their open approach to sharing resources.

---

**Built with ❤️ using Next.js and Tailwind CSS**

*Inspired by Mistral AI - Advancing AI for everyone*
