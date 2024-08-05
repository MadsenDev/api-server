const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Routes
const passwordRoutes = require('./routes/passwordRoutes');
const colorPaletteRoutes = require('./routes/colorPaletteRoutes');
const dinnerRoutes = require('./routes/dinnerRoutes');

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use('/password', passwordRoutes);
app.use('/color-palette', colorPaletteRoutes);
app.use('/dinner-suggestion', dinnerRoutes);

app.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`);
});