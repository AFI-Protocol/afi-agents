import { execSync } from 'child_process';
import * as fs from 'fs';

test('CLI greet command', () => {
  const output = execSync('node cli/afi-cli.ts greet Scarlett').toString();
  expect(output).toContain('Hello, Scarlett!');
});

test('CLI validate-codex command', () => {
  const tmpFile = 'example-codex.json';
  fs.writeFileSync(tmpFile, '{}');

  const output = execSync('node cli/afi-cli.ts validate-codex example-codex.json').toString();
  expect(output).toContain('Validating example-codex.json');

  fs.unlinkSync(tmpFile);
});

test('CLI simulate-signal command', () => {
  const output = execSync('node cli/afi-cli.ts simulate-signal').toString();
  expect(output).toContain('Mock signal emitted');
});

test('CLI invoke-validator command', () => {
  const output = execSync('node cli/afi-cli.ts invoke-validator').toString();
  expect(output).toContain('PoIValidator invoked.');
});

test('CLI invoke-mentor command', () => {
  const output = execSync('node cli/afi-cli.ts invoke-mentor').toString();
  expect(output).toContain('MentorRegistry registered.');
});
