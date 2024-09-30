// src/routes/index.ts

import express from 'express';
import industryRoutes from './industryRoutes';
import companyRoutes from './companyRoutes';
import jobRoutes from './jobRoutes';

const router = express.Router();

router.use('/industries', industryRoutes);
router.use('/companies', companyRoutes);
router.use('/jobs', jobRoutes);

export default router;