module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@page-css/*': './src/pages/css/*',
          '@utils/*': './src/utils/*',
          '@shared/*': './src/components/shared/*',
        }
      }
    ]
  ]
};
