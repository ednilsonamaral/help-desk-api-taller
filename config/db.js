'use strict';

const mongoose = require('mongoose');
const databaseName = 'help-desk-taller';

mongoose.connect('mongodb://localhost/' + databaseName);

var db = mongoose.connection;

db.on('error', function (err) {
	console.log('Erro de conexao > ', err);
});

db.on('open', function () {
	console.log('Conexão aberta!');
});

db.on('connected', function (err) {
	console.log('Conectado no banco de dados: ', databaseName);
});

db.on('disconnected', function (err) {
	console.log('Desconectado, bye bye!');
});
