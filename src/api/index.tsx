import { toolBoxData } from '../mock/toolbox';
import { userDB } from '../mock/user';
import { LinkItemType } from '../pages/Home/components/ToolBoxList/type';

export const getUserInfo = async (): Promise<{
  name: string;
  username: string;
  avatar: string;
}> => {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'likai',
      username: 'likai',
      avatar:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    });
  });
};

export const login = async (
  info: any,
): Promise<{
  username: string;
  avatar: string;
  role: string;
}> => {
  return new Promise((resolve, reject) => {
    const user = userDB.find((item) => item.username === info.username);
    if (info.password === user?.password) {
      resolve(user);
    } else {
      reject();
    }
  });
};

export const listToolBoxItem = async (v?: string): Promise<LinkItemType[]> => {
  return new Promise((resolve, reject) => {
    resolve(toolBoxData);
  });
};

export const createToolBoxItem = async (data: any) => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const updateToolBoxItem = async (data: any) => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const deleteToolBoxItem = async (data: any) => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};
