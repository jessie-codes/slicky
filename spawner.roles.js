/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.roles 
 */
const roles = {
	spawnHarvester: {
		min: 1,
		body: [WORK, CARRY, MOVE]
	},
	extensionHarvester: {
		min: 2,
		body: [WORK, CARRY, MOVE]
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