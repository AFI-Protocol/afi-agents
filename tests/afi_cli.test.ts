import { execSync } from 'child_process';
test('afi-cli list runs', () => {
  expect(() => execSync('node cli/afi-cli.js list')).not.toThrow();
});
