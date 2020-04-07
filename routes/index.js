import { Router } from 'express';
import users from './users';
import index from '../controllers/index';
import { redirectDashboard, redirectLogin } from '../config/check-auth';

const router = Router();

router.use('/users', users);
router.route('/').get(redirectDashboard, index.index);
router.route('/dashboard').get(redirectLogin, index.dashboard);

export default router;
