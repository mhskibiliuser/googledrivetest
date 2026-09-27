const { addRecentSearch } = require('../../database');

function logSearches(req, res, next) {
    if (req.path === '/api/search' && req.query.query) {
        addRecentSearch(req.query.query);
    }
    next();
}

module.exports = logSearches;
