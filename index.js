(function () {
  'use strict';

  var app = require('express')();
  var cors = require('cors');
  var http = require('http')
    .Server(app);
  var API_TOKEN = 'HNRO7R4NKRZrgbVf4JvhoeLY';

  app.use(cors());

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:1337');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

  app.post('/', function (req, res) {
    console.log(req.body);
    console.log('Received a hodor message!');
    res.send('Thanks!');
  });

  http.listen(process.env.PORT, function () {
    console.log('API server listening on *:' + process.env.PORT);
  });
})();