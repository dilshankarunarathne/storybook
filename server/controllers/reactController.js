const authMiddleware = require('../middleware/authMiddleware');
const React = require('../models/React');
const Post = require('../models/Post');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();
const upload = multer();

/**
 * @swagger
 * /react:
 *   post:
 *     summary: Add a reaction to a post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               post:
 *                 type: string
 *     responses:
 *       201:
 *         description: React added successfully
 */
router.post('/', upload.none(), authMiddleware, async (req, res) => {
    const {post} = req.body;
    const user = req.user.username;

    if (!user || !post) {
        return res.status(400).send('Post id is required and you must be logged in');
    }

    const postExists = await Post.findByPk(post);

    if (!postExists) {
        return res.status(404).send('Post not found');
    }

    const react = await React.create({
        user,
        post
    });

    res.status(201).send('React added successfully');
});

/**
 * @swagger
 * /react:
 *   delete:
 *     summary: Remove a reaction from a post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               post:
 *                 type: string
 *     responses:
 *       200:
 *         description: React deleted successfully
 */
router.delete('/', upload.none(), authMiddleware, async (req, res) => {
    const {post} = req.body;
    const user = req.user.username;

    if (!user || !post) {
        return res.status(400).send('Post id is required and you must be logged in');
    }

    const react = await React.findOne({where: {user, post}});

    if (!react) {
        return res.status(404).send('React not found');
    }

    await react.destroy();

    res.status(200).send('React deleted successfully');
});

module.exports = router;
