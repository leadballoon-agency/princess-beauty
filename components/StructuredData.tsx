export default function StructuredData() {
  // Main Organization/LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://hifuhuntingdon.co.uk/#business",
    "name": "Princess Beauty Studio",
    "alternateName": ["HIFU Huntingdon", "Princess Beauty", "Princess-Beauty Studio"],
    "url": "https://hifuhuntingdon.co.uk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/6624d8d08381f285870ce101.jpeg",
      "width": 512,
      "height": 512
    },
    "image": [
      "https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/67c9437539ce95843dba76e8.jpeg",
      "https://storage.googleapis.com/msgsndr/gifJevody1uHQcVkPPPf/media/6796669964e3ccef0af06310.png",
      "https://storage.googleapis.com/msgsndr/gifJevody1uHQcVkPPPf/media/68bd8124f2b0b96665e2a4c6.jpeg",
      "https://storage.googleapis.com/msgsndr/gifJevody1uHQcVkPPPf/media/66dd3ce284ef29ef27ec130a.jpeg"
    ],
    "description": "Expert HIFU non-surgical facelift treatments in Huntingdon. The only clinic in the area with the advanced TA2 7D HIFU System — 30% more effective than previous 4D HIFU. Specialising in skin tightening, jowl lifting, and facial rejuvenation with zero downtime. Led by experienced practitioner Jelena.",
    "telephone": "+447743080038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16 Ash Tree Avenue",
      "addressLocality": "Godmanchester",
      "addressRegion": "Cambridgeshire",
      "postalCode": "PE29 2FH",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3189,
      "longitude": -0.1753
    },
    "hasMap": "https://goo.gl/maps/yUb6DyMBMpLqjwfA6",
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Klarna"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Huntingdon" },
      { "@type": "City", "name": "Godmanchester" },
      { "@type": "City", "name": "St Neots" },
      { "@type": "City", "name": "St Ives" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Kimbolton" },
      { "@type": "City", "name": "Ramsey" },
      { "@type": "City", "name": "Cambridge" },
      { "@type": "City", "name": "Peterborough" },
      { "@type": "City", "name": "Bedford" }
    ],
    "founder": {
      "@type": "Person",
      "@id": "https://hifuhuntingdon.co.uk/#jelena",
      "name": "Jelena",
      "jobTitle": "Aesthetic Practitioner & HIFU Specialist",
      "description": "Experienced aesthetic practitioner specialising in HIFU treatments using the advanced TA2 7D System. The only practitioner in the Huntingdon area offering this cutting-edge technology.",
      "worksFor": { "@id": "https://hifuhuntingdon.co.uk/#business" },
      "knowsAbout": ["HIFU Treatment", "Non-Surgical Facelift", "Skin Tightening", "TA2 7D HIFU System", "Aesthetic Medicine", "Anti-Wrinkle Treatments", "Collagen Stimulation"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.90",
      "reviewCount": "31",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sharon Martin" },
        "datePublished": "2025-04-09",
        "reviewBody": "I had the Hifu treatment a week ago. I am amazed that after a week I have noticed my skin is started to tighten. This is the best treatment I have had so far and I've tried lots. I look forward to looking younger every day it's like magic. I am 56 and people are commenting that I look early 40s. I recommend this treatment 100%.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Olga Heyburn" },
        "datePublished": "2024-10-20",
        "reviewBody": "Excellent service. If you are considering HIFU, just go for it as it's fab! Consultation and treatment was first class.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Julie M" },
        "datePublished": "2024-10-17",
        "reviewBody": "I recently visited Jelena for a Hifu treatment, I am very happy with how it is improving my skin. I found Jelena to be very informative about this treatment and other anti wrinkle treatments as well, which made me feel more comfortable with possibly trying them. Thank you Jelena.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Andrea Smith" },
        "datePublished": "2024-09-10",
        "reviewBody": "I have just had the best experience with Jelena. I had the hifu treatment. It was my first experience with this treatment and I can already see a difference. Jelena talked me through the procedure and was very knowledgeable. It was pain free and actually very relaxing. Cant wait to see what the final results will be in a couple of months.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Stephanie Kennedy" },
        "datePublished": "2024-07-03",
        "reviewBody": "I am so pleased with my HIFU treatment, immediately I could see a difference in the tone and texture of my skin and most noticeably the skin on my eyelids was firmer and no longer drooping. Given that the treatment continues to make improvements over a 6 month period by triggering natural collagen production, I can't wait to see further results. Treatment is mildly uncomfortable but not painful and Jelena adjusts the levels to suit.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Lilija Petrisina" },
        "datePublished": "2024-06-23",
        "reviewBody": "Two weeks ago I have a hifu treatment from Jelena. I absolutely amazed of the result I am 56 years old and my skin looks so much smoother and less lines and wrinkle from the day one!!! Every single day I can see very significant differences on my face, neck and eye area. The treatment is absolutely painless and I find actually very relaxing. Highly recommended Jelena as a therapist.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ],
    "sameAs": [
      "https://goo.gl/maps/yUb6DyMBMpLqjwfA6"
    ]
  }

  // Service Schema — Jawline & Neck HIFU
  const jawlineServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://hifuhuntingdon.co.uk/#jawline-neck-hifu",
    "name": "Jawline & Neck HIFU — TA2 7D System",
    "description": "Targeted jawline lifting, definition and neck tightening using the advanced TA2 7D HIFU System. Non-surgical, zero downtime, 60 minute session. Intro offer pricing.",
    "provider": { "@id": "https://hifuhuntingdon.co.uk/#business" },
    "serviceType": "HIFU Treatment",
    "category": "Non-Surgical Facelift",
    "areaServed": { "@type": "City", "name": "Huntingdon" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jawline & Neck HIFU Pricing",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Jawline & Neck HIFU — Intro Offer",
          "price": "295",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://hifuhuntingdon.co.uk",
          "validFrom": "2024-01-01"
        }
      ]
    }
  }

  // Service Schema — Full Face, Neck & Eyes
  const fullFaceServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://hifuhuntingdon.co.uk/#full-face-hifu",
    "name": "HIFU Full Face, Jowls, Neck & Eyelift — TA2 7D System",
    "description": "Complete non-surgical facelift with the advanced TA2 7D HIFU System. Targets full face, jowls, neck, and eye area. 30% more effective than previous 4D HIFU. 90 minute session, zero downtime.",
    "provider": { "@id": "https://hifuhuntingdon.co.uk/#business" },
    "serviceType": "HIFU Treatment",
    "category": "Non-Surgical Facelift",
    "areaServed": { "@type": "City", "name": "Huntingdon" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Full Face HIFU Pricing",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Full Face, Jowls, Neck & Eyelift",
          "price": "395",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://hifuhuntingdon.co.uk",
          "validFrom": "2024-01-01"
        }
      ]
    }
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hifuhuntingdon.co.uk/#website",
    "name": "Princess Beauty Studio - HIFU Treatments Huntingdon",
    "alternateName": "HIFU Huntingdon",
    "url": "https://hifuhuntingdon.co.uk",
    "description": "Expert HIFU non-surgical facelift treatments in Huntingdon using the advanced TA2 7D System. Lift, tighten and rejuvenate without surgery.",
    "publisher": { "@id": "https://hifuhuntingdon.co.uk/#business" },
    "inLanguage": "en-GB"
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hifuhuntingdon.co.uk/#webpage",
    "url": "https://hifuhuntingdon.co.uk",
    "name": "HIFU Huntingdon | Non-Surgical Facelift | Princess Beauty Studio",
    "description": "Transform your look with the advanced HIFU TA2 7D System at Princess Beauty Studio, Godmanchester. 30% more effective than previous 4D HIFU. Non-surgical facelift by Jelena.",
    "isPartOf": { "@id": "https://hifuhuntingdon.co.uk/#website" },
    "about": { "@id": "https://hifuhuntingdon.co.uk/#business" },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/67c9437539ce95843dba76e8.jpeg"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description"]
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-GB"
  }

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the TA2 7D HIFU System?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The TA2 7D is the latest generation HIFU system, delivering 30% more effective results than previous 4D HIFU technology. Princess Beauty Studio is the only clinic in the Huntingdon area offering this advanced system. It provides deeper, more precise ultrasound energy delivery for superior skin tightening and lifting results."
        }
      },
      {
        "@type": "Question",
        "name": "Is HIFU treatment painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients describe HIFU as comfortable with occasional mild discomfort. You may feel warmth and tingling as the ultrasound energy is delivered. Any discomfort is temporary and subsides immediately after treatment. No anaesthetic is required. As one client describes it: 'pain free and actually very relaxing'."
        }
      },
      {
        "@type": "Question",
        "name": "How long do HIFU results last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HIFU results typically last 1-2 years, with some patients enjoying benefits for longer. Results continue to improve for 2-3 months after treatment as collagen production increases. Maintenance treatments can extend your results further."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any downtime after HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One of the biggest advantages of HIFU is zero downtime. You can return to normal activities and work immediately. Some patients experience mild redness or slight swelling, but this typically resolves within a few hours."
        }
      },
      {
        "@type": "Question",
        "name": "How many HIFU treatments will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients see excellent results from a single HIFU treatment with our TA2 7D System. For more significant lifting or older skin, a second treatment after 6-12 months may be recommended. Jelena will advise on the best plan during your free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Who is an ideal candidate for HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HIFU is ideal for anyone with mild to moderate skin laxity — sagging jowls, drooping brows, loose neck skin, or early signs of ageing. It's perfect for those wanting lifting without surgery. Suitable for all skin types. Jelena assesses suitability during your free consultation at Princess Beauty Studio."
        }
      },
      {
        "@type": "Question",
        "name": "When will I see results from HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some lifting is visible immediately after treatment. The best results develop over 2-3 months as new collagen forms. Clients have reported noticing tightening after just one week. Peak results are around 3-6 months post-treatment."
        }
      },
      {
        "@type": "Question",
        "name": "How much does HIFU cost in Huntingdon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Princess Beauty Studio, Jawline & Neck HIFU starts from £295 (intro offer). Full Face, Jowls, Neck & Eyelift is £395. All treatments use the advanced TA2 7D System. Klarna pay-in-3 is available. Free consultations included."
        }
      },
      {
        "@type": "Question",
        "name": "How does HIFU work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HIFU (High-Intensity Focused Ultrasound) delivers focused ultrasound energy to specific depths beneath the skin (1.5mm to 4.5mm), targeting the epidermis, dermis, and SMAS layer — the same layer surgeons tighten in a facelift. The energy creates localised heat at precise focal points, stimulating your body's natural collagen production for tighter, lifted skin."
        }
      }
    ]
  }

  // Video Schema
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "HIFU TA2 7D Treatment at Princess Beauty Studio",
    "description": "Watch Jelena explain the advanced HIFU TA2 7D System at Princess Beauty Studio, Godmanchester. See how this non-surgical facelift treatment lifts, tightens, and rejuvenates skin with zero downtime.",
    "thumbnailUrl": "https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/67c9437539ce95843dba76e8.jpeg",
    "contentUrl": "https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/69b5aade0bd6854dd7783571.mp4",
    "uploadDate": "2025-01-01",
    "publisher": { "@id": "https://hifuhuntingdon.co.uk/#business" },
    "inLanguage": "en-GB"
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hifuhuntingdon.co.uk"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jawlineServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullFaceServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
