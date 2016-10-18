'use strict';

const harvestNearestResource = (creep) => {
	const container = creep.memory.container;
	if (container){
		const con = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.structureType == STRUCTURE_CONTAINER) && _.sum(structure.store) > 0;
			}
		});
		if (con.length){
			const c = _.sortBy(con, 'store');
			if (creep.withdraw(c[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
				creep.moveTo(c[0]);
			}
			return;
		}
	}
	const source = creep.pos.findClosestByRange(FIND_SOURCES);
	if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
		creep.moveTo(source);
	}
};

module.exports = harvestNearestResource;