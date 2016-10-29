'use strict';

const peace = {
	harvester: {
		min: 1,
		body: [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE],
		actions: ['transfer', 'build', 'repair', 'upgrade'],
		container: false,
		role: 'harvester',
		resourceId: '57ef9d1386f108ae6e60d38b'
	},
	harvester2: {
		min: 1,
		body: [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE],
		actions: ['transfer', 'build', 'repair', 'upgrade'],
		container: false,
		role: 'harvester2',
		resourceId: '57ef9d1386f108ae6e60d38a'
	},
	upgrader: {
		min: 2,
		body: [WORK, WORK, CARRY, MOVE],
		actions: ['upgrade'],
		priority: [],
		container: true,
		role: 'upgrader'
	},
	builder: {
		min: 2,
		body: [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE],
		actions: ['build', 'repair', 'upgrade'],
		priority: [],
		container: true,
		role: 'builder'
	},
	mover: {
		min: 2,
		body: [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
		actions: ['move'],
		priority: [],
		container: true,
		role: 'mover'
	},
	scavenger: {
		min: 1,
		body: [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
		actions: ['move'],
		priority: [],
		container: true,
		dropped: true,
		role: 'scavenger'
	}
};

module.exports = peace;