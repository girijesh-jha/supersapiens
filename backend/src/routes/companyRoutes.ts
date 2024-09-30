// src/routes/companyRoutes.ts

import express from 'express';
import { 
  getAllCompanies, 
  getCompanyById, 
  createCompany, 
  updateCompany, 
  deleteCompany 
} from '../controllers/companyController';
import { validateCompanyInput } from '../middlewares/validators';

const router = express.Router();

router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);
router.post('/', validateCompanyInput, createCompany);
router.put('/:id', validateCompanyInput, updateCompany);
router.delete('/:id', deleteCompany);

export default router;