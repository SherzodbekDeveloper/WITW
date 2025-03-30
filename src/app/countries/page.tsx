import CountryPage from '@/components/countriesPage'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Countries",
  description: "Discover countries and continents with detailed information, maps, and more. Search and filter by region easily!",
  keywords: "countries, world map, continents, country search, travel, geography, nations, flags",
  openGraph: {
    title: "Where in the World?",
    description: "Find detailed information about countries and continents. Search, filter, and explore!",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "https://c4.wallpaperflare.com/wallpaper/123/312/5/earth-the-blue-planet-view-from-moon-north-and-south-america-ultra-hd-4k-wallpapers-for-desktop-mobiles-3840%C3%972160-wallpaper-preview.jpg",
        height: 630,
        alt: "Where in the World - Country Explorer",
      },
    ],
  }
};

function Page() {
  return (
    <div>
      <CountryPage />
    </div>
  )
}

export default Page