import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from '@umijs/max';
import { useNavigate } from '@umijs/max';
import { Card, Col, Row } from 'antd';
import { useEffect } from 'react';
import { mdCache, resolveMdDir } from './utils';
import { Link } from '@umijs/max';
// const modules = import.meta.glob('./md/**/*.md');
const BookList: React.FC = () => {
  const navigate = useNavigate();
  // const { name } = useModel('global');
  useEffect(() => {
    //   console.log('q', modules.keys());
    //   console.log(bookList);
    // console.log(import.meta.url, import.meta.resolve('./'));
  }, []);

  return (
    <PageContainer ghost>
      <div className="BooksPage">
        {bookList.map((book) => {
          return (
            <Card key={book.name} title={book.name} style={{ width: 450 }}>
              {book.children.map((item) => {
                return (
                  <div key={item.title}>
                    <div>{item.title}</div>
                    {item.children.map((a) => {
                      return (
                        <div key={a.src}>
                          <Link to={'/books/detail'} state={a}>
                            {a.title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
};

export default BookList;

const bookList = [
  {
    name: 'React Native 新架构实战',
    children: resolveMdDir(mdCache),
  },
];
