const express = require('express');
const app = express();
const cors = require('cors');

// const date = new Date();

// //YYYY-MM-DD format
// const mysqlDate = date.toISOString().split("T")[0];

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Video Streaming Abdi');
});

const customerRoutes = require('./app/routes/customer.routes');
const carRoutes = require('./app/routes/car.routes');
const brandRoutes = require('./app/routes/brand.routes');

app.use('/customer', customerRoutes);
app.use('/car', carRoutes);
app.use('/brand', brandRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
