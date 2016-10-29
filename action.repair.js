'use strict';

const repair = (creep, room) => {
	let targets = [];
	if (creep.memory.minEnergy && creep.energy < creep.memory.minEnergy) return false;

	if (room.hostiles.length){
		targets = targets.concat(room.walls, room.ramparts);
	} else {
		targets = targets.concat(room.walls, room.ramparts, room.spawns, room.extensions, room.containers, room.links, room.roads);
	}


	if (targets.length){
		const min = _.min(_.filter(targets, structure => {
			if (structure.structureType === STRUCTURE_ROAD && structure.hits > 4000) return false;
			if (structure.hits === structure.hitsMax) return false;
			return true;
		}), structure => {
			return structure.hits
		});
		if (creep.repair(min) === ERR_NOT_IN_RANGE){
			creep.moveTo(min);
		}
		return 'repair';
	}

	return false;
}

module.exports = repair;