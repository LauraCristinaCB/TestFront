module.exports = {
    preset: 'jest-preset-angular',
    roots: ['src'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
    },
    moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1'
    }
};
