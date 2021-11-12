const chalk = require('chalk');

const log = console.log;

// log(chalk.red('hello world'));

// 基本组合
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// 链式调用 api，组合样式
// 将 hello word 字体加粗，颜色设置为蓝色，背景色设置为 红色
// log(chalk.blue.bgRed.bold('Hello world!'));

// 传入多个参数
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
//
// // 嵌套样式
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
//
// // 使用同种类型的嵌套样式 (color, underline, background)
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
//
// 使用模板字符串
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

//
// 在终端支持的情况下，使用 rgb 函数指定颜色
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

// 自定义主题

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

const normal = chalk.hex('#666666');

console.log(normal('hello world!'));

console.log(error('Error!'));
console.log(warning('Warning!'));