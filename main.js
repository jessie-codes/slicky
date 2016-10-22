'use strict';

//Spawn Management
const spawner = require('spawner');

//Role Management
const roles = require('role');

//Tower management
const tower = require('tower');

//Controller
const controller = Game.getObjectById('5804c23d447bda2d7b50352e');

module.exports.loop = function () {
	spawner.clear();

	const underAttack = controller.room.find(FIND_HOSTILE_CREEPS).length > 0;

	if (underAttack){
		spawner.attacker();
	} else {
		spawner.generate();
	}


	tower(underAttack);

	for (const name in Game.creeps) {
		const creep = Game.creeps[name];
		roles.default(creep, underAttack);
	}
};