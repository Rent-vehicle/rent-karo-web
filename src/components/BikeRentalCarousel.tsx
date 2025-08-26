'use client'

import { useState, useEffect } from 'react'

interface CarouselSlide {
  id: number
  image: string
}

const BikeRentalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel data with only images
  const carouselData: CarouselSlide[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3IlMjBiaWtlfGVufDB8fDB8fHww',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1558981806-ec527fa84a39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      role="banner"
      aria-label="Bike Rental Hero Carousel"
    >
      {/* Carousel Images */}
      <div className="relative h-full w-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-50' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0  bg-opacity-10"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BikeRentalCarousel
