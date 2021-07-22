const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/companies', require('./company/routes'));
router.use('/formations', require('./formation/routes'));

module.exports = router;
