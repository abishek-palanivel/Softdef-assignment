# FloraVision - Plant Listing Page

A pixel-perfect, responsive product listing page for a premium indoor plants store. Built with Next.js and Tailwind CSS based on the provided Figma design.

## Live Demo

[Deployed URL will be added here after deployment]

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** for styling
- **React.js** for component-based UI
- **Google Fonts** (Inter)

## Features

- Fully responsive layout (320px to 1440px)
- Dark theme with earthy green tones
- Reusable React components
- Smooth hover transitions and animations
- Mobile hamburger navigation
- Semantic HTML with accessibility support
- Optimized images with Next.js Image component

## Page Sections

1. **Navbar** - Logo, nav links, search/cart icons, mobile hamburger menu
2. **Hero Section** - Banner with heading, CTA buttons, mini testimonial, featured plant card
3. **Trending Plants** - Two alternating horizontal plant cards with details and pricing
4. **Top Selling Plants** - 3-column grid of 6 plant cards with ratings and add-to-cart
5. **Customer Reviews** - 3 testimonial cards with avatars and star ratings
6. **O₂ Plants Section** - Featured collection highlight with CTA
7. **Footer** - Brand info, quick links, newsletter form, social media icons

## Getting Started

### Prerequisites

Make sure you have Node.js (v18 or above) and npm installed.

### Setup

1. Clone this repository:

```bash
git clone https://github.com/YOUR_USERNAME/floravision.git
cd floravision
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

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
floravision/
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── TrendingPlants.js
│   │   ├── TopSelling.js
│   │   ├── CustomerReviews.js
│   │   ├── O2Section.js
│   │   └── Footer.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── next.config.mjs
├── package.json
└── README.md
```

## Deployment

This project is deployed on Vercel. To deploy your own:

1. Push the code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

## Author

Built as part of the SoftDef Frontend Developer Internship Test.
