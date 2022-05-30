module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
}
