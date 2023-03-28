const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const prod = process.env.NODE_ENV === 'production';
const devPort = 9001;
const buildDir = 'build/';
let publicPath = `http://localhost:${devPort}/`;
const plugins = [];

if (prod) {
  publicPath = `/${buildDir}`;
} else {
  plugins.push(new WebpackShellPluginNext({
    onBuildStart: {
      // XXX: w