const fs = require('fs');
const path = require('path');

const authMiddleware = require('../middleware/authMiddleware');
const Post = require('../models/Post');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {recursive: true});
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage: storage})

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieves all posts from users other than the logged in user
 *     responses:
 *       200:
 *         description: The list of posts
 */
router.get('/', authMiddleware, async (req, res) => {
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

/**
 * @swagger
 * /post:
 *   get:
 *     summary: Retrieves a specific post by id
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: The post data
 */
router.get('/post', upload.none(), async (req, res) => {
    const {id} = req.body;

    const post = await Post.findByPk(id);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    if (post.image) {
        // Convert the image Buffer to a base64 string
        const imageBase64 = Buffer.from(post.image.data).toString('base64');
        post.image = `data:image/jpeg;base64,${imageBase64}`;
    }

    res.json(post);
});

/**
 * @swagger
 * /post:
 *   post:
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Post created successfully
 */
router.post('/post', upload.single('image'), authMiddleware, async (req, res) => {
    const {text} = req.body;
    let image = null;

    if (req.file) {
        image = fs.readFileSync(req.file.path);
        fs.unlinkSync(req.file.path); // delete the file after reading it
    }

    if (!text) {
        return res.status(400).send('Text is required');
    }

    const post = await Post.create({
        text,
        image: image,
        user: req.user.username,
        created: new Date(),
        last_modified: new Date()
    });

    res.status(201).send('Post created successfully');
});

/**
 * @swagger
 * /post:
 *   put:
 *     summary: Update a post
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
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Post updated successfully
 */
router.put('/post', upload.none(), authMiddleware, async (req, res) => {
    const {id, text, image} = req.body;

    if (!id) {
        return res.status(400).send('Post id is required');
    }

    const post = await Post.findByPk(id);

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

/**
 * @swagger
 * /post:
 *   delete:
 *     summary: Delete a post
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
 *         description: Post deleted successfully
 */
router.delete('/post', upload.none(), authMiddleware, async (req, res) => {
    const {id} = req.body;

    if (!id) {
        return res.status(400).send('Post id is required');
    }

    const post = await Post.findByPk(id);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    await post.destroy();

    res.status(200).send('Post deleted successfully');
});

module.exports = router;
