// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://fixmyfit-com-2.onrender.com'],
    credentials: true
}));

// 🔹 Root Route
app.get('/', (req, res) => {
  res.send('Welcome to fixmyfit.com backend!');
});

// 🔹 Health Route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// 🔹 Auth Routes
app.use('/api/auth', authRoutes);

// 🔹 Protected Route
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route accessed' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
