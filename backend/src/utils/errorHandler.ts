// src/utils/errorHandler.ts

import { Response } from 'express';
import { MongoError } from 'mongodb';

export const handleErrors = (res: Response, error: any) => {
  console.error('Error:', error);
  
  if (error instanceof MongoError) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Duplicate key error', error: error.message });
    }
    return res.status(500).json({ message: 'Database error', error: error.message });
  }
  
  if (error.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation error', error: error.message });
  }
  
  if (error.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid ID format', error: error.message });
  }
  
  res.status(500).json({ message: 'Internal server error', error: error.message });
};