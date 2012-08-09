var cube, service, options, server;

cube = require('cube');

service = JSON.parse(process.env.VCAP_SERVICES)['mongodb-1.8'][0];
options = {
	'mongo-host': service.credentials.hostname,
	'mongo-port': service.credentials.port,
	'mongo-database': service.credentials.db,
	'mongo-username': service.credentials.username,
	'mongo-password': service.credentials.password,
	'http-port': parseInt(process.env.VCAP_APP_PORT),
	'udp-port': null
};

server = cube.server(options);
server.register = function(db, endpoints) {
	cube.evaluator.register(db, endpoints);
	cube.collector.register(db, endpoints);
};

server.start();
