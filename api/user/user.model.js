'use strict';

const mongoose = require('mongoose'),
			UserSchema = require('./user.schema'),
			bcrypt = require('bcrypt'),
			_m = require('../../config/model');

UserSchema.pre('save', function (next) {
	const user = this;

	if (this.isModified('password') || this.isNew) {
		bcrypt.genSalt(10, function (err, salt) {
			if (err) {
				return next(err);
			}

			bcrypt.hash(user.password, salt, function (err, hash) {
				if (err) {
					return next(err);
				}

				user.password = hash;
				next();
			});
		});
	} else {
		return next();
	}
});

UserSchema.methods.comparePassword = function (pw, cb) {
	bcrypt.compare(pw, this.password, function (err, isMatch) {
		if (err) {
			return cb(err);
		}

		cb(null, isMatch);
	});
};

const model = _m('User', UserSchema);

module.exports = model;
