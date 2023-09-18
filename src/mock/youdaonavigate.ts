// http://hulk.study.youdao.com:8001/about
// https://local.study.163.com:8002/kaoyan/curriculum
// https://study.163.com/kaoyan/curriculum
export const LocalHostKaoyan = 'hulk.study.youdao.com';
export const OnlineHostKaoyan = 'kaoyan.study.youdao.com';

export const LocalHostYkt = 'local.study.163.com';
export const OnlineHostYkt = 'study.163.com';

export type YoudaoNavigateItem = {
  projectName: string;
  port: number;
  protocol?: Record<'local' | 'online', 'https' | 'http'>;
  localHost?: string;
  onlineHost?: string;
  path: string;
  pathList?: { name: string; path: string }[];
};

export const youdaoNavigateData: YoudaoNavigateItem[] = [
  {
    projectName: 'front-admin',
    port: 8000,
    path: '/backend/interactive/question/edit',
    onlineHost: LocalHostKaoyan,
    protocol: { local: 'http', online: 'https' },
    pathList: [],
  },
  {
    projectName: 'front-web',
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
    projectName: 'front-study-web',
    port: 8000,
    protocol: 'https',
    localHost: LocalHostYkt,
    onlineHost: OnlineHostYkt,
    path: '/kaoyan',
    pathList: [
      {
        name: 'SEM大课表',
        path: '/kaoyan/curriculum',
      },
    ],
  },
  {
    projectName: 'front-h5',
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
    port: 8000,
    path: '/external/edit/comment',
  },
];
