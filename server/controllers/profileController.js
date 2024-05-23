const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();
const upload = multer();



module.exports = router;
