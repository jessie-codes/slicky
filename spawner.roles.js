const roles = {
	spawnHarvester: {
		min: 2,
		body: [WORK, CARRY, MOVE]
	},
	extensionHarvester: {
		min: 0,
		body: [WORK, CARRY, MOVE]
	},
	upgrader: {
		min: 2,
		body: [WORK, CARRY, MOVE]
	},
	builder: {
		min: 3,
		body: [WORK, CARRY, MOVE]
	},
};

module.exports = roles;