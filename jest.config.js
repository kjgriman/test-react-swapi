module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  };