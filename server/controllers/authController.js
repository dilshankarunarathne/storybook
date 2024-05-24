const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('../models/User');
const sendEmail = require("../middleware/mailer");

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
  // sendEmail(
  //     'user@gmail.com',
  //     'please verify',
  //     '<b>here is the code...</b>'
  // );

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

router.get('/forgot', upload.none(), async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).send('Username is required');
  }

  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.status(404).send('User not found');
  }

  user.verificationCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  await user.save();

  // TODO: Send verification code to user via email
  // sendEmail(
  //     'user@gmail.com',
  //     'please verify',
  //     '<b>here is the code...</b>'
  // );

  res.status(200).send('Password reset code sent successfully');
});

router.post('/forgot', upload.none(), async (req, res) => {
  const { password } = req.body;
  const code = req.query.code;

  if (!password || !code) {
    return res.status(400).send('Password and verification code are required');
  }

  const user = await User.findOne({ where: { verificationCode: code } });

  if (!user) {
    return res.status(404).send('Invalid verification code');
  }

  user.hashed_password = await bcrypt.hash(password, 10);
  user.verificationCode = null;

  await user.save();

  res.status(200).send('Password reset successfully');
});

module.exports = router;
