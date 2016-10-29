'use strict';

const harvestNearestResource = (creep, room) => {
	if (creep.memory.dropped){
		if (room.dropped.length){
			if (creep.pickup(room.dropped[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
				creep.moveTo(room.dropped[0]);
			}
			return;
		}
	}
	if (creep.memory.container){
		const places = [].concat(room.links, room.containers);
		const containers = _.filter(places, (structure) => {
			if (structure.id === '5813401d5326beec0d029134') return false;
			if (!isNaN(structure.energy)) return structure.energy > 0;
			return _.sum(structure.store) > 0
		});
		const target = creep.pos.findClosestByRange(containers);
		if (target){
			if (creep.withdraw(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
				creep.moveTo(target);
			}
			return;
		}
	}

	const source = _.filter(room.sources, (structure) => {
		if (creep.memory.resourceId && structure.id !== creep.memory.resourceId) return false;
		return structure._energy > 0;
	});

	if (source.length) {
		if (creep.harvest(source[0]) === ERR_NOT_IN_RANGE) {
			creep.moveTo(source[0]);
		}
	}
};

module.exports = harvestNearestResource;