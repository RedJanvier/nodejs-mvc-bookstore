const express = require('express');
const user = require('../controllers/users');
const { redirectDashboard, redirectLogin } = require('../config/check-auth');

const router = express.Router();

// REGISTER ROUTES
router.get('/register', redirectDashboard, user.render_register);
router.post('/register', redirectDashboard, user.register);

// LOGIN ROUTES
router.get('/login', redirectDashboard, user.render_login);
router.post('/login', redirectDashboard, user.login);
// LOGOUT
router.post('/logout', redirectLogin, user.logout);

module.exports = router;
