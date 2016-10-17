'use strict';

const lib = require('lib');

const priorities = [STRUCTURE_SPAWN, STRUCTURE_CONTAINER];
const harvester = {
	/** @param {Creep} creep **/
	run: function(creep) {
		lib.setAction(creep, 'transfer');

		if (!creep.memory.ready){
			lib.setInitialLocation(creep, lib.nearestDropPoint, priorities);
			return;
		}

		if (creep.memory.transfer) {
			let target = lib.nearestDropPoint(creep, priorities);
			if (target && creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
				creep.moveTo(target);
			} else {
				target = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES);
				if (creep.build(target) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target);
				}
			}
		} else {
			lib.harvestNearestResource(creep);
		}
	}
};

module.exports = harvester;