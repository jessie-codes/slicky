var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

//Spawn Management
const autoSpawner = require('spawner.auto');
const clearSpawner = require('spawner.clear');

//Role Management
const spawnHarvester = require('role.harvester.spawn');
const extensionHarvester = require('role.harvester.spawn');

module.exports.loop = function () {
	clearSpawner.clear();	
	autoSpawner.generate();	
	
	for(var name in Game.creeps) {
		var creep = Game.creeps[name];
		switch (creep.memory.role){
			case 'harvester': {
				roleHarvester.run(creep);
				break;
			}
			case 'upgrader': {
				roleUpgrader.run(creep);
				break;
			}
			case 'builder': {
				roleBuilder.run(creep);
				break;
			}
			case 'extensionHarvester': {
				extensionHarvester.run(creep);
				break;
			}
			default: {
				spawnHarvester.run(creep);
			}
		}
	}
}