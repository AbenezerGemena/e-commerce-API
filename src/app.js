require('dotenv').config();

const express = require('express');
const dbRoutes = require('./routes/dbRoutes');
const authRoute = require('./routes/authRoute.js');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', dbRoutes);
app.use('/api/auth', authRoute);

module.exports = app;
