const db = require('../models/dbConnection.js');
const { v4: uuid } = require('uuid');
const insertRefreshToken = require('../models/refreshTokenModel.js');

const generateRefreshToken = (user) => {
    const token = uuid();
    const date = new Date(Date.now() + 6000);
    console.log("date: ", date);
    insertRefreshToken(user.id, token, date);
    return token;
}

module.exports = generateRefreshToken;