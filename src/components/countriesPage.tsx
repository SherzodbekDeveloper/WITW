"use client"
import { useEffect, useState, ChangeEvent } from "react"
import { Country, useCountry } from "@/store/countryStore"
import { CountryCard } from './country-card'
import { Skeleton } from "@/components/ui/skeleton"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"

export const continents = [
     {
          label: 'All Continents',
          value: ''
     },
     {
          label: 'Africa',
          value: 'Africa'
     },
     {
          label: 'Asia',
          value: 'Asia'
     },
     {
          label: 'Europe',
          value: 'Europe'
     },
     {
          label: 'North America',
          value: 'North America'
     },
     {
          label: 'South America',
          value: 'South America'
     },
     {
          label: 'Oceania',
          value: 'Oceania'
     },
     {
          label: 'Antarctica',
          value: 'Antarctica'
     }
]

export default function CountryPage() {
     const { country, isLoading, isError } = useCountry()
     const [countries, setCountries] = useState<Country[]>([])
     const [searchText, setSearchText] = useState("")
     const [continent, setContinent] = useState("")


     useEffect(() => {
          if (country) {
               setCountries(country)
          }
     }, [country])

     const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
          const text = e.target.value.toLowerCase()
          setSearchText(text)
          filterCountries(text, continent)
     }

     const handleContinentChange = (continent: string) => {
          const selectedContinent = continent
          setContinent(selectedContinent)
          filterCountries(searchText, selectedContinent)
     }

     const filterCountries = (text: string, selectedContinent: string) => {
          let filteredData = country ?? []

          if (text) {
               filteredData = filteredData.filter((c) =>
                    c.name.common.toLowerCase().includes(text)
               )
          }

          if (selectedContinent) {
               filteredData = filteredData.filter((c) =>
                    c.continents?.some((cont) => cont.toLowerCase() === selectedContinent.toLowerCase())
               )
          }

          setCountries(filteredData)
     }

     if (isLoading) {
          return (
               <div className="max-w-7xl m-auto px-4 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {Array(6)
                              .fill(0)
                              .map((_, idx) => (
                                   <div key={idx} className="space-y-3">
                                        <Skeleton className="h-48 w-full" />
                                        <Skeleton className="h-6 w-3/4" />
                                        <Skeleton className="h-4 w-1/2" />
                                        <Skeleton className="h-4 w-1/2" />
                                        <Skeleton className="h-4 w-1/2" />
                                   </div>
                              ))}
                    </div>
               </div>
          )
     }

     if (isError) {
          return (
               <div className="max-w-7xl m-auto px-4 mt-20">
                    <div className="p-6 bg-red-100 rounded-lg text-center">
                         <h2 className="text-xl font-bold text-red-600">Error loading countries</h2>
                         <p className="mt-2">Please try again later</p>
                    </div>
               </div>
          )
     }

     return (
          <div className="max-w-7xl m-auto bg-background mx-auto w-full px-4 mt-20">
               <div>
                    <h1 className="text-3xl font-bold mb-8">Countries of the World</h1>
                    <div className="flex gap-4 mb-6 md:flex-row flex-col">
                         <input
                              type="text"
                              onChange={handleSearch}
                              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Search for a country..."
                         />
                         <DropdownMenu >
                              <DropdownMenuTrigger asChild className="h-12">
                                   <Button variant="outline">{continent == '' ? 'All continents' : continent}</Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="bg-background dark:bg-[#09090b]">
                                   {continents.map((cont) => (
                                        <DropdownMenuItem className="cursor-pointer" key={cont.label} onClick={() => handleContinentChange(cont.value)}>
                                             {cont.label}
                                        </DropdownMenuItem>
                                   ))}
                              </DropdownMenuContent>
                         </DropdownMenu>

                    </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {countries.map((item) => (
                         <CountryCard key={item.cca3} country={item} />
                    ))}
               </div>
          </div>
     )
}
