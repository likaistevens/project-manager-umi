import { PageContainer } from '@ant-design/pro-components';
import { JsxStyleToCss } from './components/JsxStyleToCss';
import { Col, Row } from 'antd';

const ToolsPage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Row>
        <Col span={8} style={{ paddingRight: 20 }}>
          <JsxStyleToCss />
        </Col>
        <Col span={10}>
          <div>urs-phoneyd.aedb82bf068c41558@163.com</div>
        </Col>
        <Col span={6}></Col>
      </Row>
    </PageContainer>
  );
};

export default ToolsPage;
