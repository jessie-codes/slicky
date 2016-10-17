const lib = require('lib');

const builder = {

	/** @param {Creep} creep **/
	run: function(creep) {
		lib.setAction(creep, 'building');

		if(creep.memory.building) {
			const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
			if(targets.length) {
				if(creep.build(targets[1]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[1]);
				}
			}
		} else {
			lib.harvestNearestResource(creep, true);
		}
	}
};

module.exports = builder;