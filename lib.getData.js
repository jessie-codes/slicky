function getData(){

	let data = {};
	data.rooms = {};

	for (const room in Game.rooms){
		const structures = Game.rooms[room].find(FIND_STRUCTURES);
		data.rooms[room] = {
			room: room,
			controller: _.first(_.filter(structures, structure => {
				return structure.structureType === STRUCTURE_CONTROLLER;
			})),
			towers: _.filter(structures, structure => {
				return structure.structureType === STRUCTURE_TOWER;
			}),
			walls: _.filter(structures, structure => {
				return structure.structureType === STRUCTURE_WALL;
			}),
			ramparts: _.filter(structures, structure => {
				return structure.structureType === STRUCTURE_RAMPART;
			}),
			containers: _.filter(structures, structure => {
				return structure.structureType === STRUCTURE_CONTAINER;
			}),
			links: _.filter(structures, structure => {
				return structure.structureType === STRUCTURE_LINK;
			}),
			spawns: _.filter(structures, structure => {
				return structure.structureType === STRUCTURE_SPAWN;
			}),
			extensions: _.filter(structures, structure => {
				return structure.structureType === STRUCTURE_EXTENSION;
			}),
			roads: _.filter(structures, structure => {
				return structure.structureType === STRUCTURE_ROAD;
			}),
			sources: Game.rooms[room].find(FIND_SOURCES),
			dropped: Game.rooms[room].find(FIND_DROPPED_RESOURCES),
			creeps: Game.rooms[room].find(FIND_MY_CREEPS),
			hostiles: Game.rooms[room].find(FIND_HOSTILE_CREEPS),
			construction: Game.rooms[room].find(FIND_CONSTRUCTION_SITES)
		};
	};

	data.spawn = (Game.time % 50 === 0);
	data.clear = (Game.time % 500 === 0);

	return data;
};

module.exports = getData;