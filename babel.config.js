module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@views': './src/views',
          '@services': './src/services',
          '@entities': './src/entities',
          '@providers': './src/providers',
          '@useCases': './src/useCases',
          '@utils': './src/utils',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
