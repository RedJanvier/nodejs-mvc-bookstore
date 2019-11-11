const express = require('express');
const index = require('../controllers/index');
const { redirectDashboard, redirectLogin } = require('../config/check-auth');
const router = express.Router();



router.get('/', redirectDashboard, (req, res, next) => res.render('welcome'));
router.get('/dashboard', redirectLogin, index.addUsers, index.get);

module.exports = router;