const authMiddleware = require('../middleware/authMiddleware');
const Comment = require('../models/Comment');
const Post = require('../models/Post');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();
const upload = multer();

/**
 * @swagger
 * /comment:
 *   get:
 *     summary: Retrieves all comments for a specific post
 *     parameters:
 *       - in: query
 *         name: post
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: The list of comments
 */
router.get('/', upload.none(), authMiddleware, async (req, res) => {
    const {post} = req.query;

    if (!post) {
        return res.status(400).send('Post id is required');
    }

    const postExists = await Post.findByPk(post);

    if (!postExists) {
        return res.status(404).send('Post not found');
    }

    const comments = await Comment.findAll({where: {post}});

    res.json(comments);
});

/**
 * @swagger
 * /comment:
 *   post:
 *     summary: Add a comment to a post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               post:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 */
router.post('/', upload.none(), authMiddleware, async (req, res) => {
    const {post, text} = req.body;
    const user = req.user.username;

    if (!user || !post) {
        return res.status(400).send('Post id is required and you must be logged in');
    }

    const postExists = await Post.findByPk(post);

    if (!postExists) {
        return res.status(404).send('Post not found');
    }

    const comment = await Comment.create({
        post,
        user,
        text,
        created: new Date(),
        last_modified: new Date()
    });

    res.status(201).send('Comment added successfully');
});

/**
 * @swagger
 * /comment:
 *   put:
 *     summary: Update a comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment updated successfully
 */
router.put('/', upload.none(), authMiddleware, async (req, res) => {
    const {id, text} = req.body;
    const user = req.user.username;

    if (!user || !id) {
        return res.status(400).send('Comment id is required and you must be logged in');
    }

    if (!text) {
        return res.status(400).send('Text is required');
    }

    const comment = await Comment.findOne({where: {comment_id: id, user}});

    if (!comment) {
        return res.status(404).send('Comment not found');
    }

    comment.text = text;
    comment.last_modified = new Date();

    await comment.save();

    res.status(200).send('Comment updated successfully');
});

/**
 * @swagger
 * /comment:
 *   delete:
 *     summary: Delete a comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 */
router.delete('/', upload.none(), authMiddleware, async (req, res) => {
    const {id} = req.body;
    const user = req.user.username;

    if (!user || !id) {
        return res.status(400).send('Comment id is required and you must be logged in');
    }

    const comment = await Comment.findOne({where: {comment_id: id, user}});

    if (!comment) {
        return res.status(404).send('Comment not found');
    }

    await comment.destroy();

    res.status(200).send('Comment deleted successfully');
});

module.exports = router;
