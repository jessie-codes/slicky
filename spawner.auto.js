const roles = require('spawner.roles');

const spawn = {
	generate: () => {
		for (const n in roles){
			const creepers = _.filter(Game.creeps, (creep) => creep.memory.role == n);
			if (creepers.length < roles[n].min) {
				const name = Game.spawns['Spawner'].createCreep(roles[n].body, undefined, {role: n});
				console.log(`Created ${name} with role ${n}`);
			}
		}
	}
}

module.exports = spawn;