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

router.put('/', upload.none(), authMiddleware, async (req, res) => {
  const { first_name, last_name, dob, bio, profile_picture } = req.body;
  const user = req.user.username;

  const userRecord = await User.findOne({ where: { username: user } });

  if (!userRecord) {
    return res.status(404).send('User not found');
  }

  if (first_name) {
    userRecord.first_name = first_name;
  }

  if (last_name) {
    userRecord.last_name = last_name;
  }

  if (dob) {
    userRecord.dob = dob;
  }

  if (bio) {
    userRecord.bio = bio;
  }

  if (profile_picture) {
    userRecord.profile_picture = profile_picture;
  }

  await userRecord.save();

  res.status(200).send('Profile updated successfully');
});

module.exports = router;
