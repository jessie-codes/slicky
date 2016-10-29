'use strict';

const attack = (creep, room) => {
	if (room.hostiles.length){
		if (creep.attack(room.hostiles[0]) === ERR_NOT_IN_RANGE){
			creep.moveTo(room.hostiles[0]);
		}
		return 'attack';
	}
	return false;
}

module.exports = attack;