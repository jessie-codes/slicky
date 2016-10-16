const setAction = (creep, action) => {
	if (creep.memory[action] && creep.carry.energy == 0){
		creep.memory[action] = false;
		creep.say('harvesting');
	}
	if (!creep.memory[action] && creep.carry.energy == creep.carryCapacity){
		creep.memory[action] = true;
		creep.say(action);
	}
};

module.exports = setAction;