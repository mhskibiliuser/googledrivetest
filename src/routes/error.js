const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(500).json({ error: 'An error occurred while processing your request.' });
});

module.exports = router;
