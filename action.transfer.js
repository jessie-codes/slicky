'use strict'

const transfer = (creep) => {
	let target = [];
	target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
		filter: (structure) => {
			if (structure.structureType === STRUCTURE_CONTAINER){
				return (_.sum(structure.store) < structure.storeCapacity)
			}
			if (structure.structureType === STRUCTURE_LINK){
				return (structure.energy < structure.energyCapacity && structure.id !== '5812ee99260a734d489f17f2')
			}
			return false;
		}
	});

	if (target){

		if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
			creep.moveTo(target);
		}
		return 'transfer';
	}

	return false;
}

module.exports = transfer;