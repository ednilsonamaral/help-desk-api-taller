'use strict';

const path = require('path');

module.exports = function (app) {
	app.use('/api/tickets', require('./api/ticket'));

	app.route('/*').get(function (req, res) {
		res.json({ message: 'Rota não encontrada!' });
	});
};
