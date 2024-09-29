import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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

export function JobCard({
  company,
  logoUrl,
  position,
  requirements,
  skills,
  trainedLastWeek
}: JobCardProps) {
  return (
    <Card className="bg-white text-gray-800">
      <CardHeader className="flex flex-row items-center space-x-2">
        <Image src={logoUrl} alt={`${company} logo`} width={24} height={24} />
        <h3 className="font-bold">{company}</h3>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">{position}</p>
        {requirements.map((req, index) => (
          <p key={index} className="text-sm text-gray-600">{req}</p>
        ))}
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{trainedLastWeek} Trained last week</p>
        <Button>Practice Interview</Button>
      </CardFooter>
    </Card>
  )
}