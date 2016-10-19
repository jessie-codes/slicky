'use strict';

/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.roles
 */
const roles = {
	harvester: {
		min: 4,
		body: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE],
		actions: ['transfer', 'build', 'repair', 'upgrade'],
		priority: [STRUCTURE_SPAWN, STRUCTURE_EXTENSION, STRUCTURE_TOWER, STRUCTURE_CONTAINER],
		container: false,
		role: 'harvester'
	},
	upgrader: {
		min: 2,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		actions: ['upgrade'],
		priority: [],
		container: true,
		role: 'upgrader'
	},
	builder: {
		min: 1,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		actions: ['build', 'repair', 'upgrade'],
		priority: [],
		container: true,
		role: 'builder'
	},
	repairer: {
		min: 0,
		body: [WORK, WORK, CARRY, CARRY, MOVE],
		actions: ['repair', 'build', 'upgrade'],
		priority: [],
		container: true,
		role: 'repairer'
	},
	attacker: {
		min: 0,
		body: [MOVE, MOVE, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH],
		actions: ['attack'],
		priority: [],
		container: true,
		role: 'attacker'
	},
	healer: {
		min: 0,
		body: [MOVE, HEAL],
		actions: ['heal'],
		priority: [],
		container: true,
		role: 'healer'
	}
};

module.exports = roles;