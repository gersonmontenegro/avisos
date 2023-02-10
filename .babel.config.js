module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ["."],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.jpg',
          '.png',
        ],
        alias: {
          '@components/*': ['./src/components'],
          '@utils/*': ['./src/utils'],
          '@types/*': ['./src/types'],
        }
      }
    ]
  ]
};
