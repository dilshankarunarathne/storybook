const multer = require('multer');
const express = require('express');
const path = require('path');
const fs = require('fs');

const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const {Op} = require("sequelize");

const router = express.Router();

const upload = multer({ storage: storage });


router.get('/', authMiddleware, async (req, res) => {
    const username = req.user.username;

    const user = await User.findOne({ where: { username } });

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.json(user);
});


router.post('/', upload.none(), authMiddleware, async (req, res) => {
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


router.put('/', upload.single('profile_picture'), authMiddleware, async (req, res) => {
    const { first_name, last_name, dob, bio } = req.body;
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

    if (req.file) {
        userRecord.profile_picture = fs.readFileSync(req.file.path);
        fs.unlinkSync(req.file.path);
    }

    await userRecord.save();

    res.status(200).send('Profile updated successfully');
});

module.exports = router;
