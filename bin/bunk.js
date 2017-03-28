#!/usr/bin/env node

process.argv[1]='bunk'; //rename for help info
var bunk = require('../lib/bunk.js')
var program = require('commander');

program
	.usage("[options]")
	.version('1.0.0')
	.option('-d, --dir <dir>', 'directory of static files to serve, default: '+ bunk.default.DIR)
	.option('-p, --port <port>', 'port to run http server on, default: ' + bunk.default.PORT)
	.parse(process.argv)

bunk(program);
