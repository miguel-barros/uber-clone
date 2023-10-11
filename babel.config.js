module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          screens: './src/screens',
          components: './src/components',
          hooks: './src/hooks',
          contexts: './src/contexts',
          assets: './src/assets',
        },
      },
    ],
  ],
};
