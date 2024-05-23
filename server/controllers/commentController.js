const authMiddleware = require('../middleware/authMiddleware');
const Comment = require('../models/Comment');
const Post = require('../models/Post');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();
const upload = multer();



module.exports = router;
