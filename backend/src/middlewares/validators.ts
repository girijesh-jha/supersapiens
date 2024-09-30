// src/middlewares/validators.ts

import { Request, Response, NextFunction } from 'express';

export const validateIndustryInput = (req: Request, res: Response, next: NextFunction) => {
  const { industryName, industryDescription, industrySlug } = req.body;
  
  if (!industryName || !industryDescription || !industrySlug) {
    return res.status(400).json({ message: 'Missing required fields for industry' });
  }
  
  next();
};

export const validateCompanyInput = (req: Request, res: Response, next: NextFunction) => {
  const { companyName, companyDescription, companyIndustry, companyWebsite, companyFoundedYear } = req.body;
  
  if (!companyName || !companyDescription || !companyIndustry || !companyWebsite || !companyFoundedYear) {
    return res.status(400).json({ message: 'Missing required fields for company' });
  }
  
  next();
};

export const validateJobInput = (req: Request, res: Response, next: NextFunction) => {
  const { jobTitle, jobDescription, jobCompany, jobType, jobLocation } = req.body;
  
  if (!jobTitle || !jobDescription || !jobCompany || !jobType || !jobLocation) {
    return res.status(400).json({ message: 'Missing required fields for job' });
  }
  
  next();
};