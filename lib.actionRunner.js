'use strict';

const actions = require('action');

const actionRunner = (creep, underAttack) => {
	const priority = creep.memory.actions;
	for (let i = 0, len = priority.length; i < len; i++){
		if (actions[priority[i]](creep, underAttack)){
			creep.memory.last = priority[i];
			return;
		}
	}
};

module.exports = actionRunner;