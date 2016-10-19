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

## Action

Files with the `action` prefix contain the logic to perform actions. Include the main action file to
get access to all of the functions.

## Lib

Files with the `lib` prefix contain logic that is common amoung at least two roles. Include the main lib file
to get access to all of the functions.