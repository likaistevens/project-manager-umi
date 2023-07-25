import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import styles from './index.less';
import { ToolBoxList } from './components/ToolBoxList';
import { css } from '@emotion/css';
import { useState } from 'react';
const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <ToolBoxList />
      </div>
    </PageContainer>
  );
};

export default HomePage;
