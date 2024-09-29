import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import './globals.css'
import { Header } from "@/components/Header"
import { SearchBar } from "@/components/SearchBar"
import { JobListings } from "@/components/JobListings"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#52B9B8]">
      <Header />

      <main className="relative">
        <div className="bg-[#52B9B8] text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-24">
              <div className="lg:w-[65%] mb-8 lg:mb-0">
                <h2 className="text-4xl font-bold mb-4">Ready for your next dream job?</h2>
                <p className="text-xl">Our expert team have got you covered!</p>
              </div>
              <div className="lg:w-[40%]">
                <Image 
                  src="images/banner.svg"
                  alt="Illustration of two people in an online interview" 
                  width={360} 
                  height={240} 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-100">
          <div className="absolute inset-x-0 top-0 h-36 overflow-hidden bg-[#52B9B8]">
            <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full" preserveAspectRatio="none">
              <path fill="#f3f4f6" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"></path>
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10 -mt-20">
            <div className="flex justify-center mb-4">
              <Card className="bg-white text-gray-800 w-full md:w-[70%]">
                <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-7">
                  {[
                    { label: 'Interviews taken last Week', value: '567' },
                    { label: 'Successful Placements', value: '20k+' },
                    { label: 'Interview added last week', value: '67' },
                    { label: 'Active Enrolment', value: '1,20,000' },
                    { label: 'Interviews added', value: '2454' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-sm mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{stat.label}</p>
                      <p className="text-2xl font-light text-[#EB9161]">{stat.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="container mx-auto px-4 pt-8">
            <SearchBar />

            <div className="text-right mb-3">
              <Button variant="link" className="text-gray-800 hover:text-gray-600 hover:underline">View all</Button>
            </div>

            <JobListings />
          </div>
        </div>
      </main>
    </div>
  )
}