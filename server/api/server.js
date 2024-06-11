const express = require('express');
const helmet = require('helmet');
const cors = require('cors');



const server = express();

// middleware
server.use(helmet());
server.use(express.json());
server.use(cors());



server.get('/', (req, res) => {
    res.json({ api: 'server up' });
});
  
server.use(function(req, res) {
    res.status(404).send('Page does not exist')
});

module.exports = server;