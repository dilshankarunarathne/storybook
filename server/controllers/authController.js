const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('../models/User');

const router = express.Router();

const upload = multer();

router.post('/signup', upload.none(), async (req, res) => {
  const { username, password, email, first_name, last_name, dob } = req.body;

  if (!username || !password || !email || !first_name || !last_name || !dob) {
    return res.status(400).send('All fields are required');
  }

  const verificationCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const hashed_password = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    hashed_password,
    email,
    first_name,
    last_name,
    dob,
    verificationCode
  });

  // TODO: send verification email

  res.status(201).send('User registered successfully');
});

router.post('/login', upload.none(), async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });

  if (!user || !await bcrypt.compare(req.body.password, user.hashed_password)) {
    return res.sendStatus(401);
  }

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY);

  res.send({ token });
});

router.post('/verify', upload.none(), async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('Verification code is required');
  }

  const user = await User.findOne({ where: { verificationCode: code } });

  if (!user) {
    return res.status(404).send('Invalid verification code');
  }

  user.confirmed = true;
  user.verificationCode = null;

  await user.save();

  res.status(200).send('User confirmed successfully');
});

module.exports = router;
