'use strict';

const roles = {
	spawnHarvester: require('role.harvester.spawn'),
	extensionHarvester: require('role.harvester.extension'),
	builder: require('role.builder'),
	upgrader: require('role.upgrader'),
	repairer: require('role.repairer')
};

module.exports = roles;