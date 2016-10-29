'use strict';

const actionRunner = require('lib.actionRunner');

const actions = ['heal', 'attack', 'repair'];

const tower = (room) => {
	for (let i = 0, len = room.towers.length; i < len; i++){
		const t = room.towers[i];
		t.memory = {
			actions: actions,
			minEnergy: 250
		};
		if (room.hostiles.length || t.energy > 250) actionRunner(t, room);
	}
};

module.exports = tower;