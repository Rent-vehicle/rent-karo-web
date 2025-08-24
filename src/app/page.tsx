import { BikeRentalCarousel, HeroContent, FloatingWhatsApp, StructuredData } from '@/components'

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData />

      {/* Main Content */}
      <main className="min-h-screen" role="main">
        <section aria-label="Bike Rental Hero Section">
          <div className="relative">
            <BikeRentalCarousel />
            <HeroContent />
            <FloatingWhatsApp />
          </div>
        </section>
      </main>
    </>
  )
}
