'use strict';

const war = {
	harvester: {
		min: 1,
		body: [WORK, CARRY, MOVE],
		actions: ['transfer', 'build', 'repair', 'upgrade'],
		container: false,
		role: 'harvester'
	},
	mover: {
		min: 1,
		body: [CARRY, CARRY, MOVE, MOVE],
		actions: ['move'],
		priority: [],
		container: true,
		role: 'mover'
	},
	attacker: {
		min: 3,
		body: [ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, MOVE, MOVE],
		actions: ['attack'],
		priority: [],
		container: true,
		role: 'attacker'
	},
	healer: {
		min: 2,
		body: [HEAL, HEAL, MOVE, MOVE],
		actions: ['heal'],
		priority: [],
		container: true,
		role: 'healer'
	}
};

module.exports = war;