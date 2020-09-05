'use strict';
const dbConn = require('../config/db.config');

// Customer model
const Customer = function (customer) {
  this.name = customer.name;
  this.email = customer.email;
  this.address = customer.address;
};

// Add Customer
Customer.create = (newCustomer, result) => {
  dbConn.query('INSERT INTO customer SET ?', newCustomer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    }
    console.log(res.insertId);
    result(null, res.insertId);
  });
};

module.exports = Customer;
