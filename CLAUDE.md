# HIFU Cambridge - Diluxe Aesthetics

## Project Overview
Landing page for Diluxe Aesthetics Cambridge, a HIFU (High-Intensity Focused Ultrasound) non-surgical facelift clinic in Cherry Hinton, Cambridge. The site is built with Next.js 15 and Tailwind CSS.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Fonts:** Inter (body), Playfair Display (headings)

## Key URLs
- **Production:** https://hifucambridge.com
- **Repository:** https://github.com/leadballoon-agency/hifu-cambridge

## Project Structure
```
app/
├── layout.tsx          # Root layout with metadata, fonts, tracking
├── page.tsx            # Home page (renders PageWrapper)
├── globals.css         # Global styles, Tailwind imports
├── privacy-policy/     # Privacy policy page
├── sitemap.ts          # Dynamic sitemap
└── robots.ts           # Robots.txt configuration

components/
├── PageWrapper.tsx     # Main page orchestrator with modal state
├── PremiumHero.tsx     # Hero section with video
├── Navigation.tsx      # Sticky nav with mobile menu
├── AssessmentTool.tsx  # Interactive treatment quiz
├── AboutSection.tsx    # Consolata's bio and qualifications
├── PremiumTreatments.tsx # Treatment cards with pricing
├── ResultsGallery.tsx  # Before/after gallery
├── Reviews.tsx         # Customer testimonials
├── ProcessSection.tsx  # Treatment process steps
├── FinanceSection.tsx  # Klarna payment options
├── FAQ.tsx             # Accordion FAQ
├── CTASection.tsx      # Final call-to-action
├── Footer.tsx          # Site footer
├── BookingModal.tsx    # GHL calendar booking embed
├── VideoModal.tsx      # Testimonial video player
├── StructuredData.tsx  # SEO JSON-LD schemas
└── FacebookPixel.tsx   # Meta Pixel tracking
```

## Brand Information
- **Business:** Diluxe Aesthetics Cambridge
- **Practitioner:** Consolata (NVQ Level IV qualified)
- **Address:** 216 Cherry Hinton Road, Cambridge, CB1 7AW
- **Parking:** Free parking at rear (MDL Male Image Barbers - owned by Consolata's brother)
- **Instagram:** @diluxe.aesthetics

## Hosted Media Assets
All media is hosted on Google Cloud Storage:
- **Consolata Portrait:** `https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png`
- **Testimonial Video (landscape):** `https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0855176fb072c7edefcc.mp4`
- **Hero Video (square):** `https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0abdb716f527612e84dd.mp4`

## Treatment Pricing
- Jawline HIFU: £195 (Intro Offer)
- Full Face, Jowls, Neck & Eyelift: £395 (Most Popular)

## Booking Integration
GHL (GoHighLevel) calendar widget embedded in BookingModal:
```
https://link.leadballoon.co.uk/widget/booking/TJOFTSvGpU6iWzf8staO
```

## Design Guidelines
- **Primary Color:** Sky blue (#0ea5e9 range)
- **Accent Color:** Gold/amber for highlights
- **Typography:** Mobile-first with responsive scaling
- **Touch Targets:** Minimum 44px for accessibility
- **Line Heights:** Body 1.6-1.7, Headings 1.2

## SEO Schemas Implemented
1. HealthAndBeautyBusiness (LocalBusiness)
2. WebSite
3. WebPage
4. FAQPage (6 questions)
5. VideoObject
6. BreadcrumbList
7. Person (Consolata)
8. Service + Offer (treatments with prices)
9. AggregateRating + Reviews

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Important Notes
- Always use mobile-first approach (base styles for mobile, sm/md/lg for larger)
- Keep `leading-relaxed` on body text for readability
- Use `section-padding` utility class for consistent horizontal padding
- All booking CTAs should trigger the BookingModal
- Track key events with FacebookPixel functions
