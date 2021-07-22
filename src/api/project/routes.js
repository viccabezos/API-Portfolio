const express = require('express');

const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/', controller.post);

module.exports = router;
