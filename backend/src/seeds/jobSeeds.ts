import Job from '../models/jobModel';

export const seedJobs = async () => {
  const jobs = [
    {
      jobTitle: 'Software Engineer',
      jobDescription: 'Develop and maintain software applications',
      jobResponsibilities: 'Design, develop, and test software applications',
      jobRequirements: 'Bachelor\'s degree in Computer Science',
      jobLocation: 'San Francisco, CA',
      jobSkills: 'JavaScript, Python, SQL',
      jobCompany: 'Tech Corp',
      jobSalaryRange: { min: 80000, max: 120000, currency: 'USD' },
      jobType: 'Full-time',
      jobRemoteOption: 'Remote',
      jobApplicationDeadline: new Date('2024-06-30'),
      jobOpenings: 2,
      jobStatus: 'Open'
    },
    {
      jobTitle: 'Data Analyst',
      jobDescription: 'Analyze data to provide insights and support decision-making',
      jobResponsibilities: 'Collect, process, and analyze data to provide insights',
      jobRequirements: 'Bachelor\'s degree in Statistics or related field',
      jobLocation: 'New York, NY',
      jobSkills: 'SQL, R, Python',
      jobCompany: 'Data Insights',
      jobSalaryRange: { min: 70000, max: 110000, currency: 'USD' },
      jobType: 'Part-time',
      jobRemoteOption: 'Hybrid',
      jobApplicationDeadline: new Date('2024-07-15'),
      jobOpenings: 1,
      jobStatus: 'Open'
    },
    {
      jobCompany: 'Data Insights',
      jobTitle: 'Marketing Manager',
      jobDescription: 'Develop and implement marketing strategies',
      jobResponsibilities: 'Plan, organize, and direct marketing activities',
      jobRequirements: 'Bachelor\'s degree in Marketing',
      jobLocation: 'London, UK',
      jobSkills: 'SEO, SEM, Social Media',
      jobSalaryRange: { min: 60000, max: 90000, currency: 'GBP' },
      jobType: 'Contract',
      jobRemoteOption: 'On-site',
      jobApplicationDeadline: new Date('2024-08-01'),
      jobOpenings: 3,
      jobStatus: 'Open'
    },
    {
      jobCompany: 'Data Insights',
      jobTitle: 'Marketing Manager',
      jobDescription: 'Develop and implement marketing strategies',
      jobResponsibilities: 'Plan, organize, and direct marketing activities',
      jobRequirements: 'Bachelor\'s degree in Marketing',
      jobLocation: 'London, UK',
      jobSkills: 'SEO, SEM, Social Media',
      jobSalaryRange: { min: 60000, max: 90000, currency: 'GBP' },
      jobType: 'Contract',
      jobRemoteOption: 'On-site',
      jobApplicationDeadline: new Date('2024-08-01'),
      jobOpenings: 3,
      jobStatus: 'Open'
    },
    {
      jobCompany: 'Data Insights',
      jobTitle: 'Marketing Manager',
      jobDescription: 'Develop and implement marketing strategies',
      jobResponsibilities: 'Plan, organize, and direct marketing activities',
      jobRequirements: 'Bachelor\'s degree in Marketing',
      jobLocation: 'London, UK',
      jobSkills: 'SEO, SEM, Social Media',
      jobSalaryRange: { min: 60000, max: 90000, currency: 'GBP' },
      jobType: 'Contract',
      jobRemoteOption: 'On-site',
      jobApplicationDeadline: new Date('2024-08-01'),
      jobOpenings: 3,
      jobStatus: 'Open'
    },
    {
      jobCompany: 'Data Insights',
      jobTitle: 'Marketing Manager',
      jobDescription: 'Develop and implement marketing strategies',
      jobResponsibilities: 'Plan, organize, and direct marketing activities',
      jobRequirements: 'Bachelor\'s degree in Marketing',
      jobLocation: 'London, UK',
      jobSkills: 'SEO, SEM, Social Media',
      jobSalaryRange: { min: 60000, max: 90000, currency: 'GBP' },
      jobType: 'Contract',
      jobRemoteOption: 'On-site',
      jobApplicationDeadline: new Date('2024-08-01'),
      jobOpenings: 3,
      jobStatus: 'Open'
    }
  ];

  await Job.insertMany(jobs);
};