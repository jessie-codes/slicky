'use strict';

const lib = require('lib');

const actions = ['heal', 'attack', 'repair'];

const t = Game.getObjectById('58069df2295263e74bf6c599');
t.memory = {};
t.memory.actions = actions;
t.memory.minEnergy = 250;
t.say = (word) => {
	console.log(word)
};

const tower = () => {
	lib.actionRunner(t);
};

module.exports = tower;