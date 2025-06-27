#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { loadPersonas } from '../loaders/PersonaLoader';

const demoSignal = {
  id: 'sig-demo-001',
  content: 'BTC funding rate spike',
  enriched: {}
};

(async () => {
  const personas = await loadPersonas();

  yargs(hideBin(process.argv))
    .command('list', 'List available personas', () => {}, () => {
      personas.forEach(p => console.log(`• ${p.id} – ${p.name}`));
    })
    .command(
      'run <id>',
      'Run a persona against a demo signal',
      y => y.positional('id', { type: 'string', describe: 'Persona ID' }),
      argv => {
        const p = personas.find(x => x.id === argv.id);
        if (!p) return console.error('Persona not found.');
        p.handler(demoSignal);
      }
    )
    .demandCommand()
    .strict()
    .parse();
})();
