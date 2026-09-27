const express = require('express');
const router = express.Router();
const { getRecentSearches } = require('../database');

router.get('/', (req, res) => {
    res.json(getRecentSearches());
});

module.exports = router;
