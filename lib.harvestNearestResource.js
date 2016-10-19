'use strict';

const harvestNearestResource = (creep) => {
	if (creep.memory.container){
		const con = creep.pos.findClosestByRange(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.structureType === STRUCTURE_CONTAINER) && _.sum(structure.store) > 0;
			}
		});
		if (con){
			if (creep.withdraw(con, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
				creep.moveTo(con);
			}
			return;
		}
	}
	const source = creep.pos.findClosestByRange(FIND_SOURCES);
	if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
		creep.moveTo(source);
	}
};

module.exports = harvestNearestResource;