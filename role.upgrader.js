'use strict';

const lib = require('lib');

const upgrader = {

	/** @param {Creep} creep **/
	run: function(creep) {
		lib.setAction(creep, 'upgrading');

		if (creep.memory.upgrading) {
			if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
				creep.moveTo(creep.room.controller);
			}
		}
		else {
			lib.harvestNearestResource(creep, true);
		}
	}
};

module.exports = upgrader;