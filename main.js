var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrade');

    if(harvesters.length < 4) {
        var newName = Game.spawns['Spawner'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
    }
    
    if(upgraders.length < 2) {
        var newName = Game.spawns['Spawner'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
    }
    
    if(builders.length < 2) {
        var newName = Game.spawns['Spawner'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
    }
    
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}