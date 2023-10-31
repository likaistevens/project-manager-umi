import { defineConfig } from '@umijs/max';
import routes from './route';

export const GitPageRoot = '/project-manager-umi/';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  base: process.env.PLATFORM === 'git' ? GitPageRoot : '/',
  publicPath: process.env.NODE_ENV === 'production' ? GitPageRoot : '/',
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
  // 使用 hash 路由，避免静态部署时刷新页面无法访问页面。 也可以通过 exportStatic 设置
  // history: { type: 'hash' },
  // exportStatic: true,
});
