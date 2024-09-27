import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
//import { Badge } from "@/components/ui/badge"
import { Search, User } from 'lucide-react'
import { JobCard } from "@/components/cards/job-card"


const SuperSapiensLogo = () => (
  <div className="flex items-center">
    <Image
      src="/images/logo.svg" 
      alt="SuperSapiens Logo" 
      width={48}  // Adjust based on your logo's actual dimensions
      height={48} // Adjust based on your logo's actual dimensions
      className="h-12 w-auto"
    />
  </div>
)

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#52B9B8]">
      <header className="flex justify-between items-center p-4 text-white">
        <SuperSapiensLogo />
        <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
          Login / Sign Up
          <User className="ml-2 h-4 w-4" />
        </Button>
      </header>

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
                <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-7"> {/* Increased padding from p-6 to p-7 */}
                  {[
                    { label: 'Interviews taken last Week', value: '567' },
                    { label: 'Successful Placements', value: '20k+' },
                    { label: 'Interview added last week', value: '67' },
                    { label: 'Active Enrolment', value: '1,20,000' },
                    { label: 'Interviews added', value: '2454' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-sm mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{stat.label}</p> {/* Changed from text-xs to text-sm */}
                      <p className="text-2xl font-light text-[#EB9161]">{stat.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="container mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="relative w-full md:w-[65%]">
                <Input 
                  type="text" 
                  placeholder="UI/UX product design job" 
                  className="w-full pl-10 pr-24 py-3 rounded-full text-gray-800 bg-white border-gray-300"
                  />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Button className="absolute right-0 top-0 bottom-0 px-6 rounded-r-full bg-[#5968F0] hover:bg-[#4A59E0] text-white">
                  Search
                </Button>
              </div>
            </div>

            <div className="text-right mb-3">
              <Button variant="link" className="text-gray-800 hover:text-gray-600 hover:underline">View all</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobData.map((job) => (
                <JobCard
                  key={job.company}
                  company={job.company}
                  logoUrl={job.logoUrl}
                  position={job.position}
                  requirements={job.requirements}
                  skills={job.skills}
                  trainedLastWeek={job.trainedLastWeek}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const jobData = [
  {
    company: "Figma",
    logoUrl: "/images/figma-logo.svg",
    position: "Product Designer",
    requirements: ["Fresh Graduate and above", "B.Des"],
    skills: ["UX Design", "UI Design", "Prototyping", "Figma"],
    trainedLastWeek: 344
  },
  {
    company: "Google",
    logoUrl: "/images/google-logo.svg",
    position: "UX Researcher",
    requirements: ["2+ years of experience", "Master's degree preferred"],
    skills: ["User Research", "Data Analysis", "Usability Testing"],
    trainedLastWeek: 287
  },
  {
    company: "Medium",
    logoUrl: "/images/medium-logo.svg",
    position: "UI Developer",
    requirements: ["3+ years of experience", "B.Tech/B.E. in Computer Science"],
    skills: ["React", "TypeScript", "CSS-in-JS", "Responsive Design"],
    trainedLastWeek: 412
  }
]