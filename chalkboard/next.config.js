const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/mr.ringer' : '',
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    ASSET_PREFIX: isProd ? '/mr.ringer' : '',
  },
};
