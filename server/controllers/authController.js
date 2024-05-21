const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('../models/User');

const router = express.Router();

const upload = multer();

router.post('/signup', upload.none(), async (req, res) => {
  const { username, password, email, firstName, lastName, dob } = req.body;

  if (!username || !password || !email || !firstName || !lastName || !dob) {
    return res.status(400).send('All fields are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    hashedPassword,
    email,
    firstName,
    lastName,
    dob
  });

  res.status(201).send('User registered successfully');
});

router.post('/login', upload.none(), async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (!user || !await bcrypt.compare(req.body.password, user.hashedPassword)) {
    return res.sendStatus(401);
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
  res.send({ token });
});

module.exports = router;
