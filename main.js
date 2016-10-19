'use strict';

//Spawn Management
const spawner = require('spawner');

//Role Management
const roles = require('role');

//Tower management
const tower = require('tower');

module.exports.loop = function () {
	spawner.clear();

	const keys = _.keys(Game.creeps);
	const checker = Game.creeps[keys[0]];
	const hostiles = checker.room.find(FIND_HOSTILE_CREEPS);

	if (hostiles.length){
		spawner.attacker();
	} else {
		spawner.generate();
	}

	tower();

	for (const name in Game.creeps) {
		const creep = Game.creeps[name];
		roles.default(creep);
	}
};