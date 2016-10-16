const setInitialLocation = (creep, locationFunction, priorities) => {
	const target = locationFunction(creep, priorities);
	if (!target) return;
	const source = target.pos.findClosestByRange(FIND_SOURCES);
	if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
		creep.moveTo(source);
	} else {
		creep.memory.ready = true;
	}
};

module.exports = setInitialLocation;