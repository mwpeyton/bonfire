var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 8080 });

server.start(function(){
	console.log('server running on ' + server.info.uri);
});
