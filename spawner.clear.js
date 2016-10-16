/**
 * Contains functions needed for automatically spawning creeps.
 * @memberOf spawner
 * @module spawner.clear 
 */
const spawn = {
	/**
	 * Loops through pre-defined roles to create new creeps.
	 * @function clear
	 * @memberOf spawner.clear
	 * @return {Boolean} Returns true if a creep was deleted, otherwise returns false.
	 */
	clear: () => {
		for(const name in Memory.creeps) {
			if(!Game.creeps[name]) {
				delete Memory.creeps[name];
				console.log('Clearing non-existing creep memory:', name);
				return true;
			}
		}
		return false;
	}
};

module.exports = spawn;