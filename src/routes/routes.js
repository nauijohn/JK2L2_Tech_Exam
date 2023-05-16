const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getName);
router.post('/', controller.addName);
router.put('/:id', controller.editName);
router.delete('/:id', controller.deleteName);

module.exports = router;
