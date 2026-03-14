'use client'

import { useEffect } from 'react'
import { trackModelDayModalOpen } from './FacebookPixel'

interface ModelDayModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ModelDayModal({ isOpen, onClose }: ModelDayModalProps) {
  const bookingLink = 'tel:07743080038'

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      trackModelDayModalOpen()
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-5 sm:p-6 lg:p-8 text-white flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur rounded-full mb-3 sm:mb-4">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-2">
              LIMITED SPOTS
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Become a HIFU Model</h2>
            <p className="text-white/90 text-sm leading-relaxed mt-2">
              Get exclusive rates in exchange for before & after photos
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 lg:p-8">
          <div className="space-y-5 sm:space-y-6">
            {/* What You Get */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 flex items-center">
                <span className="text-primary-500 mr-2">✨</span>
                What You Get
              </h3>
              <ul className="space-y-2">
                {[
                  'Exclusive discounted model rates',
                  'Professional photography included',
                  'Same expert treatment as full-price clients',
                  'Be featured on our website & social media'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base text-neutral-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How It Works */}
            <div className="bg-primary-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-base sm:text-lg mb-3 flex items-center">
                <span className="text-primary-500 mr-2">📱</span>
                How to Apply
              </h3>
              <ol className="space-y-3">
                {[
                  'Call or text us with a photo of your concern area',
                  'We\'ll assess if you\'re a good fit for our portfolio',
                  'Receive your personalised offer within 24 hours'
                ].map((step, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base text-neutral-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Requirements Note */}
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Models agree to allow their before & after photos to be used for marketing purposes including our website, social media, and promotional materials.
            </p>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex-shrink-0 p-5 sm:p-6 lg:p-8 pt-0 space-y-3">
          {/* Phone Button */}
          <a
            href={bookingLink}
            className="flex items-center justify-center w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg group"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call to Apply: 07743 080038
          </a>

          <p className="text-center text-sm text-neutral-500">
            Princess Beauty Studio
          </p>
        </div>
      </div>
    </div>
  )
}
