// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const configs = getDefaultConfig(__dirname)

module.exports = {
    ...configs,
    resolver: {
        ...configs.resolver,
        assetExts: ['bin', 'txt', 'jpg', 'png', 'ttf'],
    }
};
