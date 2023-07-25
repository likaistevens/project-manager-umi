import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { ToolBoxList } from './components/ToolBoxList';
import { css } from '@emotion/css';
import { useState } from 'react';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <ToolBoxList />
    </PageContainer>
  );
};

export default HomePage;
