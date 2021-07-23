const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/companies', require('./company/routes'));
router.use('/formations', require('./formation/routes'));
router.use('/jobs', require('./job/routes'));
router.use('/projects', require('./project/routes'));
router.use('/stacks', require('./stack/routes'));
router.use('/pictures', require('./picture/routes'));

module.exports = router;
