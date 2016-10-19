'use strict';

const roles = require('spawner.roles');
const backup = require('spawner.generate');

const generate = () => {
	const attackers = ['attacker', 'healer'];
	for (const n in attackers){
		const creepers = _.filter(Game.creeps, (creep) => {
			return creep.memory.role === n
		});
		if (creepers.length < 3) {
			const name = Game.spawns['Spawner'].createCreep(roles[n].body, undefined, roles[n]);
			if (name !== ERR_NOT_ENOUGH_ENERGY && name !== ERR_BUSY){
				console.log(`Created ${name} with role ${n}`);
				return true;
			}
		}
	}
	backup();
	return false;
};

module.exports = generate;