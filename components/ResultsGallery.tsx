'use client'

import { useState } from 'react'
import ModelDayModal from './ModelDayModal'
import { trackModelDayCardClick } from './FacebookPixel'

interface ResultsGalleryProps {
  onBookingClick?: () => void
}

export default function ResultsGallery({ onBookingClick }: ResultsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showModelDayModal, setShowModelDayModal] = useState(false)

  const results = [
    {
      image: 'https://storage.googleapis.com/msgsndr/gifJevody1uHQcVkPPPf/media/6796669964e3ccef0af06310.png',
      title: 'Stunning Results',
      description: 'Visible lifting after just 1 session with TA2 7D HIFU',
      time: 'Results Vary',
      isAvailable: true,
      featured: true
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/gifJevody1uHQcVkPPPf/media/68bd8124f2b0b96665e2a4c6.jpeg',
      title: 'Full Face Lift',
      description: 'Complete facial lifting and tightening',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/gifJevody1uHQcVkPPPf/media/66dd3ce284ef29ef27ec130a.jpeg',
      title: 'Skin Tightening',
      description: 'Smoother, firmer skin with natural collagen production',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/gifJevody1uHQcVkPPPf/media/66dd3ce2ab806e05563a646f.jpeg',
      title: 'Jowl Lifting',
      description: 'Define your jawline naturally',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/gifJevody1uHQcVkPPPf/media/66dd3e0606b0253f2a1142f7.jpeg',
      title: 'Neck Tightening',
      description: 'Firmer, smoother neck and jawline',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/or7vzDasdrvOVfuMTH93/media/662a98429445711637f0491c.jpeg',
      title: 'Anti-Wrinkle Results',
      description: 'Reduce fine lines and wrinkles',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/or7vzDasdrvOVfuMTH93/media/662a98425bac61e65bff7942.jpeg',
      title: 'Eye Area Lifting',
      description: 'Firmer eyelids and reduced drooping',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      title: 'Become a Model',
      description: 'Get exclusive rates in exchange for before & after photos',
      isAvailable: true,
      featured: false,
      isModelDay: true
    }
  ]

  return (
    <section id="results" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Real Results</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 sm:mt-3">
            Transformations That
            <span className="block gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 mt-2 sm:mt-3 max-w-2xl mx-auto px-4">
            Browse our gallery of real patient results
          </p>
        </div>

        {/* Premium Results Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {results.map((result: any, index) => (
            result.isModelDay ? (
              /* Model Day Card - Special Styling */
              <div
                key={index}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium transition-all duration-300 sm:hover:shadow-premium-lg cursor-pointer bg-gradient-to-br from-primary-500 to-primary-600 hover:scale-[1.02]"
                onClick={() => {
                  trackModelDayCardClick()
                  setShowModelDayModal(true)
                }}
              >
                {/* LIMITED SPOTS Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                  <span className="bg-white/90 backdrop-blur px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-primary-600">
                    LIMITED SPOTS
                  </span>
                </div>

                {/* Card Content */}
                <div className="aspect-[4/3] flex flex-col items-center justify-center text-center text-white p-6 sm:p-8">
                  {/* Camera Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>

                  <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">{result.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-white/90 mb-4 sm:mb-6 max-w-[200px]">
                    {result.description}
                  </p>

                  <div className="inline-flex items-center bg-white text-primary-600 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base group-hover:shadow-lg transition-shadow">
                    Apply Now
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular Result Card */
              <div
                key={index}
                className={`group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-premium transition-all duration-300 ${
                  result.isAvailable ? 'sm:hover:shadow-premium-lg cursor-pointer' : 'opacity-90 cursor-not-allowed'
                } ${result.featured ? 'md:col-span-2' : ''}`}
                onClick={() => result.isAvailable && setSelectedImage(index)}
              >
                {/* Before/After Label - Only show for available results */}
                {result.isAvailable && (
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex gap-1.5 sm:gap-2">
                    <span className="bg-white/90 backdrop-blur px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                      Before
                    </span>
                    <span className="bg-primary-500/90 backdrop-blur text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                      After
                    </span>
                  </div>
                )}

                {/* Time Badge or FULL Badge */}
                <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 z-10 backdrop-blur rounded-full px-2 sm:px-3 py-0.5 sm:py-1 ${
                  result.isAvailable ? 'bg-white/90' : 'bg-red-500/90'
                }`}>
                  <span className={`text-[10px] sm:text-xs font-medium ${
                    result.isAvailable ? 'text-neutral-700' : 'text-white'
                  }`}>{result.time}</span>
                </div>

                {/* Image Container */}
                <div className={`relative overflow-hidden ${result.featured ? 'aspect-video' : 'aspect-[4/3]'}`}>
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 sm:from-black/50 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{result.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{result.description}</p>

                  <div className="mt-3 sm:mt-4 flex items-center text-primary-600 font-medium text-sm">
                    <span>View Details</span>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Clinic Info Section - Mobile Optimized */}
        <div className="mt-8 sm:mt-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium bg-gradient-to-br from-primary-500 to-primary-600">
            <div className="p-8 sm:p-12 md:p-16 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                  Welcome to Princess Beauty Studio
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed">
                  Experience advanced TA2 7D HIFU treatments at our studio in Godmanchester, near Huntingdon. The only clinic in the area with this cutting-edge system — 30% more effective than previous 4D HIFU.
                </p>
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Schedule Consultation
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Mobile Optimized */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '500+', label: 'Treatments Completed' },
            { number: '£195', label: 'Starting From' },
            { number: '1', label: 'Expert Practitioner' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-xl sm:text-2xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</p>
              <p className="text-xs sm:text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Mobile Optimized */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img 
                src={results[selectedImage].image} 
                alt={results[selectedImage].title}
                className="w-full rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur rounded-full p-1.5 sm:p-2 hover:bg-white transition"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Model Day Modal */}
        <ModelDayModal
          isOpen={showModelDayModal}
          onClose={() => setShowModelDayModal(false)}
        />
      </div>
    </section>
  )
}