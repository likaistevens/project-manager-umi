// 运行时配置
// import RightContent from '@/components/RightContent';
import { RunTimeLayoutConfig } from '@umijs/max';
import { UserInfoVO, WebService } from '../api';
import UnAccessible from './pages/403';
import logo from '@/assets/logo.png';
import { Dropdown } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';

export type InitialState = {
  currentUser?: UserInfoVO;
};

const fetchUserInfo = async () => {
  try {
    const data = await WebService.getUsingPost();
    return data;
  } catch (error) {
    // history.push(loginPath);
  }
  return undefined;
};

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitialState> {
  const currentUser = await fetchUserInfo();

  return {
    currentUser,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  // const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  return {
    logo,
    menu: {
      locale: false,
    },
    layout: 'mix',
    // collapsed: true,
    defaultCollapsed: true,
    breakpoint: false,
    title: '',
    // rightContentRender: () => <RightContent />,
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      size: 'small',
      title: '七妮妮',
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: '退出登录',
                },
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: '登  陆',
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
    // location: {
    //   pathname: '/login',
    // },
    // menuItemRender: (item, dom) => (
    //   <div
    //     onClick={() => {
    //       setPathname(item.path || '/welcome');
    //     }}
    //   >
    //     {dom}
    //   </div>
    // ),
    waterMarkProps: {
      content: initialState?.currentUser?.userId,
    },
    unAccessible: <UnAccessible></UnAccessible>,
  };
};
