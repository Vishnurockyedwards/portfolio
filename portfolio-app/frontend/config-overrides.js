const { override } = require('customize-cra');
const path = require('path');

// Ensure ogl sources in node_modules are transpiled by Babel (CRA v4 skips node_modules by default)
function addOglToBabelLoader(config) {
  const oneOfRule = config.module.rules.find((rule) => Array.isArray(rule.oneOf));
  if (!oneOfRule) return config;

  const babelLoader = oneOfRule.oneOf.find(
    (rule) => rule.loader && rule.loader.includes('babel-loader') && rule.include
  );

  const oglPath = path.resolve(__dirname, 'node_modules/ogl');

  if (babelLoader) {
    if (Array.isArray(babelLoader.include)) {
      if (!babelLoader.include.includes(oglPath)) {
        babelLoader.include.push(oglPath);
      }
    } else if (babelLoader.include) {
      babelLoader.include = [babelLoader.include, oglPath];
    }
  } else {
    // Fallback: add a dedicated babel-loader rule for ogl before file loaders
    oneOfRule.oneOf.unshift({
      test: /\.m?js$/,
      include: [oglPath],
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('babel-preset-react-app')],
        cacheDirectory: true,
        cacheCompression: false,
        compact: false,
      },
    });
  }

  return config;
}

module.exports = override(addOglToBabelLoader);

