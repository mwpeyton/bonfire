var Handlers = require('./handlers');

var Vision_Routes = [
{
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		reply.view('index');
	}
},
{
	method: 'GET',
	path: '/admin',
	handler: function(request, reply){
		reply.view('admin');
	}
},
{
	method: 'GET',
	path: '/projects',
	handler: Handlers.projectsHandler
}
];

module.exports = Vision_Routes;