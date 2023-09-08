import {
  LocalHostKaoyan,
  OnlineHostKaoyan,
  YoudaoNavigateItem,
} from '@/mock/youdaonavigate';
import { HomeOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Radio, Row } from 'antd';
import { useState } from 'react';

const DefaultHostMap: Record<string, string> = {
  local: LocalHostKaoyan,
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
  const origin = `${item.protocol || 'http'}://${
    item[`${env}Host`] || DefaultHostMap[env]
  }${port && env === 'local' ? ':' + port : ''}`;

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
                window.open(`${origin}${item.path}`);
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
                    window.open(`${origin}${p.path}`);
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
