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
		let container = _.filter(room.links, structure => {
			if (creep.memory.role === 'mover') return false;
			return structure.energy > 0;
		});
		if (!container.length){
			container = _.filter(room.containers, structure => {
				return _.sum(structure.store) > 0
			});
		}
		if (container.length){
			if (creep.withdraw(container[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
				creep.moveTo(container[0]);
			}
			return;
		}
	}

	const source = _.filter(room.sources, structure => {
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