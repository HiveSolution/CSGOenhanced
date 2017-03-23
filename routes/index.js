
module.exports = function (io) {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'CSGO Enhanced' });
  });

  router.post('/', function (req, res, next) {
    res.sendStatus(200);
    console.log("recieved gameData");
    var gameData = req.body;
    io.emit('gameData', gameData);
  });

  io.on('connection', function (socket) {
    console.log(new Date().getTime(), "a client has connected");
  });

  return router
};
