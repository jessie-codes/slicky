'use strict';

/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.roles
 */
const roles = {
	harvester: {
		min: 2,
		body: [WORK, CARRY, MOVE],
		actions: ['transfer', 'build', 'repair', 'upgrade'],
		container: false,
		role: 'harvester'
	},
	mover: {
		min: 2,
		body: [CARRY, CARRY, MOVE, MOVE],
		actions: ['move'],
		priority: [],
		container: true,
		role: 'mover'
	},
	attacker: {
		min: 3,
		body: [MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, RANGED_ATTACK, TOUGH, TOUGH, TOUGH],
		actions: ['attack'],
		priority: [],
		container: true,
		role: 'attacker'
	},
	healer: {
		min: 2,
		body: [MOVE, MOVE, HEAL, HEAL],
		actions: ['heal'],
		priority: [],
		container: true,
		role: 'healer'
	}
};

module.exports = roles;