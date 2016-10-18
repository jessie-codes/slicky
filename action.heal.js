'use strict';

const heal = (creep) => {
	const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
		filter: (c) => {
			return c.hits < 200;
		}
	});
	if (target){
		if (creep.heal(target) == ERR_NOT_IN_RANGE){
			creep.moveTo(target);
		}
		return true;
	}
	return false;
}

module.exports = heal;