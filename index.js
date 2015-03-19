(function () {
  'use strict';

  var app = require('express')();
  var cors = require('cors');
  var bodyParser = require('body-parser');
  var http = require('http')
    .Server(app);

  app.use(cors());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:1337');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

  app.post('/', function (req, res) {
    console.log(req.body);
    console.log('Received a hodor message!');

    var punctuations = ['!', '!!', '?!', ' . . .'];

    var userName = req.body.user_name;
    var botPayload = {
      text: 'Hodor' + punctuations[Math.floor(Math.random() * punctuations.length)]
    };

    // avoid infinite loop
    if (userName !== 'slackbot') {
      return res.status(200)
        .json(botPayload);
    } else {
      return res.status(200)
        .end();
    }
  });

  http.listen(process.env.PORT, function () {
    console.log('API server listening on *:' + process.env.PORT);
  });
})();