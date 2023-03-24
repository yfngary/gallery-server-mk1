const express = require('express');

const server = express();
const artRouter = require('./art/router');

server.use(express.json());
server.use('/art', artRouter);

server.use('*', (req, res, next) => {
    res.status(200).json({api: 'up'})
});

module.exports = server