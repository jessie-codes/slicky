const nearestDropPoint = (creep, priority) => {
	let target = null;

	for (let i = 0, len = priority.length; i < len; i++){
		target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.structureType == priority[i]) &&
						structure.energy < structure.energyCapacity;
			}
		});
		if (target) return target;
	}

	return target;
};

module.exports = nearestDropPoint;