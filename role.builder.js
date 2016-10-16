var roleBuilder = {

	/** @param {Creep} creep **/
	run: function(creep) {
		creep.say('Builder');
		if(creep.memory.building && creep.carry.energy == 0) {
			creep.memory.building = false;
			creep.say('B: harvesting');
		}
		if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
			creep.memory.building = true;
			creep.say('B: building');
		}

		if(creep.memory.building) {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if(targets.length) {
				if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0]);
				}
			}
		}
		else {
			const source = creep.pos.findClosestByRange(FIND_SOURCES);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source);
			}
		}
	}
};

module.exports = roleBuilder;