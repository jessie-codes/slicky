'use strict';

const lib = require('lib');

const actions = ['heal', 'attack', 'repair'];
const controller = Game.getObjectById('5804c23d447bda2d7b50352e');

const tower = (underAttack) => {
	const towers = controller.room.find(FIND_MY_STRUCTURES, {
		filter: (structure) => {
			if (structure.structureType === STRUCTURE_TOWER) return true;
			return false;
		}
	});

	for (let i = 0, len = towers.length; i < len; i++){
		const t = towers[i];
		t.memory = {
			actions: actions,
			minEnergy: 250
		};
		lib.actionRunner(t, underAttack);
	}
};

module.exports = tower;