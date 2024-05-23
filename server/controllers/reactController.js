const authMiddleware = require('../middleware/authMiddleware');
const React = require('../models/React');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();
const upload = multer();

router.post('/', upload.none(), authMiddleware, async (req, res) => {
    const { post } = req.body;
    const user = req.user.username;

    if (!user || !post) {
        return res.status(400).send('Post id is required and you must be logged in');
    }

    const react = await React.create({
        user,
        post
    });

    res.status(201).send('React added successfully');
});

router.delete('/', upload.none(), authMiddleware, async (req, res) => {
    const { post } = req.body;
    const user = req.user.username;

    if (!user || !post) {
        return res.status(400).send('Post id is required and you must be logged in');
    }

    const react = await React.findOne({ where: { user, post } });

    if (!react) {
        return res.status(404).send('React not found');
    }

    await react.destroy();

    res.status(200).send('React deleted successfully');
});

module.exports = router;
