# Troubleshooting

### Problems connecting to your board
Sometimes your board is unable to connect to `espruino-cli`, when this happens, make sure to install and use the correct `node` version setted on the [.nvmrc](https://github.com/vicentelyrio/espruino-boilerplate/blob/master/.nvmrc) file. Espruino-cli, at the time of this project creation, can't work with newer versions of node. And some other libraries of this project, like AVA, can't be installed with older node versions.

After installing the correct node version do a fresh install, deleting `node_modules` and re-installing the project dependencies again.


