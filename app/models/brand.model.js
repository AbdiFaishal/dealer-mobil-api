'use strict';
const dbConn = require('../config/db.config');

// Brand model
const Brand = function (brand) {
  this.name = brand.name;
};

Brand.create = (newBrand, result) => {
  dbConn.query('INSERT INTO brand set ?', newBrand, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Brand;
