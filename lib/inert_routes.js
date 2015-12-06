var Handlers = require('./handlers');

var Inert_Routes = [
{
	method: 'GET',
	path: '/assets/{path*}',
	handler: {
		directory: {
			path: './public',
			listing: false
		}
	}
}
];

module.exports = Inert_Routes;
