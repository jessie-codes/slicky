'use strict';

const attack = (creep) => {
	const hostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
	if (hostile){
		if (creep.attack(hostile) == ERR_NOT_IN_RANGE){
			creep.moveTo(hostile);
		}
		return true;
	}
	return false;
}

module.exports = attack;