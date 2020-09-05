const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');

router.post('/', carController.create);
router.get('/', carController.findAll);
router.get('/:id', carController.findById);
// to update all value provided
router.put('/:id', carController.update);
// to update only the stock
router.patch('/:id', carController.patch);

module.exports = router;
