const authMiddleware = require('../middleware/authMiddleware');
const Post = require('../models/Post');

const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();

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

module.exports = router;
