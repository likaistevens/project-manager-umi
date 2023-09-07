import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { ToolBoxList } from './components/ToolBoxList';
import { css } from '@emotion/css';
import { useState } from 'react';
import { Col, Row } from 'antd';
import { YoudaoNavigate } from './components/YoudaoNavigate';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Row>
        <Col span={8} style={{ paddingRight: 20 }}>
          <ToolBoxList />
        </Col>
        <Col span={8}>
          <YoudaoNavigate />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
