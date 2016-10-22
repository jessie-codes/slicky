'use strict';

//Spawn Management
const spawner = require('spawner');

//Role Management
const roles = require('role');

//Tower management
const tower = require('tower');

const controller = Game.getObjectById('57ef9d1386f108ae6e60d389');

module.exports.loop = function () {
	spawner.clear();

	const underAttack = controller.room.find(FIND_HOSTILE_CREEPS).length > 0;

	if (underAttack){
		spawner.attacker();
	} else {
		spawner.generate();
	}


	tower();

	for (const name in Game.creeps) {
		const creep = Game.creeps[name];
		roles.default(creep, underAttack);
	}
};