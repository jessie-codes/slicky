'use strict';

const roles = require('spawner.roles');

const generate = () => {
	const attackers = ['attacker', 'healer'];
	for (const n in attackers){
		const creepers = _.filter(Game.creeps, (creep) => creep.memory.role == n);
		if (creepers.length < 3) {
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