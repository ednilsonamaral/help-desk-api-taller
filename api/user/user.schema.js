'use strict';

const mongoose = require('mongoose');

const _schema = {
	nome: { type: String, required: true },
	email: { type: String, lowercase: true, unique: true, required: true },
	password: { type: String, required: true },
	created: { type: String },
	updated: { type: String }
};

const UserSchema = new mongoose.Schema(_schema);

module.exports = UserSchema;
