module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: [
    'validators/**/*.js',
    'tools/**/*.js'
  ]
};
