const authMiddleware = require('../middleware/authMiddleware');

const express = require('express');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
    res.send('This is home');
});

module.exports = router;
