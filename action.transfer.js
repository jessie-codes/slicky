'use strict'

const transfer = (creep) => {
	let target = [];
	target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
		filter: (structure) => {
			return (
				structure.structureType === STRUCTURE_CONTAINER
				&& _.sum(structure.store) < structure.storeCapacity
				&& structure.id !== '58096be9fb99a90c5aed12c0'
			);
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