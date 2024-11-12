export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],  // Configuração do ts-jest
    '^.+\\.jsx?$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // Adicionando o moduleNameMapper para ignorar CSS
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Ignora arquivos CSS
  },
};
