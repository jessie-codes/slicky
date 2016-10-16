const repairer = {
	/** @param {Creep} creep **/
	run: function(creep) {
		creep.say('Repairer');
		if(creep.memory.building && creep.carry.energy == 0) {
			creep.memory.building = false;
			creep.say('R: harvesting');
		}
		if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
			creep.memory.building = true;
			creep.say('R: building');
		}

		if(creep.memory.building) {
			let target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES, {
				filter: (structure) => {
					return structure.hits < 1000;
				}
			});
			if(!target) {
				target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES)
			}
			if(creep.build(target) == ERR_NOT_IN_RANGE) {
				creep.moveTo(target);
			}
		}
		else {
			const source = creep.pos.findClosestByRange(FIND_SOURCES);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source);
			}
		}
	}
}

module.exports = repairer;