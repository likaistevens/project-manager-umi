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
    path: '/hudoudou',
    name: '胡豆豆相亲档案',
    component: 'Hudoudou/index',
    icon: 'AlignRightOutlined',
  },
  {
    path: '/books',
    name: '本地书库',
    icon: 'ReadOutlined',
    routes: [
      { path: '', redirect: '/books/list' },
      {
        path: 'list',
        component: 'Books/list',
        icon: 'ReadOutlined',
      },
      {
        path: 'detail',
        component: 'Books/detail',
      },
    ],
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
