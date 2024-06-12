module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{ts,tsx,js}',
    '!./src/**/style.{ts,tsx,js}',
    '!./src/**/index.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@babel|@react-native|react-native|react-native-reanimated|react-native-base64|@react-native-async-storage/async-storage)/)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
  },
};
