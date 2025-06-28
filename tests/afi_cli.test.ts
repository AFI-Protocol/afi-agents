import { execSync } from 'child_process';

test('CLI greet command', () => {
  const output = execSync('node cli/afi-cli.ts greet Scarlett').toString();
  expect(output).toContain('Hello, Scarlett!');
});
