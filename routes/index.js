import express from 'express';
import AuthRoutes from './authRoutes.js';
import AdminRoutes from './adminRoutes.js';

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/admin', AdminRoutes);

export default router;
