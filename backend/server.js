 
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
    origin: 'http://localhost:5173', // or your frontend URL
    credentials: true
  }));

// Routes
app.use('/api/auth', authRoutes);
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route accessed' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
