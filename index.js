'use strict';

const {dialogflow} = require('actions-on-google');
const express = require('express');
const bodyParser = require('body-parser')
const express_app = express();

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Which type of response would you like to see next?');
});

express_app.use(bodyParser.urlencoded({ extended: true }));
express_app.use(bodyParser.json({type: 'application/json'}));
express_app.post('/', app);
express_app.listen(8080);
