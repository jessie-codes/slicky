'use strict';

const lib = require('lib');

const roles = (creep, underAttack) => {
	lib.setAction(creep);

	if (creep.memory.action) {
		lib.actionRunner(creep, underAttack);
	}
	else {
		lib.harvestNearestResource(creep);
	}
};

module.exports = roles;