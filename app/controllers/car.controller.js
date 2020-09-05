'use strict';

const Car = require('../models/car.model');

exports.create = (req, res) => {
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: 'Please provide all required field' });
    return;
  }

  const car = new Car(req.body);

  Car.create(car, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json({
        error: false,
        message: 'Car added successfully!',
        data: data,
      });
    }
  });
};

exports.findAll = (req, res) => {
  Car.findAll((err, data) => {
    console.log('controller');
    if (err) {
      res.status(400).json(err);
    } else {
      console.log('data: ', data);
      res.status(200).json(data);
    }
  });
};

exports.findById = (req, res) => {
  Car.findById(req.params.id, (err, data) => {
    console.log('controller');
    if (err) {
      res.status(400).json(err);
    } else {
      console.log('data: ', data);
      res.status(200).json(data);
    }
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: 'Please provide all required field' });
    return;
  }

  const car = new Car(req.body);
  const id = req.params.id;
  console.log('car: ', car);
  console.log('id: ', id);
  Car.update(id, car, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res
        .status(200)
        .json({ error: false, message: 'Car successfully updated' });
    }
  });
};

// to update stock
exports.patch = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: 'Please provide all required field' });
    return;
  }

  const car = {
    stock: req.body.stock,
  };
  const id = req.params.id;
  console.log('car: ', car);
  console.log('id: ', id);
  Car.patch(id, car, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res
        .status(200)
        .json({ error: false, message: 'Car successfully updated' });
    }
  });
};
