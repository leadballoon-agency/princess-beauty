'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is the TA2 7D HIFU System?',
    answer: 'The TA2 7D HIFU System is the latest generation of HIFU technology, delivering 30% more effective results than previous 4D HIFU systems. Princess Beauty Studio is the only clinic in the Huntingdon area offering this advanced system. The 7D technology provides more precise energy delivery for superior lifting and tightening results.'
  },
  {
    question: 'Is HIFU treatment painful?',
    answer: 'Most patients describe HIFU as comfortable with occasional mild discomfort. You may feel warmth and tingling as the ultrasound energy is delivered. As our client Andrea says, it was "pain free and actually very relaxing." Jelena adjusts the levels to suit your comfort. No anaesthetic is required.'
  },
  {
    question: 'How long do HIFU results last?',
    answer: 'HIFU results typically last 1-2 years, with some patients enjoying benefits for longer. Results continue to improve for 2-3 months after treatment as collagen production increases. Maintenance treatments can extend your results.'
  },
  {
    question: 'Is there any downtime?',
    answer: 'One of the biggest advantages of HIFU is zero downtime! You can return to normal activities immediately. Some patients experience mild redness or slight swelling, but this typically resolves within a few hours.'
  },
  {
    question: 'How many treatments will I need?',
    answer: 'Most patients see excellent results from a single HIFU treatment with our TA2 7D System. For more significant lifting or older skin, a second treatment after 6-12 months may be recommended. Jelena will advise on the best plan during your consultation.'
  },
  {
    question: 'Who is an ideal candidate for HIFU?',
    answer: 'HIFU is ideal for anyone with mild to moderate skin laxity - sagging jowls, drooping brows, loose neck skin, or early signs of ageing. It\'s perfect for those wanting lifting without surgery. Jelena assesses suitability during your free consultation at Princess Beauty Studio.'
  },
  {
    question: 'When will I see results?',
    answer: 'Some lifting is visible immediately, but the best results develop over 2-3 months as new collagen forms. As our client Sharon says, she noticed tightening after just one week. Your skin will continue to improve and tighten, with peak results around 3-6 months post-treatment.'
  }
]

interface FAQProps {
  onBookingClick?: () => void
}

export default function FAQ({ onBookingClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">FAQ</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 sm:mt-3">
            Your Questions
            <span className="block gradient-text">Answered</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base pr-3 sm:pr-4">{faq.question}</span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
            Still have questions? We're here to help.
          </p>
          <button 
            onClick={onBookingClick}
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}