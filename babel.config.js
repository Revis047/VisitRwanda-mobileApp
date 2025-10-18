module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }]
    ],
    // plugins: [
    //   "nativewind/babel",
    //   // Reanimated plugin must be last, and using require() avoids resolution issues
    //   require('react-native-reanimated/plugin')
    // ]
  };
};
