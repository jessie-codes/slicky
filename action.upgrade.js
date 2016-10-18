'use strict';

const upgrade = (creep) => {
	if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
		creep.moveTo(creep.room.controller);
	}
	return true;
}

module.exports = upgrade;