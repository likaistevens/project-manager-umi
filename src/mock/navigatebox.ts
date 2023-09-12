export const navigateBoxData: {
  name: string;
  path: string;
  color?: string;
  pathList?: { name: string; path: string }[];
}[] = [
  {
    name: '项目confluence',
    path: 'https://g.hz.netease.com/',
    color: '#F7BA1E',
  },
  {
    name: '考研confluence',
    path: 'https://confluence.inner.youdao.com/pages/viewpage.action?pageId=240094807',
    color: '#F7BA1E',
    pathList: [
      {
        name: 'sprint22',
        path: 'https://confluence.inner.youdao.com/pages/viewpage.action?pageId=283869832',
      },
    ],
  },
  {
    name: 'gitlab',
    path: 'https://g.hz.netease.com/',
    color: '#9FDB1D',
    pathList: [
      {
        name: 'front-admin',
        path: 'https://g.hz.netease.com/kaoyan_apollo/frontend/front-admin',
      },
      {
        name: 'front-kaoyan',
        path: 'https://g.hz.netease.com/kaoyan_apollo/frontend/front-kaoyan',
      },
      {
        name: 'front-web',
        path: 'https://g.hz.netease.com/kaoyan_apollo/frontend/front-web',
      },
      {
        name: 'front-weapp',
        path: 'https://g.hz.netease.com/kaoyan_apollo/frontend/front-weapp',
      },
      {
        name: 'front-admin-external',
        path: 'https://g.hz.netease.com/kaoyan_apollo/frontend/front-admin-external',
      },
      {
        name: 'front-h5',
        path: 'https://g.hz.netease.com/kaoyan_apollo/frontend/front-h5',
      },
    ],
  },
  {
    name: '测试用例',
    path: 'https://ydky.evolute-youdao.nie.netease.com/products/studio/board/#/TestTask',
  },
];
