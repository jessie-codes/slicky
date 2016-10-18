'use strict';

const lib = require('lib');

const roles = (creep) => {
	lib.setAction(creep);

	if (creep.memory.action) {
		lib.actionRunner(creep);
	}
	else {
		creep.say('harvesting');
		lib.harvestNearestResource(creep);
	}
};

module.exports = roles;