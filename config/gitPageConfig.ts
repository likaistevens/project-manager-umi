import routes from './route';

export const gitPageConfig = {
  base: '/project-manager-umi/',
  publicPath: '/project-manager-umi/',
  // 避免静态部署时刷新页面无法访问页面
  exportStatic: {
    extraRoutePaths: () => routes.map((r) => r.path),
  },
};
