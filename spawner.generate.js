'use strict';

const roles = require('spawner.roles');

const generate = (room) => {
	let condition = 'peace';
	if (room.hostiles.length) condition = 'war';
	const types = roles[condition];

	for (const n in types){
		const creeps = _.filter(room.creeps, (creep) => {
			return creep.memory.role === n;
		});

		if (!creeps || creeps.length < types[n].min){
			const name = room.spawns[0].createCreep(types[n].body, undefined, types[n]);
			if (name !== ERR_NOT_ENOUGH_ENERGY && name !== ERR_BUSY){
				console.log(`Created ${name} with role ${n}`);
			}
			break;
		}
	}
};

module.exports = generate;