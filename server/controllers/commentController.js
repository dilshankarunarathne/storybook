const authMiddleware = require('../middleware/authMiddleware');
const Comment = require('../models/Comment');
const Post = require('../models/Post');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();
const upload = multer();

router.get('/', upload.none(), authMiddleware, async (req, res) => {
    const { post } = req.body;

    if (!post) {
        return res.status(400).send('Post id is required');
    }

    const postExists = await Post.findByPk(post);

    if (!postExists) {
        return res.status(404).send('Post not found');
    }

    const comments = await Comment.findAll({ where: { post } });

    res.json(comments);
});

router.post('/', upload.none(), authMiddleware, async (req, res) => {
    const { post, text } = req.body;
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

router.put('/', upload.none(), authMiddleware, async (req, res) => {
    const { id, text } = req.body;
    const user = req.user.username;

    if (!user || !id) {
        return res.status(400).send('Comment id is required and you must be logged in');
    }

    if (!text) {
        return res.status(400).send('Text is required');
    }

    const comment = await Comment.findOne({ where: { comment_id: id, user } });

    if (!comment) {
        return res.status(404).send('Comment not found');
    }

    comment.text = text;
    comment.last_modified = new Date();

    await comment.save();

    res.status(200).send('Comment updated successfully');
});

router.delete('/', upload.none(), authMiddleware, async (req, res) => {
    const { id } = req.body;
    const user = req.user.username;

    if (!user || !id) {
        return res.status(400).send('Comment id is required and you must be logged in');
    }

    const comment = await Comment.findOne({ where: { comment_id: id, user } });

    if (!comment) {
        return res.status(404).send('Comment not found');
    }

    await comment.destroy();

    res.status(200).send('Comment deleted successfully');
});

module.exports = router;
