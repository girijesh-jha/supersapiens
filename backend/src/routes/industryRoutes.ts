// src/routes/industryRoutes.ts

import express from 'express';
import { 
  getAllIndustries, 
  getIndustryById, 
  createIndustry, 
  updateIndustry, 
  deleteIndustry 
} from '../controllers/industryController';
import { validateIndustryInput } from '../middlewares/validators';

const router = express.Router();

router.get('/', getAllIndustries);
router.get('/:id', getIndustryById);
router.post('/', validateIndustryInput, createIndustry);
router.put('/:id', validateIndustryInput, updateIndustry);
router.delete('/:id', deleteIndustry);

export default router;