const express = require('express');
const router = express.Router();
const user = require('../controllers/users');
const { redirectDashboard, redirectLogin } = require('../config/check-auth');

// REGISTER ROUTES
router.get('/register', redirectDashboard, user.render_register);
router.post('/register', redirectDashboard, user.register);

// LOGIN ROUTES
router.get('/login', redirectDashboard, user.render_login);
router.post('/login', redirectDashboard, user.login);
// LOGOUT 
router.post('/logout', redirectLogin, user.handle_logout_post);


module.exports = router;