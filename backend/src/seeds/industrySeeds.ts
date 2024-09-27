import Industry from '../models/industryModel';

export const seedIndustries = async () => {
  const industries = [
    { industryName: 'Technology', industryDescription: 'Companies in software, hardware, and IT services', industrySlug: 'technology' },
    { industryName: 'Healthcare', industryDescription: 'Medical services, pharmaceuticals, and biotechnology', industrySlug: 'healthcare' },
    { industryName: 'Finance', industryDescription: 'Banking, insurance, and financial services', industrySlug: 'finance' },
    { industryName: 'Education', industryDescription: 'Schools, universities, and educational services', industrySlug: 'education' },
    { industryName: 'Retail', industryDescription: 'Retail stores, e-commerce, and consumer goods', industrySlug: 'retail' },
    { industryName: 'Manufacturing', industryDescription: 'Automotive, aerospace, and machinery', industrySlug: 'manufacturing' },
    { industryName: 'Marketing', industryDescription: 'Advertising, marketing, and public relations', industrySlug: 'marketing' },
    { industryName: 'Real Estate', industryDescription: 'Real estate, construction, and property management', industrySlug: 'real-estate' },
    { industryName: 'Consulting', industryDescription: 'Management consulting, IT consulting, and professional services', industrySlug: 'consulting' },
    { industryName: 'Entertainment', industryDescription: 'Film, music, and entertainment production', industrySlug: 'entertainment' },
    // Add more industries as needed
  ];

  await Industry.insertMany(industries);
};