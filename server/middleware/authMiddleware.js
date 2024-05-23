const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
        if (err) return res.sendStatus(403);

        const dbUser = await User.findByPk(user.username);

        if (!dbUser.confirmed) {
            return res.status(403).send('User is not confirmed');
        }

        req.user = user;
        next();
    });
};
