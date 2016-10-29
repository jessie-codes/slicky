'use strict';

const ID = '5813401d5326beec0d029134';
const main = Game.getObjectById(ID);

function link(room){
	if (main.energy > 0 && main.cooldown === 0){

		const targets = _.filter(room.links, (structure) => {
			if (structure.id === ID) return false;
			if (structure.energy === structure.energyCapacity) return false;
			return true;
		});

		if (targets.length){
			const min = _.min(targets, (link) => {
				return link.energy;
			});
			console.log(min)
			main.transferEnergy(min);
		}
	}
}

module.exports = link;