# slicky
Unit controller for the game screeps.

## main.js

Contains the logic to run every tick.

## Spawner

Files with the `spawner` prefix contain logic for spawning new creeps.

### Spawner.Roles

Configuration file that contains all of the available roles and the data needed in order
to build creeps automatically. Each role contains two pieces of information, the minimum
number of creeps who should be of that role, and the commands that role consist of.

```javascript
//An object containing all of the roles
const roles = require('spawner.roles');
```

### Spawner.Auto

Loops through all of the available roles each tick and determines if any creeps need to be made. If so, it spawns a creep of the correct role.

```javascript
const autoSpawner = require('spawner.auto');

//Spawns creeps per criteria in roles
autoSpawner.generate();
```

### Spawner.Clear

Clears creeps that are no longer valid from the memory.

```javascript
const clearSpawner = require('spawner.clear');

//Removes invalid creeps.
clearSpawner.clear();
```