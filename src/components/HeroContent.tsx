'use client'

import { getRandomPhoneNumber } from '@/utils/phoneNumber'

const HeroContent = () => {
  const handleWhatsAppClick = (message: string) => {
    const number = getRandomPhoneNumber()
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCallClick = () => {
    window.open(`tel:${getRandomPhoneNumber()}`, '_self')
  }

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-orange-600/40 z-10 flex items-center justify-center">
      <div className="text-center px-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
          Bike Rental Service
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-2xl mx-auto leading-relaxed text-cyan-100 drop-shadow-lg">
          Get the best bikes for rent at affordable prices. We have different types of bikes
          available for all your needs. Book your bike today and enjoy your ride!
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm sm:text-base">
          <span className="text-green-300 font-semibold flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            24/7 Support
          </span>
          <span className="text-green-300 font-semibold flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Easy Booking
          </span>
          <span className="text-green-300 font-semibold flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Best Prices
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-orange-300/30"
            aria-label="Book your motorcycle rental now"
            onClick={() =>
              handleWhatsAppClick(
                'Hi! I am interested in renting a motorcycle. Can you please provide more information about your bike rental services?'
              )
            }
          >
            Rent Now
          </button>
          <button
            className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-6 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white/30"
            aria-label="Call us directly"
            onClick={handleCallClick}
          >
            Call Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
