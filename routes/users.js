const express = require('express');
const router = express.Router();
const checkAuth = require('../config/check-auth');

// CONTROLLERS
const usersController = require('../controllers/users');

// REGISTER ROUTES
router.get('/register', checkAuth.redirectDashboard, usersController.handle_register_get);
router.post('/register', checkAuth.redirectDashboard, usersController.handle_register_post);

// LOGIN ROUTES
router.get('/login', checkAuth.redirectDashboard, usersController.handle_login_get);
router.post('/login', checkAuth.redirectDashboard, usersController.handle_login_post);
// LOGOUT 
router.post('/logout', checkAuth.redirectLogin, usersController.handle_logout_post);


module.exports = router;