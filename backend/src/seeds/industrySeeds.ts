import Industry from '../models/industryModel';

const industries = [
  {
    industryName: 'Technology',
    industryDescription: 'Companies involved in the research, development, and distribution of technologically based goods and services.',
    industrySlug: 'technology'
  },
  {
    industryName: 'Healthcare',
    industryDescription: 'Organizations that provide medical services, manufacture medical equipment or drugs, provide medical insurance, or facilitate the provision of healthcare to patients.',
    industrySlug: 'healthcare'
  },
  // Add more industries as needed
];

export const seedIndustries = async (version: string): Promise<void> => {
  try {
    console.log(`Seeding industries (version ${version})...`);

    for (const industry of industries) {
      await Industry.findOneAndUpdate(
        { industrySlug: industry.industrySlug },
        { ...industry, seedVersion: version },
        { upsert: true, new: true }
      );
      console.log(`Upserted industry: ${industry.industryName}`);
    }

    console.log('Industry seeding completed');
  } catch (error) {
    console.error('Error seeding industries:', error);
    throw error;
  }
};