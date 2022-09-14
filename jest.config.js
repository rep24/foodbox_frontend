const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './src' })

const customJestConfig = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.+)': '<rootDir>/src/$1',
    },
}

module.exports = createJestConfig(customJestConfig)
