import { YoudaoNavigateItem } from '@/mock/youdaonavigate';
import { HomeOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Radio, Row } from 'antd';
import { useState } from 'react';

const DevHostKaoyan = 'hulk.study.youdao.com';
const OnlineHostKaoyan = 'kaoyan.study.youdao.com';

const TestHostYkt = 'local.study.163.com';
const OnlineHostYkt = 'study.163.com';

const HostMap: Record<string, string> = {
  local: DevHostKaoyan,
  online: OnlineHostKaoyan,
};

export const NavigateProjectCard = ({ item }: { item: YoudaoNavigateItem }) => {
  const optionsWithDisabled = [
    { label: 'Local', value: 'local' },
    // { label: 'Pre', value: 'pre' },
    { label: 'Online', value: 'online' },
  ];
  const [port, setPort] = useState(item.port.toString());
  const [env, setEnv] = useState<string>('local');
  console.log(env);
  return (
    <Card
      key={item.projectName}
      title={item.projectName}
      hoverable
      extra={
        <div className="flex">
          <div>
            <span>port: </span>
            <Input
              size="small"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              style={{ width: 60 }}
              width={40}
            />
          </div>
          <div className="ml-4">
            <Radio.Group
              size="small"
              options={optionsWithDisabled}
              onChange={(e) => setEnv(e.target.value)}
              value={env}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        </div>
      }
      bodyStyle={{
        padding: '10px',
      }}
      headStyle={{
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <div>
        <Row>
          <Col span={8}>
            <Button
              type="link"
              onClick={() => {
                window.open(
                  `http://${HostMap[env]}${
                    port && env === 'local' ? ':' + port : ''
                  }${item.path}`,
                );
              }}
            >
              <HomeOutlined />
              home
            </Button>
          </Col>
          {item.pathList?.map((p) => {
            return (
              <Col key={p.path} span={8}>
                <Button
                  type="link"
                  onClick={() => {
                    window.open(
                      `http://${HostMap[env]}${
                        port && env === 'local' ? ':' + port : ''
                      }${p.path}`,
                    );
                  }}
                >
                  {p.name}
                </Button>
              </Col>
            );
          })}
        </Row>
      </div>
    </Card>
  );
};
