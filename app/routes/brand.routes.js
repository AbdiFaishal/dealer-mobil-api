const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brand.controller");

// Create a new Customer
router.post("/", brandController.create);

module.exports = router;
