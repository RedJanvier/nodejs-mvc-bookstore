const express = require('express');
const { addUsers } = require('../controllers/index');
const { handle_dashboard_get } = require('../controllers/index');
const { redirectDashboard, redirectLogin } = require('../config/check-auth');
const router = express.Router();



router.get('/', redirectDashboard, (req, res, next) => res.render('welcome'));
router.get('/dashboard', redirectLogin, addUsers, handle_dashboard_get);

module.exports = router;