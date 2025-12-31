#!/usr/bin/env node
/**
 * MCPF Conformance Test CLI
 */
const { spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const component = args[0] || 'all';
const endpoint = args.find(arg => arg.startsWith('--endpoint='))?.split('=')[1];

if (!endpoint && component !== 'all') {
  console.error('Usage: mcpf-test <component> --endpoint=<url>');
  console.error('Components: ans, registry, a2a, did-vc, all');
  process.exit(1);
}

const testPath = component === 'all' 
  ? 'test-suites'
  : `test-suites/${component}`;

const env = { ...process.env };
if (endpoint) {
  const key = `${component.toUpperCase().replace('-', '_')}_ENDPOINT`;
  env[key] = endpoint;
}

console.log(`🧪 Running MCPF ${component} conformance tests...`);
console.log(`   Endpoint: ${endpoint || 'default'}\n`);

const jest = spawn('npx', ['jest', testPath], {
  stdio: 'inherit',
  env
});

jest.on('close', (code) => {
  process.exit(code);
});
