'use strict'

const store = (creep, underAttack) => {
	let target = [];
	if (underAttack){
		target = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				if (structure.structureType !== STRUCTURE_TOWER) return false;
				if (structure.energy > 250) return false;
				return true;
			}
		});
	}

	if (!target.length){
		target = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				if (_.indexOf([STRUCTURE_SPAWN, STRUCTURE_EXTENSION], structure.structureType) === -1) return false;
				if (structure.energy === structure.energyCapacity) return false;
				return true;
			}
		});
	}

	if (!target.length){
		target = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				if (_.indexOf([STRUCTURE_TOWER, STRUCTURE_CONTAINER], structure.structureType) === -1) return false;
				if ((structure.id === '58087aa3011c61c055e6b7f8') || (structure.id === '580ae3255e103fd6142d13ee')) return false;
				if (!isNaN(structure.energy) && structure.energy === structure.energyCapacity) return false;
				if (isNaN(structure.energy) && structure.store.energy > 1000) return false;
				return true;
			}
		});
	}

	if (target.length){
		if (creep.transfer(target[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
			creep.moveTo(target[0]);
		}
		return 'store';
	}

	return false;
}

module.exports = store;