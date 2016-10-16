const harvester = {
	/** @param {Creep} creep **/
	run: function(creep) {
		creep.say('Extension');
		if (creep.memory.transfer && creep.carry.energy == 0){
			creep.memory.transfer = false;
			creep.say('E: harvesting');
		}
		if (!creep.memory.transfer && creep.carry.energy == creep.carryCapacity){
			creep.memory.transfer = true;
			creep.say('E: transferring');
		}

		if (creep.memory.transfer) {
			let target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
				filter: (structure) => {
					return (structure.structureType == STRUCTURE_EXTENSION) &&
							structure.energy < structure.energyCapacity;
				}
			});
			if (!target){
				target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
					filter: (structure) => {
						return (structure.structureType == STRUCTURE_CONTAINER) &&
								structure.energy < structure.energyCapacity;
					}
				});
			}
			if (target && creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
				creep.moveTo(target);
			}
			target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
			if(creep.build(target) == ERR_NOT_IN_RANGE) {
				creep.moveTo(target);
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