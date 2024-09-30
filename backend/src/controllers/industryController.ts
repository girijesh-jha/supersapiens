// src/controllers/industryController.ts

import { Request, Response } from 'express';
import Industry from '../models/industryModel';
import { handleErrors } from '../utils/errorHandler';

export const getAllIndustries = async (req: Request, res: Response) => {
  try {
    const industries = await Industry.find();
    res.json(industries);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const getIndustryById = async (req: Request, res: Response) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json(industry);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const createIndustry = async (req: Request, res: Response) => {
  try {
    const newIndustry = new Industry(req.body);
    const savedIndustry = await newIndustry.save();
    res.status(201).json(savedIndustry);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateIndustry = async (req: Request, res: Response) => {
  try {
    const updatedIndustry = await Industry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedIndustry) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json(updatedIndustry);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const deleteIndustry = async (req: Request, res: Response) => {
  try {
    const deletedIndustry = await Industry.findByIdAndDelete(req.params.id);
    if (!deletedIndustry) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json({ message: 'Industry deleted successfully' });
  } catch (error) {
    handleErrors(res, error);
  }
};