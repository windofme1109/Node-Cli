#!/usr/bin/env node

const { Command: Pm } = require('commander');
const program = new Pm();

program.version('1.0.0').usage('[options] [arguments]');

// program
//     .command('command-clone <source> [destination]')
//     .description('command-clone a repository into a newly created directory')
//     .action((source, destination) => {
//         console.log('command-clone command called');
//     });


program
    .command('clone <source> [destination]', 'clone files')

// 必须使用 parse 函数解析我们输入的命令
program.parse(process.argv);