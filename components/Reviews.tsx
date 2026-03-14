'use client'

import { useState } from 'react'

interface Review {
  name: string
  rating: 5
  date: string
  treatment: string
  text: string
  verified: boolean
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      name: "Sharon Martin",
      rating: 5,
      date: "2025-10-15",
      treatment: "HIFU Treatment",
      text: "I had the Hifu treatment a week ago. I am amazed that after a week I have noticed my skin is started to tighten. This is the best treatment I have had so far and I've tried lots. I look forward to looking younger every day it's like magic. I am 56 and people are commenting that I look early 40s. I recommend this treatment 100%.",
      verified: true
    },
    {
      name: "Olga Heyburn",
      rating: 5,
      date: "2025-09-20",
      treatment: "HIFU Treatment",
      text: "Excellent service. If you are considering HIFU, just go for it as it's fab! Consultation and treatment was first class.",
      verified: true
    },
    {
      name: "Julie M",
      rating: 5,
      date: "2025-08-12",
      treatment: "HIFU Treatment",
      text: "I recently visited Jelena for a Hifu treatment, I am very happy with how it is improving my skin. I found Jelena to be very informative about this treatment and other anti wrinkle treatments as well, which made me feel more comfortable with possibly trying them. Thank you Jelena.",
      verified: true
    },
    {
      name: "Andrea Smith",
      rating: 5,
      date: "2025-07-18",
      treatment: "HIFU Treatment",
      text: "I have just had the best experience with Jelena. I had the hifu treatment. It was my first experience with this treatment and I can already see a difference. Jelena talked me through the procedure and was very knowledgeable. It was pain free and actually very relaxing. Cant wait to see what the final results will be in a couple of months.",
      verified: true
    },
    {
      name: "Stephanie Kennedy",
      rating: 5,
      date: "2025-06-25",
      treatment: "HIFU Full Face",
      text: "I am so pleased with my HIFU treatment, immediately I could see a difference in the tone and texture of my skin and most noticeably the skin on my eyelids was firmer and no longer drooping. Given that the treatment continues to make improvements over a 6 month period by triggering natural collagen production, I can't wait to see further results. Treatment is mildly uncomfortable but not painful and Jelena adjusts the levels to suit.",
      verified: true
    },
    {
      name: "Lilija Petrisina",
      rating: 5,
      date: "2025-05-10",
      treatment: "HIFU Full Face",
      text: "Two weeks ago I have a hifu treatment from Jelena. I absolutely amazed of the result I am 56 years old and my skin looks so much smoother and less lines and wrinkle from the day one!!! Every single day I can see very significant differences on my face, neck and eye area. The treatment is absolutely painless and I find actually very relaxing. Highly recommended Jelena as a therapist.",
      verified: true
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Patient Reviews</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            What Our Patients
            <span className="block gradient-text">Are Saying</span>
          </h2>

          {/* Overall Rating */}
          <div className="mt-6 sm:mt-8 inline-flex flex-col items-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-neutral-900">4.90</p>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">Based on 31 Google Reviews</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border-2 border-neutral-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                "{review.text}"
              </p>

              {/* Treatment Badge */}
              <div className="inline-block bg-primary-50 text-primary-700 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium mb-3 sm:mb-4">
                {review.treatment}
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-neutral-100">
                <div>
                  <p className="font-semibold text-neutral-900 text-sm sm:text-base">{review.name}</p>
                  <p className="text-xs sm:text-sm text-neutral-500">
                    {new Date(review.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>
                {review.verified && (
                  <div className="flex items-center text-green-600 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Google
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Phone CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="tel:07743080038"
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-neutral-900 text-base sm:text-lg mb-1">Book a Consultation</p>
              <p className="text-sm text-neutral-600">07743 080038</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
