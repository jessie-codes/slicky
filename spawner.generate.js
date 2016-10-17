'use strict';

const roles = require('spawner.roles');

const generate = () => {
	for (const n in roles){
		const creepers = _.filter(Game.creeps, (creep) => creep.memory.role == n);
		if (creepers.length < roles[n].min) {
			const name = Game.spawns['Spawner'].createCreep(roles[n].body, undefined, {role: n, containers: roles[n].preferContainer});
			if (name !== ERR_NOT_ENOUGH_ENERGY && name !== ERR_BUSY){
				console.log(`Created ${name} with role ${n}`);
				return true;
			}
		}
	}
	return false;
};

module.exports = generate;