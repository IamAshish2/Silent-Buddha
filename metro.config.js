// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" },);

// return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-dotenv'),
//     },
//     resolver: {
//       assetExts,
//       sourceExts: [...sourceExts, 'env'],
//     },
//   };