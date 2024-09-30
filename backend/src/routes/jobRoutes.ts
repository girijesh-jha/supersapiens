// src/routes/jobRoutes.ts

import express from 'express';
import { 
  getAllJobs, 
  getJobById, 
  createJob, 
  updateJob, 
  deleteJob 
} from '../controllers/jobController';
import { validateJobInput } from '../middlewares/validators';

const router = express.Router();

router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.post('/', validateJobInput, createJob);
router.put('/:id', validateJobInput, updateJob);
router.delete('/:id', deleteJob);

export default router;