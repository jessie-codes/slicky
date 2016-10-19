'use strict';

const repair = (creep) => {
	let target = [];
	if (creep.memory.minEnergy && creep.energy < creep.memory.minEnergy) return false;
	target = creep.room.find(FIND_STRUCTURES, {
		filter: (structure) => {
			if ((structure.structureType === STRUCTURE_RAMPART) && (structure.hits < 10000)) return true;
			if ((structure.structureType === STRUCTURE_ROAD) && (structure.hits < 3000)) return true;
			if ((structure.structureType === STRUCTURE_WALL) && (structure.hits < 35000)) return true;
			if ((structure.structureType === STRUCTURE_CONTAINER) && (structure.hits < 50000)) return true;
			return false;
		}
	});

	if (target.length){
		const min = _.min(target, (item) => {
			return item.hits;
		});
		if (creep.repair(min) === ERR_NOT_IN_RANGE){
			creep.moveTo(min);
		}
		return 'repair';
	}

	return false;
}

module.exports = repair;