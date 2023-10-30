import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';

const ToolsPage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div>
        {list.map((item) => {
          return (
            <Card
              key={item.name + item.birth + item.hobby}
              title={item.name}
              //   extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <div>
                <span className="mr-10">{item.location}</span>
                <span className="mr-10">{item.birth}</span>
                <span>{item.job}</span>
              </div>
              <p>爱好：{item.hobby || '不详'}</p>
              <p>照片：{item.photo || '不详'}</p>
              <p>备注：{item.desc}</p>
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
};

export default ToolsPage;

const list = [
  {
    name: '朱明欣',
    location: '北京',
    birth: '1997',
    job: '财务',
    hobby: '二次元，爱看直播',
    photo: '',
  },
  {
    name: '北京分唐',
    location: '北京',
    birth: '2001',
    job: '',
    hobby: '二次元，爱看直播',
    photo: '合照右边，小虎牙',
    desc: '环球，唐立,下周出差',
  },
];
