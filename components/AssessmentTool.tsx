'use client'

import { useState } from 'react'
import { trackAssessmentStart, trackAssessmentComplete } from './FacebookPixel'
import AssessmentModal from './AssessmentModal'

interface AssessmentToolProps {
  onBookingClick?: () => void
  onAssessmentComplete?: (data: any) => void
}

export default function AssessmentTool({ onBookingClick, onAssessmentComplete }: AssessmentToolProps) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<any>({})
  const [showModal, setShowModal] = useState(false)

  const questions = [
    {
      id: 1,
      question: "What is your primary concern?",
      subtext: "Select the area you'd most like to improve",
      options: [
        { value: 'jowls', label: 'Sagging jowls', icon: '😊' },
        { value: 'neck', label: 'Loose neck skin', icon: '🦢' },
        { value: 'brows', label: 'Drooping brows', icon: '👁️' },
        { value: 'cheeks', label: 'Loss of cheek volume', icon: '✨' },
        { value: 'fullface', label: 'Overall facial sagging', icon: '💎' },
        { value: 'prevention', label: 'Preventative anti-aging', icon: '⏰' }
      ]
    },
    {
      id: 2,
      question: "How would you describe your skin laxity?",
      options: [
        { value: 'mild', label: 'Mild - Early signs', icon: '🌱' },
        { value: 'moderate', label: 'Moderate - Noticeable sagging', icon: '🌿' },
        { value: 'significant', label: 'Significant - Very loose', icon: '🌳' }
      ]
    },
    {
      id: 3,
      question: "What is your age range?",
      options: [
        { value: '25-35', label: '25-35', icon: '🌱' },
        { value: '36-45', label: '36-45', icon: '🌿' },
        { value: '46-55', label: '46-55', icon: '🌳' },
        { value: '55+', label: '55+', icon: '🌲' }
      ]
    }
  ]

  const totalSteps = questions.length
  const currentQuestion = questions[step - 1]

  const handleAnswer = (value: string | number) => {
    const newAnswers = { ...answers, [step]: value }
    setAnswers(newAnswers)

    // Track first question as assessment start
    if (step === 1) {
      trackAssessmentStart()
    }

    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Show results and emit assessment completion
      setStep(step + 1)
      const recommendation = getRecommendation(newAnswers)

      // Track assessment completion
      trackAssessmentComplete(recommendation.treatment)

      onAssessmentComplete?.({
        answers: newAnswers,
        recommendation,
        completedAt: new Date().toISOString()
      })
    }
  }

  const getRecommendation = (assessmentAnswers: any = answers) => {
    const concern = assessmentAnswers[1]
    const laxity = assessmentAnswers[2]
    const ageRange = assessmentAnswers[3]

    // Face & Neck for significant concerns or neck-specific
    if (concern === 'neck' || laxity === 'significant' || (concern === 'fullface' && ageRange === '55+')) {
      return {
        treatment: 'Face & Neck HIFU',
        price: '£399',
        description: 'Complete face and neck treatment for maximum lifting. Targets jowls, jawline, and turkey neck for comprehensive rejuvenation.',
        isSuitable: true
      }
    }

    // Full Face HIFU for most cases
    if (concern === 'jowls' || concern === 'cheeks' || concern === 'fullface' || laxity === 'moderate') {
      return {
        treatment: 'Full Face HIFU',
        price: '£395',
        description: 'Our comprehensive treatment for full facial rejuvenation. Lifts jowls, tightens cheeks, and defines your jawline for natural-looking results.',
        isSuitable: true
      }
    }

    // Targeted treatment for specific areas
    if (concern === 'brows' || concern === 'prevention' || laxity === 'mild') {
      return {
        treatment: 'Targeted Area HIFU',
        price: 'From £149',
        description: 'Perfect for specific areas or preventative treatment. Quick session focusing on your main concern with visible lifting results.',
        isSuitable: true
      }
    }

    // Default to Jawline HIFU (intro offer)
    return {
      treatment: 'Jawline HIFU',
      price: '£195',
      description: 'Our introductory offer - perfect for defining your jawline and lifting jowls. An excellent first treatment to experience HIFU results.',
      isSuitable: true
    }
  }

  return (
    <section id="assessment" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-3">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-xs sm:text-sm">AI-Powered Assessment</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
            Find Your Perfect
            <span className="gradient-text"> Treatment</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 max-w-2xl mx-auto px-4">
            Answer 3 quick questions for personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium p-6 sm:p-8 md:p-12">
          {step <= totalSteps && currentQuestion ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-neutral-600">Step {step} of {totalSteps}</span>
                  <span className="text-xs sm:text-sm text-neutral-600">{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{currentQuestion.question}</h3>
                {currentQuestion.subtext && (
                  <p className="text-sm leading-relaxed text-neutral-500">{currentQuestion.subtext}</p>
                )}
              </div>

              {/* Standard Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {currentQuestion.options?.map((option: any) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:scale-105 flex sm:flex-col items-center sm:items-center text-left sm:text-center"
                  >
                    <div className="text-3xl sm:text-4xl mr-4 sm:mr-0 sm:mb-3">{option.icon}</div>
                    <p className="font-medium text-sm sm:text-base text-neutral-700 group-hover:text-primary-600">
                      {option.label}
                    </p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">✨</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Your Perfect HIFU Treatment
              </h3>

              <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6 border-2 bg-gradient-to-br from-primary-50 to-white border-primary-100">
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-primary-600">
                  {getRecommendation().treatment}
                </h4>
                <p className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 gradient-text">
                  {getRecommendation().price}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  {getRecommendation().description}
                </p>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6 text-left">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <p className="text-sm text-green-900 font-medium mb-1">Safe for All Skin Types</p>
                    <p className="text-sm text-green-800">
                      HIFU is safe for all skin tones and types. No risk of pigmentation changes or scarring.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <button
                  onClick={onBookingClick}
                  type="button"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl hover:scale-105 px-6 py-3 sm:py-4 rounded-full font-medium transition-all duration-300"
                >
                  Book Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button
                  onClick={() => {setStep(1); setAnswers({})}}
                  className="w-full inline-flex items-center justify-center text-primary-600 text-sm font-medium hover:text-primary-700 transition-all duration-300"
                >
                  ← Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Assessment Modal */}
      <AssessmentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        initialData={{
          skinType: answers[1],
          concern: answers[2],
          age: answers[3]
        }}
      />
    </section>
  )
}
