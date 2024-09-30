// src/utils/versionUtil.ts

import mongoose from 'mongoose';

// Define a schema for the version document
const versionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  version: { type: Number, required: true, default: 0 }
});

// Create a model from the schema
const VersionModel = mongoose.model('Version', versionSchema);

export const getNextVersion = async (collectionName: string): Promise<string> => {
  try {
    // Use findOneAndUpdate to atomically increment the version
    const result = await VersionModel.findOneAndUpdate(
      { name: collectionName },
      { $inc: { version: 0.1 } },
      { new: true, upsert: true }
    );

    // Return the new version as a string with one decimal place
    return result.version.toFixed(1);
  } catch (error) {
    console.error(`Error getting next version for ${collectionName}:`, error);
    throw error;
  }
};