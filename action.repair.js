'use strict';

const priority = [{
	name: STRUCTURE_RAMPART,
	hits: 1000
}, {
	name: STRUCTURE_ROAD,
	hits: 3000
}, {
	name: STRUCTURE_WALL,
	hits: 10000
}, {
	name: STRUCTURE_CONTAINER,
	hits: 5000
}];

const repair = (creep) => {
	let target = [];
	for (let i = 0, len = priority.length; i < len; i++){
		target = creep.room.find(FIND_STRUCTURES, {
			filter: (structure) => {
				return (structure.structureType == priority[i].name) && (structure.hits < priority[i].hits)
			}
		});
		if (target.length) break;
	}

	if (target.length){
		const min = _.min(target, (item) => {
			return item.hits;
		});
		if (creep.repair(min) == ERR_NOT_IN_RANGE){
			creep.moveTo(min);
		}
		return true;
	}

	return false;
}

module.exports = repair;