import Company from '../models/companyModel';
import Industry from '../models/industryModel';

const companies = [
  {
    companyName: 'TechCorp',
    companyLogo: 'https://example.com/techcorp-logo.png',
    companyDescription: 'A leading technology company specializing in innovative software solutions.',
    companyIndustrySlug: 'technology',
    companyWebsite: 'https://techcorp.com',
    companyFoundedYear: 2010,
    companyHeadquarters: 'San Francisco, CA',
    companySize: '201-500',
    companySocialMedia: {
      companyLinkedin: 'https://linkedin.com/company/techcorp',
      companyTwitter: 'https://twitter.com/techcorp',
    },
    companySlug: 'techcorp',
    companyCulture: 'We value innovation, collaboration, and continuous learning.',
    companyBenefits: 'Competitive salary, health insurance, 401(k) matching, and flexible work hours.',
  },
  // Add more companies as needed
];

export const seedCompanies = async (version: string): Promise<void> => {
  try {
    console.log(`Seeding companies (version ${version})...`);

    for (const company of companies) {
      const industry = await Industry.findOne({ industrySlug: company.companyIndustrySlug });
      if (!industry) {
        throw new Error(`Industry not found for slug: ${company.companyIndustrySlug}`);
      }

      const { companyIndustrySlug, ...companyData } = company;

      await Company.findOneAndUpdate(
        { companySlug: company.companySlug },
        { ...companyData, companyIndustry: industry._id, seedVersion: version },
        { upsert: true, new: true }
      );
      console.log(`Upserted company: ${company.companyName}`);
    }

    console.log('Company seeding completed');
  } catch (error) {
    console.error('Error seeding companies:', error);
    throw error;
  }
};