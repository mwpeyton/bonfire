var mysql = require('mysql');
var fs = require('fs');

var ProjectRepo = {};

var dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Gatlin09',
	database: 'bonfire'
});

ProjectRepo.projects = {};

ProjectRepo.initialize = function(){
	console.log('initializing');
	ProjectRepo.projects = loadAllProjects();
};

function loadAllProjects(){
	var projects = [];
	dbConnection.query('SELECT * FROM project', function(err, rows, fields){
		if(err)throw err;

		if(rows != null){
			for(var i = 0; i < rows.length; i++){
				projects.push(rows[i]);
			}
		}
	});

	return projects;
};

module.exports = ProjectRepo;