const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../vars');

const secret = jwtSecret;

function authenticate (req, res, next) {
    const token = req.headers.authorization;

    if(token){
        jwt.verify(token, secret, (error, decodedToken) => {
            if(error) {
                res.status(401).json({
                    message: 'Invalid Token'
                })
            } else {
                req.decodedToken = decodedToken
                next();
            }
        })
    } else {
        res.status(401).json({
            message: 'Please provide credentials to access this resource'
        })
    };
};

function generateToken(user) {
    const payload = {
        email: user.email,
        name: user.name,
        subject: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secret, options)
};

module.exports = {
    authenticate,
    generateToken
}