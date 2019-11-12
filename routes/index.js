const express = require('express');
const index = require('../controllers/index');
const { redirectDashboard, redirectLogin } = require('../config/check-auth');

const router = express.Router();

router.get('/', redirectDashboard, index.index);
router.get('/dashboard', redirectLogin, index.dashboard);

module.exports = router;