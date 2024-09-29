import React from 'react';
import { JobCard } from "@/components/cards/job-card"

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
];

export const JobListings = () => {
  return (
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
  );
};