# Espruino Boilerplate 
### [Espruino](https://www.espruino.com/) + [Typescript](https://www.typescriptlang.org/) + [Rollup](https://rollupjs.org/guide/en/) + [Eslint](https://eslint.org/) + [AVA](https://github.com/avajs/ava)

This is a simple Espruino boilerplate designed to be written with Typescript and tested with AVA. The code is compiled and minified using Rollup and uglify, and it's deployed to your micro-controller using Espruino-cli.

![Travis (.org)](https://img.shields.io/travis/vicentelyrio/espruino-boilerplate)
![GitHub](https://img.shields.io/github/license/vicentelyrio/espruino-boilerplate)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation
This isn't a library, so to use you need to fork or download the project and use it as a start point for your own projects.


## Espruino config

The [.env](https://github.com/vicentelyrio/espruino-boilerplate/blob/master/.env) file is used to setup parameters forwarded to the [espruino-cli](https://github.com/espruino/EspruinoTools) when you use the `yarn espruino:connect` task.

Any [valid parameter](https://github.com/espruino/EspruinoTools#command-line) of the espruino-cli is accepted, but in general you will need to setup your board name (`--board`) and your desired baud rate (`-b`). The port (`--port`) parameter could be also a good one to be setted, but he's easelly inferred by the espruino-cli.

You should respect this structure (`key` [space] `value`), where `key` is a [valid espruino-cli parameter](https://github.com/espruino/EspruinoTools#command-line) 
```
--board ESP-32
-b 115200
```

## Code Tasks

Builds the TS code and send it to the `dist` folder.
```
yarn code:build
```

Builds the TS code and send it to the `dist` folder in watch mode.
```
yarn code:watch
```

Runs eslint on the TS code.
```
yarn code:lint
```

Runs AVA test suit.
```
yarn code:test
```

## Espruino Tasks

Runs espruino cli without any parameter. You could use this task to test your ports (`yarn espruino --list --verbose`)
```
yarn espruino
```

Connects to your board using the parameters of the `.env` file
```
yarn espruino:connect
```

Builds the code and sends the code to your board
```
yarn espruino:deploy
```

Connects to the board and watchs for any change on the `dist` folder
```
yarn espruino:watch
```

## Development
A normal development workflow would be to open 2 terminal instances and run both of the `watch` tasks

Terminal 1
```
yarn code:watch
```

Terminal 2
```
yarn espruino:watch
```

## CI
There is a minimal [TravisCI](https://travis-ci.org/) config that calls the task
```
yarn ci
```

### Troubleshooting
For any problem look our [TROUBLESHOOTING](https://github.com/vicentelyrio/espruino-boilerplate/blob/master/TROUBLESHOOTING.md)
