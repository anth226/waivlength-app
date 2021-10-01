/* eslint-disable func-names */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@app': './src/app',
            '@pages': './src/pages',
            '@assets': './src/common/assets',
            '@components': './src/common/components',
            '@layouts': './src/common/layouts',
            '@theme': './src/common/theme',
            '@utils': './src/common/utils',
          },
        },
      ],
    ],
  }
}
