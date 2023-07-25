import { InitialState } from './app';
import { SeniorLevel } from './constants';

export default (initialState: InitialState) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://umijs.org/docs/max/access
  const currentUser = initialState.currentUser || {};
  const canReadWeb = currentUser.isSenior;
  const canReadAdvanced = currentUser.seniorLevel === SeniorLevel.advanced;

  return {
    canReadWeb: canReadWeb,
    canReadAdvanced: canReadAdvanced,
  };
};
