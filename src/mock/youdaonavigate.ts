// http://hulk.study.youdao.com:8001/about
// https://local.study.163.com:8002/kaoyan/curriculum
// https://study.163.com/kaoyan/curriculum
const TestHostKaoyan = 'hulk.study.youdao.com';
const TestHostYkt = 'local.study.163.com';
const OnlineHostKaoyan = 'kaoyan.study.youdao.com';
const OnlineHostYkt = 'study.163.com';

export type YoudaoNavigateItem = {
  projectName: string;
  host?: string;
  port: number;
  path: string;
  pathList?: { name: string; path: string }[];
};

export const youdaoNavigateData: YoudaoNavigateItem[] = [
  {
    projectName: 'front-admin',
    // host: TestHostKaoyan,
    port: 8000,
    path: '/backend/interactive/question/edit',
    pathList: [],
  },
  {
    projectName: 'front-web',
    // host: TestHostKaoyan,
    port: 8000,
    path: '',
    pathList: [
      {
        name: '政治落地页',
        path: '/web/topic/politics',
      },
    ],
  },
  {
    projectName: 'front-kaoyan',
    // host: TestHostKaoyan,
    port: 8000,
    path: '',
    pathList: [
      {
        name: '关于',
        path: '/about',
      },
    ],
  },
  {
    projectName: 'front-h5',
    // host: TestHostKaoyan,
    port: 8000,
    path: '',
    pathList: [
      {
        name: '政治手册二维码',
        path: '/h5/politic/handbook/1000',
      },
    ],
  },
  {
    projectName: 'front-admin-external',
    // host: TestHostKaoyan,
    port: 8000,
    path: '/external/edit/comment',
  },
];
