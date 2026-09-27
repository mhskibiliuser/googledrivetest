function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
}

module.exports = errorHandler;
