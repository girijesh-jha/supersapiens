// src/config/database.ts

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export const disconnectFromDatabase = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
};