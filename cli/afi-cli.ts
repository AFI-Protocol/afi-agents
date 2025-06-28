#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command('greet [name]', 'Greet an agent by name', (yargs) => {
    return yargs.positional('name', {
      type: 'string',
      default: 'agent',
      describe: 'name to greet'
    });
  }, (argv) => {
    console.log(`Hello, ${argv.name}!`);
  })
  .demandCommand()
  .help()
  .argv;
