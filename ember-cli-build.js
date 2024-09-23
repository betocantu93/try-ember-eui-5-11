'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    // Add options here

    svgJar: {
      sourceDirs: ['public/assets', 'node_modules/@ember-eui/core/vendor/icon'],
    },
  });

  const { Webpack } = require('@embroider/webpack');
  // return require('@embroider/compat').compatBuild(app, Webpack, {
  //   staticAddonTestSupportTrees: true,
  //   staticAddonTrees: true,
  //   staticHelpers: true,
  //   staticModifiers: true,
  //   staticComponents: true,
  //   staticEmberSource: true,
  //   skipBabel: [
  //     {
  //       package: 'qunit',
  //     },
  //   ],
  // });

  return app.toTree();
};
