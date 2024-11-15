const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes
const profileRoutes = require('./api/profile');
app.use('/api/profile', profileRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
