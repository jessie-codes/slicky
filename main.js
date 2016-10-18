'use strict';

//Spawn Management
const spawner = require('spawner');

//Role Management
const roles = require('role');

module.exports.loop = function () {
	spawner.clear();
	spawner.generate();

	for (const name in Game.creeps) {
		const creep = Game.creeps[name];
		roles.default(creep);
	}
};