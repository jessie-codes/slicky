//Spawn Management
const spawner = {
	clear: require('spawner.clear').clear,
	generate: require('spawner.auto').generate
};

//Role Management
const roles = {
	spawnHarvester: require('role.harvester.spawn'),
	extensionHarvester: require('role.harvester.extension'),
	builder: require('role.builder'),
	upgrader: require('role.upgrader'),
	repairer: require('role.repairer')
};

module.exports.loop = function () {
	spawner.clear();	
	spawner.generate();	
	
	for(const name in Game.creeps) {
		const creep = Game.creeps[name];
		roles[creep.memory.role].run(creep);
	}
}