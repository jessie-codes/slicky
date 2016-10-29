'use strict';

const setAction = (creep) => {
	if (creep.memory.action && creep.carry.energy === 0 || creep.memory.role === 'attacker' || creep.memory.role === 'healer'){
		creep.memory.action = false;
	}
	if (!creep.memory.action && creep.carry.energy === creep.carryCapacity){
		creep.memory.action = true;
	}
};

module.exports = setAction;