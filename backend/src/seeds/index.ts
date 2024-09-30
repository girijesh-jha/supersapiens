// src/seeds/index.ts

import { connectToDatabase, disconnectFromDatabase } from '../config/database';
import { seedIndustries } from './industrySeeds';
import { seedCompanies } from './companySeeds';
import { seedJobs } from './jobSeeds';
import { getNextVersion } from '../utils/versionUtil';

export const seedDatabase = async () => {
  try {
    await connectToDatabase();
    
    console.log('Starting database seeding...');
    
    const industryVersion = await getNextVersion('industries');
    await seedIndustries(industryVersion);
    console.log(`Industries seeded successfully (version ${industryVersion})`);
    
    const companyVersion = await getNextVersion('companies');
    await seedCompanies(companyVersion);
    console.log(`Companies seeded successfully (version ${companyVersion})`);
    
    const jobVersion = await getNextVersion('jobs');
    await seedJobs(jobVersion);
    console.log(`Jobs seeded successfully (version ${jobVersion})`);
    
    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await disconnectFromDatabase();
  }
};

if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}