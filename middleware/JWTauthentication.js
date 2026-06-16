require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWTauthentication = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Authorization header:', authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log('Token from header:', token);
    if (token === null) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        console.log('Decoded user from token:', user);
        req.user = user;
    });
    next();
}

module.exports = JWTauthentication;