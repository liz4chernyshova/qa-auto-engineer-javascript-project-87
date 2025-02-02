#!/usr/bin/env node

import { program } from 'commander';


program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program.option('-f, --format <type>', 'output format');

program.argument('<filepath1>', 'first configuration file')
       .argument('<filepath2>', 'second configuration file');

program.parse(process.argv);
