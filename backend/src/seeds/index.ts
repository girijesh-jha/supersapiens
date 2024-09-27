import { seedIndustries } from './industrySeeds';
import { seedCompanies } from './companySeeds';
import { seedJobs } from './jobSeeds';

export const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...');
    
    await seedIndustries();
    console.log('Industries seeded successfully');
    
    await seedCompanies();
    console.log('Companies seeded successfully');
    
    await seedJobs();
    console.log('Jobs seeded successfully');
    
    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
};

// If you want to run the seeding process directly from this file
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}