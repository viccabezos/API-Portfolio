const express = require('express');

const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/', controller.post);
router.get('/:id/formations', controller.getFormation);
router.get('/:id/companies', controller.getCompany);

module.exports = router;
