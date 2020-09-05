'use strict';

const Brand = require('../models/brand.model');

exports.create = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: 'Please provide all required field' });
    return;
  }

  const brand = new Brand(req.body);

  Brand.create(brand, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json({
        error: false,
        message: 'Brand added successfully!',
        data: data,
      });
    }
  });
};
