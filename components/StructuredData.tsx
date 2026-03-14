export default function StructuredData() {
  // Main Organization/LocalBusiness Schema (consolidated)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://hifuhuntingdon.co.uk/#business",
    "name": "Princess Beauty Studio",
    "alternateName": ["HIFU Huntingdon", "Princess Beauty"],
    "url": "https://hifuhuntingdon.co.uk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/6624d8d08381f285870ce101.jpeg",
      "width": 512,
      "height": 512
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/67c9437539ce95843dba76e8.jpeg",
      "width": 1200,
      "height": 630,
      "caption": "Princess Beauty Studio - HIFU Treatments in Huntingdon"
    },
    "description": "Expert HIFU non-surgical facelift treatments in Huntingdon. Featuring the advanced TA2 7D HIFU System — 30% more effective than previous 4D HIFU. The only clinic in the area with this technology. Specialising in skin tightening, jowl lifting, and facial rejuvenation with zero downtime. Led by experienced practitioner Jelena.",
    "telephone": "07743080038",
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
    "priceRange": "££",
    "isAccessibleForFree": false,
    "publicAccess": true,
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
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
      { "@type": "City", "name": "Cambridge" }
    ],
    "founder": {
      "@type": "Person",
      "@id": "https://hifuhuntingdon.co.uk/#jelena",
      "name": "Jelena",
      "jobTitle": "Aesthetic Practitioner",
      "description": "Experienced aesthetic practitioner specialising in HIFU treatments using the advanced TA2 7D System",
      "knowsAbout": ["HIFU Treatment", "Non-Surgical Facelift", "Skin Tightening", "Aesthetic Medicine", "TA2 7D HIFU System"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.90",
      "reviewCount": "31",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HIFU Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://hifuhuntingdon.co.uk/#hifu-treatment",
            "name": "HIFU TA2 7D Non-Surgical Facelift",
            "description": "Advanced HIFU treatment using the TA2 7D System for skin tightening, jowl lifting and facial rejuvenation. 30% more effective than previous 4D HIFU technology.",
            "provider": { "@id": "https://hifuhuntingdon.co.uk/#business" }
          },
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock"
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
        "name": "Is HIFU treatment painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients describe HIFU as comfortable with occasional mild discomfort. You may feel warmth and tingling as the ultrasound energy is delivered. Any discomfort is temporary and subsides immediately after treatment. No anaesthetic is required."
        }
      },
      {
        "@type": "Question",
        "name": "How long do HIFU results last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HIFU results typically last 1-2 years, with some patients enjoying benefits for longer. Results continue to improve for 2-3 months after treatment as collagen production increases. Maintenance treatments can extend your results."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any downtime after HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One of the biggest advantages of HIFU is zero downtime! You can return to normal activities immediately. Some patients experience mild redness or slight swelling, but this typically resolves within a few hours."
        }
      },
      {
        "@type": "Question",
        "name": "How many HIFU treatments will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients see excellent results from a single HIFU treatment. For more significant lifting or older skin, a second treatment after 6-12 months may be recommended. We'll advise on the best plan during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Who is an ideal candidate for HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HIFU is ideal for anyone with mild to moderate skin laxity - sagging jowls, drooping brows, loose neck skin, or early signs of ageing. It's perfect for those wanting lifting without surgery. We assess suitability during consultation."
        }
      },
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
        "name": "When will I see results from HIFU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some lifting is visible immediately, but the best results develop over 2-3 months as new collagen forms. Your skin will continue to improve and tighten during this time, with peak results around 3 months post-treatment."
        }
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
