const authMiddleware = require('../middleware/authMiddleware');
const Post = require('../models/Post');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();
const upload = multer();

router.post('/', authMiddleware, async (req, res) => {
    const username = req.user.username;

    const posts = await Post.findAll({
        where: {
            user: {
                [Op.ne]: username
            }
        },
        order: [
            ['created', 'DESC']
        ]
    });
    res.json(posts);
});

router.post('/post', upload.none(), authMiddleware, async (req, res) => {
    const { text, image } = req.body;

    if (!text) {
        return res.status(400).send('Text is required');
    }

    const post = await Post.create({
        text,
        image: image || null,
        user: req.user.username,
        created: new Date(),
        last_modified: new Date()
    });

    res.status(201).send('Post created successfully');
});

router.put('/post', upload.none(), authMiddleware, async (req, res) => {
    const { post_id, text, image } = req.body;

    if (!post_id) {
        return res.status(400).send('Post id is required');
    }

    const post = await Post.findByPk(post_id);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    if (text) {
        post.text = text;
    }

    if (image) {
        post.image = image;
    }

    post.last_modified = new Date();

    await post.save();

    res.status(200).send('Post updated successfully');
});

router.delete('/post', upload.none(), authMiddleware, async (req, res) => {
    const { post_id } = req.body;

    if (!post_id) {
        return res.status(400).send('Post id is required');
    }

    const post = await Post.findByPk(post_id);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    await post.destroy();

    res.status(200).send('Post deleted successfully');
});

module.exports = router;
