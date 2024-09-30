import Job from "../models/jobModel";
import Company from "../models/companyModel";

const jobs = [
  {
    jobTitle: "Senior Software Engineer",
    jobDescription: "We are seeking a skilled Senior Software Engineer to join our development team.",
    jobResponsibilities: "Lead development projects, mentor junior developers, and contribute to system architecture.",
    jobRequirements: "Bachelor's degree in Computer Science, 5+ years of experience in software development, proficiency in JavaScript and Python.",
    jobLocation: "San Francisco, CA",
    jobSkills: "JavaScript, Python, React, Node.js, AWS",
    companySlug: "techcorp",
    jobSalaryRange: {
      min: 120000,
      max: 180000,
      currency: "USD"
    },
    jobType: "full-time",
    jobRemoteOption: "hybrid",
    jobApplicationDeadline: new Date("2024-12-31"),
    jobOpenings: 2,
    jobStatus: "open"
  },
  // Add more jobs as needed
];

export const seedJobs = async (version: string): Promise<void> => {
  try {
    console.log(`Seeding jobs (version ${version})...`);

    for (const job of jobs) {
      const company = await Company.findOne({ companySlug: job.companySlug });
      if (!company) {
        throw new Error(`Company not found for slug: ${job.companySlug}`);
      }

      const { companySlug, ...jobData } = job;

      await Job.findOneAndUpdate(
        { jobTitle: job.jobTitle, jobCompany: company._id },
        { ...jobData, jobCompany: company._id, seedVersion: version },
        { upsert: true, new: true }
      );
      console.log(`Upserted job: ${job.jobTitle} at ${company.companyName}`);
    }

    console.log("Job seeding completed");
  } catch (error) {
    console.error("Error seeding jobs:", error);
    throw error;
  }
};