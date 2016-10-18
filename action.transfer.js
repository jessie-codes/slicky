'use strict'

const transfer = (creep) => {
	const priority = creep.memory.priority;
	let target = [];
	for (let i = 0, len = priority.length; i < len; i++){
		target = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				if (isNaN(structure.energy)) {
					return (structure.structureType == priority[i]) && _.sum(structure.store) < structure.storeCapacity;
				}
				return (structure.structureType == priority[i]) && structure.energy < structure.energyCapacity;
			}
		});
		if (target.length) break;
	}

	if (target.length){
		if (creep.transfer(target[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
			creep.moveTo(target[0]);
		}
		return true;
	}

	return false;
}

module.exports = transfer;