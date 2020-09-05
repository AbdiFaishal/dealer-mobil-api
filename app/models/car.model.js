'use strict';

const dbConn = require('../config/db.config');

// Motorcycle/product model
const Car = function (car) {
  this.name = car.name;
  this.brand_id = car.brand_id;
  this.image = car.image;
  this.color = car.color;
  this.description = car.description;
  this.stock = car.stock;
};

Car.findAll = (result) => {
  dbConn.query('SELECT * FROM cars', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log('cars: ', res);
      result(null, res);
    }
  });
};

Car.findById = (id, result) => {
  dbConn.query('SELECT * FROM cars WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// Add Product
Car.create = (newCar, result) => {
  console.log('new car: ', newCar);
  const values = [
    [
      newCar.name,
      newCar.brand_id,
      newCar.image,
      newCar.color,
      newCar.description,
      newCar.stock,
    ],
  ];
  dbConn.query(
    'INSERT INTO cars (name, brand_id, image, color, description, stock) VALUES ?',
    [values],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
      }
      console.log(res.insertId);
      result(null, res.insertId);
    }
  );
};

Car.update = (id, newCar, result) => {
  console.log('new car: ', newCar);
  dbConn.query('UPDATE cars SET ? WHERE id = ?', [newCar, id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// Update car stock after user bought the car
Car.patch = (id, newCar, result) => {
  dbConn.query('UPDATE cars SET ? WHERE id = ?', [newCar, id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Car;
