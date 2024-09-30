// src/controllers/jobController.ts

import { Request, Response } from 'express';
import Job from '../models/jobModel';
import { handleErrors } from '../utils/errorHandler';

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find().populate('jobCompany');
    res.json(jobs);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await Job.findById(req.params.id).populate('jobCompany');
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const createJob = async (req: Request, res: Response) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(updatedJob);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    handleErrors(res, error);
  }
};