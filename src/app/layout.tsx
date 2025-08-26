import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
export const metadata: Metadata = {
  title: 'Bike Rentals in Dehradun, Uttarakhand',
  description:
    'Rent Karo now operates in Dehradun, Uttarakhand  Premium motorcycle and bike rental services including sports bikes, cruisers, and adventure bikes. Explore scenic routes and book your ride today.',
  keywords:
    'bike rental Dehradun, motorcycle hire Uttarakhand, sports bike rental Dehradun, cruiser rental Dehradun, adventure bike hire Dehradun, rent bike Rajpur Road, bike hire near Clock Tower Dehradun',
  authors: [{ name: 'Rent Karo' }],
  creator: 'Rent Karo',
  publisher: 'Rent Karo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rentkaro.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://copilot.microsoft.com/th/id/BCO.16839afe-3a35-41c0-83ae-1c1c287f7d9c.png',
  },
  openGraph: {
    title: 'Bike & Motorcycle Rentals in Dehradun',
    description:
      'Rent Karo offers premium bike and motorcycle rentals in Dehradun, Uttarakhand. Choose from sports bikes, cruisers, and more.',
    url: 'https://rentkaro.com',
    siteName: 'Rent Karo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rent Karo - Bike Rentals in Dehradun',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rent Karo - Bike Rentals in Dehradun, Uttarakhand',
    description:
      'Explore Dehradun with Rent Karo. Premium motorcycle and bike rentals including sports bikes, cruisers, and adventure bikes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
