# Setup Guide for Storyline Pictures Website

This guide will walk you through setting up the website step by step.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

### Required Variables

#### Sanity CMS
1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Get your Project ID from the project settings
4. Create a dataset (usually "production")
5. Create an API token with read/write permissions

#### Resend (Email)
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add it to `.env.local`

### Optional Variables

#### Google reCAPTCHA
1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Register a new site (reCAPTCHA v2)
3. Add site key and secret to `.env.local`

#### Cloudinary
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name, API key, and API secret
3. Add to `.env.local`

## Step 3: Initialize Sanity Studio

```bash
npm run sanity
```

This will:
- Start the Sanity Studio at `http://localhost:3000/studio`
- Allow you to configure your content schemas
- Set up your content structure

## Step 4: Add Content

1. Open the Sanity Studio at `http://localhost:3000/studio`
2. Add your content:
   - Services
   - Portfolio items
   - Team members
   - Clients
   - Testimonials (optional)

## Step 5: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

## Step 6: Customize Content

### Update Company Information

Edit the following files:
- `app/layout.tsx` - Update metadata and Schema.org data
- `components/footer.tsx` - Update contact information
- `components/sections/contact-info.tsx` - Update contact details

### Update Team Members

The team members are currently hardcoded in `components/sections/team-members.tsx`. You can:
1. Add them via Sanity CMS (recommended)
2. Update the array directly in the component

### Update Clients

Similar to team members, clients can be:
1. Added via Sanity CMS (recommended)
2. Updated directly in `components/sections/clients-display.tsx`

## Step 7: Add Images

### Hero Background
Add a hero background image to `public/hero-bg.jpg` or update the path in `components/sections/hero.tsx`

### Placeholder Images
Replace placeholder images in:
- `public/portfolio-*.jpg`
- `public/client-*.png`
- `public/team-*.jpg`

Or update the components to use Sanity CMS images.

## Step 8: Deploy

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add all environment variables
4. Deploy!

### Other Platforms

The project works with any Next.js-compatible hosting:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

## Troubleshooting

### Sanity Studio Not Loading
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
- Verify your Sanity project exists and is accessible

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set
- Check that `CONTACT_EMAIL` is a valid email
- Ensure reCAPTCHA keys are set if using reCAPTCHA

### Images Not Loading
- Check image paths in components
- Verify Cloudinary credentials if using Cloudinary
- Ensure images exist in `public/` directory

## Next Steps

1. Customize the design in `app/globals.css`
2. Add your actual content via Sanity CMS
3. Replace placeholder images
4. Test all forms and interactions
5. Run `npm run build` to check for build errors
6. Deploy to production

