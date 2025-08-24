import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import store from '@/store'
import { Provider } from 'react-redux'
import Providers from './provider'

export const metadata: Metadata = {
  title: 'Rent Karo - Premium Motorcycle & Bike Rental Services',
  description:
    'Experience the freedom of the open road with Rent Karo. Premium motorcycle and bike rental services with sports bikes, cruisers, and adventure bikes. Book your ride today!',
  keywords:
    'bike rental, motorcycle rental, sports bike rental, cruiser rental, adventure bike, bike hire, motorcycle hire, rent bike, rent motorcycle',
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
  openGraph: {
    title: 'Rent Karo - Premium Motorcycle & Bike Rental Services',
    description:
      'Experience the freedom of the open road with Rent Karo. Premium motorcycle and bike rental services with sports bikes, cruisers, and adventure bikes.',
    url: 'https://rentkaro.com',
    siteName: 'Rent Karo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rent Karo - Premium Motorcycle Rental Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rent Karo - Premium Motorcycle & Bike Rental Services',
    description:
      'Experience the freedom of the open road with Rent Karo. Premium motorcycle and bike rental services.',
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
