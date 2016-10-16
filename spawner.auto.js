const roles = require('spawner.roles');

/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.auto 
 */
const spawn = {
	/**
	 * Loops through pre-defined roles to create new creeps.
	 * @function generate
	 * @memberOf spawner.auto
	 * @return {Boolean} Returns true if a creep was created, otherwise returns false.
	 */
	generate: () => {
		for (const n in roles){
			const creepers = _.filter(Game.creeps, (creep) => creep.memory.role == n);
			if (creepers.length < roles[n].min) {
				const name = Game.spawns['Spawner'].createCreep(roles[n].body, undefined, {role: n});
				if (name !== ERR_NOT_ENOUGH_ENERGY && name !== ERR_BUSY){
					console.log(`Created ${name} with role ${n}`);
					return true;				
				}
			}
		}
		return false;
	}
}

module.exports = spawn;