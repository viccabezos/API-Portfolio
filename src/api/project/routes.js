const express = require('express');

const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/', controller.post);
router.get('/:id/stacks', controller.getStacks);
router.get('/:id/images', controller.getPictures);

module.exports = router;
