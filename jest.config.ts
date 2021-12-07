import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: [] as string[],
  testMatch: ['<rootDir>/src/**/*.(spec|test).ts', '<rootDir>/tests/**/*.tests.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '/node_modules/'],
};

// noinspection JSUnusedGlobalSymbols
export default jestConfig;
