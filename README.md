# Storyline Pictures Website

A modern, production-ready website for Storyline Pictures Limited, a professional photography and cinematography company based in Uganda.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, and Tailwind CSS
- **CMS Integration**: Sanity CMS for content management
- **Animations**: Framer Motion for smooth, cinematic transitions
- **SEO Optimized**: Complete metadata, Open Graph, Twitter cards, and Schema.org markup
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark Mode**: Light/dark theme support with CSS variables
- **Contact Form**: Functional contact form with email delivery via Resend
- **Performance**: Optimized for Lighthouse scores ≥ 90

## 📋 Prerequisites

- Node.js 18+ and npm
- Sanity account (for CMS)
- Resend account (for email delivery)
- Google reCAPTCHA keys (optional, for spam protection)
- Cloudinary account (optional, for image optimization)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Storyline
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Sanity CMS
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token

   # Email (Resend)
   RESEND_API_KEY=your-resend-api-key
   CONTACT_EMAIL=info@storylinepictures.com

   # reCAPTCHA (optional)
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
   RECAPTCHA_SECRET_KEY=your-secret-key

   # Cloudinary (optional)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

4. **Set up Sanity CMS**
   ```bash
   npm run sanity
   ```
   This will start the Sanity Studio at `http://localhost:3000/studio`

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Storyline/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── team/              # Team page
│   ├── clients/           # Clients page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   ├── studio/            # Sanity Studio
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── navigation.tsx     # Navigation component
│   ├── footer.tsx         # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/                   # Utility functions
│   ├── sanity.ts          # Sanity client
│   └── utils.ts           # General utilities
├── sanity/                # Sanity CMS
│   └── schemas/           # Content schemas
├── types/                 # TypeScript types
└── public/                # Static assets
```

## 🎨 Customization

### Colors & Theming

Edit `app/globals.css` to customize the color scheme. The theme uses CSS variables for easy customization.

### Content Management

All content is managed through Sanity CMS. Access the studio at `/studio` when running the development server.

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Create corresponding section components in `components/sections/`
4. Add the route to navigation in `components/navigation.tsx`

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Sanity CMS Setup

1. Create a new project at [sanity.io](https://sanity.io)
2. Get your project ID and dataset name
3. Create an API token with read/write permissions
4. Add credentials to `.env.local`

### Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Verify your domain (optional)
4. Add the API key to `.env.local`

### reCAPTCHA Setup

1. Get keys from [Google reCAPTCHA](https://www.google.com/recaptcha)
2. Add site key and secret to `.env.local`

## 📝 Content Schemas

The CMS includes schemas for:
- **Services**: Photography, events, products, documentaries, production
- **Portfolio**: Gallery items with images and videos
- **Team Members**: Staff profiles with bios and social links
- **Clients**: Client logos and information
- **Testimonials**: Customer reviews and ratings

## 🎯 Performance Optimization

- Images are optimized using Next.js Image component
- Cloudinary integration for advanced image transformations
- Lazy loading for images and videos
- Code splitting and tree shaking
- Server-side rendering for SEO
- Static generation where possible

## ☁️ Cloudinary Setup (Optional)

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name, API key, and API secret
3. Add credentials to `.env.local`
4. Use the `getCloudinaryUrl` utility from `lib/cloudinary.ts` for optimized images

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels

## 📄 License

Copyright © 2024 Storyline Pictures Limited. All rights reserved.

## 🤝 Support

For support, email info@storylinepictures.com or contact us through the website.

---

**Built with ❤️ for Storyline Pictures Limited**

