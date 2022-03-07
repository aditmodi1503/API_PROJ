'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/eventController');

	// todoList Routes
	app.route('/tasks')
		.get(todoList.getAllEvents)
};
