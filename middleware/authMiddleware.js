// authMiddleware.js
const { findByEmail, save } = require('../models/User');
const { sendOTP } = require('../utils/emailService');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

// Example function using JWT to sign a token
const signToken = (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

// User Registration
const registerUser = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  // Check if user already exists
  findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error.' });
    }
    if (user) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // Save new user
    save(email, (err, newUser) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to register user.' });
      }
      res.status(201).json({ message: 'Registration successful. Please verify your email.' });
    });
  });
};

// Request OTP
const requestOTP = (req, res) => {
  const { email } = req.body;

  // Find user by email
  findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error.' });
    }
    if (!user) {
      return res.status(404).json({ message: 'Email not registered.' });
    }

    // Generate OTP (mock: generate random 6-digit number)
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Mock email sending (print OTP)
    sendOTP(email, otp);

    return res.status(200).json({ message: 'OTP sent to your email.' });
  });
};

// Verify OTP and generate JWT token
const verifyOTP = (req, res) => {
  const { email, otp } = req.body;

  // Find user by email
  findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error.' });
    }
    if (!user) {
      return res.status(404).json({ message: 'Email not registered.' });
    }

    // Validate OTP (mock: check if OTP matches)
    // For demo, any 6-digit number is considered valid
    const isValidOTP = /^\d{6}$/.test(otp);
    if (!isValidOTP) {
      return res.status(400).json({ message: 'Invalid OTP format.' });
    }

    // Mock successful OTP verification
    if (otp !== '123456') { // Replace with your actual OTP verification logic
      return res.status(400).json({ message: 'Incorrect OTP.' });
    }

    // Generate JWT token using signToken function
    const token = signToken(email);

    return res.status(200).json({ message: 'Login successful.', token });
  });
};

module.exports = { registerUser, requestOTP, verifyOTP };



