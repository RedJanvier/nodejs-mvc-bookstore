import { Router } from 'express';
import index from '../controllers/index';
import { redirectDashboard, redirectLogin } from '../config/check-auth';

const router = Router();

router.get('/', redirectDashboard, index.index);
router.get('/dashboard', redirectLogin, index.dashboard);

export default router;