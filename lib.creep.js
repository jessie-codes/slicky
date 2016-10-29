'use strict';

const setAction = require('lib.setAction');
const actionRunner = require('lib.actionRunner');
const harvestNearestResource = require('lib.harvestNearestResource');

const roles = (creep, room) => {
	setAction(creep);

	if (creep.memory.action) {
		actionRunner(creep, room);
	}
	else {
		harvestNearestResource(creep, room);
	}
};

module.exports = roles;