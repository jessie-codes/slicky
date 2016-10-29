'use strict'

const store = (creep, room) => {
	let target = [];
	if (room.hostiles.length){
		target = _.filter(room.towers, structure => {
			if (structure.energy > 250) return false;
			return true;
		});
	}

	if (!target.length){
		target = _.filter(room.spawns, structure => {
			if (structure.energy === structure.energyCapacity) return false;
			return true;
		});
	}

	if (!target.length){
		target = _.filter(room.extensions, structure => {
			if (structure.energy === structure.energyCapacity) return false;
			return true;
		});
	}

	if (!target.length){
		target = _.filter(room.links, structure => {
			if (structure.energy > 250) return false;
			return true;
		});
	}

	if (!target.length){
		target = _.filter(room.towers, structure => {
			if (structure.energy > 250) return false;
			return true;
		});
	}

	if (!target.length){
		target = _.filter(room.towers, structure => {
			if (structure.energy > structure.energyCapacity) return false;
			return true;
		});
	}

	if (!target.length){
		target = _.filter(room.links, structure => {
			if (structure.energy > structure.energyCapacity) return false;
			return true;
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