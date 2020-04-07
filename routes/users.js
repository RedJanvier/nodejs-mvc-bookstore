import express from 'express';
import * as user from '../controllers/users';
import { redirectDashboard, redirectLogin } from '../config/check-auth';

const router = express.Router();

// REGISTER ROUTES
router
  .route('/register')
  .get(redirectDashboard, user.renderRegister)
  .post(redirectDashboard, user.register);

// LOGIN ROUTES
router
  .route('/login')
  .get(redirectDashboard, user.renderLogin)
  .post(redirectDashboard, user.login);
// LOGOUT
router.route('/logout').post(redirectLogin, user.logout);

export default router;
