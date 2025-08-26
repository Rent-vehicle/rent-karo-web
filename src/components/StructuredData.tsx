const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Rent Karo',
    'description':
      'Premium motorcycle and bike rental services offering sports bikes, cruisers, and adventure bikes for hire.',
    'url': 'https://rentkaro.com',
    'telephone': '+919528865610',
    'email': 'info@rentkaro.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Your Street Address',
      'addressLocality': 'Your City',
      'addressRegion': 'Your State',
      'postalCode': 'XXXXXX',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 'YOUR_LATITUDE',
      'longitude': 'YOUR_LONGITUDE',
    },
    'openingHours': 'Mo-Su 08:00-20:00',
    'priceRange': '₹₹',
    'serviceType': 'Motorcycle Rental',
    'areaServed': 'India',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Motorcycle Rental Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Sports Bike Rental',
            'description': 'High-performance sports motorcycles for adrenaline seekers',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Cruiser Bike Rental',
            'description': 'Comfortable cruiser motorcycles for long-distance touring',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Adventure Bike Rental',
            'description': 'Adventure motorcycles for off-road and touring experiences',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default StructuredData
