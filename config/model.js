'use strict';

module.exports = function (Model, Schema) {
	const mongoose = require('mongoose');
	return mongoose.model(Model, Schema);
};
