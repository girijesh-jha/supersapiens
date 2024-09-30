// src/controllers/companyController.ts

import { Request, Response } from 'express';
import Company from '../models/companyModel';
import { handleErrors } from '../utils/errorHandler';

export const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.find().populate('companyIndustry');
    res.json(companies);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const getCompanyById = async (req: Request, res: Response) => {
  try {
    const company = await Company.findById(req.params.id).populate('companyIndustry');
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const createCompany = async (req: Request, res: Response) => {
  try {
    const newCompany = new Company(req.body);
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateCompany = async (req: Request, res: Response) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(updatedCompany);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const deleteCompany = async (req: Request, res: Response) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json({ message: 'Company deleted successfully' });
  } catch (error) {
    handleErrors(res, error);
  }
};