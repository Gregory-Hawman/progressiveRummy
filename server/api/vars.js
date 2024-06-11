require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    rounds: process.env.HASH_ROUNDS || 8,
    PORT: process.env.PORT || 5000,
};