var harvester = {
	/** @param {Creep} creep **/
	run: function(creep) {
		creep.say('Spawn');
		if (creep.memory.transfer && creep.carry.energy == 0){
			creep.memory.transfer = false;
			creep.say('S: harvesting');
		}
		if (!creep.memory.transfer && creep.carry.energy == creep.carryCapacity){
			creep.memory.transfer = true;
			creep.say('S: transferring');
		}

		if (creep.memory.transfer) {
			var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
				filter: (structure) => {
					return (structure.structureType == STRUCTURE_SPAWN) &&
							structure.energy < structure.energyCapacity;
				}
			});
			if (target){
				if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
					creep.moveTo(target);
				}
			} else {
				target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
					filter: (structure) => {
						return (structure.structureType == STRUCTURE_CONTAINER) &&
								structure.energy < structure.energyCapacity;
					}
				});
				if (target){
					if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
						creep.moveTo(target);
					}
				}
			}
		} else {
			const source = creep.pos.findClosestByRange(FIND_SOURCES);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source);
			}
		}
	}
};

module.exports = harvester;