#!/usr/bin/env node

const {Command} = require('commander');

const program = new Command();

program
    .option('-f, --force', 'force installation')
    .option('-v, --version <version>', 'specify a version')
    .option('--source <source>', 'specify download source')

program.parse(process.argv);

// program.parse 函数对 process.argv 进行解析，将不是传给选项（option）的参数解析出来，传递给 program.args 数组
// 例如我们输入的命令是：pm install node typescript react -v 2.5.0 --source official
// 其中 -v 后面跟的是参数是传给 -v 这个选项的，而 --source 后面跟的参数是传递给 --official 的
// 所以 program.args 只接收 node、typescript 和 react 这个三个参数，并将其组成一个数组：[ 'node', 'typescript', 'react' ]

const pkgs = program.args;

const opts = program.opts();

// 命令是： pm install node typescript react -v 2.5.0 --source official
// options { version: '2.5.0', source: 'official' }
console.log('options', program.opts());
// args [ 'node', 'typescript', 'react' ]
console.log('args', program.args);

if (!pkgs.length) {
    console.log('packages required');
    process.exit(1);
}

if (program.opts().force) {
    console.log('   force: install');
}

pkgs.forEach((pkg) => {
    console.log('   install : ', pkg);
})

console.log();