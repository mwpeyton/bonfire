var Handlers = require('./handlers');

var Vision_Routes = [
{
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		reply.view('index');
	}
}
];

module.exports = Vision_Routes;