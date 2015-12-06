var ProjectRepo = require('./projectRepo');

var Handlers = {};

Handlers.projectsHandler = function(request, reply){
	reply.view('projects', { projects: ProjectRepo.projects });
};	

module.exports = Handlers;
