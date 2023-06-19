const express = require('express');
const router = express.Router();

// Protected route
router.get('/', (req, res) => {
  res.json({ message: 'This is a protected route' });
});

module.exports = router;
