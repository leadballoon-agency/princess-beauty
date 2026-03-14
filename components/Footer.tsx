export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-primary-300">
              Princess Beauty Studio
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Expert HIFU non-surgical facelift in Huntingdon
            </p>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
              Advanced TA2 7D HIFU System — the only clinic in the area with this technology
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm sm:text-base text-neutral-400">
              <li>
                <span className="text-neutral-500">Phone: </span>
                <a href="tel:07743080038" className="text-neutral-300 hover:text-white transition-colors">07743 080038</a>
              </li>
              <li className="mt-3 pt-3 border-t border-neutral-800 leading-relaxed">16 Ash Tree Avenue</li>
              <li>Godmanchester</li>
              <li>Cambridgeshire PE29 2FH</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p className="text-sm sm:text-base mb-2">&copy; 2025 Princess Beauty Studio. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-neutral-500 mb-3">
            <a href="/privacy-policy" className="hover:text-white underline transition-colors">Privacy Policy</a>
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            This site may use tracking technologies to improve user experience and analyze site performance.
          </p>
        </div>
      </div>
    </footer>
  )
}
