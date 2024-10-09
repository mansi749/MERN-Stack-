const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const transactionRoute = require('./routes/transactionRoute');
const statisticsRoute = require('./routes/statisticsRoute');
const barChartRoute = require('./routes/barChartRoute');
const pieChartRoute = require('./routes/pieChartRoute');


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', transactionRoute);
app.use('/api', statisticsRoute);
app.use('/api', barChartRoute);
app.use('/api', pieChartRoute);


// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
