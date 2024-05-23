const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

const multer = require('multer');
const express = require('express');
const {Op} = require("sequelize");

const router = express.Router();
const upload = multer();

router.get('/', upload.none(), authMiddleware, async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).send('Username is required');
  }

  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.json(user);
});

module.exports = router;
