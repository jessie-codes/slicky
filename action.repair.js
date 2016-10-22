'use strict';

const repair = (creep, underAttack) => {
	let target = [];
	if (creep.memory.minEnergy && creep.energy < creep.memory.minEnergy) return false;

	if (underAttack){

		target = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				if ((structure.structureType === STRUCTURE_RAMPART) && (structure.hits < (1000000 - 1000))) return true;
				if ((structure.structureType === STRUCTURE_WALL) && (structure.hits < (3000000 - 1000))) return true;
				if ((structure.structureType === STRUCTURE_SPAWN) && (structure.hits < 2500)) return true;
				if ((structure.structureType === STRUCTURE_EXTENSION) && (structure.hits < 500)) return true;
				return false;
			}
		});

	} else {

		target = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				if ((structure.structureType === STRUCTURE_RAMPART) && (structure.hits < (1000000 - 1000))) return true;
				if ((structure.structureType === STRUCTURE_ROAD) && (structure.hits < 4000)) return true;
				if ((structure.structureType === STRUCTURE_WALL) && (structure.hits < (3000000 - 1000))) return true;
				if ((structure.structureType === STRUCTURE_CONTAINER) && (structure.hits < (250000 - 1000))) return true;
				if ((structure.structureType === STRUCTURE_SPAWN) && (structure.hits < 5000)) return true;
				if ((structure.structureType === STRUCTURE_EXTENSION) && (structure.hits < 1000)) return true;
				return false;
			}
		});

	}

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