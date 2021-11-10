#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program.version('1.0.0').usage('[options] [arguments]');

// program
//     .command('command-clone <source> [destination]')
//     .description('command-clone a repository into a newly created directory')
//     .action((source, destination) => {
//         console.log('command-clone command called');
//     });


program
    .command('clone <source> [destination]', 'clone files')
    .command('install <package>', 'install a package')

program
    .command('update <package>', 'update a package', {executableFile: 'updatePkgs'})

program
    .command('login')
    .argument('<username>', 'user to login')
    .argument('[password]', 'password for user, if required', 'not required')
    .argument('[flag]', 'login pattern', 'sk2')
    .action((username, password, flag) => {
        console.log('username: ', username);
        console.log('password: ', password);
        console.log('flag: ', flag);
    })

// 必须使用 parse 函数解析我们输入的命令
program.parse(process.argv);