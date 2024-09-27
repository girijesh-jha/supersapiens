import Company from '../models/companyModel';

export const seedCompanies = async () => {
  const companies = [
    {
      companyName: 'Tech Corp',
      companyLogo: 'https://example.com/tech-corp-logo.png',
      companyDescription: 'A leading technology company',
      companyIndustry: 'Technology',
      companyWebsite: 'https://example.com/tech-corp',
      companyFoundedYear: 2000,
      companyHeadquarters: 'San Francisco, CA',
      companySize: '1000+',
      companySocialMedia: {
        companyLinkedin: 'https://linkedin.com/company/tech-corp',
        companyTwitter: 'https://twitter.com/tech_corp',
        companyFacebook: 'https://facebook.com/tech-corp'
      },
      companySlug: 'tech-corp',
      companyCulture: 'Innovative and dynamic',
      companyBenefits: 'Flexible work hours, remote work options'
    },
    {
      companyName: 'Healthcare Inc',
      companyLogo: 'https://example.com/healthcare-inc-logo.png',
      companyDescription: 'A leading healthcare provider',
      companyIndustry: 'Healthcare',
      companyWebsite: 'https://example.com/healthcare-inc',
      companyFoundedYear: 1985,
      companyHeadquarters: 'New York, NY',
      companySize: '501-1000',
      companySocialMedia: {
        companyLinkedin: 'https://linkedin.com/company/healthcare-inc',
        companyTwitter: 'https://twitter.com/healthcare_inc',
        companyFacebook: 'https://facebook.com/healthcare-inc'
      },
      companySlug: 'healthcare-inc',
      companyCulture: 'Patient-centered',
      companyBenefits: 'Healthcare insurance, retirement benefits'
    },
    {
      companyName: 'Finance Co',
      companyLogo: 'https://example.com/finance-co-logo.png',
      companyDescription: 'A leading financial services company',
      companyIndustry: 'Finance',
      companyWebsite: 'https://example.com/finance-co',
      companyFoundedYear: 1990,
      companyHeadquarters: 'London, UK',
      companySize: '201-500',
      companySocialMedia: {
        companyLinkedin: 'https://linkedin.com/company/finance-co',
        companyTwitter: 'https://twitter.com/finance_co',
        companyFacebook: 'https://facebook.com/finance-co'
      },
      companySlug: 'finance-co',
      companyCulture: 'Professional and structured',
      companyBenefits: 'Pension plan, health insurance'
    },
    {
      companyName: 'Education Ltd',
      companyLogo: 'https://example.com/education-ltd-logo.png',
      companyDescription: 'A leading education provider',
      companyIndustry: 'Education',
      companyWebsite: 'https://example.com/education-ltd',
      companyFoundedYear: 1970,
      companyHeadquarters: 'Paris, France',
      companySize: '11-50',
      companySocialMedia: {
        companyLinkedin: 'https://linkedin.com/company/education-ltd',
        companyTwitter: 'https://twitter.com/education_ltd',
        companyFacebook: 'https://facebook.com/education-ltd'
      },
      companySlug: 'education-ltd',
      companyCulture: 'Educational and supportive',
      companyBenefits: 'Pension plan, health insurance'
    },
    {
      companyName: 'Retail Ltd',
      companyLogo: 'https://example.com/retail-ltd-logo.png',
      companyDescription: 'A leading retail store',
      companyIndustry: 'Retail',
      companyWebsite: 'https://example.com/retail-ltd',
      companyFoundedYear: 1960,
      companyHeadquarters: 'Tokyo, Japan',
      companySize: '1-10',
      companySocialMedia: {
        companyLinkedin: 'https://linkedin.com/company/retail-ltd',
        companyTwitter: 'https://twitter.com/retail_ltd',
        companyFacebook: 'https://facebook.com/retail-ltd'
      },
      companySlug: 'retail-ltd',
      companyCulture: 'Customer-focused',
      companyBenefits: 'Pension plan, health insurance'
    }
  ];

  await Company.insertMany(companies);
};