import { defineConfig } from '@umijs/max';
import routes from './route';
import { gitPageConfig } from './gitPageConfig';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  base: '/',
  publicPath: '/',
  outputPath: 'dist',
  targets: {
    ie: 11,
  },
  routes,
  tailwindcss: {},
  fastRefresh: true,
  jsMinifier: 'terser',
  hash: true,
  postcssLoader: {},
  favicons: ['./assets/favicon.ico'],
  styledComponents: {},
  define: {
    'process.env.PLATFORM': process.env.PLATFORM,
    'process.env.NODE_ENV': process.env.NODE_ENV,
  },
  ...(process.env.PLATFORM === 'git' ? gitPageConfig : {}),
});
