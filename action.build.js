'use strict';

const build = (creep, room) => {
	if (room.construction.length) {
		if (creep.build(room.construction[0]) === ERR_NOT_IN_RANGE) {
			creep.moveTo(room.construction[0]);
		}
		return 'build';
	}
	return false;
}

module.exports = build;