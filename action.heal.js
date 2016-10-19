'use strict';

const heal = (creep) => {
	const target = creep.room.find(FIND_MY_CREEPS, {
		filter: (c) => {
			return c.hits < 200;
		}
	});
	if (target.length){
		if (creep.heal(target[0]) == ERR_NOT_IN_RANGE){
			creep.moveTo(target[0]);
		}
		return true;
	}
	return false;
}

module.exports = heal;