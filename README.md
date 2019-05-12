# Portainer Client
This projects exposes the Portainer API (currently for version 1.20.2) as Promise-based JavaScript functions. Currently, only GET based endpoints are implemented,
other ones will follow. If I have enough time and motivation, I will also add an OOP abstraction layer.

## Features
- Call Portainer API endpoints using JS

## Example
```js
const host = 'https://myportainerinstance';

async function main() {
    const token = await authenticate(host, 'username', 'password');
    const stacks = await stacks.getAll(host, token);
    console.log(JSON.stringify(stacks));
}

main();
```

```sh
$ node index.js
[{"Id":3,"Name":"databasestack","Type":2,"EndpointId":1,"SwarmId":"","EntryPoint":"docker-compose.yml","Env":[],"ProjectPath":"/data/compose/3","ResourceControl":{"Id":0,"ResourceId":"","SubResourceIds":null,"Type":0,"UserAccesses":null,"TeamAccesses":null,"Public":false}}]
```
