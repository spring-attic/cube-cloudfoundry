var cube,options, server;

cube = require('cube');

options = {
	'mongo-host': 'localhost',
	'mongo-port': 27017,
	'mongo-database': 'db',
	'mongo-username': null,
	'mongo-password': null,
	'http-port': 8001,
	'udp-port': null
};

server = cube.server(options);
server.register = function(db, endpoints) {
	cube.evaluator.register(db, endpoints);
	cube.collector.register(db, endpoints);
};

server.start();
