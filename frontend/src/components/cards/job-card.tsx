import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface JobCardProps {
  company: string
  logoUrl: string
  position: string
  requirements: string[]
  skills: string[]
  trainedLastWeek: number
}

export const JobCard: React.FC<JobCardProps> = ({
  company,
  logoUrl,
  position,
  requirements,
  skills,
  trainedLastWeek
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Image
            src={logoUrl}
            alt={`${company} logo`}
            width={40}
            height={40}
            className="rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold text-lg">{company}</h3>
            <p className="text-gray-600">{position}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">{trainedLastWeek}</span> trained last week
          </p>
          <Button variant="outline">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}
