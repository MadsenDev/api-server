const express = require('express');
const app = express();
const port = 3000;

// Routes
const passwordRoutes = require('./routes/passwordRoutes');
const colorPaletteRoutes = require('./routes/colorPaletteRoutes');

// Middleware
app.use('/password', passwordRoutes);
app.use('/color-palette', colorPaletteRoutes);

app.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`);
});