'use strict';

const MIN_HEALTH = 5000;

function panic(room){
	const controller = room.controller;
	if (room.hostiles.length && !controller.safeMode && controller.safeModeAvailable && !controller.safeModeCooldown){
		const walls = _.filter(room.walls, (structure) => {
			return structure.hits <= MIN_HEALTH;
		});
		const ramparts = _.filter(room.ramparts, (structure) => {
			return structure.hits <= MIN_HEALTH;
		});

		if (walls.length || ramparts.length) {
			controller.activateSafeMode();
		}
	}
}

module.exports = panic;