export const diaryData = [
  {
    id: '643925eae72464e359ecd71a',
    _id: '643925eae72464e359ecd71a',
    date: 1681466790560,
    content:
      ' "typescript.preferences.importModuleSpecifier": "non-relative",\n当需要引入的模块在项目根目录下，使用quick fix会去掉路径，被识别成module，从而报错，这个选项可以指定从相对路径引入',
    createTime: 1681466858606,
    __v: 0,
  },
  {
    id: '6438e8b2e72464e359ecd6fa',
    _id: '6438e8b2e72464e359ecd6fa',
    date: 1681451127330,
    content:
      "tsconfig.json中 esModuleInterop 的属性作用，可以看一下，解释了 cjs、esm 相互引用的原理。\n起因是 import classnames from 'classnames' 提示找不到type",
    createTime: 1681451186356,
    __v: 0,
  },
  {
    id: '642b97b0e72464e359ecd6ab',
    _id: '642b97b0e72464e359ecd6ab',
    date: 1680578459649,
    content:
      '查看全局npm包，删除全局npm包\nnpm ls --global foo\nsudo npm rm --global foo',
    createTime: 1680578480456,
    __v: 0,
  },
  {
    id: '6423fd4fe72464e359ecd687',
    _id: '6423fd4fe72464e359ecd687',
    date: 1680080187370,
    content:
      'vscode根据eslint自动修复代码配置\n{\n  // "editor.formatOnSave": true,\n  "prettier.requireConfig": true,\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "[javascript]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "editor.codeActionsOnSave": {\n    "source.fixAll.eslint": true\n  },\n  "cSpell.words": ["katex", "antd"]\n}',
    createTime: 1680080207881,
    __v: 0,
  },
  {
    id: '6411808ce72464e359ecd4e1',
    _id: '6411808ce72464e359ecd4e1',
    date: 1678868307847,
    content:
      '接口文件处理\n网上方案收集，待调研\n1. yapi自动打包生成接口api\n2. openapi-generator、swagger-codegen、openapi-typescript、openapi-typescript-codegen。可以搜 openapi generator。\n3. pont转化wagger',
    createTime: 1678868620082,
    __v: 0,
  },
  {
    id: '64112d51e72464e359ecd4c6',
    _id: '64112d51e72464e359ecd4c6',
    date: 1678845935213,
    content:
      '网易one one记录\n1. 技术问题\n    a. 图标库。 无法使用iconfont，本地保存无法统一预览。\n    b. 接口配合。 终极方案，根据controller直接转成ts。使用者对中间层无感。\n2. 团队\n    a. 前端、设计配合问题。 设计标准规范化。 设计稿改动同步问题。\n    b. 前后端配合。 最优服务端开发完成再由前端开发。 需项目稳定迭代，难实现。 次优解，解决接口配合问题，前端根据类型约束文件编程。 推动服务端团队接口规范化。比如：请求方法、返回值字段统一\n\n1. 业务后期计划。现阶段问题。\n2. 团队对于研发人员的要求，考核指标，晋升方式。\n',
    createTime: 1678847313658,
    __v: 0,
  },
  {
    id: '63f31fa0e72464e359ecd3f0',
    _id: '63f31fa0e72464e359ecd3f0',
    date: 1676877637319,
    content:
      '考研业务这边总人数、有哪些项目\n少儿、成人、智能\n考研、幕客、网易云课堂\n前端2个，后段3个\n4前4后2测试\n小程序、后台、网易云课堂考研、慕课上\n\n\n我所处的项目有多少人\n项目技术栈、复杂度\nreact  h5 taro  rn\n\n\n\n',
    createTime: 1676877728794,
    __v: 0,
  },
  {
    id: '63ea4e48e72464e359ecd3d5',
    _id: '63ea4e48e72464e359ecd3d5',
    date: 1676299844383,
    content: 'sudo pkill bluetoothd',
    createTime: 1676299848849,
    __v: 0,
  },
  {
    id: '63e9ca1be72464e359ecd234',
    _id: '63e9ca1be72464e359ecd234',
    date: 1676266003850,
    content:
      '全局安装了nvm和node，但是vscode的terminal中找不到命令。在 .zshrc 中插入下面内容。后保存退出，运行 source ~/.zshrc\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"',
    createTime: 1676266011090,
    __v: 0,
  },
  {
    id: '63e9ca13e72464e359ecd22c',
    _id: '63e9ca13e72464e359ecd22c',
    date: 1676265994717,
    content:
      'npm全局安装时报错\nsudo chown -R $USER /usr/local/lib/node_modules',
    createTime: 1676266003317,
    __v: 0,
  },
];
