const invalidateTokenForUser = require('../models/refreshTokenModel').invalidateTokenForUser;
const { getUserByEmail } = require('./userController.js');

const logout = async (req, res) => {
    const { email } = req.body;
    const user = await getUserByEmail(email);
    console.log("user found for email: ", email, user);
    if(user === undefined || user === null || email === undefined) {
        res.clearCookie('refreshToken');
        console.log("user not found for email: ", email, user);
        res.sendStatus(204);
    }
    await invalidateTokenForUser(user.id);
    res.clearCookie('refreshToken');
    
    res.sendStatus(204);
}

module.exports = logout;