'use strict';

/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.roles
 */
const roles = {
	spawnHarvester: {
		min: 2,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		priority: [STRUCTURE_SPAWN, STRUCTURE_CONTAINER],
		preferContainer: false
	},
	extensionHarvester: {
		min: 1,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		priority: [STRUCTURE_EXTENSION, STRUCTURE_CONTAINER],
		preferContainer: false
	},
	upgrader: {
		min: 1,
		body: [WORK, CARRY, MOVE],
		preferContainer: true
	},
	builder: {
		min: 3,
		body: [WORK, CARRY, MOVE],
		preferContainer: true
	},
	repairer: {
		min: 0,
		body: [WORK, CARRY, MOVE],
		preferContainer: true
	}
};

module.exports = roles;