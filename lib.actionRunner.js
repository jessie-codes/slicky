'use strict';

const actions = require('action');

const actionRunner = (creep) => {
	const priority = creep.memory.actions;
	for (let i = 0, len = priority.length; i < len; i++){
		if (actions[priority[i]](creep)){
			creep.say(priority[i]);
			return;
		}
	}
};

module.exports = actionRunner;