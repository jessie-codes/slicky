var harvester = {
	/** @param {Creep} creep **/
	run: function(creep) {
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
					reep.moveTo(target);
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
						reep.moveTo(target);
					}
				}
			}
		}
	}
};

module.exports = harvester;