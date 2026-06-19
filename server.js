const express = require('express');
const router = express.Router();
const cors = require('cors');
const userRoutes = require('./routes/user.js');
const contactRoutes = require('./routes/contact.js');
const corsOptions = require('./config/corsOptions');
const app = express();
const authRoutes = require('./routes/auth.js');
const refreshTokenRoutes = require('./routes/refreshToken.js');
const logoutRoutes = require('./routes/logout.js');

app.use(cors(corsOptions));
app.use(express.json());


app.use('/users', userRoutes);
app.use('/contacts', contactRoutes);
app.use('/auth', authRoutes);
app.use('/logout', logoutRoutes);
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use('/refreshToken', refreshTokenRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});