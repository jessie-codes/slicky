const lib = require('lib');

const builder = {

	/** @param {Creep} creep **/
	run: function(creep) {
		lib.setAction(creep, 'building');

		if(creep.memory.building) {
			const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if(targets.length) {
				if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0]);
				}
			}
		} else {
			const targets = creep.room.find(FIND_SOURCES);
			if(targets.length) {
				if(creep.harvest(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0]);
				}
			}
			// const source = creep.pos.findClosestByRange(FIND_SOURCES);
			// if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
			// 	creep.moveTo(source);
			// }
		}
	}
};

module.exports = builder;