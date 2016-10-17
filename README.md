# slicky
Unit controller for the game screeps.

## main.js

Contains the logic to run every tick.

## Spawner

Files with the `spawner` prefix contain logic for spawning new creeps. Use the main spawner file to
access all functionality.

### Spawner.Clear

Clears creeps that are no longer valid from the memory.

```javascript
const spawner = require('spawner');

//Removes invalid creeps.
spawner.clear();
```

### Spawner.Generate

Loops through all of the available roles each tick and determines if any creeps need to be made. If so, it spawns a creep of the correct role.

```javascript
const spawner = require('spawner');

//Spawns creeps per criteria in roles
spawner.generate();
```

### Spawner.Roles

Configuration file that contains all of the available roles and the data needed in order
to build creeps automatically. Each role contains two pieces of information, the minimum
number of creeps who should be of that role, and the commands that role consist of.

```javascript
//An object containing all of the roles
const roles = require('spawner.roles');
```

## Role

Files with the `role` prefix contain the logic to control creeps based on their role. Include the main role
file to get access to all of the role controllers. Each controller should be an object that exposes a `run`
function.

### Role.Builder

Contains the logic for a generic builder. Builds the first structure returned from the room.

```javascript
const roles = require('role');
const creep = Game.creeps[0];
role.builder.run(creep);
```

### Role.Harvester.Extension

Contains logic for a harvester that prioritizes extensions.

```javascript
const roles = require('role');
const creep = Game.creeps[0];
role.extensionHarvester.run(creep);
```

### Role.Harvester.Extension

Contains logic for a harvester that prioritizes spawners.

```javascript
const roles = require('role');
const creep = Game.creeps[0];
role.spawnHarvester.run(creep);
```

### Role.Repairer

Contains logic for a builder that prioritizes repairs.

```javascript
const roles = require('role');
const creep = Game.creeps[0];
role.repairer.run(creep);
```

### Role.Upgrader

Contains a creep that does upgrades.

```javascript
const roles = require('role');
const creep = Game.creeps[0];
role.upgrader.run(creep);
```

## Lib

Files with the `lib` prefix contain logic that is common amoung at least two roles. Include the main lib file
to get access to all of the functions.

### Lib.HarvestNearestResource

Use's the creep's position `findClosestByRange` function to find the closest resource that can be harvested, and
attempts to harvest. If it is out of range, it will move the creep towards the resource. Take a creep as an argument.

```javascript
const lib = require('lib');

//Locates and attempts to harvest from the nearest resource.
lib.harvestNearestResource(creep);
```

### Lib.NearestDropPoint

Uses an array of priorities to determine where resources should be transferred to. Gets the closest location
based on priority and capacity. Returns the best target.

```javascript
const lib = require('lib');

//Locates the best place to transfer resources.
const target = lib.nearestDropPoint(creep, [STRUCTURE_SPAWN, STRUCTURE_CONTAINER]);
```

### Lib.SetAction
Determines whether the creep should harvest resources or do it's default action.

```javascript
const lib = require('lib');

lib.setAction(creep, 'transfer');
```

### Lib.SetInitialLocation
Moves the creep to the resource that is closest to the structure the creep will perform it's first task on. Takes
a creep, a function returning a target, and options for that function as arguments. Set the attribute `creep.memory.ready` to `true`
once the creep is in position.

```javascript
const lib = require('lib');

//Locates the best place to transfer resources.
lib.setInitialLocation(creep, lib.nearestDropPoint, [STRUCTURE_SPAWN, STRUCTURE_CONTAINER]);
```