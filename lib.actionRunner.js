'use strict';

const actions = require('action');

const actionRunner = (creep, room) => {
	const priority = creep.memory.actions;
	for (let i = 0, len = priority.length; i < len; i++){
		if (actions[priority[i]](creep, room)){
			creep.memory.last = priority[i];
			return;
		}
	}
};

module.exports = actionRunner;