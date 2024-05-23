const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
