#!/usr/bin/env node

const {Command} = require('commander');

const program = new Command();


program
    .command('set <type>')
    .description('set pizza size')

program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')


// program
//     .option('-d, --debug', 'output extra debugging')
//     .option('-s, --small', 'small pizza size')
//     .option('-p, --pizza-type <type>', 'flavour of pizza')
//     .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

//
// program
//     .option('--no-sauce', 'Remove sauce')
//     .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
//     .option('--no-cheese', 'plain with no cheese')

// program
//     .option('-t, --type [value]', 'pizza type')
//     .requiredOption('-c, --cheese <type>', 'pizza must have cheese');

// program
//     .name('pizza')
//     .usage('<command> [option]')

// program
//     .command('get <pizza>')
//     .description('get a pizza')

// program
//     .option('-n, --number <numbers...>', 'specify numbers')
//     .option('-l, --letter [letters...]', 'specify letters');


program
    .on('option:debug', function() {
        console.log('debug option event was emitted', this.opts());
    })

program
    .on('option:small', function() {
        console.log('small option event was emitted', this.opts());
    })


program
    .on('command:set', function() {
        console.log('command set event was emitted', this.args);
    })

// console.log(program.opts())

program.parse(process.argv);

// console.log('Options: ', program.opts());

// 除去选项参数后，剩下的参数，可以认为是命令参数
// console.log('Remaining arguments: ', program.args);


// const options = program.opts();
//
// console.log('options: ', options);
// if (options.type === undefined) {
//     console.log('no cheese');
// } else if (options.type === true) {
//     console.log('add cheese');
// } else {
//     console.log(`add cheese type ${options.type}`);
// }
// const sauceStr = options.sauce ? 'sauce' : 'no sauce';
// const cheeseStr = (options.cheese === false) ? 'no cheese' : `${options.cheese} cheese`;
// console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);

// console.log('options - 1: ', program.opts());
// console.log('cheese type: ', options.cheese);
//
//
// if (options.debug) {
//     console.log('options - 2: ', options);
// }

// console.log('pizza details: ');

// if (options.small) {
//     console.log('- small pizza size');
// }
//
// if (options.pizzaType) {
//     console.log(`- ${options.pizzaType}`);
// }