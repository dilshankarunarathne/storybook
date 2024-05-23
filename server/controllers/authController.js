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

  const hashed_password = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    hashed_password,
    email,
    first_name,
    last_name,
    dob
  });

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

module.exports = router;
