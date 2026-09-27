const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const logSearches = require('./src/middleware/logSearches');
const errorHandler = require('./src/middleware/errorHandler');

// Middleware to serve static files
app.use(express.static(__dirname));

// Middleware to log searches
app.use(logSearches);

// Routes
app.use('/api/search', require('./src/routes/search'));
app.use('/api/recent-searches', require('./src/routes/recentSearches'));
app.use('/api/error', require('./src/routes/error'));

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
