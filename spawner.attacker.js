'use strict';

const roles = require('spawner.defense');

const generate = () => {
	for (const n in roles){
		const creepers = _.filter(Game.creeps, (creep) => {
			return creep.memory.role.trim() === n.trim();
		});
		if (creepers.length < roles[n].min) {
			const name = Game.spawns['Spawner'].createCreep(roles[n].body, undefined, roles[n]);
			if (name !== ERR_NOT_ENOUGH_ENERGY && name !== ERR_BUSY){
				console.log(`Created ${name} with role ${n}`);
				return true;
			}
		}
	}
	return false;
};

module.exports = generate;