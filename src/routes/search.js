const express = require('express');
const router = express.Router();
const combineData = require('../combineData');
const { addRecentSearch } = require('../database');
const { paginate } = require('../utils/pagination');

router.get('/', async (req, res, next) => {
    try {
        const query = req.query.query;
        const page = parseInt(req.query.page) || 1;
        const limit = 20;

        const data = await combineData(query);
        const { results, total, totalPages } = paginate(data, page, limit);

        addRecentSearch(query);

        res.json({
            results,
            total,
            page,
            totalPages
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
