'use strict';

const lib = require('lib');

const repairer = {
	/** @param {Creep} creep **/
	run: function(creep) {
		lib.setAction(creep, 'building');

		if (creep.memory.building) {
			let target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES, {
				filter: (structure) => {
					return structure.hits < 1000;
				}
			});
			if (!target) {
				target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES)
			}
			if (creep.build(target) == ERR_NOT_IN_RANGE) {
				creep.moveTo(target);
			}
		}
		else {
			const source = creep.pos.findClosestByRange(FIND_SOURCES);
			if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source);
			}
		}
	}
};

module.exports = repairer;