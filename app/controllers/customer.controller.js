"use strict";

const Customer = require("../models/customer.model");

exports.create = (req, res) => {
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please prodive all required field" });
    return;
  }

  const customer = new Customer(req.body);

  Customer.create(customer, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        error: false,
        message: "Customer added successfully!",
        data: data,
      });
    }
  });
};
