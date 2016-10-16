//Spawn Management
const autoSpawner = require('spawner.auto');
const clearSpawner = require('spawner.clear');

//Role Management
const roles = {
	spawnHarvester: require('role.harvester.spawn'),
	extensionHarvester: require('role.harvester.spawn'),
	builder: require('role.builder'),
	upgrader: require('role.upgrader')
}

module.exports.loop = function () {
	clearSpawner.clear();	
	autoSpawner.generate();	
	
	for(const name in Game.creeps) {
		const creep = Game.creeps[name];
		roles[creep.memory.role].run(creep);
	}
}