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

Files with the `role` prefix contain the logic to control creeps.

### Role.Default

Contains the default role logic.

```javascript
const roles = require('role');
const creep = Game.creeps[0];
role.default(creep);
```

## Action

Files with the `action` prefix contain the logic to perform actions. Include the main action file to
get access to all of the functions.

### Action.Build

Contains the logic to tell a creep to build a construction site.

```javascript
const actions = require('action');
const creep = Game.creeps[0];

//Attempt to build something
actions.build(creep);
```

### Action.Repair

Contains the logic to tell a creep to repair a rampart, road, wall, or container

```javascript
const actions = require('action');
const creep = Game.creeps[0];

//Attempt to repair something
actions.repair(creep);
```

### Action.Transfer

Contains the logic to tell a creep to transfer energy to a spawn, extension, or container.

```javascript
const actions = require('action');
const creep = Game.creeps[0];

//Attempt to transfer energy
actions.transfer(creep);
```

### Action.Upgrade

Contains the logic to tell a creep to upgrade the room controller.

```javascript
const actions = require('action');
const creep = Game.creeps[0];

//Upgrade the room controller
actions.upgrade(creep);
```

## Lib

Files with the `lib` prefix contain logic that is common amoung at least two roles. Include the main lib file
to get access to all of the functions.

### Lib.ActionRunner

Runs through the creep's action array. Returns when it finds a successful action.

```javascript
const lib = require('lib');

//Runs through the creeps action array.
lib.actionRunner(creep);
```

### Lib.HarvestNearestResource

Use's the creep's position `findClosestByRange` function to find the closest resource that can be harvested, and
attempts to harvest. If it is out of range, it will move the creep towards the resource. Take a creep as an argument.

```javascript
const lib = require('lib');

//Locates and attempts to harvest from the nearest resource.
lib.harvestNearestResource(creep);
```

### Lib.SetAction
Determines whether the creep should harvest resources or perform an action.

```javascript
const lib = require('lib');

lib.setAction(creep);
```