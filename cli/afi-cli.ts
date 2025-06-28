#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
// Import validator from afi-config repo (assumes monorepo-style path or tsconfig path mapping)
import { validateCodex } from '../../afi-config/cli_utils/codex_validator';

const argv = yargs(hideBin(process.argv))
  .command('greet [name]', 'Greet an agent by name', (y) => {
    return y.positional('name', {
      type: 'string',
      default: 'agent',
      describe: 'name to greet',
    });
  }, (args) => {
    console.log(`Hello, ${args.name}!`);
  })
  .command('validate-codex <file>', 'Validate a codex file', (y) => {
    return y.positional('file', {
      type: 'string',
      describe: 'Path to .afi-codex file',
      demandOption: true,
    });
  }, (args) => {
    validateCodex(args.file as string);
  })
  .demandCommand()
  .help()
  .argv;
