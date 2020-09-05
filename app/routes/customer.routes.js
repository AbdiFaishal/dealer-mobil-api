const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

// Create a new Customer
router.post("/", customerController.create);

module.exports = router;
