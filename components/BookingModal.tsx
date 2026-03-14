'use client'

import { useEffect } from 'react'
import { trackBookingModalOpen } from './FacebookPixel'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  assessmentData?: any
}

export default function BookingModal({ isOpen, onClose, assessmentData }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      trackBookingModalOpen()
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

      {/* Modal - Mobile slides up from bottom, desktop centered */}
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-5 sm:p-6 lg:p-8 text-white flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur rounded-full mb-2 sm:mb-3 lg:mb-4">
              <span className="text-2xl sm:text-3xl">✨</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Book Your Treatment</h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Princess Beauty Studio — Godmanchester
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="space-y-6">
            {/* Phone CTA */}
            <a
              href="tel:07743080038"
              className="flex items-center gap-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg">Call Jelena</p>
                <p className="text-primary-600 font-semibold text-base">07743 080038</p>
                <p className="text-sm text-neutral-500 mt-0.5">Tap to call now</p>
              </div>
            </a>

            {/* WhatsApp/Text CTA */}
            <a
              href="sms:07743080038?body=Hi Jelena, I'm interested in HIFU treatment at Princess Beauty Studio. Could I book a consultation please?"
              className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg">Send a Message</p>
                <p className="text-green-600 font-semibold text-base">Text 07743 080038</p>
                <p className="text-sm text-neutral-500 mt-0.5">Tap to send a text message</p>
              </div>
            </a>

            {/* Info Box */}
            <div className="bg-neutral-50 rounded-xl p-4 text-center">
              <p className="text-sm text-neutral-600 leading-relaxed">
                Free consultations available. Jelena will discuss your treatment goals and create a personalised plan using our advanced TA2 7D HIFU System.
              </p>
            </div>

            {/* Location */}
            <div className="text-center text-sm text-neutral-500">
              <p className="font-medium text-neutral-700">Princess Beauty Studio</p>
              <p>16 Ash Tree Avenue, Godmanchester</p>
              <p>Cambridgeshire PE29 2FH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
