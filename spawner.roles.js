'use strict';

/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.roles
 */
const roles = {
	harvester: {
		min: 4,
		body: [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE],
		actions: ['transfer', 'build', 'repair', 'upgrade'],
		container: false,
		role: 'harvester'
	},
	upgrader: {
		min: 2,
		body: [WORK, WORK, WORK, CARRY, MOVE],
		actions: ['upgrade'],
		priority: [],
		container: true,
		role: 'upgrader'
	},
	builder: {
		min: 2,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		actions: ['build', 'repair', 'upgrade'],
		priority: [],
		container: true,
		role: 'builder'
	},
	mover: {
		min: 3,
		body: [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
		actions: ['move'],
		priority: [],
		container: true,
		role: 'mover'
	}
};

module.exports = roles;