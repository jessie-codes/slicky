'use strict';

//Spawn Management
const spawner = require('spawner');

//Lib functions
const lib = require('lib');

module.exports.loop = function () {
	const data = lib.getData();

	if (data.clear) spawner.clear();

	for (const room in data.rooms){
		const r = data.rooms[room];
		if (data.spawn) spawner.generate(r);

		for (const name in r.creeps){
			const creep = r.creeps[name];
			if (creep.fatigue === 0) lib.creep(creep, r);
		}

		lib.panic(r);

		lib.tower(r);
	}

};