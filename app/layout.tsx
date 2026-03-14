import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import FacebookPixel from '@/components/FacebookPixel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HIFU Huntingdon | Non-Surgical Facelift | Princess Beauty Studio',
  description: 'Transform your look with HIFU TA2 7D System at Princess Beauty Studio, Godmanchester. The only clinic in the area with the advanced TA2 7D — 30% more effective than previous 4D HIFU. Non-surgical facelift by Jelena. Lift, tighten & rejuvenate without surgery. No downtime.',
  keywords: 'HIFU Huntingdon, HIFU Godmanchester, non-surgical facelift Huntingdon, HIFU treatment Huntingdon, skin tightening Huntingdon, face lift without surgery, Princess Beauty Studio, Huntingdon aesthetics, HIFU Cambridgeshire, ultrasound facelift, jowl lifting Huntingdon, neck tightening Huntingdon, HIFU UK, TA2 7D HIFU, Jelena HIFU',
  authors: [{ name: 'Princess Beauty Studio' }],
  creator: 'Princess Beauty Studio',
  publisher: 'Princess Beauty Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hifuhuntingdon.co.uk'),
  alternates: {
    canonical: 'https://hifuhuntingdon.co.uk',
  },
  openGraph: {
    title: 'HIFU Huntingdon | Non-Surgical Facelift | Princess Beauty Studio',
    description: 'Transform your look with the advanced HIFU TA2 7D System at Princess Beauty Studio, Godmanchester. 30% more effective than previous 4D HIFU. Non-surgical facelift by Jelena. Lift, tighten & rejuvenate without surgery or downtime.',
    url: 'https://hifuhuntingdon.co.uk',
    siteName: 'Princess Beauty Studio - HIFU Treatments Huntingdon',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/67c9437539ce95843dba76e8.jpeg',
        width: 1200,
        height: 630,
        alt: 'Princess Beauty Studio - HIFU Treatments in Huntingdon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HIFU Huntingdon | Non-Surgical Facelift | Princess Beauty Studio',
    description: 'Transform your look with the advanced HIFU TA2 7D System at Princess Beauty Studio, Godmanchester. Non-surgical facelift by Jelena. Lift & tighten without surgery. No downtime.',
    images: ['https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/67c9437539ce95843dba76e8.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'GB-CAM',
    'geo.placename': 'Godmanchester, Cambridgeshire',
    'geo.position': '52.3189;-0.1753',
    'ICBM': '52.3189, -0.1753',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
