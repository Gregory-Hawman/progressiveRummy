const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { rounds } = require('../vars')

const Players = require('../models/playersModels');
const { generateToken } = require('../middleware/auth_middleware');

// === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === AUTH ROUTER === //

// AUTH API TEST
router.get('/', (req, res) => {
    res.json({
        api: '(.get api/auth) brings you here, use /api/auth/register or /api/auth/login to register a new player or login in a player.'
    })
});

// REGISTER (SIGN UP NEW USER)
router.post('/register', (req, res) => {
    const player = req.body;
    const hash = bcrypt.hashSync(player.password, rounds);
    player.password = hash;

    Players.addPlayers(player)
    .then(() => {
        const token = generateToken(player);
        res.status(201).json({ 
            message: 'Successful Registration',
            newPlayer: player,
            token: token
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Server Error occurred during registering', error });
    });
});

// LOGIN 
router.post('/login', (req, res) => {
    const { email_login, password_login } = req.body;
    Players.findPlayersBy('email', email_login)
        .then((player) => {
            if (player && bcrypt.compareSync(password_login, player.password)) {
                const token = generateToken(player);
                res.status(200).json({ 
                    message: `Welcome ${player.username}!`,
                    player: player,
                    token: token, 
                });
            } else {
                res.status(401).json({ 
                    message: 'Invalid username or password' 
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ 
                message: 'Server Error occurred during login',
                error: error.message 
            });
        });
});

module.exports = router