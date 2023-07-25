// 运行时配置
import { RunTimeLayoutConfig, history } from '@umijs/max';
import UnAccessible from './pages/403';
import logo from '@/assets/logo.png';
import { Dropdown } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { getUserInfo } from './api';

export type InitialState = {
  currentUser?: { name: string; username: string; avatar: string };
};

const fetchUserInfo = async () => {
  try {
    const data = await getUserInfo();
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
      src: initialState?.currentUser?.avatar || '',
      size: 'small',
      title: initialState?.currentUser?.username || '',
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: 'login',
                  icon: <LoginOutlined />,
                  label: '登陆',
                },
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: '退出登录',
                },
              ],
              onClick: (v) => {
                if (v.key === 'login') {
                  history.push('/login');
                }
              },
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
    // waterMarkProps: {
    //   content: initialState?.currentUser?.username,
    // },
    unAccessible: <UnAccessible></UnAccessible>,
  };
};
