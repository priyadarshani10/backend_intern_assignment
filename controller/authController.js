// src/controllers/authController.js
const express = require('express');
const router = express.Router();
const { registerUser, requestOTP, verifyOTP } = require('../middleware/authMiddleware');

// User Registration
router.post('/register', registerUser);

// Request OTP
router.post('/request-otp', requestOTP);

// Verify OTP
router.post('/verify-otp', verifyOTP);

module.exports = router;
