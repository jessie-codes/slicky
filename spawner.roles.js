'use strict';

/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.roles
 */
const roles = {
	harvester: {
		min: 5,
		body: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE],
		actions: ['transfer', 'build', 'repair', 'upgrade'],
		priority: [STRUCTURE_SPAWN, STRUCTURE_EXTENSION, STRUCTURE_CONTAINER],
		container: false
	},
	upgrader: {
		min: 1,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		actions: ['upgrade'],
		priority: [],
		container: true
	},
	builder: {
		min: 1,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		actions: ['build', 'repair', 'upgrade'],
		priority: [],
		container: true
	},
	repairer: {
		min: 1,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		actions: ['repair', 'build', 'upgrade'],
		priority: [],
		container: true
	}
};

module.exports = roles;