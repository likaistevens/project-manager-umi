export default [
  {
    path: '/',
    name: '主页',
    component: 'Home/index',
    icon: 'AlignRightOutlined',
    // access: 'canReadWeb',
  },
  {
    path: '/login',
    name: '登陆',
    component: 'Login/index',
    icon: 'AlignRightOutlined',
    menuRender: false,
  },
  { path: '/*', component: '404' },
];
