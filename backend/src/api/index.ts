import { Router } from 'express';
import test from './test';
import register from './register';

const router = Router();

router.use('/test', test);
router.use('/register', register);
export default router;
