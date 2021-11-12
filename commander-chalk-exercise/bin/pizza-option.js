#!/usr/bin/env node

const {Command} = require('commander');

const program = new Command();



program.version('1.0.0');

program
    .name('pizza')
//      .usage('<type> [option]')

program
    .command('set <type>')
    .description('set pizza size')
    .option('-f, --foo', 'enable some foo');
    // .option('-d, --debug <d>', 'output extra debugging')
    // .option('-s, --small <s>', 'small pizza size')
    // .action((commandArgs, options, command) => {
    //     console.log(command.args);
    //     console.log(commandArgs);
    //     console.log(options);
    // })




program.showHelpAfterError('(add --help for additional information)')

program.showSuggestionAfterError();

const content = `

for detail usage of one command:
  $ pizza <command> --help
`

program.addHelpText('afterAll', content);
//
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


// program
//     .on('option:debug', function() {
//         console.log('debug option event was emitted', this.opts());
//     })
//
// program
//     .on('option:small', function() {
//         console.log('small option event was emitted', this.opts());
//     })
//
//
// program
//     .on('command:set', function() {
//         console.log('command set event was emitted', program.args);
//     })

// console.log(program.opts())



program.parse(process.argv);

// console.log('Options: ', program.opts());
// console.log('command args: ', program.args);
//
// // 除去选项参数后，剩下的参数
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