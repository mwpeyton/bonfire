var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 8080 });

// server.ext('onPreResponse', function(request, reply){
// 	if(request.response.isBoom){
// 		return reply.view('error', request.response);
// 	}

// 	reply.continue();
// });

server.register(require('inert'), function(err){
	if(err)throw err;

	server.route(require('./lib/inert_routes'));
});

server.register(require('vision'), function(err){
	if(err)throw err;

	server.views({
		engines: {
			html: require('handlebars')
		},
		relativeTo: __dirname,
		path: 'templates'
	});

	server.route(require('./lib/vision_routes'));
});

// server.register(require('hapi-auth-cookie'), function(err){
// 	if(err)throw err;

// 	server.auth.strategy('default', 'cookie', {
// 		password: 'myPassword',
// 		redirectTo: '/login',
// 		isSecure: false
// 	});

// 	server.auth.default('default');
// });

server.start(function(){
	console.log('server running on ' + server.info.uri);
});
