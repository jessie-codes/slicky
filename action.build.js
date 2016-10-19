'use strict';

const build = (creep) => {
	const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
	if (targets.length) {
		if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
			creep.moveTo(targets[0]);
		}
		return 'build';
	}
	return false;
}

module.exports = build;