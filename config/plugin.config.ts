import type * as IWebpackChainConfig from 'webpack-chain';

const webpackPlugin = (config: IWebpackChainConfig) => {
  if (process.env.NODE_ENV !== 'development') {
    config.module.rule('mjs-rule').test(/.m?js/).resolve.set('fullySpecified', false);
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  }
};

export default webpackPlugin;
