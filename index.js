const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Routes
const passwordRoutes = require('./routes/passwordRoutes');
const colorPaletteRoutes = require('./routes/colorPaletteRoutes');

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use('/password', passwordRoutes);
app.use('/color-palette', colorPaletteRoutes);

app.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`);
});