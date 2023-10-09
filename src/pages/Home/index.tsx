import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { ToolBoxList } from './components/ToolBoxList';
import { css } from '@emotion/css';
import { useState } from 'react';
import { Col, Row } from 'antd';
import { YoudaoNavigate } from './components/YoudaoNavigate';
import { NavigateBox } from './components/NavigateBox';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Row>
        <Col span={8} style={{ paddingRight: 20 }}>
          <ToolBoxList />
        </Col>
        <Col span={10}>
          <YoudaoNavigate />
        </Col>
        <Col span={6}>
          <NavigateBox></NavigateBox>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
