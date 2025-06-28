#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { validateCodex } from '../../afi-config/cli_utils/codex_validator';
import { simulateSignal } from '../../afi-infra/cli_templates/signal_simulator';
import { invokePoIValidator, invokeMentorRegistry } from '../../afi-core/cli_hooks/validator_invoker';
import { execSync } from 'child_process';

yargs(hideBin(process.argv))
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
  .command('simulate-signal', 'Simulate a signal from template', () => {}, () => {
    simulateSignal();
  })
  .command('invoke-validator', 'Invoke the PoI validator manually', () => {}, () => {
    invokePoIValidator();
  })
  .command('invoke-mentor', 'Invoke the mentor registry manually', () => {}, () => {
    invokeMentorRegistry();
  })
  .command('run-local-deploy', 'Run local deploy script', () => {}, () => {
    execSync('bash ../afi-ops/scripts/deploy_local.sh', { stdio: 'inherit' });
  })
  .demandCommand()
  .help()
  .argv;
