'use strict';

const harvestNearestResource = require('lib.harvestNearestResource');

const setInitialLocation = (creep, locationFunction, priorities) => {
	const target = locationFunction(creep, priorities);
	if (target) {
		const source = target.pos.findClosestByRange(FIND_SOURCES);
		if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
			creep.moveTo(source);
		} else {
			creep.memory.ready = true;
		}
	} else {
		creep.memory.ready = true;
		lib.harvestNearestResource(creep, true);
	}
};

module.exports = setInitialLocation;