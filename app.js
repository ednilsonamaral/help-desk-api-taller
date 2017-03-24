'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express'),
			app = express(),
			bodyParser = require('body-parser');

require('./config/db');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8282;

require('./routes')(app);

app.listen(port, function () {
	console.log('Servidor rodando em http://localhost:' + port);
});

exports = module.exports = app;
