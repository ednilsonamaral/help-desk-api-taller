'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express'),
			app = express(),
			mongoose = require('mongoose'),
			bodyParser = require('body-parser'),
			morgan = require('morgan'),
			passport = require('passport'),
			jwt = require('jsonwebtoken');

require('./config/db');
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

const port = process.env.PORT || 8282;

require('./routes')(app);

app.listen(port, function () {
	console.log('Servidor rodando em http://localhost:' + port);
});

exports = module.exports = app;
