const express = require('express');
const router = express.Router();

// Function to generate a random password
const generatePassword = (length, includeNumbers, includeSpecialChars, includeUppercase) => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let characters = lowercaseChars;

  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSpecialChars) {
    characters += specialChars;
  }
  if (includeUppercase) {
    characters += uppercaseChars;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
};

// Endpoint to generate a password
router.get('/', (req, res) => {
  const length = parseInt(req.query.length) || 12;
  const includeNumbers = req.query.includeNumbers === 'true';
  const includeSpecialChars = req.query.includeSpecialChars === 'true';
  const includeUppercase = req.query.includeUppercase === 'true';
  
  const password = generatePassword(length, includeNumbers, includeSpecialChars, includeUppercase);
  res.json({ password });
});

module.exports = router;