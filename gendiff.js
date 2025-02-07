#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command }from 'commander';
import parseFile from './fileParser.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const file1Data = parseFile(filepath1);
    const file2Data = parseFile(filepath2);

    console.log('Сравнение файлов:');
    console.log('file1:', file1Data);
    console.log('file2:', file2Data);
  });

program.parse(process.argv);
