# Portainer Client
This projects exposes the Portainer API (currently for version 1.20.2) as Promise-based JavaScript functions. Currently, only GET based endpoints are implemented,
other ones will follow. If I have enough time and motivation, I will also add an OOP abstraction layer.

The package is written in TypeScript (`.d.ts` type definitions come bundled with this package)
and compiles to ES5.

# Table of contents
- [Portainer Client](#portainer-client)
- [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Example](#example)
    - [Using the plain functions](#using-the-plain-functions)
    - [Using the `PortainerSession` class](#using-the-portainersession-class)

## Features
- Call Portainer API endpoints using plain JS functions or a class
- Optional encapsulation of authentication and hostname using the `PortainerSession` class

## Example
### Using the plain functions
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

### Using the `PortainerSession` class
```js
import PortainerSession from 'portainer-client';

async function main() {
    const portainer = await PortainerSession.create('https://portainer.example.com','username', 'password');

    const stacks = await portainer.getStacks();
    console.log(JSON.stringify(stacks));
}
```
```sh
$ node index.js
[{"Id":3,"Name":"databasestack","Type":2,"EndpointId":1,"SwarmId":"","EntryPoint":"docker-compose.yml","Env":[],"ProjectPath":"/data/compose/3","ResourceControl":{"Id":0,"ResourceId":"","SubResourceIds":null,"Type
```
