'use strict';

const JwtStrategy = require('passport-jwt').Strategy,
			ExtractJwt = require('passport-jwt').ExtractJwt,
			User = require('../api/user/user.model');

const _passport = function (passport) {
	const secret = 'beDragons';
	const options = {};

	options.jwtFromRequest = ExtractJwt.fromAuthHeader();
  options.secretOrKey = secret;

	passport.use(new JwtStrategy(options, function (jwt_payload, done) {
		User.findOne({ id: jwt_payload.id }, function (err, user) {
			if (err) {
				return done(err, false);
			}

			if (user) {
				done(null, user);
			} else {
				done(null, false);
			}
		});
	}));
};

module.exports = _passport;
