const nearestDropPoint = (creep, priority) => {
	let target = null;

	for (let i = 0, len = priority.length; i < len; i++){
		target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
			filter: (structure) => {
				if (isNaN(structure.energy)) {
					return (structure.structureType == priority[i]) && _.sum(structure.store) < structure.storeCapacity;
				}
				return (structure.structureType == priority[i]) && structure.energy < structure.energyCapacity;
			}
		});
		if (target) return target;
	}

	return target;
};

module.exports = nearestDropPoint;