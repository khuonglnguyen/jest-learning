module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsc?$':'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/app/utils/*.ts']
  };
