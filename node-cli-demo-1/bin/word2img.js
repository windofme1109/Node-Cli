#!/usr/bin/env node
// 上面这句话的意思是用来向系统指明这个文件的解释器是node
// 创建一个全局对象，这样对于我们快速开始一个项目而言，是很方便的
// const {program} = require('commander');

// 创建一个局部的 Command 对象
const { Command } = require('commander');
const chalk = require('chalk');
const path = require('path');


const { newCanvas } = require('../utils/newCanvas');
const { canvas2img } = require('../utils/canvas2img');

// console.log('hello world');
const program = new Command();

program.version(require('../package.json').version).usage('<command> [options]');

program.on('--help', () => {
    console.log();

    console.log(
        ` Run ${chalk.green(
            `word2img <command> --help`
        )} for detailed usage of given command.
        `
    );

    console.log();
})

program
    .command('new <word>')
    .description('generate a new image use the input word')
    .option('-w --width <width>', 'Set width of the image', 600)
    .option('--height <heihgt>', 'Set height of the image', 200)
    .option('--bgColor <bgColor>', 'Set background-color of the image', '#fff')
    .option('--color <color>', 'Set color of the word', '#000')
    .option('--size <size>', 'Set font-size of the word', 48)
    .option('--family <family>', 'Set font-family of the word', 'Arial')
    .option('--filename <filename>', 'Set filename of the image')
    .option('--filepath <filepath>', 'Set file path to save the image' + "(note that the path doesn\'t contain the file name)", path.join(process.cwd(), 'imgs'))
    .action((word, options) => {
        // console.log(word);
        // console.log(options);
        const { canvas } = newCanvas(word, options)
        canvas2img(canvas, options.filename, options.filepath);
    })



program.parse(process.argv);