export default [
  {
    path: '/',
    name: '主页',
    component: 'Home/index',
    icon: 'HomeOutlined',
    // access: 'canReadWeb',
  },
  {
    path: '/tools',
    name: '工具库',
    component: 'Tools/index',
    icon: 'AlignRightOutlined',
  },
  {
    path: '/login',
    name: '登陆',
    component: 'Login/index',
    icon: 'AlignRightOutlined',
    menuRender: false,
    hideInMenu: true,
    hideInBreadcrumb: true,
  },
  { path: '/*', component: '404' },
];
