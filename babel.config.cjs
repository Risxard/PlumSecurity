module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }, modules: true }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
};
