#!/usr/bin/env node


// console.log('update packages');

const { Command } = require('commander');
const program = new Command();

program.parse(process.argv);

console.log('update packages list: ', program.args);