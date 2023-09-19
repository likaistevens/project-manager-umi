import { defineConfig } from '@umijs/max';
import routes from './route';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  base: '/project-manager-umi/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputPath: 'dist/manager',
  targets: {
    ie: 11,
  },
  routes,
  tailwindcss: {},
  fastRefresh: true,
  jsMinifier: 'terser',
  hash: true,
  postcssLoader: {},
  favicons: ['/assets/favicon.png'],
});
