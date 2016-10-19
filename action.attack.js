'use strict';

const attack = (creep) => {
	const hostile = creep.room.find(FIND_HOSTILE_CREEPS);
	if (hostile.length){
		if (creep.attack(hostile[0]) == ERR_NOT_IN_RANGE){
			creep.moveTo(hostile[0]);
		}
		return true;
	}
	return false;
}

module.exports = attack;