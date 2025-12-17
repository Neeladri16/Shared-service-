const {
  withModuleFederationPlugin,
  shareAll,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'chat',
  exposes: {
    './ChatModule': './src/app/chat/chat.module.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
