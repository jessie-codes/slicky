/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.roles 
 */
const roles = {
	spawnHarvester: {
		min: 1,
		body: [WORK, CARRY, MOVE],
		priority: [STRUCTURE_SPAWN, STRUCTURE_CONTAINER]
	},
	extensionHarvester: {
		min: 2,
		body: [WORK, CARRY, MOVE],
		priority: [STRUCTURE_EXTENSION, STRUCTURE_CONTAINER]
	},
	upgrader: {
		min: 1,
		body: [WORK, CARRY, MOVE]
	},
	builder: {
		min: 2,
		body: [WORK, CARRY, MOVE]
	},
	repairer: {
		min: 0,
		body: [WORK, CARRY, MOVE]
	}
};

module.exports = roles;