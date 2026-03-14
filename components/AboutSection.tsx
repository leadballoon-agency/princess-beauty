interface AboutSectionProps {
  onBookingClick?: () => void
}

export default function AboutSection({ onBookingClick }: AboutSectionProps) {
  const practitioners = [
    {
      name: 'Jelena',
      title: 'HIFU Specialist — Princess Beauty Studio',
      image: 'https://assets.cdn.filesafe.space/gifJevody1uHQcVkPPPf/media/6624d8d08381f285870ce101.jpeg',
      bio: 'Welcome to Princess Beauty Studio in Godmanchester, near Huntingdon. I specialise in advanced HIFU treatments using the TA2 7D System — the latest generation technology that is 30% more effective than previous 4D HIFU. I am the only practitioner in the Huntingdon area offering this cutting-edge system. My focus is on delivering natural, visible results that enhance your confidence, with clients regularly commenting on how much younger they look after treatment.',
      qualifications: [
        'TA2 7D HIFU System Specialist',
        'Non-Surgical Facelift Expert',
        'Advanced Skin Tightening',
        'Anti-Wrinkle Treatments',
        'Dedicated to Natural Results'
      ],
      instagram: 'princessbeautystudio'
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Meet Your Practitioner</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 sm:mt-3">
            Your Journey to
            <span className="block gradient-text">Natural Enhancement</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 mt-2 sm:mt-3 max-w-2xl mx-auto px-4">
            Professional expertise dedicated to your aesthetic transformation
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {practitioners.map((practitioner, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-5 sm:p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300">
              {/* Practitioner Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-4 max-w-[200px] mx-auto">
                <div className="aspect-[4/5] relative">
                  <img
                    src={practitioner.image}
                    alt={`${practitioner.name} - ${practitioner.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100/10 to-primary-300/10"></div>
                </div>
              </div>

              {/* Practitioner Info */}
              <div className="space-y-3 text-center">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold">
                    {practitioner.name}
                  </h3>
                  <p className="text-sm sm:text-base text-primary-600 font-medium mt-1">
                    {practitioner.title}
                  </p>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {practitioner.bio}
                </p>

                {/* Qualifications */}
                <div className="space-y-2 pt-2 text-left">
                  <h4 className="font-bold text-sm sm:text-base text-center">Qualifications & Expertise</h4>
                  <ul className="space-y-1.5 max-w-sm mx-auto">
                    {practitioner.qualifications.map((item, qIndex) => (
                      <li key={qIndex} className="flex items-start text-neutral-700">
                        <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single CTA below both practitioners */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={onBookingClick}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
