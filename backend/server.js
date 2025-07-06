const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Import route files
const userRoutes = require('./route/userRoutes');
const registerRoutes = require('./route/registerRoutes');
const signRoutes = require('./route/signRoutes');
const attendanceRoutes = require('./route/attendanceRoutes');

// Connect to MongoDB
require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/sign', signRoutes);
app.use('/api/attendance', attendanceRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});