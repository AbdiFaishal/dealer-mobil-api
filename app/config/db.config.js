'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kmzway87AA4ncurb6t!',
  database: 'dealer_mobil',
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = dbConn;
