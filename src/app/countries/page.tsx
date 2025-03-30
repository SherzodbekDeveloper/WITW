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
    url: "https://where-in-thee-world.vercel.app/",
    type: "website",
    images: [
      {
        url: "/image.png",
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