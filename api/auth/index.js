'use strict';

const express = require('express'),
			controller = require('./auth.controller'),
			router = express.Router();

router.post('/', controller.auth);

module.exports = router;
