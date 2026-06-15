const db = require('./dbConnection.js');


const insertRefreshToken = async (userId, token, expiryDate) => {
    await db.query('INSERT INTO refresh_token (user_id, token, expiry_date, active) VALUES ($1, $2, $3, true)', [userId, token, expiryDate]);
}

module.exports = insertRefreshToken;