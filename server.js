﻿require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
// const create = require('timer/timer.service');
const timerService = require('./timer/timer.service');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
// app.use(jwt());s

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/article', require('./article/article.controller'));
app.use('/timer', require('./timer/timer.controller'));
// app.use(create);
// global error handler

app.use(errorHandler);
// timerService.create().then(r => r);
// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
