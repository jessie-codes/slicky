'use strict';

const lib = require('lib');

const actions = ['heal', 'attack', 'repair'];
const controller = Game.getObjectById('57ef9d1386f108ae6e60d389');

const tower = () => {
	const towers = controller.room.find(STRUCTURE_TOWER);
	for (let i = 0, len = towers.length; i < len; i++){
		const t = towers[i];
		t.memory = {
			actions: actions,
			minEnergy: 250
		};
		lib.actionRunner();
	}
};

module.exports = tower;