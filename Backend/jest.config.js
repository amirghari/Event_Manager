module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    reporters: [
      'default',
      ['jest-junit', { outputDirectory: "test-reports", outputName: 'junit.xml' }],
      ["jest-html-reporters", { publicPath: "./test-reports", filename: "test-report.html" }],
    ]
  };
  