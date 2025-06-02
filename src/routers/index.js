const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const twoFaRoutes = require('./twofa.routes');

router.use('/auth', authRoutes);
router.use('/2fa', twoFaRoutes);

module.exports = router;