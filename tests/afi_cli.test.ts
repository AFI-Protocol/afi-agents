import { execSync } from 'child_process';

test('CLI greet command', () => {
  const output = execSync('node cli/afi-cli.ts greet Scarlett').toString();
  expect(output).toContain('Hello, Scarlett!');
});

test('CLI validate-codex command', () => {
  // Create a dummy codex file for test run
  const fs = require('fs');
  const tmpFile = 'example-codex.json';
  fs.writeFileSync(tmpFile, '{}');

  const output = execSync('node cli/afi-cli.ts validate-codex example-codex.json').toString();
  expect(output).toContain('Validating example-codex.json');

  fs.unlinkSync(tmpFile);
});
