module.exports = {
  verbose: true,
  testRegex: ['.*\\.spec\\.(js|ts)$'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
      diagnostics: true,
    },
  },
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  testMatch: null,
  testEnvironment: 'node',
};
